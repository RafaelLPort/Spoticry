# SpotiCry - Music and Playlist Management System

## Description

**SpotiCry** is a web application for managing music and playlists. Users can create and edit their playlists, add and edit songs, as well as manage their playback preferences. The application uses **React** for the frontend, **Node.js** for the backend, and integrates with external APIs for data management. The interface is simple and interactive, with features for searching, filtering, and playing music.

This README will detail the main components, features, and architecture of the system.

---

## Features

1. **Login and Authentication**
   - Users can log in using their email and password.
   - JWT tokens are used for authentication and authorization.
   - The JWT token is stored locally and verified to ensure the user is authenticated.

2. **Music Management**
   - The system supports CRUD operations for songs: **Create**, **Read**, **Update**, and **Delete**.
   - Users can edit details such as song title, artist, and URL.
   - Songs can be searched and ordered by defined criteria.

3. **Playlist Management**
   - Users can create, edit, and delete playlists.
   - Playlists can be populated with songs, which can be added or removed easily.
   - The system allows for detailed viewing of each playlist.

4. **Music Playback**
   - Songs can be played directly on the site through an integrated player.
   - The player supports play, pause, and display of playback controls.

---

## Project Structure

Here is an overview of the project structure:

### Frontend (React)
- **Components**: 
  - **Header**: Contains the navigation, search bar, and logout button.
  - **Login**: Handles user login and authentication.
  - **Playlists**: Displays and manages playlists. It includes a search bar, list of playlists, and functionality for adding songs to playlists.
  - **Musics**: Displays the songs and handles the logic for adding, editing, and deleting songs.
  - **Modal**: A reusable modal component for displaying content like song details or playlists.
  - **Player**: A React player for music playback, with controls for play/pause and volume adjustment.

- **State Management**:
  - The state is managed using React's `useState` and `useEffect` hooks.
  - JWT tokens are stored in **localStorage** and used to fetch user-specific data (songs, playlists).

### Backend (Node.js + Express)
- **Authentication**:
  - Users authenticate via JWT tokens, which are sent with each request to access protected routes (songs, playlists).
  - The server validates the token to ensure that requests come from authenticated users.

- **API Endpoints**:
  - **Songs**: Allows for creating, updating, deleting, and fetching songs.
  - **Playlists**: Handles creating, updating, and deleting playlists.
  - **User**: Authenticates users via email and password and issues JWT tokens.

### Libraries & Tools Used
- **React**: For the frontend UI.
- **React Router**: For navigation and routing between components.
- **Axios**: For making HTTP requests to the backend API.
- **JWT Decode**: For decoding the JWT token.
- **Styled Components**: For styling the components with CSS-in-JS.
- **Toastify**: For displaying toast notifications.
- **React Player**: For music playback functionality.

---

## Components Overview

### 1. **Header**
The `HeaderHome` component is responsible for displaying the navigation bar, search bar, and logout button. It also handles the sorting of songs by different criteria.

### 2. **Login**
The `Login` component provides a form for users to log in using their email and password. If the user is already authenticated (i.e., has a valid JWT token), they are redirected to the **Home** page.

### 3. **Musics**
The `Musics` component displays a list of songs. It allows users to add new songs, edit existing songs, and delete songs. Songs can be sorted by various criteria, such as title or artist.

### 4. **Playlists**
The `Playlists` component displays a list of playlists created by the user. Users can search for playlists and view details of a specific playlist.

### 5. **Modal**
The `Modal` component is used to display pop-up windows for various actions, such as viewing song details or editing a playlist.

### 6. **Player**
The `Player` component allows users to play songs directly from the app. It includes a React player that integrates with the music service, providing play/pause functionality.

---

## Installation

### Prerequisites
- **Node.js** (version 14 or above)
- **npm** or **yarn** (package manager)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RafaelLPort/Spoticry.git
   cd spoticry
   ```

2. **Install dependencies**:
   For the frontend:
   ```bash
   cd frontend
   npm install
   ```

   For the backend:
   ```bash
   cd backend
   npm install
   ```

3. **Start the server**:
   - Backend:
     ```bash
     cd backend
     npm start
     ```

   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

4. Open your browser and navigate to `http://localhost:3000` (or the relevant port) to start using the application.

---

## Authentication

- **JWT Token**: The application uses JSON Web Tokens (JWT) for user authentication.
  - On successful login, the backend generates a JWT token that is sent to the frontend.
  - The token is stored in **localStorage** and is included in the headers of every API request to authenticate the user.

---

## Usage

1. **Login**:
   - Enter your email and password in the login form. On successful authentication, you will be redirected to the **Home** page.
   - If a token is already stored and is valid, you will be automatically logged in.

2. **Managing Songs**:
   - Navigate to the **Musics** page to add, update, or delete songs.
   - You can also search for songs and filter them based on different criteria.

3. **Managing Playlists**:
   - On the **Playlists** page, you can create new playlists, add songs to existing playlists, and view the details of a playlist.
   
4. **Playing Music**:
   - On the **Musics** page or **Playlist** details page, you can click on the **Play** button to start playing a song.
   - The player will appear at the bottom, allowing you to play/pause the song.

---

## Contribution

1. Fork the repository and create a new branch.
2. Make your changes and ensure tests are passing.
3. Submit a pull request with a detailed description of your changes.

---

## License

The MIT License (MIT)
Copyright © 2024 <copyright holders> < Lucas Picanço, Rafael Portugal e Marco Decco>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
