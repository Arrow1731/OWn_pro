// // // // import React, { useEffect, useState } from 'react';
// // // // import { db, auth } from '../Firebase/firebase';
// // // // import {
// // // //   collection,
// // // //   getDocs,
// // // //   addDoc,
// // // //   deleteDoc,
// // // //   doc,
// // // //   updateDoc,
// // // //   query,
// // // //   where,
// // // // } from 'firebase/firestore';
// // // // import { createUserWithEmailAndPassword } from 'firebase/auth';

// // // // const Students = () => {
// // // //   const [students, setStudents] = useState([]);
// // // //   const [showAddForm, setShowAddForm] = useState(false);
// // // //   const [editStudentId, setEditStudentId] = useState(null);
// // // //   const [formStudent, setFormStudent] = useState({
// // // //     fullName: '',
// // // //     nickname: '',
// // // //     age: '',
// // // //     grade: '',
// // // //     email: '',
// // // //     password: '',
// // // //   });

// // // //   useEffect(() => {
// // // //     const fetchStudents = async () => {
// // // //       const q = query(collection(db, 'users'), where('role', '==', 'student'));
// // // //       const querySnapshot = await getDocs(q);
// // // //       const studentsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // //       setStudents(studentsList);
// // // //     };
// // // //     fetchStudents();
// // // //   }, []);

// // // //   const handleChange = (e) => {
// // // //     setFormStudent({ ...formStudent, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleAddStudent = async () => {
// // // //     try {
// // // //       const userCredential = await createUserWithEmailAndPassword(auth, formStudent.email, formStudent.password);
// // // //       const user = userCredential.user;

// // // //       const studentData = {
// // // //         uid: user.uid,
// // // //         fullName: formStudent.fullName,
// // // //         nickname: formStudent.nickname,
// // // //         age: formStudent.age,
// // // //         grade: formStudent.grade,
// // // //         email: formStudent.email,
// // // //         role: 'student',
// // // //       };

// // // //       const docRef = await addDoc(collection(db, 'users'), studentData);
// // // //       setStudents(prev => [...prev, { id: docRef.id, ...studentData }]);
// // // //       resetForm();
// // // //     } catch (err) {
// // // //       console.error('Add student error:', err.message);
// // // //     }
// // // //   };

// // // //   const handleUpdateStudent = async () => {
// // // //     try {
// // // //       const docRef = doc(db, 'users', editStudentId);
// // // //       await updateDoc(docRef, {
// // // //         fullName: formStudent.fullName,
// // // //         nickname: formStudent.nickname,
// // // //         age: formStudent.age,
// // // //         grade: formStudent.grade,
// // // //       });
// // // //       setStudents(prev =>
// // // //         prev.map(s => (s.id === editStudentId ? { ...s, ...formStudent } : s))
// // // //       );
// // // //       resetForm();
// // // //     } catch (err) {
// // // //       console.error('Update student error:', err.message);
// // // //     }
// // // //   };

// // // //   const handleDeleteStudent = async (id) => {
// // // //     try {
// // // //       await deleteDoc(doc(db, 'users', id));
// // // //       setStudents(prev => prev.filter(s => s.id !== id));
// // // //     } catch (err) {
// // // //       console.error('Delete error:', err.message);
// // // //     }
// // // //   };

// // // //   const resetForm = () => {
// // // //     setFormStudent({
// // // //       fullName: '',
// // // //       nickname: '',
// // // //       age: '',
// // // //       grade: '',
// // // //       email: '',
// // // //       password: '',
// // // //     });
// // // //     setEditStudentId(null);
// // // //     setShowAddForm(false);
// // // //   };

// // // //   const startEdit = (student) => {
// // // //     setFormStudent(student);
// // // //     setEditStudentId(student.id);
// // // //     setShowAddForm(true);
// // // //   };

// // // //   return (
// // // //     <div className="max-w-6xl mx-auto px-4 py-8">
// // // //       <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Student Management</h1>

