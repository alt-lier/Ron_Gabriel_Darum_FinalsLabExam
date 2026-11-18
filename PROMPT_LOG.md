# PROMPT_LOG – CampusConnect Student Information Portal

This log documents the prompt-engineering process for the CC211 final laboratory examination. Adapt the technique names below to the exact terminology used in your class discussion, and add your own screenshots/evidence of the prompts and refinements.

## Entry 1 – Role prompting and context setting
- **Technique/framework:** Role prompting; context and task specification.
- **Purpose:** Establish the expected expertise and project context.
- **Exact prompt:** “Act as a UI/UX designer and senior frontend developer. Build a responsive Student Information Portal for a college student using HTML, CSS, Vanilla JavaScript, and Bootstrap 5. The project is static and must run on GitHub Pages.”
- **Result summary:** A frontend portal plan with shared navigation, student-facing pages, and a consistent design system.
- **Evaluation:** The role and context established a clear direction. A large scope needed to be divided into manageable pages and tested feature by feature.
- **Improvement:** “Generate the project as separate static files. Use relative paths, reusable JavaScript, realistic fictional data, and localStorage only for demonstration. Do not use a backend.”

## Entry 2 – Structured prompting and constraints
- **Technique/framework:** Structured prompt; constraint-based prompting.
- **Purpose:** Make the deliverables, technologies, and limitations explicit.
- **Exact prompt:** “Create a login page, dashboard, profile, academic information, class schedule, grades, attendance, announcements, and settings pages. Use Bootstrap 5, Bootstrap Icons, responsive layouts, semantic HTML, accessible labels, and Vanilla JavaScript. No PHP, database, or server-side code. Use fictional sample records.”
- **Result summary:** A set of separate HTML pages with shared CSS and JavaScript behavior.
- **Evaluation:** The explicit constraints support GitHub Pages compatibility. Static login is only a demonstration and must not be described as secure authentication.
- **Improvement:** “Ensure each navigation item has a real destination, all controls perform an action, and every page uses the same navigation and styling.”

## Entry 3 – Step-by-step decomposition
- **Technique/framework:** Task decomposition / step-by-step prompting.
- **Purpose:** Reduce complexity and make implementation easier to verify.
- **Exact prompt:** “Develop the portal in stages: (1) project structure and shared layout, (2) HTML pages, (3) responsive CSS, (4) JavaScript data and interactions, (5) README and testing checklist. Keep each file complete.”
- **Result summary:** The work was separated into pages, a shared stylesheet, authentication logic, shared application logic, and documentation.
- **Evaluation:** Separation improves maintainability. Shared code should be checked on every page to avoid missing scripts or inconsistent paths.
- **Improvement:** “After generating the files, inspect every page and check that its required element IDs match the JavaScript selectors.”

## Entry 4 – Few-shot / example-based data specification
- **Technique/framework:** Example-based prompting (few-shot style).
- **Purpose:** Keep sample records consistent across subjects, schedules, and grades.
- **Exact prompt:** “Use the same subject objects throughout the portal. Each subject should have a code, title, instructor, day, time, room, units, midterm grade, final grade, and overall grade. Example: {code: 'CC211', name: 'Application Development', instructor: 'Mr. Adrian Reyes', day: 'Monday', time: '8:00 AM – 10:00 AM', room: 'ICT Lab 1', units: 3}.”
- **Result summary:** Shared sample subject data can populate the academic, schedule, and grades pages consistently.
- **Evaluation:** A single source of sample data reduces contradictions. All records remain fictional.
- **Improvement:** “Use one shared JavaScript data array and render the relevant fields on each page.”

## Entry 5 – Evaluation and refinement
- **Technique/framework:** Iterative prompting; evaluation / self-critique.
- **Purpose:** Find missing requirements and improve functionality.
- **Exact prompt:** “Review the project against the exam checklist. Check page navigation, form validation, search and filtering, localStorage, responsive behavior, accessibility, relative paths, working buttons, and console errors. List gaps and correct them without adding backend technology.”
- **Result summary:** The implementation includes validation, search/filter interactions, profile editing, local persistence, responsive navigation, and documentation.
- **Evaluation:** The project still needs to be run and tested in the student's browser and deployed repository. Git commits and screenshots must be produced by the student.
- **Improvement:** “Test each feature using valid, invalid, and empty inputs. Record actual results and corrections in README.md. Do not claim a test passed unless it was performed.”

## Student completion notes
- Add your full name and section to README.md if your instructor requires them.
- Update this log to match the exact prompt techniques/frameworks taught in class.
- Add evidence screenshots of your actual prompt use and application tests.
