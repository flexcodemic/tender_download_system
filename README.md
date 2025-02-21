📄 Tender Download System

📌 Introduction

The Tender Download System is a simple web application built with Vue 3 + Vite that allows users to browse available tenders, view details, and download tender documents. The system also includes authentication (login/logout) and a search functionality to filter tenders.

This project follows best industry practices using:

Vue 3 (Composition API) for building UI components.

Pinia for state management.

Vue Router for navigation.

Bootstrap for styling.

🚀 Features

✔️ Browse a list of tenders with title, description, and deadline.✔️ Download tender documents.✔️ Search for tenders using keywords.✔️ User authentication (Login & Logout).✔️ Pinia for state management.✔️ Bootstrap UI for styling and responsiveness.✔️ Error handling for data fetching issues.✔️ (Future) Pagination for large datasets.

📂 Project Folder Structure

src/
│── components/
│   ├── Navbar.vue
│   ├── TenderList.vue    # Component for displaying tenders
│── views/
│   ├── HomeView.vue      # Tender Listing Page
│   ├── LoginView.vue     # Authentication Page
│── router/
│   ├── index.js          # Routes for navigation
│── store/
│   ├── tenderStore.js    # Pinia store for managing tenders
│── data/
│   ├── tenders.js        # Dummy data for tenders
│── App.vue               # Root component
│── main.js               # Application entry point

🛠️ Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/your-username/tender-download-system.git
cd tender-download-system

2️⃣ Install Dependencies

npm install

3️⃣ Run the Development Server

npm run dev

The app will be available at: http://localhost:5173/

🏗️ How It Works

🔹 Tender Listing Page

Fetches tenders from data/tenders.js (mock data).

Displays tender title, description, and deadline.

Users can download tender documents.

Users can search for tenders by title.

🔹 State Management (Pinia)

tenderStore.js stores and manages tender data.

fetchTenders() loads tenders.

filteredTenders() returns tenders based on search input.

🔹 Authentication System

Users must log in before accessing the tenders.

After logging in, the Logout button appears.

📌 Next Steps

✅ Implement error handling for failed data fetching.

✅ Add pagination for a large number of tenders.

✅ Improve user authentication.

👨‍💻 Author

Anthony Aruma