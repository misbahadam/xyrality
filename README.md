# gaming_world_vueapp

This is a Vue.js 3 application that fetches and displays a list of gaming worlds from a server. The worlds can be sorted by either their name or ID using a toggle switch.

## Features

- Fetches world data from an API.
- Displays world data in a grid with a responsive UI.
- Toggle sorting between world names and IDs.
- Detailed view for each world.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/).

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Project Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/gaming-world-vueapp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd gaming-world-vueapp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

This will start the app on http://localhost:5173/ (by default).

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open Cypress test runner:

   ```bash
   npx cypress open
   ```

   Cypress tests are located inside the `cypress/e2e` folder. You can add more tests as needed.

### Unit Tests

To run unit tests using `vitest`, execute:

```bash
npm run test:unit
```

### Project Structure

```bash
   gaming-world-vueapp/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Project assets
│   ├── components/         # Vue components
│   ├── views/              # View components for pages
│   ├── store/              # Pinia stores
│   ├── App.vue             # Main application component
│   └── main.js             # Entry point for the Vue app
├── cypress/                # Cypress tests
│   └── e2e/                # End-to-End test cases
├── tests/                  # Unit tests
│   └── unit/               # Unit test cases for components and stores
├── .eslintrc.cjs           # ESLint configuration
├── .prettierrc.cjs         # Prettier configuration
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation

```