// // // //       {!showAddForm && (
// // // //         <div className="text-right mb-6">
// // // //           <button
// // // //             onClick={() => setShowAddForm(true)}
// // // //             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
// // // //           >
// // // //             ➕ Add Student
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       {showAddForm && (
// // // //         <div className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4 border border-gray-200">
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //             <input
// // // //               name="fullName"
// // // //               type="text"
// // // //               placeholder="Full Name"
// // // //               className="input-style"
// // // //               value={formStudent.fullName}
// // // //               onChange={handleChange}
// // // //             />
// // // //             <input
// // // //               name="nickname"
// // // //               type="text"
// // // //               placeholder="Nickname"
// // // //               className="input-style"
// // // //               value={formStudent.nickname}
// // // //               onChange={handleChange}
// // // //             />
// // // //             <input
// // // //               name="age"
// // // //               type="number"
// // // //               placeholder="Age"
// // // //               className="input-style"
// // // //               value={formStudent.age}
// // // //               onChange={handleChange}
// // // //             />
// // // //             <input
// // // //               name="grade"
// // // //               type="text"
// // // //               placeholder="Grade"
// // // //               className="input-style"
// // // //               value={formStudent.grade}
// // // //               onChange={handleChange}
// // // //             />
// // // //             <input
// // // //               name="email"
// // // //               type="email"
// // // //               placeholder="Email"
// // // //               className="input-style"
// // // //               value={formStudent.email}
// // // //               onChange={handleChange}
// // // //               disabled={!!editStudentId}
// // // //             />
// // // //             {!editStudentId && (
// // // //               <input
// // // //                 name="password"
// // // //                 type="password"
// // // //                 placeholder="Password"
// // // //                 className="input-style"
// // // //                 value={formStudent.password}
// // // //                 onChange={handleChange}
// // // //               />
// // // //             )}
// // // //           </div>

// // // //           <div className="flex justify-between">
// // // //             <button
// // // //               onClick={editStudentId ? handleUpdateStudent : handleAddStudent}
// // // //               className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
// // // //             >
// // // //               {editStudentId ? 'Update Student' : 'Save Student'}
// // // //             </button>
// // // //             <button
// // // //               onClick={resetForm}
// // // //               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg"
// // // //             >
// // // //               Cancel
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //         {students.map((student) => (
// // // //           <div
// // // //             key={student.id}
// // // //             className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 flex flex-col justify-between"
// // // //           >
// // // //             <div>
// // // //               <h3 className="text-xl font-bold text-gray-800">{student.fullName}</h3>
// // // //               <p className="text-sm text-gray-500">@{student.nickname}</p>
// // // //               <div className="mt-2 text-sm text-gray-600 space-y-1">
// // // //                 <p>📧 {student.email}</p>
// // // //                 <p>🎓 Grade: {student.grade}</p>
// // // //                 <p>🎂 Age: {student.age}</p>
// // // //               </div>
// // // //             </div>

// // // //             <div className="flex justify-end gap-2 mt-4">
// // // //               <button
// // // //                 onClick={() => startEdit(student)}
// // // //                 className="text-yellow-600 border border-yellow-600 hover:bg-yellow-50 px-3 py-1 rounded"
// // // //               >
// // // //                 ✏️ Edit
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => alert("Analytics coming soon")}
// // // //                 className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-3 py-1 rounded"
// // // //               >
// // // //                 📊 Analytics
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => handleDeleteStudent(student.id)}
// // // //                 className="text-red-600 border border-red-600 hover:bg-red-50 px-3 py-1 rounded"
// // // //               >
// // // //                 🗑️ Delete
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Students;




















// // // // // Students.jsx (no changes needed unless adding navigation to analytics)

// // // // // Analytics.jsx
// // // // import React, { useEffect, useState } from 'react';
// // // // import { collection, getDocs, query, where } from 'firebase/firestore';
// // // // import { db } from '../Firebase/firebase';

// // // // const Analytics = () => {
// // // //   const [students, setStudents] = useState([]);
// // // //   const [results, setResults] = useState([]);
// // // //   const [analytics, setAnalytics] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       const studentQuery = query(collection(db, 'users'), where('role', '==', 'student'));
// // // //       const studentSnap = await getDocs(studentQuery);
// // // //       const studentsList = studentSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

// // // //       const resultsSnap = await getDocs(collection(db, 'results'));
// // // //       const resultsList = resultsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

// // // //       setStudents(studentsList);
// // // //       setResults(resultsList);

// // // //       const analyticsData = studentsList.map(student => {
// // // //         const studentResults = resultsList.filter(r => r.studentId === student.uid);
// // // //         const totalTests = studentResults.length;
// // // //         const totalScore = studentResults.reduce((acc, r) => acc + r.score, 0);
// // // //         const totalPossible = studentResults.reduce((acc, r) => acc + r.total, 0);
// // // //         const percentage = totalPossible > 0 ? ((totalScore / totalPossible) * 100).toFixed(2) : 'N/A';

