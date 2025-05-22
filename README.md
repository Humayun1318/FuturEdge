## FutureEdge - Career Counseling Platform

[![React](https://img.shields.io/badge/React-18.2+-61DAFB.svg)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-9.22+-FFCA28.svg)](https://firebase.google.com/)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen.svg)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

FutureEdge is a modern career counseling platform built with React and Firebase, offering personalized career guidance through secure authentication, protected resources, and interactive service management.


## Live Demo
🔗 [https://futureedge.web.app](https://futuredge-784af.web.app/)

## Key Features

### 🛠 Core Functionality
- **Multi-factor Authentication** (Email/Password, Google)
- **Protected Service Details** with comment system
- **Dynamic User Profile** with editable information
- **Password Recovery** with email verification
- **Persistent Session** using Firebase Auth State

### 🎨 UI/UX Highlights
- Responsive design for all devices (mobile, tablet, desktop)
- AOS scroll animations for engaging transitions
- Dynamic page titles for better navigation
- Toast notifications for user feedback

### 🔒 Security Implementation
- Environment variables for Firebase configuration
- Password complexity validation (6+ chars, mixed case)
- Protected routes with auth persistence
- Secure profile updates via Firebase API

## Detailed Feature Implementation ##
---

## 🔐 Authentication System

- **Secure Registration**  
  - Strong password validation to ensure user security.

- **Google OAuth Integration**  
  - Seamless sign-in with Google for quick and secure access.

- **Session Persistence**  
  - Maintains user login state using `onAuthStateChanged`.

- **Profile Management**  
  - Allows users to update their profile information, including `displayName` and `photoURL`.

---

## 🌟 Career Services

### Core Features
- **Interactive Service Cards**  
  Dynamically rendered from JSON data 
- **Protected Details Page**  
  Authentication-required pages with comment/feedback system

```json
// Sample Service Data Structure
{
  "serviceName": "Career Counseling",
  "category": "Online",
  "price": "$99",
  "rating": 4.8,
  "duration": "2-hour session"
}
```
## ⚠️ Error Handling

- **Custom 404 Page**  
  - Dedicated not-found page for invalid routes.

- **Authentication Error Messages**  
  - Friendly and clear error messages for issues like:
    - Invalid credentials  
    - Weak password

- **Protected Routes**  
  - Middleware-based route guarding for authenticated access only.

- **Loading States**  
  - UI feedback during asynchronous operations like login and data fetch.

---

## Technology Stack

| Category        | Technologies                          |
|-----------------|---------------------------------------|
| Frontend        | React 19, React Router 7, Tailwind CSS|
| Backend         | Firebase Authentication, Firestore    |
| UI Components   | DaisyUI, Swiper.js, AOS               |
| Deployment      | Firebase Hosting                      |
| Quality Control | ESLint, Prettier                      |

## 🛠 Installation & Setup

### 1. Install Dependencies

Ensure you have [Node.js](https://nodejs.org/) (v16+) and [npm](https://www.npmjs.com/) installed, then run:

```bash
# Clone the repository
git clone https://github.com/Humayun1318/FuturEdge.git
cd futureedge

# Install all dependencies
npm install
```
## 🔧 Environment Configuration

### Set Up Environment Variables

1. **Create your `.env` file**:

```bash
cp .env.example .env
```
## 🔥 Firebase Configuration

### Step 1: Set Up Firebase Credentials
Obtain your Firebase configuration from the [Firebase Console](https://console.firebase.google.com/) and add them to your `.env` file:

```env
# ========================
# Firebase Configuration
# ========================
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

```
🔒 Critical Security Practices
<div class="alert alert-warning" role="alert"> <h4 class="alert-heading">⚠️ Security Notice</h4> <ul> <li><strong>Never commit</strong> your <code>.env</code> file to version control</li> <li>Ensure your <code>.gitignore</code> contains:</li> </ul>

<hr> <p class="mb-0">Firebase credentials should be treated as sensitive secrets!</p> </div>

## 🚀 Launch Application

### Start Development Server

Run the following command to begin local development:

```bash
npm start

```
## 🤝 Contributing

I always welcome contributions! Follow these steps:

1. **Fork** the repository
2. Create a new feature branch:  
   `git checkout -b feature/AmazingFeature`
3. Commit your changes:  
   `git commit -m 'Add some amazing feature'`
4. Push to the branch:  
   `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

---

## 📬 Contact

**Project Maintainer:** Humayun Kabir          
📧 Email: humayunkabir6267@gmail.com  
🐙 GitHub: [@Humayun1318](https://github.com/Humayun1318)

Thank you for exploring FutureEdge — contributions, feedback, and ideas are always welcome! 🚀
