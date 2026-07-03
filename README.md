# 📋 Task Manager

A modern, fully-featured task management application built with React and Vite. Organize your daily tasks by time of day, track progress, and manage your productivity with ease.

## 🎯 Features

- ✅ **Create Tasks** - Add new tasks with title, description, and time period (Morning, Afternoon, Evening)
- 📝 **Manage Tasks** - View all tasks in a clean, organized interface
- 🔄 **Update Status** - Mark tasks as "Not Started", "In Progress", or "Completed"
- 🗑️ **Delete Tasks** - Remove tasks with confirmation
- 📖 **Task Details** - View detailed information about each task on a dedicated page
- ⏰ **Time-Based Organization** - Automatically group tasks by time of day
- 🔔 **Toast Notifications** - Get real-time feedback for all actions
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS and smooth animations
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

**Frontend Framework & Build:**

- [React 19.1](https://react.dev/) - JavaScript library for building UIs
- [Vite 6.3.5](https://vitejs.dev/) - Lightning-fast build tool and dev server
- [React DOM 19.1](https://react.dev/reference/react-dom)

**Routing & State Management:**

- [React Router DOM 7.17](https://reactrouter.com/) - Client-side routing and navigation
- [TanStack React Query 5.101](https://tanstack.com/query/) - Powerful server state management
- [React Hook Form 7.79](https://react-hook-form.com/) - Lightweight form library

**Styling & Design:**

- [Tailwind CSS 3.4.4](https://tailwindcss.com/) - Utility-first CSS framework
- [PostCSS 8.4.38](https://postcss.org/) - CSS processing and transformations
- [Tailwind Merge 3.6.0](https://github.com/dcastil/tailwind-merge) - Merge Tailwind classes
- [Tailwind Variants 3.2.2](https://github.com/nextui-org/tailwind-variants) - Advanced Tailwind utilities
- **Poppins Font** - Custom branding with Poppins typography

**HTTP & Backend:**

- [Axios 1.18.1](https://axios-http.com/) - Promise-based HTTP client
- [json-server 0.17.4](https://github.com/typicode/json-server) - Mock REST API server

**UI & UX:**

- [Sonner 2.0.7](https://sonner.emilkowal.ski/) - Toast notifications library
- [React Transition Group 4.4.5](https://reactcommunity.org/react-transition-group/) - Animation utilities
- [React GA4 3.0.1](https://github.com/react-ga/react-ga4) - Google Analytics integration

**Developer Tools:**

- [ESLint 9.25](https://eslint.org/) - Code quality and linting
- [Prettier 3.8.3](https://prettier.io/) - Code formatting
- [Husky 9.1.7](https://typicode.github.io/husky/) - Git hooks
- [Lint-staged 15.5.2](https://github.com/okonet/lint-staged) - Run linters on staged files
- [SVGR 5.2.0](https://react-svgr.com/) - Import SVGs as React components
- [UUID 14.0](https://github.com/uuidjs/uuid) - Generate unique IDs

## 📁 Project Structure

```
task-manager/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Fonts, icons, and images
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/        # Reusable React components
│   │   ├── AddTaskDialog.jsx      # Task creation modal
│   │   ├── Button.jsx             # Reusable button component
│   │   ├── DashboardCards.jsx     # Statistics cards
│   │   ├── Header.jsx             # Top navigation bar
│   │   ├── Input.jsx              # Form input field
│   │   ├── InputLabel.jsx         # Form label
│   │   ├── Sidebar.jsx            # Navigation sidebar
│   │   ├── SidebarButton.jsx      # Sidebar navigation button
│   │   ├── TaskItem.jsx           # Individual task display
│   │   ├── Tasks.jsx              # Tasks list container
│   │   ├── TasksSeparator.jsx     # Visual task separator
│   │   └── TimeSelect.jsx         # Time period selector
│   ├── hooks/             # Custom React hooks
│   │   └── data/
│   │       ├── use-add-tasks.js       # Hook for creating tasks
│   │       ├── use-delete-tasks.js    # Hook for deleting tasks
│   │       └── use-update-tasks.js    # Hook for updating tasks
│   ├── keys/              # React Query key management
│   │   ├── mutations.js           # Mutation keys factory
│   │   └── queries.js             # Query keys factory
│   ├── layouts/           # Layout components
│   │   └── rootLayout.jsx         # Main app layout wrapper
│   ├── loaders/           # Route data loaders
│   │   ├── taskDetailsLoader.js   # Load single task data
│   │   └── tasksLoader.js         # Load all tasks data
│   ├── pages/             # Page components (routes)
│   │   ├── home.jsx               # Tasks list page
│   │   ├── task-details.jsx       # Individual task details page
│   │   └── not-found.jsx          # 404 page
│   ├── services/          # API and external services
│   │   ├── api.js                 # Axios configuration and setup
│   │   └── tasks.js               # Task API endpoints
│   ├── App.jsx            # Main App component
│   ├── index.css          # Global styles
│   ├── main.jsx           # React entry point
│   └── queryClient.js     # React Query configuration
├── db.json                # Mock database (JSON server)
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite build configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── eslint.config.js       # ESLint configuration
├── vercel.json            # Vercel deployment configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 16.x or higher
- **npm** 7.x or higher (or yarn/pnpm)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to see the application

## 📜 Available Scripts

- **`npm run dev`** - Start the Vite development server with HMR (Hot Module Reload)
- **`npm run build`** - Build the production bundle
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run prepare`** - Initialize Husky git hooks

## 🏗️ Project Architecture

### Data Flow

```
User Interface (React Components)
        ↓
React Router (Page Routing)
        ↓
Pages (home, task-details, not-found)
        ↓
Components (TaskItem, Tasks, AddTaskDialog, etc.)
        ↓
Custom Hooks (use-add-tasks, use-delete-tasks, use-update-tasks)
        ↓
React Query (Server State Management & Caching)
        ↓
Axios API Client (HTTP Requests)
        ↓
json-server (Mock REST API)
        ↓
db.json (Data Persistence)
```

### Key Architectural Decisions

1. **React Query for Server State** - Handles all server-side data fetching, caching, synchronization, and mutations
2. **React Hook Form for Local State** - Manages form state independently from server state
3. **Component Separation** - UI components are separate from data/logic hooks for better testability
4. **Custom Hooks** - Encapsulate mutation logic (add, update, delete tasks) with React Query
5. **Route Loaders** - Pre-fetch data before rendering routes for better UX
6. **Tailwind CSS** - Utility-first approach for rapid UI development and maintainability

## 📡 API Endpoints

The application uses a mock REST API powered by `json-server`. All endpoints are relative to the base URL (default: `http://localhost:3000`).

### Tasks Endpoints

| Method   | Endpoint     | Description                 |
| -------- | ------------ | --------------------------- |
| `GET`    | `/tasks`     | Fetch all tasks             |
| `GET`    | `/tasks/:id` | Fetch a specific task by ID |
| `POST`   | `/tasks`     | Create a new task           |
| `PATCH`  | `/tasks/:id` | Update an existing task     |
| `DELETE` | `/tasks/:id` | Delete a task               |

### Task Object Structure

```json
{
  "id": "uuid",
  "title": "Task Title",
  "description": "Task description",
  "timeOfDay": "morning|afternoon|evening",
  "status": "not_started|in_progress|completed",
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-01T00:00:00Z"
}
```

## 🤝 Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

This project uses:

- **ESLint** for code quality
- **Prettier** for code formatting
- **Husky** for git hooks to enforce quality checks before commits

Run lint checks:

```bash
npm run lint
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

Created with ❤️ for task management enthusiasts.

---

**Happy task managing! 🚀**
