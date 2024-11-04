# Live Temperature Dashboard

A real-time temperature monitoring application that displays live temperature data across multiple timezones. This dashboard is built to be scalable, maintainable, and follows clean code principles, providing a streamlined user experience with an organized code structure.

- **API Endpoint**: [https://temp-api.rosyidi.work/api/temperatures](https://temp-api.rosyidi.work/api/temperatures)
- **Live Demo**: [https://live-temp-dashboard.vercel.app](https://live-temp-dashboard.vercel.app)

---

## Features

- **Server-Side Data Fetching**: Initial temperature data is fetched from the API using server-side rendering for faster page load.
- **Real-Time Temperature Updates**: The `useTemperature` hook listens to the `temperature-update` socket event, which emits every 5 seconds. Each new update is inserted at the top of the list, with the last entry removed to keep the list manageable.
- **Timezone Selection**: A custom `useTimezone` hook, managed by Zustand, allows users to select and store their preferred timezone. This selection affects both the `CurrentData` display and the `TemperatureChart` view.
- **Scalable and Clean Architecture**: The application structure is modular and designed for scalability, with a clear separation of global and page-specific components.

---

## Scripts

| Script    | Command      | Description                                |
| --------- | ------------ | ------------------------------------------ |
| **dev**   | `next dev`   | Runs the development server.               |
| **build** | `next build` | Builds the application for production.     |
| **start** | `next start` | Starts the application in production mode. |
| **lint**  | `next lint`  | Lints the code to identify and fix issues. |
| **test**  | `jest`       | Runs unit tests.                           |

---

## Project Structure

The project is organized to support scalability and maintainable code:

```plaintext
├───app
│   │   favoico.ico
│   │   globals.css
│   │   layout.tsx
│   │
│   ├───(site)
│   │   │   layout.tsx
│   │   │
│   │   ├───(root)
│   │   │   │   page.tsx
│   │   │   │
│   │   │   └───_components
│   │   │           CurrentData.tsx
│   │   │           Dashboard.tsx
│   │   │           StatisicsCard.tsx
│   │   │           Statistics.tsx
│   │   │           TemperatureChart.tsx
│   │   │
│   │   ├───settings
│   │   │       page.tsx
│   │   │
│   │   └───statistics
│   │           page.tsx
│   │
│   └───fonts
│           GeistMonoVF.woff
│           GeistVF.woff
│
├───components
│   │   Sidebar.tsx
│   │
│   └───ui
│           avatar.tsx
│           button.tsx
│           card.tsx
│           chart.tsx
│           select.tsx
│           sheet.tsx
│
├───constant
│       navigation.ts
│       timezone.ts
│
├───hooks
│       useIsomorphicLayoutEffect .ts
│       useMediaQuery.ts
│       useTemperature.ts
│       useTimezone.ts
│
├───lib
│       utils.ts
│
├───repository
│       temperature.ts
│
├───types
│       temperature.d.ts
│       timezone.d.ts
│
└───__test__
        currentData.test.tsx
        statistics.test.tsx
```

## Key Directories

| Directory        | Description                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| **app**          | Contains the main application layout, global styles, and page routes.                                        |
| **(site)**       | Houses site-specific layouts and subdirectories for organizing pages and their components.                   |
| **\_components** | Contains components specific to individual pages, used only within those specific routes.                    |
| **components**   | Global components that can be reused across the entire application, such as `Sidebar` and UI elements.       |
| **constant**     | Stores constants such as navigation items and timezone data.                                                 |
| **hooks**        | Custom React hooks, including `useTemperature` for real-time updates and `useTimezone` for state management. |
| **lib**          | Utility functions that provide reusable logic across the application.                                        |
| **repository**   | API interaction functions, handling data requests for temperature updates.                                   |
| **types**        | TypeScript types for defining data structures such as temperature and timezone data.                         |
| \***\*test\*\*** | Unit tests for main components, ensuring code quality and functionality.                                     |

## Key Components

- **Dashboard**: Aggregates temperature data and statistics by combining the `CurrentData`, `TemperatureChart`, and `Statistics` components.
- **CurrentData**: Displays the latest temperature along with the date and time, adjusted to the selected timezone.
- **TemperatureChart**: A visual representation of temperature trends over the last 5 minutes.
- **Statistics**: Shows summary statistics, including minimum, maximum, and average temperatures.
- **Sidebar**: Provides navigation for switching between pages and views, and is set within the main layout.

## Hooks

- **useTemperature**: A custom hook that listens to real-time temperature updates via WebSocket. Receives new data every 5 seconds, updating the temperature list by adding new entries at the beginning and removing the oldest.
- **useTimezone**: A custom hook powered by Zustand for managing the selected timezone. It allows users to choose a timezone, which is then reflected in `CurrentData` and `TemperatureChart` components.

## Getting Started

Follow these steps to set up and run the Live Temperature Dashboard locally:

1. **Clone the Repository**: Clone the project to your local machine.
   ```bash
   git clone https://github.com/imamrosyidi/live-temp-dashboard.git
   ```
2. **Install Dependencies**: Navigate to the project directory and install the required dependencies.
   ```bash
    cd live-temp-dashboard
    npm install
   ```
3. **Run the Application**: Start the development server to run the application locally.
   ```bash
   npm run dev
   ```
4. **Open the Browser**: Open your browser and navigate to `http://localhost:3000` to view the application.
5. **RUn test**: Run the test to ensure the application is working properly.
   ```bash
   npm run test
   ```
6. **Lint the Code**: Run the linter to identify and fix any code issues.
   ```bash
    npm run lint
   ```
