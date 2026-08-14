# 🛒 DevStore — E-Commerce Next.js

An e-commerce project developed during the Next.js module at **Rocketseat**. The application explores modern features of the React/Next.js ecosystem (App Router), focusing on performance, server-side rendering, caching strategies, and end-to-end (E2E) test automation.

---

## 🚀 Technologies & Core Concepts

### **Core & Framework**

- **Next.js (App Router)**: Modern routing architecture built around the `app` directory.
- **React Server Components (RSC)**: Default server-side component rendering for enhanced performance and reduced client JavaScript bundle.
- **Client Components**: Selective use of the `'use client'` directive to handle interactivity and client state.
- **Streaming SSR & Suspense API**: Progressive page rendering using dynamic loading states.
- **Data Fetching, Cache & Memoization**: Optimized data fetching with automatic caching, request deduplication, and data revalidation via Next.js' extended Fetch API.
- **Routing**: Dynamic routes, nested layouts, and route groups.

### **Testing & CI/CD**

- **Cypress**: End-to-End (E2E) testing to ensure core user flows work as expected.
- **GitHub Actions (CI/CD)**: Continuous Integration workflow executing automated Cypress tests on every _Pull Request_.

---

## ⚙️ Features

- [x] Featured products showcase on the homepage.
- [x] Real-time product search and filtering.
- [x] Detailed product view.
- [x] Add items in the shopping cart.
- [x] Optimized loading experience (_Skeleton UI_ / _Loading States_ with Suspense).

---

## 🛠️ Getting Started

### **Prerequisites**

- Node.js (v18 or higher)
- `npm` or `pnpm`

### **Installation & Execution**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jeffersonsil813/devstore.git
   cd devstore
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 🧪 Running Tests (Cypress)

### **Cypress Interactive UI:**

```bash
npx cypress open
```

### **Headless Mode (Terminal):**

```bash
npx cypress run
```

---

## 🔄 CI Workflow (GitHub Actions)

The repository features automated CI configured via GitHub Actions:

- **Trigger:** Runs automatically whenever a **Pull Request (PR)** is created or updated against the main branch.
- **Action:** Boots up the application environment and runs the Cypress E2E test suite in headless mode to verify build stability before merging.

---

## 📝 License

Project developed for educational purposes as part of the **Rocketseat** program.
