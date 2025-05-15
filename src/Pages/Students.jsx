// import React, { useEffect, useState } from 'react';
// import { db } from '../Firebase/firebase';
// import { collection, getDocs } from 'firebase/firestore';

// const Students = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, 'users'));
//         const studentList = snapshot.docs
//           .map(doc => doc.data())
//           .filter(user => user.role === 'student');
//         setStudents(studentList);
//       } catch (err) {
//         console.error("Error fetching students:", err);
//       }
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6 text-center">Student List</h1>
//       <div className="grid grid-cols-1 gap-4">
//         {students.map((student, index) => (
//           <div key={index} className="bg-white p-4 rounded shadow">
//             <h2 className="text-xl font-semibold">{student.fullName}</h2>
//             <p><strong>Nickname:</strong> {student.nickname}</p>
//             <p><strong>Age:</strong> {student.age}</p>
//             <p><strong>Grade:</strong> {student.grade}</p>
//             <p><strong>Email:</strong> {student.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Students;




























import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/firebase';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'users'));
      const studentList = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(user => user.role === 'student');
      setStudents(studentList);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await deleteDoc(doc(db, 'users', id));
      fetchStudents();
    }
  };

  const startEditing = (student) => {
    setEditingId(student.id);
    setEditData(student);
  };

  const handleEditChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const saveEdit = async () => {
    await updateDoc(doc(db, 'users', editingId), editData);
    setEditingId(null);
    fetchStudents();
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Student List (Teacher Control)</h1>
      <div className="grid grid-cols-1 gap-4">
        {students.map((student) => (
          <div key={student.id} className="bg-white p-4 rounded shadow">
            {editingId === student.id ? (
              <>
                <input className="border p-1 mb-2 w-full" value={editData.fullName} onChange={(e) => handleEditChange("fullName", e.target.value)} />
                <input className="border p-1 mb-2 w-full" value={editData.nickname} onChange={(e) => handleEditChange("nickname", e.target.value)} />
                <input className="border p-1 mb-2 w-full" value={editData.age} onChange={(e) => handleEditChange("age", e.target.value)} />
                <input className="border p-1 mb-2 w-full" value={editData.grade} onChange={(e) => handleEditChange("grade", e.target.value)} />
                <div className="flex gap-2 mt-2">
                  <button onClick={saveEdit} className="bg-blue-600 text-white px-4 py-1 rounded">Save</button>
                  <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-4 py-1 rounded">Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold">{student.fullName}</h2>
                <p><strong>Nickname:</strong> {student.nickname}</p>
                <p><strong>Age:</strong> {student.age}</p>
                <p><strong>Grade:</strong> {student.grade}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => startEditing(student)} className="bg-yellow-500 text-white px-4 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(student.id)} className="bg-red-600 text-white px-4 py-1 rounded">Delete</button>
                  <button className="bg-green-600 text-white px-4 py-1 rounded">Analytics</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;