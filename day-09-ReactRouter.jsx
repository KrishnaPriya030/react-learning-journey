// ============================================
// DAY 9: React Router Basics
// React Learning Journey
// ============================================


// ============================================
// CONCEPT 1: Why React Router?
// ============================================
// Real apps have multiple pages (Home, Dashboard, Profile)
// React Router lets you navigate between pages
// WITHOUT reloading the browser (Single Page Application)

// Install: npm install react-router-dom


// ============================================
// CONCEPT 2: Core Components
// ============================================
// BrowserRouter → wraps the whole app, enables routing
// Routes        → container for all route definitions
// Route         → defines one URL path → which component to show
// Link          → like <a> tag but doesn't reload the page


// ============================================
// FILE 1: main.jsx (wrap App with BrowserRouter)
// ============================================

// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
//
// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )


// ============================================
// FILE 2: Home.jsx
// ============================================

// function Home() {
//   return <h1>🏠 Welcome Home</h1>
// }
// export default Home


// ============================================
// FILE 3: Dashboard.jsx
// ============================================

// function Dashboard() {
//   return (
//     <div><h1>📊 Dashboard Page</h1></div>
//   )
// }
// export default Dashboard


// ============================================
// FILE 4: Profile.jsx
// ============================================

// function Profile() {
//   return <h1>👤 Profile Page</h1>
// }
// export default Profile


// ============================================
// FILE 5: Students.jsx
// (moved entire previous App.jsx logic here)
// ============================================

// import Counter from './Counter'
// import StudentForm from './StudentForm'
// import Posts from './Posts'
// import SearchBar from './SearchBar'
// import StudentList from './StudentList'
// import { useState } from 'react'
//
// const initial = [
//   { id: 1, name: "Shyam", course: "Mca", marks: 50 },
//   { id: 2, name: "yethu", course: "bca", marks: 90 },
//   { id: 3, name: "johm",  course: "Mca", marks: 35 }
// ]
//
// function Students() {
//   const [search, setSearch]     = useState("")
//   const [students, setStudents] = useState(initial)
//
//   const filtered = students.filter(s =>
//     s.name.toLowerCase().includes(search.toLowerCase())
//   )
//
//   const handleAdd = (newStudent) => {
//     setStudents([...students, newStudent])
//   }
//
//   return (
//     <div>
//       <Counter />
//       <Posts />
//       <StudentForm onAdd={handleAdd} />
//       <h1>My Students</h1>
//       <SearchBar search={search} setSearch={setSearch} />
//       <h1 style={{ color: "green" }}>Passed Students</h1>
//       <StudentList students={filtered.filter(s => s.marks >= 40)} />
//       <h1 style={{ color: "red" }}>Failed Students</h1>
//       <StudentList students={filtered.filter(s => s.marks < 40)} />
//     </div>
//   )
// }
//
// export default Students


// ============================================
// FILE 6: App.jsx (final — routing only)
// ============================================

// import { Route, Routes, Link } from "react-router-dom"
// import Home from "./Home"
// import Dashboard from "./Dashboard"
// import Profile from "./Profile"
//
// function App() {
//   return (
//     <div>
//       <nav style={{
//         color: "white", backgroundColor: "purple", display: "flex",
//         justifyContent: "center", gap: "50px", padding: "20px"
//       }}>
//         <Link to="/">Home</Link>
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/profile">Profile</Link>
//       </nav>
//
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </div>
//   )
// }
//
// export default App


// ============================================
// KEY LESSONS LEARNED TODAY
// ============================================

// 1. npm install react-router-dom        → setup library
// 2. BrowserRouter wraps App in main.jsx → enables routing
// 3. <Routes> + <Route path="" element={}/> → define pages
// 4. <Link to="/path">  → navigation WITHOUT page reload
// 5. <a href="">        → AVOID — causes full page reload
// 6. Component names MUST start with capital letter (PascalCase)
// 7. Restructured app   → moved existing logic into Students.jsx page
//
