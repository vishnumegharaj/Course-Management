import React, { useState } from 'react'

export default function RegistrationManager({
  registrations,
  setRegistrations,
  courseTypeCombinations,
  courses,
  courseTypes
}) {
  const [studentName, setStudentName] = useState('')
  const [selectedCombination, setSelectedCombination] = useState('')
  const [filterCourseType, setFilterCourseType] = useState('')

  const handleAdd = () => {
    if (studentName && selectedCombination) {
      setRegistrations([
        ...registrations,
        {
          id: Date.now(),
          studentName,
          courseTypeCombinationId: parseInt(selectedCombination),
        },
      ])
      setStudentName('')
      setSelectedCombination('')
    }
  }

  const handleDelete = (id) => {
    setRegistrations(registrations.filter(r => r.id !== id))
  }

  const filteredCombinations = filterCourseType
    ? courseTypeCombinations.filter(ctc => ctc.courseTypeId === parseInt(filterCourseType))
    : courseTypeCombinations

  return (
    <div className="manager-container">
      <h3>Student Registrations</h3>
      <div className="input-group">
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Student Name"
        />
      </div>
      <div className="input-group">
        <select
          value={filterCourseType}
          onChange={(e) => setFilterCourseType(e.target.value)}
        >
          <option value="">All Course Types</option>
          {courseTypes.map(ct => (
            <option key={ct.id} value={ct.id}>
              {ct.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <select
          value={selectedCombination}
          onChange={(e) => setSelectedCombination(e.target.value)}
        >
          <option value="">Select Course</option>
          {filteredCombinations.map(ctc => (
            <option key={ctc.id} value={ctc.id}>
              {courses.find(c => c.id === ctc.courseId)?.name} -{' '}
              {courseTypes.find(ct => ct.id === ctc.courseTypeId)?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <button onClick={handleAdd}>Register</button>
      </div>
      <ul className="list-container">
        {registrations.map(reg => {
          const combination = courseTypeCombinations.find(ctc => ctc.id === reg.courseTypeCombinationId)
          const course = courses.find(c => c.id === combination?.courseId)
          const courseType = courseTypes.find(ct => ct.id === combination?.courseTypeId)
          return (
            <li key={reg.id} className="list-item">
              <span>
                {reg.studentName} - {course?.name} ({courseType?.name})
              </span>
              <button onClick={() => handleDelete(reg.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}