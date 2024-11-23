import React from 'react'
import { Link } from 'react-router-dom'
import RegistrationManager from '../components/RegistrationManager'

export default function StudentRegistration({
  registrations,
  setRegistrations,
  courseTypeCombinations,
  courses,
  courseTypes
}) {
  return (
    <div className="page-container">
      <header className="app-header">
        <h1>Course Management System</h1>
      </header>
      <main className="app-main">
        <h2>Student Registration</h2>
        <Link to="/" className="back-link">Back to Home</Link>
        <RegistrationManager
          registrations={registrations}
          setRegistrations={setRegistrations}
          courseTypeCombinations={courseTypeCombinations}
          courses={courses}
          courseTypes={courseTypes}
        />
        
      </main>
    </div>
  )
}