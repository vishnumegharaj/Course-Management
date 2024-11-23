import React from 'react'
import { Link } from 'react-router-dom'
import CourseTypeManager from '../components/CourseTypeManager'
import CourseManager from '../components/CourseManager'
import CourseTypeCombinationManager from '../components/CourseTypeCombinationManager'

export default function CourseRegistration({
  courseTypes,
  setCourseTypes,
  courses,
  setCourses,
  courseTypeCombinations,
  setCourseTypeCombinations
}) {
  return (
    <div className="page-container">
      <header className="app-header">
        <h1>Course Management System</h1>
      </header>
      <main className="app-main">
        <h2>Course Registration</h2>
        <Link to="/" className="back-link">Back to Home</Link>
        <CourseTypeManager courseTypes={courseTypes} setCourseTypes={setCourseTypes} />
        <CourseManager courses={courses} setCourses={setCourses} />
        <CourseTypeCombinationManager
          courseTypeCombinations={courseTypeCombinations}
          setCourseTypeCombinations={setCourseTypeCombinations}
          courses={courses}
          courseTypes={courseTypes}
        />
        
      </main>
    </div>
  )
}