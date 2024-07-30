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

 -> models/: Contains Mongoose models for MongoDB.
     contact.js
     review.js
     plan.js
     
 -> routes/: Contains Express route handlers.
     contacts.js
     reviews.js
     plans.js

 -> public/: Contains static assets and frontend files.

     J_Script.js
     Lookit.html
     StartPlan.css
     StartPlan.js
     index.html
     login.css
     login.html
     login.js
     plans.css
     plans.html
     plans.js
     (Other images)

 -> server.js: Main server file to start the application.

 -> package.json: Project dependencies and scripts.

 -> package-lock.json: Dependency lock file.

 -> Procfile: Process file for deployment (e.g., with Heroku).

 -> .gitignore: Specifies files and directories to be ignored by Git.

 -> README.md: Project documentation.

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