// // // //         return {
// // // //           ...student,
// // // //           totalTests,
// // // //           totalScore,
// // // //           totalPossible,
// // // //           percentage,
// // // //         };
// // // //       });

// // // //       setAnalytics(analyticsData);
// // // //     };

// // // //     fetchData();
// // // //   }, []);

// // // //   return (
// // // //     <div className="max-w-6xl mx-auto px-4 py-8">
// // // //       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">📊 Student Analytics</h1>
// // // //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //         {analytics.map((student, idx) => (
// // // //           <div
// // // //             key={idx}
// // // //             className="bg-white border border-gray-200 rounded-lg p-5 shadow-md"
// // // //           >
// // // //             <h3 className="text-xl font-bold text-gray-800">{student.fullName}</h3>
// // // //             <p className="text-sm text-gray-500">@{student.nickname}</p>
// // // //             <div className="mt-2 text-sm text-gray-600 space-y-1">
// // // //               <p>📧 {student.email}</p>
// // // //               <p>🎓 Grade: {student.grade}</p>
// // // //               <p>🧪 Total Tests: {student.totalTests}</p>
// // // //               <p>✅ Total Score: {student.totalScore}</p>
// // // //               <p>📈 Total Possible: {student.totalPossible}</p>
// // // //               <p className="font-bold">📊 Percentage: {student.percentage}%</p>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Analytics;

























// // // import React, { useEffect, useState } from "react";
// // // import { db } from "../Firebase/firebase";
// // // import { collection, getDocs, doc, getDoc } from "firebase/firestore";

// // // const StudentsList = () => {
// // //   const [students, setStudents] = useState([]);
// // //   const [results, setResults] = useState({});
// // //   const [selectedStudentId, setSelectedStudentId] = useState(null);

// // //   useEffect(() => {
// // //     const fetchStudents = async () => {
// // //       const querySnapshot = await getDocs(collection(db, "users"));
// // //       const studentData = [];
// // //       querySnapshot.forEach((doc) => {
// // //         if (doc.data().role === "student") {
// // //           studentData.push({ id: doc.id, ...doc.data() });
// // //         }
// // //       });
// // //       setStudents(studentData);
// // //     };

// // //     fetchStudents();
// // //   }, []);

// // //   const fetchResults = async (studentId) => {
// // //     const querySnapshot = await getDocs(collection(db, "results"));
// // //     const studentResults = [];
// // //     querySnapshot.forEach((doc) => {
// // //       if (doc.data().studentId === studentId) {
// // //         studentResults.push({ id: doc.id, ...doc.data() });
// // //       }
// // //     });
// // //     setResults((prevResults) => ({ ...prevResults, [studentId]: studentResults }));
// // //     setSelectedStudentId(studentId);
// // //   };

// // //   return (
// // //     <div className="p-4">
// // //       <h2 className="text-2xl font-bold mb-4">Students List</h2>
// // //       <ul className="space-y-4">
// // //         {students.map((student) => (
// // //           <li key={student.id} className="border rounded p-4 shadow">
// // //             <div className="flex items-center justify-between">
// // //               <div>
// // //                 <p className="font-semibold">Name: {student.name}</p>
// // //                 <p>Grade: {student.grade}</p>
// // //               </div>
// // //               <button
// // //                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // //                 onClick={() => fetchResults(student.id)}
// // //               >
// // //                 Show Analytics
// // //               </button>
// // //             </div>
// // //             {selectedStudentId === student.id && results[student.id] && (
// // //               <div className="mt-4 bg-gray-100 p-4 rounded">
// // //                 <h3 className="text-lg font-semibold mb-2">Analytics:</h3>
// // //                 {results[student.id].length > 0 ? (
// // //                   <ul className="space-y-2">
// // //                     {results[student.id].map((result) => (
// // //                       <li
// // //                         key={result.id}
// // //                         className="border p-2 rounded bg-white shadow"
// // //                       >
// // //                         <p>Test Name: {result.testName || "N/A"}</p>
// // //                         <p>Score: {result.score}/{result.total}</p>
// // //                         <p>Percent: {((result.score / result.total) * 100).toFixed(2)}%</p>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 ) : (
// // //                   <p>No results found for this student.</p>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default StudentsList;























// // import React, { useEffect, useState } from 'react';
// // import { db, auth } from '../Firebase/firebase';
// // import {
// //   collection,
// //   getDocs,
// //   addDoc,
// //   deleteDoc,
// //   doc,
// //   updateDoc,
// //   query,
// //   where,
// // } from 'firebase/firestore';
// // import { createUserWithEmailAndPassword } from 'firebase/auth';

