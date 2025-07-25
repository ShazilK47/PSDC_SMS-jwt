# Student Management System (SMS) - Baitussalam TechPark

A modern and professional Student Management System built with Node.js, Express.js, and EJS. This project features a comprehensive admin dashboard with clean UI design, following industry standards for educational management systems.

## 🎨 Dashboard Features

### Modern Admin Dashboard

- **Professional Design**: Clean, minimalist interface with light theme
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Sidebar**: Fixed navigation with icons and smooth animations
- **Data-Driven Cards**: Summary cards showing key metrics with visual indicators

### Dashboard Components

- **Welcome Panel**: Personalized greeting with current date
- **Summary Cards**:
  - Total Students with growth indicators
  - Total Courses counter
  - Today's Attendance percentage
  - Monthly revenue tracking
- **Recent Students**: Latest enrollments with profile information
- **Current Courses**: Active course listings with student counts
- **Attendance Chart**: Interactive weekly/monthly attendance visualization
- **Quick Actions**: Easy access buttons for common tasks
- **Notifications**: Real-time alerts and system messages

### UI/UX Features

- **Smooth Animations**: CSS transitions and hover effects
- **Consistent Typography**: Inter font family for professional appearance
- **Soft Shadows**: Modern card-based design with elevation
- **Color-Coded Status**: Visual indicators for different states
- **Interactive Elements**: Hover effects and click animations

## 📁 Project Structure

```
student-management-system/
├── controllers/        # Route logic for auth & student views
├── data/               # Placeholder/mock data
├── public/             # Static assets (CSS, JS, images)
│   ├── css/
│   │   ├── global.css      # Global styles and utilities
│   │   ├── dashboard.css   # Modern dashboard styling
│   │   ├── login.css
│   │   └── students.css
│   ├── js/
│   │   ├── global.js       # Global utilities and validations
│   │   ├── dashboard.js    # Dashboard interactions and charts
│   │   └── [other].js
│   └── images/
├── routes/             # Route definitions
├── views/              # EJS templates
│   ├── pages/
│   │   ├── dashboard.ejs   # Main dashboard page
│   │   └── [other].ejs
│   └── partials/
│       ├── header.ejs      # Enhanced header with fonts
│       ├── sidebar.ejs     # Modern sidebar navigation
│       └── footer.ejs
├── app.js              # Entry point
└── package.json
```

## ✨ Features

### Authentication & Security

- User login and logout flow
- Forget & reset password functionality
- Session management (ready for implementation)

### Dashboard Management

- **Real-time Data Display**: Dynamic content updates
- **Interactive Charts**: Attendance tracking with Chart.js integration
- **Responsive Design**: Mobile-first approach
- **Quick Actions**: Fast access to common administrative tasks
- **Notification System**: Alert management for important events

### Student Management

- Students list with advanced filtering
- Individual student profile views
- Enrollment tracking and status management

### Technical Features

- **Clean Architecture**: MVC-style separation of concerns
- **Page-specific Assets**: Modular CSS and JavaScript loading
- **EJS Templating**: Reusable partials and layouts
- **Modern CSS**: Flexbox, Grid, and CSS custom properties
- **Accessibility**: WCAG compliant design patterns
- **Performance**: Optimized loading and animations

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js
- **Templating:** EJS with partials
- **Styling:** Modern CSS with Flexbox/Grid
- **Fonts:** Google Fonts (Inter)
- **Icons:** Unicode emojis for fast loading
- **Client-Side:** Vanilla JavaScript with ES6+
- **Responsive:** CSS Grid and Flexbox
- **Animations:** CSS transitions and keyframes

## Design Principles

- **Minimalist**: Clean, uncluttered interface
- **Educational Focus**: Designed specifically for academic institutions
- **Professional**: Industry-standard UI patterns
- **Fast Loading**: Optimized assets and efficient code
- **Accessible**: Keyboard navigation and screen reader support
- **Consistent**: Unified design language throughout

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (full sidebar)
- **Tablet**: 768px - 1023px (collapsible sidebar)
- **Mobile**: Below 768px (mobile-optimized layout)

## 🔧 Quick Start

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start Development Server**:

   ```bash
   npm start
   ```

3. **Access Dashboard**:
   - Navigate to `http://localhost:3000/dashboard`
   - Experience the modern admin interface

## 🎨 Customization

The dashboard is highly customizable through CSS variables and modular components:

- **Colors**: Modify color scheme in `global.css`
- **Layout**: Adjust grid systems in `dashboard.css`
- **Components**: Individual card styling in respective CSS files
- **Animations**: Control timing and effects through CSS custom properties

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shazilk47/student-management-system.git
   cd student-management-system
   ```

```


```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the server:**

   ```bash
   npm start
   ```

4. Open your browser:

   ```
   http://localhost:3000
   ```

---

## Available Routes

| Route              | Description                     |
| ------------------ | ------------------------------- |
| `/`                | Home / Landing page             |
| `/login`           | User login                      |
| `/dashboard`       | User dashboard after login      |
| `/students`        | List all students               |
| `/students/:id`    | View individual student profile |
| `/forgot-password` | Static reset flow (WIP)         |
| `/reset-password`  | Static reset view (WIP)         |

---

## Best Practices Followed

- Express Router modularization
- Controller separation for logic
- Clean and scalable static asset structure
- EJS partials and dynamic view data
- Minimal and purposeful CSS/JS separation
- Prepared for future database integration

---

## 📌 Future Improvements

- Add MongoDB or PostgreSQL for persistent data
- Implement full authentication with sessions or JWT
- Add student creation/edit/delete functionality
- Mobile responsive styling
- Form validation and feedback

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## Maintainer

**Shazil Khan**
Baitussalam TechPark | BSCS Student | PSDC Program
