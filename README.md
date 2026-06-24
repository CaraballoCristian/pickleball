🚀 Pickleball Association Platform

Frontend platform concept for a pickleball association.
Designed to manage clubs, tournaments, rankings and news with a modern interface, responsive design and an administrative dashboard.

Built as a frontend-only project using mock data and local state management.


🌐 Live Demo
🔗 placeholder text


🚀 Installation & Setup

# Clone the repository:
git clone https://github.com/tuusuario/pickleball-platform.git

# Install dependencies:
npm install

# Run development server:
npm run dev

# Open in browser:
http://localhost:3000


🖼️ Preview
Pickleball Platform Preview


✨ Features

📱 Mobile-first & fully responsive
🌙 Dark / Light mode with localStorage persistence
⚡ Smooth animations with Framer Motion
🏓 Club, tournament, ranking and news sections
🏆 Tournament tabs and ranking system
📰 News listing with pagination and dynamic routes
🔐 Admin authentication flow
🛠️ Local CRUD dashboard for content management
📍 Club contact integration with maps and social links
♻️ Reusable components and custom hooks


🛠️ Tech Stack

Next.js 15 (App Router)
React 19
Tailwind CSS v4
Framer Motion
Lucide React


📂 Routes

/                      Home landing page
/clubes                Associated clubs listing
/noticias              News grid
/noticias/[slug]       Individual news detail
/torneos               Tournament listing
/torneos/[torneo]      Tournament detail
/ranking               Official ranking table
/auth                  Admin login
/dashboard             Admin CRUD panel


🧩 State Management

Custom hooks:

useCarousel
useHashObserver
useIsDesktop
useScrollToSection

Contexts:

DarkContext
AuthContext


📂 Project Structure

pickleball-platform/

│── app/
│   ├── auth/
│   ├── clubes/
│   ├── noticias/
│   ├── torneos/
│   ├── ranking/
│   ├── dashboard/
│   └── globals.css
│
│── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── forms/
│
│── context/
│── hooks/
│── data/
│── public/




🔐 Admin Dashboard

Includes local CRUD management for:

🏓 Clubs
🏆 Tournaments
📊 Rankings
📰 News

Demo credentials:

User:
admin

Password:
admin123


⚠️ Note

This project uses mock/static data and does not connect to an external API.
Dashboard changes are stored only in memory and reset after refresh.

👨‍💻 Author

Developed by Cristian Caraballo
