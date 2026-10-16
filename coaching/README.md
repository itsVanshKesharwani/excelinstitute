# Excel Coaching Classes - Online Admission System

A MERN stack project for a coaching institute website. Students can create an account, fill the admission form online and check the status of their application. The admin can see all the applications and approve or reject them.

Made by Vansh Kesharwani (B.Tech CSE, UCER Prayagraj) as a mini project for internship.

## What it does

- Normal website with Home, About, Courses, Facilities, Gallery and Address sections
- Student can register and login
- Student fills the admission form (name, father's name, phone, email, class, address)
- Student can see the status of his applications (pending, approved or rejected)
- Admin has a separate login
- Admin dashboard shows total, pending, approved and rejected count
- Admin can search by name or phone, filter by status, and approve, reject or delete an application

## Technologies used

- Frontend: React (Vite), React Router, Bootstrap, CSS
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Login: JWT (jsonwebtoken) and bcryptjs for password hashing
- Other: cors, dotenv

## Folder structure

```
project-folder/
├── coaching/        frontend (React)
│   └── src/
│       ├── Component/   navbar, hero, courses, admission form etc.
│       ├── Pages/       home, login pages, admin dashboard
│       └── api.js       backend url
└── backend/
    ├── models/          User, Student, Admin
    ├── routes/          auth, admission, admin
    ├── middleware/      token checking
    ├── server.js
    ├── createAdmin.js   creates the admin account
    └── .env
```

## How to run

You need Node.js and MongoDB installed. MongoDB should be running.

### Backend

```
cd backend
npm install
npm run seed
npm start
```

`npm run seed` is needed only once, it creates the admin account.
When the server starts you will see "MongoDB connected" in the terminal. It runs on port 5000.

The `.env` file has these values:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/coaching
JWT_SECRET=change_this_secret
ADMIN_USER=admin
ADMIN_PASS=admin123
```

Please change `JWT_SECRET` and `ADMIN_PASS` before using it anywhere other than your own computer.

### Frontend

Open a new terminal.

```
cd coaching
npm install
npm run dev
```

Then open http://localhost:5173 in the browser.

## Pages

| Page | Link |
|---|---|
| Home | / |
| Student login / register | /login |
| Admission form | /admission |
| Admin login | /admin/login |
| Admin dashboard | /admin/dashboard |

The "Enroll Now" button opens the admission form. If the student is not logged in he is sent to the login page first.

## API

| Method | Route | Who can use | What it does |
|---|---|---|---|
| POST | /api/auth/register | anyone | create student account |
| POST | /api/auth/login | anyone | student login |
| POST | /api/admission | student | submit admission form |
| GET | /api/admission/my | student | see own applications |
| POST | /api/admin/login | anyone | admin login |
| GET | /api/admin/students | admin | all applications |
| PUT | /api/admin/students/:id/status | admin | change status |
| DELETE | /api/admin/students/:id | admin | delete application |

Student and admin routes need a token. After login the token is saved in the browser and sent with every request in the Authorization header. A student token does not work on admin routes.

## Things not done yet

- online fee payment
- email or SMS when status changes
- forgot password
- uploading documents with the form
- more than one admin
- not hosted yet, runs only on localhost