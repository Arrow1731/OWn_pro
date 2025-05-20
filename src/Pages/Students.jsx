import React, { useEffect, useState } from 'react';
import { db, auth } from '../Firebase/firebase';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editStudentId, setEditStudentId] = useState(null);
  const [formStudent, setFormStudent] = useState({
    fullName: '',
    nickname: '',
    age: '',
    grade: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchStudents = async () => {
      const q = query(collection(db, 'users'), where('role', '==', 'student'));
      const querySnapshot = await getDocs(q);
      const studentsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStudents(studentsList);
    };
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setFormStudent({ ...formStudent, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formStudent.email, formStudent.password);
      const user = userCredential.user;

      const studentData = {
        uid: user.uid,
        fullName: formStudent.fullName,
        nickname: formStudent.nickname,
        age: formStudent.age,
        grade: formStudent.grade,
        email: formStudent.email,
        role: 'student',
      };

      const docRef = await addDoc(collection(db, 'users'), studentData);
      setStudents(prev => [...prev, { id: docRef.id, ...studentData }]);
      resetForm();
    } catch (err) {
      console.error('Add student error:', err.message);
    }
  };

  const handleUpdateStudent = async () => {
    try {
      const docRef = doc(db, 'users', editStudentId);
      await updateDoc(docRef, {
        fullName: formStudent.fullName,
        nickname: formStudent.nickname,
        age: formStudent.age,
        grade: formStudent.grade,
      });
      setStudents(prev =>
        prev.map(s => (s.id === editStudentId ? { ...s, ...formStudent } : s))
      );
      resetForm();
    } catch (err) {
      console.error('Update student error:', err.message);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await deleteDoc(doc(db, 'users', id));
      setStudents(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      console.error('Delete error:', err.message);
    }
  };

  const resetForm = () => {
    setFormStudent({
      fullName: '',
      nickname: '',
      age: '',
      grade: '',
      email: '',
      password: '',
    });
    setEditStudentId(null);
    setShowAddForm(false);
  };

  const startEdit = (student) => {
    setFormStudent(student);
    setEditStudentId(student.id);
    setShowAddForm(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Student Management</h1>

      {!showAddForm && (
        <div className="text-right mb-6">
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
          >
            ➕ Add Student
          </button>
        </div>
      )}

      {showAddForm && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="input-style"
              value={formStudent.fullName}
              onChange={handleChange}
            />
            <input
              name="nickname"
              type="text"
              placeholder="Nickname"
              className="input-style"
              value={formStudent.nickname}
              onChange={handleChange}
            />
            <input
              name="age"
              type="number"
              placeholder="Age"
              className="input-style"
              value={formStudent.age}
              onChange={handleChange}
            />
            <input
              name="grade"
              type="text"
              placeholder="Grade"
              className="input-style"
              value={formStudent.grade}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input-style"
              value={formStudent.email}
              onChange={handleChange}
              disabled={!!editStudentId}
            />
            {!editStudentId && (
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input-style"
                value={formStudent.password}
                onChange={handleChange}
              />
            )}
          </div>

          <div className="flex justify-between">
            <button
              onClick={editStudentId ? handleUpdateStudent : handleAddStudent}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
            >
              {editStudentId ? 'Update Student' : 'Save Student'}
            </button>
            <button
              onClick={resetForm}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800">{student.fullName}</h3>
              <p className="text-sm text-gray-500">@{student.nickname}</p>
              <div className="mt-2 text-sm text-gray-600 space-y-1">
                <p>📧 {student.email}</p>
                <p>🎓 Grade: {student.grade}</p>
                <p>🎂 Age: {student.age}</p>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => startEdit(student)}
                className="text-yellow-600 border border-yellow-600 hover:bg-yellow-50 px-3 py-1 rounded"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => alert("Analytics coming soon")}
                className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-3 py-1 rounded"
              >
                📊 Analytics
              </button>
              <button
                onClick={() => handleDeleteStudent(student.id)}
                className="text-red-600 border border-red-600 hover:bg-red-50 px-3 py-1 rounded"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;