// // const Students = () => {
// //   const [students, setStudents] = useState([]);
// //   const [showAddForm, setShowAddForm] = useState(false);
// //   const [editStudentId, setEditStudentId] = useState(null);
// //   const [formStudent, setFormStudent] = useState({
// //     fullName: '',
// //     nickname: '',
// //     age: '',
// //     grade: '',
// //     email: '',
// //     password: '',
// //   });

// //   useEffect(() => {
// //     const fetchStudents = async () => {
// //       const q = query(collection(db, 'users'), where('role', '==', 'student'));
// //       const querySnapshot = await getDocs(q);
// //       const studentsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //       setStudents(studentsList);
// //     };
// //     fetchStudents();
// //   }, []);

// //   const handleChange = (e) => {
// //     setFormStudent({ ...formStudent, [e.target.name]: e.target.value });
// //   };

// //   const handleAddStudent = async () => {
// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(auth, formStudent.email, formStudent.password);
// //       const user = userCredential.user;

// //       const studentData = {
// //         uid: user.uid,
// //         fullName: formStudent.fullName,
// //         nickname: formStudent.nickname,
// //         age: formStudent.age,
// //         grade: formStudent.grade,
// //         email: formStudent.email,
// //         role: 'student',
// //       };

// //       const docRef = await addDoc(collection(db, 'users'), studentData);
// //       setStudents(prev => [...prev, { id: docRef.id, ...studentData }]);
// //       resetForm();
// //     } catch (err) {
// //       console.error('Add student error:', err.message);
// //     }
// //   };

// //   const handleUpdateStudent = async () => {
// //     try {
// //       const docRef = doc(db, 'users', editStudentId);
// //       await updateDoc(docRef, {
// //         fullName: formStudent.fullName,
// //         nickname: formStudent.nickname,
// //         age: formStudent.age,
// //         grade: formStudent.grade,
// //       });
// //       setStudents(prev =>
// //         prev.map(s => (s.id === editStudentId ? { ...s, ...formStudent } : s))
// //       );
// //       resetForm();
// //     } catch (err) {
// //       console.error('Update student error:', err.message);
// //     }
// //   };

// //   const handleDeleteStudent = async (id) => {
// //     try {
// //       await deleteDoc(doc(db, 'users', id));
// //       setStudents(prev => prev.filter(s => s.id !== id));
// //     } catch (err) {
// //       console.error('Delete error:', err.message);
// //     }
// //   };

// //   const resetForm = () => {
// //     setFormStudent({
// //       fullName: '',
// //       nickname: '',
// //       age: '',
// //       grade: '',
// //       email: '',
// //       password: '',
// //     });
// //     setEditStudentId(null);
// //     setShowAddForm(false);
// //   };

// //   const startEdit = (student) => {
// //     setFormStudent(student);
// //     setEditStudentId(student.id);
// //     setShowAddForm(true);
// //   };

// //   return (
// //     <div className="max-w-6xl mx-auto px-4 py-8">
// //       <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Student Management</h1>

// //       {!showAddForm && (
// //         <div className="text-right mb-6">
// //           <button
// //             onClick={() => setShowAddForm(true)}
// //             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
// //           >
// //             ➕ Add Student
// //           </button>
// //         </div>
// //       )}

// //       {showAddForm && (
// //         <div className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4 border border-gray-200">
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             <input
// //               name="fullName"
// //               type="text"
// //               placeholder="Full Name"
// //               className="input-style"
// //               value={formStudent.fullName}
// //               onChange={handleChange}
// //             />
// //             <input
// //               name="nickname"
// //               type="text"
// //               placeholder="Nickname"
// //               className="input-style"
// //               value={formStudent.nickname}
// //               onChange={handleChange}
// //             />
// //             <input
// //               name="age"
// //               type="number"
// //               placeholder="Age"
// //               className="input-style"
// //               value={formStudent.age}
// //               onChange={handleChange}
// //             />
// //             <input
// //               name="grade"
// //               type="text"
// //               placeholder="Grade"
// //               className="input-style"
// //               value={formStudent.grade}
// //               onChange={handleChange}
// //             />
// //             <input
// //               name="email"
// //               type="email"
// //               placeholder="Email"
// //               className="input-style"
// //               value={formStudent.email}
// //               onChange={handleChange}
// //               disabled={!!editStudentId}
// //             />
// //             {!editStudentId && (
// //               <input
// //                 name="password"
// //                 type="password"
// //                 placeholder="Password"
// //                 className="input-style"
// //                 value={formStudent.password}
// //                 onChange={handleChange}
// //               />
// //             )}
// //           </div>

