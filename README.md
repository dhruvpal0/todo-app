
Todo List Mobile App

A mobile todo list application built using React Native and Expo that allows users to add, edit, delete, and manage todos. The app supports theme toggling (light/dark) and stores all data in a cloud database using Convex.

Features
Add Todos – Quickly add tasks with a title and optional description.
Edit Todos – Update your tasks at any time.
Delete Todos – Remove tasks you no longer need.
Theme Toggle – Switch between light and dark mode for a better visual experience.
Persistent Storage – Todos are saved in a cloud database (Convex) to sync across devices.
Responsive UI – Built with mobile-first design principles using React Native.

Tech Stack
Frontend:React Native, Expo
Backend & Database: Convex (Serverless, real-time database)
State Management: React Hooks / Context API
UI & Styling: Tailwind CSS (via tailwind-rn) or StyleSheet
Other Features: Theme toggling, local state management for UI responsiveness
Screenshots
Add screenshots of your app here
Example:
Light Mode
Dark Mode
Add Todo Screen
Edit Todo Screen
Installation

Clone the repository:
git clone https://github.com/yourusername/todo-app.git
cd todo-app

Install dependencies:
npm install
# or
yarn install

Start Expo:
expo start

Run on a device/emulator:

Use the Expo Go app on your mobile device

Or run on Android/iOS emulator from your computer

Usage

Open the app on your device.

Add a new todo using the Add button.

Edit an existing todo by tapping it.

Delete a todo by swiping or using the delete button.

Toggle between light and dark mode from the Theme button.

Database & Backend (Convex)

The app uses Convex for real-time cloud storage.

All todos are synced automatically across devices.

Convex functions are used for CRUD operations (Create, Read, Update, Delete).

Folder Structure
/todo-app
│
├─ /assets          # Images, icons, fonts
├─ /components      # Reusable UI components (Button, TodoItem, Header)
├─ /screens         # App screens (Home, AddTodo, EditTodo, Settings)
├─ /convex          # Convex database functions and queries
├─ App.js           # Entry point
└─ package.json

Future Enhancements

Notifications for upcoming tasks

Categories or tags for todos

Offline-first functionality

Drag-and-drop reordering of todos

Contributing

Contributions are welcome!

Fork the repository

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m "Add feature")

Push to the branch (git push origin feature-name)

Open a Pull Request

License

This project is licensed under the MIT License.
