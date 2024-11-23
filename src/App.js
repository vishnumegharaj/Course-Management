import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CourseRegistration from './pages/CourseRegistration'
import StudentRegistration from './pages/StudentRegistration'
import './styles.css'

export default function App() {
  const [courseTypes, setCourseTypes] = useState([
    { id: 1, name: "Online" },
    { id: 2, name: "Offline" },
  ])
  const [courses, setCourses] = useState([
    { id: 1, name: "Full stack development" },
    { id: 2, name: "Machine learning" },
  ])
  const [courseTypeCombinations, setCourseTypeCombinations] = useState([])
  const [registrations, setRegistrations] = useState([])

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/course-registration" 
            element={
              <CourseRegistration 
                courseTypes={courseTypes}
                setCourseTypes={setCourseTypes}
                courses={courses}
                setCourses={setCourses}
                courseTypeCombinations={courseTypeCombinations}
                setCourseTypeCombinations={setCourseTypeCombinations}
              />
            } 
          />
          <Route 
            path="/student-registration" 
            element={
              <StudentRegistration 
                registrations={registrations}
                setRegistrations={setRegistrations}
                courseTypeCombinations={courseTypeCombinations}
                courses={courses}
                courseTypes={courseTypes}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}