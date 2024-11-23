import React, { useState } from 'react'

export default function CourseManager({ courses, setCourses }) {
  const [newCourse, setNewCourse] = useState('')
  const [editingId, setEditingId] = useState(null)

  const handleAdd = () => {
    if (newCourse.trim()) {
      setCourses([...courses, { id: Date.now(), name: newCourse.trim() }])
      setNewCourse('')
    }
  }

  const handleEdit = (id, newName) => {
    setCourses(courses.map(c => (c.id === id ? { ...c, name: newName } : c)))
    setEditingId(null)
  }

  const handleDelete = (id) => {
    setCourses(courses.filter(c => c.id !== id))
  }

  return (
    <div className="manager-container">
      <h3>Courses</h3>
      <div className="input-group">
        <input
          type="text"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder="New course"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="list-container">
        {courses.map(course => (
          <li key={course.id} className="list-item">
            {editingId === course.id ? (
              <input
                type="text"
                value={course.name}
                onChange={(e) => handleEdit(course.id, e.target.value)}
                onBlur={() => setEditingId(null)}
                className="editable-input"
                autoFocus
              />
            ) : (
              <span onClick={() => setEditingId(course.id)}>{course.name}</span>
            )}
            <button onClick={() => handleDelete(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}