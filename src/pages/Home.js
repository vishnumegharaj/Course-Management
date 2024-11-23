import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-container">
      <header className="app-header">
        <h1>Course Management System</h1>
      </header>
      <main className="home-main">
        <h2>Welcome to the Course Management System</h2>
        <nav className="home-nav">
          <Link to="/course-registration" className="nav-link">Course Registration</Link>
          <Link to="/student-registration" className="nav-link">Student Registration</Link>
        </nav>
      </main>
    </div>
  )
}