// //           <div className="flex justify-between">
// //             <button
// //               onClick={editStudentId ? handleUpdateStudent : handleAddStudent}
// //               className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
// //             >
// //               {editStudentId ? 'Update Student' : 'Save Student'}
// //             </button>
// //             <button
// //               onClick={resetForm}
// //               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg"
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {students.map((student) => (
// //           <div
// //             key={student.id}
// //             className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 flex flex-col justify-between"
// //           >
// //             <div>
// //               <h3 className="text-xl font-bold text-gray-800">{student.fullName}</h3>
// //               <p className="text-sm text-gray-500">@{student.nickname}</p>
// //               <div className="mt-2 text-sm text-gray-600 space-y-1">
// //                 <p>📧 {student.email}</p>
// //                 <p>🎓 Grade: {student.grade}</p>
// //                 <p>🎂 Age: {student.age}</p>
// //               </div>
// //             </div>

// //             <div className="flex justify-end gap-2 mt-4">
// //               <button
// //                 onClick={() => startEdit(student)}
// //                 className="text-yellow-600 border border-yellow-600 hover:bg-yellow-50 px-3 py-1 rounded"
// //               >
// //                 ✏️ Edit
// //               </button>
// //               <button
// //                 onClick={() => alert("Analytics coming soon")}
// //                 className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-3 py-1 rounded"
// //               >
// //                 📊 Analytics
// //               </button>
// //               <button
// //                 onClick={() => handleDeleteStudent(student.id)}
// //                 className="text-red-600 border border-red-600 hover:bg-red-50 px-3 py-1 rounded"
// //               >
// //                 🗑️ Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Students;




























// import React, { useEffect, useState } from "react";
// import { db, auth } from "../firebase/firebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   deleteDoc,
//   doc,
//   updateDoc,
//   query,
//   where,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";

// function Students() {
//   const [students, setStudents] = useState([]);
//   const [teacherId, setTeacherId] = useState(null);
//   const [newStudent, setNewStudent] = useState({
//     fullName: "",
//     nickname: "",
//     email: "",
//     password: "",
//     age: "",
//     grade: "",
//   });
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [editingStudent, setEditingStudent] = useState(null);
//   const [selectedStudent, setSelectedStudent] = useState(null); // Analytics state

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setTeacherId(user.uid);
//         fetchStudents(user.uid);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const fetchStudents = async (uid) => {
//     const q = query(collection(db, "users"), where("role", "==", "student"), where("teacherId", "==", uid));
//     const querySnapshot = await getDocs(q);
//     const studentList = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setStudents(studentList);
//   };

//   const handleAddStudent = async () => {
//     if (teacherId) {
//       const studentWithRole = { ...newStudent, role: "student", teacherId };
//       await addDoc(collection(db, "users"), studentWithRole);
//       fetchStudents(teacherId);
//       setNewStudent({ fullName: "", nickname: "", email: "", password: "", age: "", grade: "" });
//       setShowAddForm(false);
//     }
//   };

//   const handleDeleteStudent = async (id) => {
//     await deleteDoc(doc(db, "users", id));
//     fetchStudents(teacherId);
//   };

//   const handleEditStudent = (student) => {
//     setEditingStudent(student);
//   };

//   const handleUpdateStudent = async () => {
//     const studentRef = doc(db, "users", editingStudent.id);
//     await updateDoc(studentRef, editingStudent);
//     fetchStudents(teacherId);
//     setEditingStudent(null);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Manage Students</h1>

//       {/* Add Student Button */}
//       <div className="mb-4">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           onClick={() => setShowAddForm(!showAddForm)}
//         >
//           {showAddForm ? "Cancel" : "➕ Add Student"}
//         </button>
//       </div>

//       {/* Add Student Form */}
//       {showAddForm && (
//         <div className="bg-white shadow-md rounded p-4 mb-6 w-full md:w-2/3 lg:w-1/2">
//           <h2 className="text-xl font-semibold mb-4">New Student</h2>
//           {["fullName", "nickname", "email", "password", "age", "grade"].map((field) => (
//             <input
//               key={field}
//               type={field === "password" ? "password" : "text"}
//               placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//               value={newStudent[field]}
//               onChange={(e) => setNewStudent({ ...newStudent, [field]: e.target.value })}
//               className="block w-full mb-3 p-2 border rounded"
//             />
//           ))}
//           <button
//             onClick={handleAddStudent}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             ✅ Save Student
//           </button>
//         </div>
//       )}

//       {/* Edit Student Form */}
//       {editingStudent && (
//         <div className="bg-white shadow-md rounded p-4 mb-6 w-full md:w-2/3 lg:w-1/2">
//           <h2 className="text-xl font-semibold mb-4">Edit Student</h2>
//           {["fullName", "nickname", "email", "password", "age", "grade"].map((field) => (
//             <input
//               key={field}
//               type={field === "password" ? "password" : "text"}
//               placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//               value={editingStudent[field]}
//               onChange={(e) => setEditingStudent({ ...editingStudent, [field]: e.target.value })}
//               className="block w-full mb-3 p-2 border rounded"
//             />
//           ))}
//           <div className="space-x-2">
//             <button
//               onClick={handleUpdateStudent}
//               className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//             >
//               💾 Update
//             </button>
//             <button
//               onClick={() => setEditingStudent(null)}
//               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//             >
//               ❌ Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Analytics View */}
//       {selectedStudent && (
//         <div className="bg-white shadow-md rounded-lg p-6 mb-8 border border-blue-300">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">
//             Analytics for {selectedStudent.fullName}
//           </h2>
//           <p className="text-gray-700 mb-2">Nickname: @{selectedStudent.nickname}</p>
//           <p className="text-gray-700 mb-2">Email: {selectedStudent.email}</p>
//           <p className="text-gray-700 mb-2">Grade: {selectedStudent.grade}</p>
//           <p className="text-gray-700 mb-2">Age: {selectedStudent.age}</p>
//           <div className="mt-4 text-gray-600 italic">📊 Analytics data coming soon...</div>
//           <div className="mt-6 text-right">
//             <button
//               onClick={() => setSelectedStudent(null)}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//             >
//               ❌ Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Student Cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {students.map((student) => (
//           <div key={student.id} className="bg-white p-4 rounded shadow-md border">
//             <h2 className="text-xl font-semibold">{student.fullName}</h2>
//             <p className="text-gray-600">Nickname: @{student.nickname}</p>
//             <p className="text-gray-600">Email: {student.email}</p>
//             <p className="text-gray-600">Grade: {student.grade}</p>
//             <p className="text-gray-600">Age: {student.age}</p>
//             <div className="mt-4 flex flex-wrap gap-2">
//               <button
//                 onClick={() => handleEditStudent(student)}
//                 className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
//               >
//                 ✏️ Edit
//               </button>
//               <button
//                 onClick={() => handleDeleteStudent(student.id)}
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//               >
//                 🗑️ Delete
//               </button>
//               <button
//                 onClick={() => setSelectedStudent(student)}
//                 className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
//               >
//                 📊 Analytics
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Students;
























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
  const [results, setResults] = useState({});

  // Fetch students on load
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const q = query(collection(db, 'users'), where('role', '==', 'student'));
    const querySnapshot = await getDocs(q);
    const studentsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setStudents(studentsList);
  };

  const fetchStudentResults = async (uid) => {
    const q = query(collection(db, 'results'), where('studentId', '==', uid));
    const querySnapshot = await getDocs(q);
    const res = querySnapshot.docs.map(doc => doc.data());
    setResults(prev => ({ ...prev, [uid]: res }));
  };

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

  const toggleAnalytics = async (uid) => {
    if (!results[uid]) {
      await fetchStudentResults(uid);
    } else {
      const updated = { ...results };
      delete updated[uid];
      setResults(updated);
    }
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

              {results[student.uid] && (
                <div className="mt-4 bg-gray-50 p-3 rounded border text-sm text-gray-700 space-y-2">
                  <strong>📊 Test Results:</strong>
                  {results[student.uid].length === 0 ? (
                    <p>No results found.</p>
                  ) : (
                    results[student.uid].map((r, i) => (
                      <div key={i} className="border-t pt-1">
                        Test ID: {r.testId} <br />
                        Score: {r.score} / {r.total}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => startEdit(student)}
                className="text-yellow-600 border border-yellow-600 hover:bg-yellow-50 px-3 py-1 rounded"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => toggleAnalytics(student.uid)}
                className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-3 py-1 rounded"
              >
                📊 {results[student.uid] ? 'Hide' : 'Show'} Analytics
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