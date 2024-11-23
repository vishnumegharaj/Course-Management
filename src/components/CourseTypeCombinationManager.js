import React, { useState } from 'react'

export default function CourseTypeCombinationManager({
  courseTypeCombinations,
  setCourseTypeCombinations,
  courses,
  courseTypes,
}) {
  const [selectedCourse, setSelectedCourse] = useState('')
  const [selectedCourseType, setSelectedCourseType] = useState('')

  const handleAdd = () => {
    if (selectedCourse && selectedCourseType) {
      setCourseTypeCombinations([
        ...courseTypeCombinations,
        {
          id: Date.now(),
          courseId: parseInt(selectedCourse),
          courseTypeId: parseInt(selectedCourseType),
        },
      ])
      setSelectedCourse('')
      setSelectedCourseType('')
    }
  }

  const handleDelete = (id) => {
    setCourseTypeCombinations(courseTypeCombinations.filter(ctc => ctc.id !== id))
  }

  return (
    <div className="manager-container">
      <h3>Course Type Combinations</h3>
      <div className="input-group">
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          {courses.map(course => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <select
          value={selectedCourseType}
          onChange={(e) => setSelectedCourseType(e.target.value)}
        >
          <option value="">Select Course Type</option>
          {courseTypes.map(courseType => (
            <option key={courseType.id} value={courseType.id}>
              {courseType.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <button onClick={handleAdd}>Add Combination</button>
      </div>
      <ul className="list-container">
        {courseTypeCombinations.map(ctc => (
          <li key={ctc.id} className="list-item">
            <span>
              {courses.find(c => c.id === ctc.courseId)?.name} -{' '}
              {courseTypes.find(ct => ct.id === ctc.courseTypeId)?.name}
            </span>
            <button onClick={() => handleDelete(ctc.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}