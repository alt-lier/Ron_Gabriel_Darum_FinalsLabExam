# Ron-Gabriel-Darum_FinalsLabExam_CC211

# Campus Connect - Student Information Portal

A modern, responsive, frontend-only Student Information Portal built using HTML5, CSS3, JavaScript, Bootstrap 5, and browser localStorage.

## Project Description

Campus Connect is a simulated university student portal that provides students with a centralized interface for viewing and managing their academic information.

The application includes student authentication, profile management, academic records, class schedules, grades, attendance monitoring, announcements, and account settings.

The project is designed for static hosting and can be deployed directly through GitHub Pages.

## Project Objectives

- Create a modern and user-friendly student portal.
- Provide centralized access to academic information.
- Demonstrate frontend authentication and data management.
- Implement responsive layouts for desktop and mobile devices.
- Demonstrate browser-based data persistence.
- Develop a project compatible with GitHub Pages.

## Features

### Authentication
- Simulated student login.
- Student ID and email login.
- Password visibility toggle.
- Remember-me option.
- Form validation.
- Logout confirmation.

### Dashboard
- Personalized welcome message.
- Student information cards.
- Academic performance chart.
- Recent announcements.
- Upcoming academic events.
- Quick navigation.

### Student Profile
- View personal information.
- Edit personal details.
- Upload a profile picture.
- Save changes using localStorage.
- Display academic information.

### Academic Information
- View enrolled subjects.
- Subject codes and descriptions.
- Instructor information.
- Units and schedules.
- Subject search.

### Class Schedule
- Weekly class timetable.
- Subject information.
- Instructor details.
- Classroom information.

### Grades
- Midterm grades.
- Final grades.
- Overall grades.
- General Weighted Average.
- Academic standing.

### Attendance
- Attendance summaries.
- Present, absent, and late records.
- Attendance percentage.
- Attendance history.

### Announcements
- School announcements.
- Examination notices.
- Enrollment reminders.
- Academic events.
- Read-more modal.

### Settings
- Notification preferences.
- Change demo password.
- Profile settings.
- Logout.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Custom styling |
| JavaScript | Application functionality |
| Bootstrap 5.3 | Responsive design |
| Bootstrap Icons | Interface icons |
| Chart.js | Academic performance chart |
| localStorage | Browser-side data persistence |

## Project Structure

```text
student-information-portal/
├── index.html
├── dashboard.html
├── profile.html
├── academics.html
├── schedule.html
├── grades.html
├── attendance.html
├── announcements.html
├── settings.html
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   ├── dashboard.js
│   ├── profile.js
│   ├── academics.js
│   └── main.js
├── assets/
│   └── images/
├── README.md
└── .gitignore
```

## Screenshots

Add your project screenshots to a folder such as `screenshots/`.

Suggested screenshots:

1. Login page
2. Student dashboard
3. Student profile
4. Academic information
5. Class schedule
6. Grades
7. Attendance
8. Announcements
9. Settings

Example:

```markdown
![Dashboard](screenshots/dashboard.png)
![Login](screenshots/login.png)
```

## Installation

### Requirements

- Visual Studio Code
- Google Chrome, Firefox, or another modern browser
- Live Server extension for Visual Studio Code
- Internet connection for Bootstrap, Bootstrap Icons, Google Fonts, and Chart.js CDNs

### Running Locally

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Install the Live Server extension.
4. Open `index.html`.
5. Right-click the file.
6. Select **Open with Live Server**.
7. Open the displayed local website address.
8. Sign in using the demonstration credentials.

## Sample Login Credentials

| Field | Value |
|---|---|
| Student ID | 2026-00125 |
| Email | john.santos@example.edu |
| Password | student123 |

## GitHub Pages Deployment

1. Create a GitHub repository named `student-information-portal`.
2. Upload all project files.
3. Open the repository Settings.
4. Navigate to Pages.
5. Under Build and deployment, select Deploy from a branch.
6. Select the `main` branch.
7. Select the root folder (`/`).
8. Click Save.
9. Wait for GitHub Pages to publish the website.
10. Open the generated website URL.

Your website will normally be available at:

`https://YOUR-USERNAME.github.io/student-information-portal/`

Replace `YOUR-USERNAME` with your GitHub username.

## Project Limitations

This project is a frontend-only demonstration.

- Authentication is simulated using JavaScript.
- Student information is stored in browser localStorage.
- Password storage is not secure.
- There is no centralized database.
- Data is not synchronized between devices.
- Students can modify browser-stored data.
- Password recovery is not connected to email.
- Academic records are demonstration data and are not official university records.

**Important:** This project must not be used to store real student records, passwords, or sensitive personal information.

## License

This project is intended for educational and demonstration purposes.
