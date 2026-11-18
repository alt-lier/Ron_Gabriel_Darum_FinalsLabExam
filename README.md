Ron Gabriel Darum BSCS 21
# CampusConnect – Student Information Portal

A responsive, frontend-only student information portal built for the CC211 Application Development and Emerging Technologies final laboratory examination.

## Project overview
CampusConnect demonstrates how students can access sample personal, academic, schedule, grade, attendance, announcement, and account information in one interface. It uses fictional sample records and browser `localStorage`; it is not connected to a real school database.

## Problem / need
Student information is often spread across different channels. This prototype demonstrates a centralized, easy-to-navigate interface for viewing common student services.

## Target users
College students and instructors evaluating a student portal prototype.

## Objectives
- Present student and academic information in one place.
- Provide clear navigation and a responsive UI.
- Demonstrate JavaScript search, filtering, validation, profile editing, and browser persistence.
- Practice organized frontend development and Git/GitHub deployment.

## Features
- Demo login with field validation and show/hide password.
- Responsive sidebar and navigation across eight portal pages.
- Dashboard overview, announcements, and quick links.
- Editable student profile and profile-picture preview/storage.
- Searchable subject list and unit filter.
- Weekly timetable, sample grades/GWA, and attendance filter.
- Announcement category filter and read-more details.
- Notification preferences and demo password change.
- `localStorage` persistence for session, profile, preferences, and demo password.

## Technologies
HTML5, CSS3, Vanilla JavaScript, Bootstrap 5, Bootstrap Icons, browser `localStorage`.

## Folder structure
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
│   └── app.js
├── assets/
│   └── images/
├── docs/
│   └── screenshots/
├── README.md
├── PROMPT_LOG.md
└── .gitignore
```

## Demo login
- Student ID: `2026-00125`
- Email: `john.santos@campus.edu`
- Password: `student123`

## Run locally
1. Download or clone this repository.
2. Open the folder in Visual Studio Code.
3. Install the **Live Server** extension.
4. Right-click `index.html` and select **Open with Live Server**.
5. Sign in using the demo credentials above.

You can also open `index.html` directly in a browser, but Live Server is recommended for development.

## GitHub Pages deployment
1. Create a GitHub repository named `student-information-portal`.
2. Open a terminal in this project folder.
3. Run the Git commands below to create and push the repository (replace the URL with your own):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: create portal structure"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/student-information-portal.git
   git push -u origin main
   ```
4. Continue development and create meaningful commits, for example:
   ```bash
   git add .
   git commit -m "Build responsive portal pages and navigation"
   git push
   git add .
   git commit -m "Add profile editing and academic filters"
   git push
   ```
5. In GitHub, open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch `main` and folder `/ (root)`, then click **Save**.
8. Wait for publishing, then open the Pages URL shown by GitHub.

## Screenshots
Save screenshots of the login page, dashboard, mobile layout, profile editing, subject search/filter, and other working features in `docs/screenshots/`. Add them here using Markdown image links, for example:
`![Dashboard](docs/screenshots/dashboard.png)`

Also capture:
- Successful `git push` from Git Bash or CMD.
- Git commit history showing at least three meaningful commits.

## Testing performed
- Login: empty fields, incorrect credentials, and valid demo credentials.
- Navigation: links between all eight pages and logout.
- Profile: edit, validation, save, cancel, and image-size check.
- Academic information: subject search and unit filter, including no-result state.
- Attendance and announcements: category/status filters.
- Settings: preference persistence and password validation.
- Responsive layout: sidebar behavior and page layout at desktop/tablet/mobile breakpoints.
- Internal links and local CSS/JS paths are relative for GitHub Pages compatibility.

## Corrections / test notes
The project uses shared JavaScript data and a consistent page shell. Before submission, run it in your own browser, inspect DevTools Console, test at mobile width, and record any additional issues you find here. Capture the required screenshots after confirming the deployed version works.

## Known limitations
- Login and password change are simulated in the browser and are not secure authentication.
- `localStorage` is device/browser-specific and does not synchronize records between users.
- All student, grade, attendance, subject, event, and announcement data are fictional.
- Profile photos are stored as browser data and may use significant local storage.
- External CDN resources require an internet connection.

## AI tools and credits
AI assistance: ChatGPT was used to help plan, generate, and review the frontend prototype. Bootstrap 5 and Bootstrap Icons are loaded from jsDelivr CDNs. Google Fonts uses DM Sans and Manrope. Review and understand all generated code before explaining or submitting it.
