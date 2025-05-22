# 🔐 Job Box: A JOB PORTAL SYSTEM

A comprehensive job portal platform designed to enable seamless interaction between job seekers and employers. The system provides full CRUD operations for managing job postings, user authentication, and streamlined job application processes.

## 🌟 Project Purpose

The purpose of this project is to assess skills, creativity, and problem-solving abilities while providing an efficient recruitment and job application experience.

## 💡 Key Features

- Responsive Design: Fully responsive across mobile, tablet, and desktop.
- Authentication System: Email/password login, Google login, account recovery, and protected routes.
- Job Management: Add, update, delete, and view job postings.
- Job Search & Filters: Search jobs by title and filter by job type, experience level, and salary range.
- Job Applications: Apply for jobs with detailed forms and manage your applications.
- Employer Tools: Employers can review applications, update jobs, and manage postings.
- Error Handling: User-friendly error messages and loading indicators.
- Session Management: Secure session management with JWT tokens.

## 🖌️ Application Pages

### Public Pages

- Home Page (/): Displays available job within deadline postings with essential information and dynamic routing to job details.

### Protected Pages

- All Jobs (/jobs): View all jobs, search, filter, and sort by deadline.
- Job Details (/jobs/details/:id): Detailed job information and application options.
- Add Job (/add-jobs): Form for creating job postings with employer details.
- Apply for a Job (/application/apply/:id): Form for submitting job applications with user and job-specific details.
- My Applications (/application/me): View and manage submitted applications.
- My Job Posts (/my-jobs): Manage posted jobs and navigate to related actions.
- Review Applications (/my-jobs/:id): Review job applications with status management options.
- Update Job (/jobs/update/:id): Update job information.

## 📂 Architecture

- Navbar: Includes company logo, navigation links, user info, and authentication controls.
- Footer: Displays company information, policies, and social links.
- Dynamic Routing: Main section renders pages based on routes.

## 🛠️ Technologies Used

- Frontend: React.js, Tailwind CSS, DaisyUI
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: Firebase Auth, Google Authentication
- Version Control: GitHub

## 🚀 Features Checklist

### Authentication System

- User registration and login with email/password or Google Authentication.
- Password recovery system with input validation.
- Protected routes for all pages except landing and authentication pages.

### Job Functionality

- Full CRUD operations for jobs.
- Search and filter by job type, experience level, and salary range.
- Sort by application deadline.

### Application Process

- Form for submitting applications with personal and job-specific details.
- Manage applications with withdrawal options.

### Employer Tools

- View, edit, and delete job postings.
- Review applications with dropdown actions (Rejected, Shortlisted, Hired, Scheduled).

### Security

- Secure session management with JWT tokens.
- Authorization for API routes.
