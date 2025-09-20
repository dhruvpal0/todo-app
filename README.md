# 📝 Todo List Mobile App

A **mobile todo list application** built using **React Native** and **Expo** that allows users to **add, edit, delete, and manage todos**. The app also supports **theme toggling (light/dark)** and stores all data in a **cloud database** using **Convex**.

---

## **Features**

- **Add Todos** – Quickly add tasks with a title and optional description.  
- **Edit Todos** – Update your tasks anytime.  
- **Delete Todos** – Remove tasks you no longer need.  
- **Theme Toggle** – Switch between **light and dark mode**.  
- **Persistent Storage** – Todos are saved in a **cloud database** to sync across devices.  
- **Responsive UI** – Mobile-first design using React Native.

---

## **Tech Stack**

- **Frontend:** React Native, Expo  
- **Backend & Database:** Convex (Serverless, real-time database)  
- **State Management:** React Hooks / Context API  
- **UI & Styling:** Tailwind CSS (via `tailwind-rn`) or React Native `StyleSheet`  
- **Other Features:** Theme toggling, local state management

---

## **Screenshots**

_Add screenshots of your app here_  

- **Light Mode**  
- **Dark Mode**  
- **Add Todo Screen**  
- **Edit Todo Screen**

---

## **Installation**

1. **Clone the repository:**
git clone https://github.com/yourusername/todo-app.git
cd todo-app

npm install
# or
yarn install

expo start

## **Run on a device/emulator**
Use the Expo Go app on your mobile device
Or run on Android/iOS emulator from your computer

## Usage
Open the app on your device.
Add a new todo using the Add button.
Edit an existing todo by tapping it.
Delete a todo by swiping or using the delete button.
Toggle between light and dark mode from the Theme button.

## Database & Backend (Convex)
The app uses Convex for real-time cloud storage.
All todos are synced automatically across devices.
Convex functions are used for CRUD operations (Create, Read, Update, Delete).

## Future Enhancements
Notifications for upcoming tasks
Categories or tags for todos
Offline-first functionality
Drag-and-drop reordering of todos

## Contributing
Contributions are welcome!
Fork the repository
Create a feature branch (git checkout -b feature-name)
Commit your changes (git commit -m "Add feature")
Push to the branch (git push origin feature-name)
Open a Pull Request
