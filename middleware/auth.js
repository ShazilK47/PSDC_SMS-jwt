const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.redirect('/login?error=login_required');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        
        // Check if token is expired (additional check)
        const now = new Date();
        const tokenTime = new Date(decoded.iat * 1000);
        const hoursSinceLogin = (now - tokenTime) / (1000 * 60 * 60);
        
        if (hoursSinceLogin > 24) {
            res.clearCookie('token');
            return res.redirect('/login?error=session_expired');
        }
        
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            res.clearCookie('token');
            return res.redirect('/login?error=session_expired');
        }
        res.clearCookie('token');
        return res.redirect('/login?error=invalid_token');
    }
};

// Role-based authentication middleware
const requireRole = (roles) => {
    return (req, res, next) => {
        const token = req.cookies.token;
        
        if (!token) {
            return res.redirect('/login?error=login_required');
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            
            const userRole = decoded.role;
            const allowedRoles = Array.isArray(roles) ? roles : [roles];
            
            if (!allowedRoles.includes(userRole)) {
                return res.status(403).render('pages/error', {
                    title: 'Access Denied',
                    message: 'You do not have permission to access this page.',
                    statusCode: 403
                });
            }

            next();
        } catch (error) {
            res.clearCookie('token');
            return res.redirect('/login?error=invalid_token');
        }
    };
};

// Permission-based authentication middleware
const requirePermission = (permission) => {
    return (req, res, next) => {
        const token = req.cookies.token;
        
        if (!token) {
            return res.redirect('/login?error=login_required');
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            
            const userPermissions = decoded.permissions || [];
            
            if (!userPermissions.includes(permission)) {
                return res.status(403).render('pages/error', {
                    title: 'Access Denied',
                    message: 'You do not have permission to perform this action.',
                    statusCode: 403
                });
            }

            next();
        } catch (error) {
            res.clearCookie('token');
            return res.redirect('/login?error=invalid_token');
        }
    };
};

const requireGuest = (req, res, next) => {
    const token = req.cookies.token;
    
    if (token) {
        try {
            jwt.verify(token, process.env.JWT_SECRET);
            return res.redirect('/dashboard');
        } catch (error) {
            // Token is invalid, clear it and continue
            res.clearCookie('token');
        }
    }
    next();
};

module.exports = {
    requireAuth,
    requireRole,
    requirePermission,
    requireGuest
};
