

# 49ers Game Score Leaderboard - Frontend

## Project Overview

This project is a web-based leaderboard for the San Francisco 49ers that displays game scores and player statistics. The application allows users to view recent games, player rankings based on performance, and apply filters and sorting options to manage the leaderboard.

This frontend is built using **React** with **Next.js**, providing a fast and responsive dashboard for users. The application is designed to handle datasets efficiently, even with a few thousand records, and integrates with a secure backend API.

## Frontend URL Design Prototype

To view the design of the leaderboard, refer to the following link:

[Leaderboard Design](https://xd.adobe.com/view/1b1b3820-cef2-422d-a63d-cc19cc939368-4e48/)

## Features

- **Game Scoreboard**: Displays recent 49ers games, including the date, opponent, final score, and location.
- **Player Leaderboard**: Ranks 49ers players based on key performance metrics (e.g., touchdowns, yards, tackles).
- **Filter & Sort**: Allows users to filter and sort the player leaderboard to view performance metrics in different ways.

## Requirements

- Node.js (>=14.x.x)
- NPM or Yarn

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/aimlessfeet99/49ers.git
cd 49ers-leaderboard
```

### 2. Install Dependencies

Using NPM:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

### 3. Running the Development Server

To start the frontend in development mode:

```bash
npm run dev
```

The app will run on [http://localhost:3000](http://localhost:3000).

### 4. Build for Production

To build the app for production:

```bash
npm run build
```

Then, you can start the production server:

```bash
npm run start
```

### 5. Environment Variables

Make sure to set up the following environment variables in a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

This is the URL for the backend API that handles fetching data for games and players.

### 6. API Integration

The frontend connects to a backend API to retrieve data for the games and players. Ensure that the backend is running and the API is properly secured with JWT authentication, as per the backend setup.

## Frontend Directory Structure

```bash
.
├── components        # Reusable React components
├── pages             # Next.js page components
├── public            # Static files such as images
├── styles            # Global and component-specific styles
├── utils             # Utility functions
└── .env.local        # Environment variables for API URL
```

## Running Tests

To run the test suite:

```bash
npm run test
```

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework that enables server-side rendering and static site generation.
- **Axios**: For making API requests to the backend.
- **Tailwind CSS**: For styling the dashboard.

## API Endpoints

The following are the expected backend API endpoints for fetching the data:

- `GET /games`: Retrieves the list of 49ers games and their scores.
- `GET /players`: Retrieves player statistics and rankings.

Ensure that these endpoints are available and secured via Bearer Token.
