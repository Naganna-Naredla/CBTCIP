EventPlanner360


Overview

EventPlanner360 is an all-in-one event management platform designed to help users plan, organize, and oversee diverse events such as conferences, weddings, and parties. This project combines both frontend and backend functionalities to provide a seamless event planning experience.

Features

Event Planning: Create and manage events, including details like event type, venue, food, and payment methods.
Reviews: Submit and view event reviews.
User Authentication: Login and manage user sessions for customers and admins.
Responsive Design: Optimized for both desktop and mobile devices.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Deployment: Render (for live deployment)

Project Structure

project-directory
│
├── models
│   ├── contact.js         # Mongoose model for contact information
│   ├── review.js          # Mongoose model for event reviews
│   └── plan.js            # Mongoose model for event plans
│
├── routes
│   ├── contacts.js        # Routes for contact management
│   ├── reviews.js         # Routes for review management
│   └── plans.js           # Routes for event plans
│
├── public
│   ├── J_Script.js        # Custom JavaScript file
│   ├── Lookit.html        # Placeholder HTML file
│   ├── StartPlan.css      # CSS for the Start Planning page
│   ├── StartPlan.js       # JavaScript for the Start Planning page
│   ├── index.html         # Main landing page
│   ├── login.css          # CSS for the login page
│   ├── login.html         # Login page HTML
│   ├── login.js           # JavaScript for the login page
│   ├── plans.css          # CSS for the plans page
│   ├── plans.html         # Plans page HTML
│   ├── plans.js           # JavaScript for the plans page
│   └── images.jpg         # Some images 
├── server.js              # Main server file
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Locked versions of project dependencies
├── Procfile               # Deployment configuration for Render
├── .gitignore             # Specifies files and directories to be ignored by Git
└── README.md              # Project documentation


Getting Started

Prerequisites:

Node.js (v20.15.1),

MongoDB Atlas account


Installation:

Clone the repository:

git clone https://github.com/Naganna-Naredla/EventPlanner360.git


Navigate to the project directory:

cd EventPlanner360


Install dependencies:

npm install


Set up environment variables:

Create a .env file in the root directory and add the following variables:

MONGO_URI=mongodb+srv://naganna3579:nagannan@cluster0.pgjrnjh.mongodb.net/

PORT=5000


Start the server:

npm start


Access the application:

Open your browser and go to http://localhost:5000 to view the application.

Deployment:

The project is deployed on Render. You can access the live application https://eventplanner360.onrender.com.

Contributing:

If you'd like to contribute to the project, please fork the repository and submit a pull request.


Contact:

For any inquiries or feedback, please contact naganna3579@gmail.com.