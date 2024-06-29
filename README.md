# E-Commerce Website (MERN Stack with JWT Authentication)

Welcome to the E-Commerce Website repository! This project is a full-featured e-commerce application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application includes JWT (JSON Web Token) authentication for secure user authentication and authorization.

## Features

- **User Authentication & Authorization**
  - Secure registration and login with JWT.
  - Role-based access control for users and admins.

- **Product Management**
  - Browse, search, and filter products.
  - Admin functionality to add, edit, and delete products.
  - Product details page with images, descriptions, and reviews.

- **Shopping Cart**
  - Add and remove products from the cart.
  - Update product quantities.
  - View cart summary and total price.

- **Order Management**
  - Place orders and receive order confirmation.
  - View order history and order details.
  - Admin functionality to manage orders (update status, cancel orders).

- **Responsive Design**
  - Fully responsive UI to provide a seamless experience on all devices.

## Technologies Used

- **Frontend**
  - React.js with hooks and context API for state management.
  - Redux for advanced state management.
  - Tailwind CSS for styling.

- **Backend**
  - Node.js and Express.js for server-side development.
  - MongoDB with Mongoose for database management.
  - JWT for authentication and authorization.
  - Bcrypt for password hashing.

- **Tools & Libraries**
  - Axios for API calls.
  - Formik and Yup for form handling and validation.
  - React Router for navigation.
  - Multer for file uploads.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-mern-jwt.git
   cd ecommerce
   npm i
   npm run dev
   cd frontend
   npm i
   npm run start
