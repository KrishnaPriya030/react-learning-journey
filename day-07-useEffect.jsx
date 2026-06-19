// ============================================
// DAY 7: useEffect & Side Effects
// React Learning Journey
// ============================================


// ============================================
// CONCEPT 1: useEffect
// Runs code automatically when component loads
// or when specific values (dependencies) change
// Syntax: useEffect(() => { ... }, [dependencies])
// ============================================

// CONCEPT 2: Dependency Array
// []            → runs ONCE when component first loads
// [search]      → runs every time 'search' changes
// no array      → runs on EVERY render (avoid this)

// CONCEPT 3: async / await
// async  → marks a function as "this will wait for slow tasks"
// await  → pauses code until a slow task (like fetch) finishes
// await only works INSIDE an async function

// CONCEPT 4: Why fetch is wrapped in a separate function
// useEffect's callback CANNOT be async directly
// (React expects it to return nothing or a cleanup function)
// So we create an inner async function and call it immediately

// CONCEPT 5: Loading State Pattern
// loading = true   → before data arrives → show "Loading..."
// loading = false  → after data arrives  → show actual content
// MOST COMMON BUG: forgetting setLoading(false) after fetch


// ============================================
// FILE: Posts.jsx
// ============================================

// import { useState, useEffect } from "react"
//
// function Posts() {
//   const [posts, setPosts] = useState([])
//   const [loading, setLoading] = useState(true)
//
//   useEffect(() => {
//     const fetchdata = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//       const data = await response.json()
//       setPosts(data)
//       setLoading(false)   // ⚠️ easy to forget — causes infinite loading
//     }
//
//     fetchdata()
//   }, [])  // empty array → runs once on mount
//
//   if (loading) {
//     return <h1>Loading.....</h1>
//   }
//
//   return (
//     <div>
//       {posts.slice(0, 5).map(post => (
//         <div key={post.id} className="card">
//           <h3>{post.title}</h3>
//         </div>
//       ))}
//     </div>
//   )
// }
//
// export default Posts


// ============================================
// HOW IT CONNECTS TO JAVA FULL STACK (Days 11-12)
// ============================================

// Today (practice):
// fetch('https://jsonplaceholder.typicode.com/posts')
//
// Later (real project):
// fetch('http://localhost:8080/api/students')
//
// SAME EXACT PATTERN — just a different URL
// React (frontend) → fetch → Spring Boot (backend) → MySQL (database)


// ============================================
// KEY LESSONS LEARNED TODAY
// ============================================

// 1. useEffect(() => {...}, [])  → runs once when page loads
// 2. fetch(url)                  → sends request to server
// 3. response.json()             → converts response to usable data
// 4. async/await                 → wait for slow operations to finish
// 5. Separate async function inside useEffect → React requirement
// 6. loading state               → show "Loading..." until data arrives
// 7. ALWAYS call setLoading(false) after data arrives
// 8. This is the exact pattern used to connect React to Spring Boot
//
// TODAY'S BUG (real lesson):
// ❌ forgot setLoading(false) → infinite "Loading..." screen
// ✅ always pair setLoading(true) with setLoading(false)
