# 🚗 RentWheels – Car Rental Platform

## 🔗 Live Links
- **Client Live URL:**  
- **Server Live URL:**  
- **Client GitHub Repo:**  
- **Server GitHub Repo:**  

---

## 📘 About the Project
RentWheels is a MERN-based car rental platform where users can browse, view, and book cars, while providers can list and manage vehicles.

---

## ✨ Features

### 👤 User Features
- Browse all available cars  
- View detailed car information  
- Book cars  
- Manage personal bookings  
- Login/Register with Firebase Auth  
- Google Login Support  

### 🚘 Provider Features
- Add new cars  
- Update car details  
- Delete cars  
- Manage own car listings  
- Prevent double booking  
- Car availability status  

### 🎨 UI & UX Features
- Modern responsive UI  
- Hero slider & featured sections  
- Extra sections (Top Rated, Testimonials)  
- Framer Motion animations  
- Typewriter effect  
- Custom 404 page  

---

## 🧰 Tech Stack

### **Frontend**
- React.js  
- React Router  
- Tailwind CSS / DaisyUI  
- Firebase Authentication  
- Axios  
- Framer Motion  
- React Simple Typewriter  
- SweetAlert2 / Toast  

### **Backend**
- Node.js  
- Express.js  
- MongoDB  
- CORS  
- Dotenv  
- Hosted on Vercel  

---

## 📄 Core Pages

### 🏠 Home Page
- Hero Slider  
- Featured Cars  
- Why Rent With Us  
- Extra Sections  
- Search by car name  

### 🚗 Browse Cars
View all cars added by all users

### 📄 Car Details (Private)
- Complete information  
- Provider details  
- Book Now button  
- Status: Available / Unavailable  

### ➕ Add Car (Private)
- Submit car form  
- Auto-filled provider info  

### 📋 My Listings (Private)
- Shows user-added cars  
- Update / Delete options  

### 📦 My Bookings (Private)
Shows all booked cars

### 🔐 Login & Register
- Email/Password auth  
- Google login  
- Password validation  

### ❌ 404 Page
- Custom error page  
- No navbar/footer  

---

## 🔐 Authentication
- Firebase Authentication  
- Protected routes  
- Persistent login  
- Password validation rules  
- SweetAlert/Toast for feedback  

---

## 🔄 CRUD Operations
- **Create:** Add new car  
- **Read:** Browse / filter cars  
- **Update:** Modify existing cars  
- **Delete:** Remove cars with confirmation  

---

## 🧪 Challenge Features
- Prevent double booking  
- Real-time availability updates  
- Badges for car status  
- Search functionality  

---

## 📁 Folder Structure
```
client/
  src/
    components/
    pages/
    routes/
    hooks/
    firebase/

server/
  index.js
  package.json
  vercel.json
  
```

---

## ⚙️ Environment Variables

### **Client (.env)**
```
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
```

### **Server (.env)**
```
MONGO_URI=
PORT=5000
```

---

## 🚀 How to Run Locally

### **Client**
```
cd client
npm install
npm run dev
```

### **Server**
```
cd server
npm install
node index.js
```

---

---

## 👨‍💻 Author
**Anik – MERN Stack Developer**

---

