
# GEMINI.md

## Project Overview

This is a personal portfolio website built with Next.js, a React framework. The project is written in TypeScript and uses Tailwind CSS for styling. It also utilizes `framer-motion` for animations and `next-themes` for theme management.

The main entry point of the application is `app/page.tsx`, which renders the `Navbar`, `Header`, and `About` components. The overall layout and fonts are defined in `app/layout.tsx`.

## Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server on [http://localhost:3000](http://localhost:3000).

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create an optimized production build of the application.

4.  **Start the production server:**
    ```bash
    npm run start
    ```
    This will start the production server.

5.  **Lint the code:**
    ```bash
    npm run lint
    ```
    This will run the ESLint to check for any code quality issues.

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
*   **Components:** The application is built using a component-based architecture. Reusable components are located in the `components` directory.
*   **TypeScript:** The project is written in TypeScript, so all new code should be strongly typed.
*   **Linting:** ESLint is used for linting. Please run `npm run lint` before committing any changes.
