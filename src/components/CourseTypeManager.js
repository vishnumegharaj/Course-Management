import React, { useState } from 'react'

export default function CourseTypeManager({ courseTypes, setCourseTypes }) {
  const [newCourseType, setNewCourseType] = useState('')
  const [editingId, setEditingId] = useState(null)

  const handleAdd = () => {
    if (newCourseType.trim()) {
      setCourseTypes([...courseTypes, { id: Date.now(), name: newCourseType.trim() }])
      setNewCourseType('')
    }
  }

  const handleEdit = (id, newName) => {
    setCourseTypes(courseTypes.map(ct => (ct.id === id ? { ...ct, name: newName } : ct)))
    setEditingId(null)
  }

  const handleDelete = (id) => {
    setCourseTypes(courseTypes.filter(ct => ct.id !== id))
  }

  return (
    <div className="manager-container">
      <h3>Course Types</h3>
      <div className="input-group">
        <input
          type="text"
          value={newCourseType}
          onChange={(e) => setNewCourseType(e.target.value)}
          placeholder="New course type"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="list-container">
        {courseTypes.map(ct => (
          <li key={ct.id} className="list-item">
            {editingId === ct.id ? (
              <input
                type="text"
                value={ct.name}
                onChange={(e) => handleEdit(ct.id, e.target.value)}
                onBlur={() => setEditingId(null)}
                className="editable-input"
                autoFocus
              />
            ) : (
              <span onClick={() => setEditingId(ct.id)}>{ct.name}</span>
            )}
            <button onClick={() => handleDelete(ct.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}