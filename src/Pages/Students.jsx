// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import { db } from '../Firebase/firebase';
// // // // // // import { collection, getDocs } from 'firebase/firestore';

// // // // // // const Students = () => {
// // // // // //   const [students, setStudents] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     const fetchStudents = async () => {
// // // // // //       try {
// // // // // //         const snapshot = await getDocs(collection(db, 'users'));
// // // // // //         const studentList = snapshot.docs
// // // // // //           .map(doc => doc.data())
// // // // // //           .filter(user => user.role === 'student');
// // // // // //         setStudents(studentList);
// // // // // //       } catch (err) {
// // // // // //         console.error("Error fetching students:", err);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchStudents();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="min-h-screen p-6 bg-gray-100">
// // // // // //       <h1 className="text-3xl font-bold mb-6 text-center">Student List</h1>
// // // // // //       <div className="grid grid-cols-1 gap-4">
// // // // // //         {students.map((student, index) => (
// // // // // //           <div key={index} className="bg-white p-4 rounded shadow">
// // // // // //             <h2 className="text-xl font-semibold">{student.fullName}</h2>
// // // // // //             <p><strong>Nickname:</strong> {student.nickname}</p>
// // // // // //             <p><strong>Age:</strong> {student.age}</p>
// // // // // //             <p><strong>Grade:</strong> {student.grade}</p>
// // // // // //             <p><strong>Email:</strong> {student.email}</p>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Students;




























// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { db } from '../Firebase/firebase';
// // // // // import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

// // // // // const Students = () => {
// // // // //   const [students, setStudents] = useState([]);
// // // // //   const [editingId, setEditingId] = useState(null);
// // // // //   const [editData, setEditData] = useState({});

// // // // //   useEffect(() => {
// // // // //     fetchStudents();
// // // // //   }, []);

// // // // //   const fetchStudents = async () => {
// // // // //     try {
// // // // //       const snapshot = await getDocs(collection(db, 'users'));
// // // // //       const studentList = snapshot.docs
// // // // //         .map(doc => ({ id: doc.id, ...doc.data() }))
// // // // //         .filter(user => user.role === 'student');
// // // // //       setStudents(studentList);
// // // // //     } catch (err) {
// // // // //       console.error("Error fetching students:", err);
// // // // //     }
// // // // //   };

// // // // //   const handleDelete = async (id) => {
// // // // //     if (window.confirm("Are you sure you want to delete this student?")) {
// // // // //       await deleteDoc(doc(db, 'users', id));
// // // // //       fetchStudents();
// // // // //     }
// // // // //   };

// // // // //   const startEditing = (student) => {
// // // // //     setEditingId(student.id);
// // // // //     setEditData(student);
// // // // //   };

// // // // //   const handleEditChange = (field, value) => {
// // // // //     setEditData(prev => ({ ...prev, [field]: value }));
// // // // //   };

// // // // //   const saveEdit = async () => {
// // // // //     await updateDoc(doc(db, 'users', editingId), editData);
// // // // //     setEditingId(null);
// // // // //     fetchStudents();
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen p-6 bg-gray-100">
// // // // //       <h1 className="text-3xl font-bold mb-6 text-center">Student List (Teacher Control)</h1>
// // // // //       <div className="grid grid-cols-1 gap-4">
// // // // //         {students.map((student) => (
// // // // //           <div key={student.id} className="bg-white p-4 rounded shadow">
// // // // //             {editingId === student.id ? (
// // // // //               <>
// // // // //                 <input className="border p-1 mb-2 w-full" value={editData.fullName} onChange={(e) => handleEditChange("fullName", e.target.value)} />
// // // // //                 <input className="border p-1 mb-2 w-full" value={editData.nickname} onChange={(e) => handleEditChange("nickname", e.target.value)} />
// // // // //                 <input className="border p-1 mb-2 w-full" value={editData.age} onChange={(e) => handleEditChange("age", e.target.value)} />
// // // // //                 <input className="border p-1 mb-2 w-full" value={editData.grade} onChange={(e) => handleEditChange("grade", e.target.value)} />
// // // // //                 <div className="flex gap-2 mt-2">
// // // // //                   <button onClick={saveEdit} className="bg-blue-600 text-white px-4 py-1 rounded">Save</button>
// // // // //                   <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-4 py-1 rounded">Cancel</button>
// // // // //                 </div>
// // // // //               </>
// // // // //             ) : (
// // // // //               <>
// // // // //                 <h2 className="text-xl font-semibold">{student.fullName}</h2>
// // // // //                 <p><strong>Nickname:</strong> {student.nickname}</p>
// // // // //                 <p><strong>Age:</strong> {student.age}</p>
// // // // //                 <p><strong>Grade:</strong> {student.grade}</p>
// // // // //                 <p><strong>Email:</strong> {student.email}</p>
// // // // //                 <div className="flex gap-2 mt-2">
// // // // //                   <button onClick={() => startEditing(student)} className="bg-yellow-500 text-white px-4 py-1 rounded">Edit</button>
// // // // //                   <button onClick={() => handleDelete(student.id)} className="bg-red-600 text-white px-4 py-1 rounded">Delete</button>
// // // // //                   <button className="bg-green-600 text-white px-4 py-1 rounded">Analytics</button>
// // // // //                 </div>
// // // // //               </>
// // // // //             )}
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Students;


































// // // // import React, { useEffect, useState } from 'react';
// // // // import { db } from '../Firebase/firebase';
// // // // import {
// // // //   collection,
// // // //   getDocs,
// // // //   deleteDoc,
// // // //   doc,
// // // //   updateDoc
// // // // } from 'firebase/firestore';

// // // // const Students = () => {
// // // //   const [students, setStudents] = useState([]);
// // // //   const [editingId, setEditingId] = useState(null);
// // // //   const [editData, setEditData] = useState({});
// // // //   const [selectedAnalyticsId, setSelectedAnalyticsId] = useState(null);
// // // //   const [studentResults, setStudentResults] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchStudents();
// // // //   }, []);

// // // //   const fetchStudents = async () => {
// // // //     try {
// // // //       const snapshot = await getDocs(collection(db, 'users'));
// // // //       const studentList = snapshot.docs
// // // //         .map(doc => ({ id: doc.id, ...doc.data() }))
// // // //         .filter(user => user.role === 'student');
// // // //       setStudents(studentList);
// // // //     } catch (err) {
// // // //       console.error("Error fetching students:", err);
// // // //     }
// // // //   };

// // // //   const handleDelete = async (id) => {
// // // //     if (window.confirm("Are you sure you want to delete this student?")) {
// // // //       await deleteDoc(doc(db, 'users', id));
// // // //       fetchStudents();
// // // //     }
// // // //   };

// // // //   const startEditing = (student) => {
// // // //     setEditingId(student.id);
// // // //     setEditData(student);
// // // //   };

// // // //   const handleEditChange = (field, value) => {
// // // //     setEditData(prev => ({ ...prev, [field]: value }));
// // // //   };

// // // //   const saveEdit = async () => {
// // // //     await updateDoc(doc(db, 'users', editingId), editData);
// // // //     setEditingId(null);
// // // //     fetchStudents();
// // // //   };

// // // //   const fetchStudentResults = async (studentId) => {
// // // //     try {
// // // //       const snapshot = await getDocs(collection(db, 'results'));
// // // //       const allResults = snapshot.docs.map(doc => doc.data());
// // // //       const filteredResults = allResults.filter(res => res.studentId === studentId);
// // // //       setStudentResults(filteredResults);
// // // //       setSelectedAnalyticsId(studentId);
// // // //     } catch (error) {
// // // //       console.error("Failed to fetch results:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen p-6 bg-gray-100">
// // // //       <h1 className="text-3xl font-bold mb-6 text-center">Student List (Teacher Control)</h1>
// // // //       <div className="grid grid-cols-1 gap-4">
// // // //         {students.map((student) => (
// // // //           <div key={student.id} className="bg-white p-4 rounded shadow">
// // // //             {editingId === student.id ? (
// // // //               <>
// // // //                 <input className="border p-1 mb-2 w-full" value={editData.fullName} onChange={(e) => handleEditChange("fullName", e.target.value)} />
// // // //                 <input className="border p-1 mb-2 w-full" value={editData.nickname} onChange={(e) => handleEditChange("nickname", e.target.value)} />
// // // //                 <input className="border p-1 mb-2 w-full" value={editData.age} onChange={(e) => handleEditChange("age", e.target.value)} />
// // // //                 <input className="border p-1 mb-2 w-full" value={editData.grade} onChange={(e) => handleEditChange("grade", e.target.value)} />
// // // //                 <div className="flex gap-2 mt-2">
// // // //                   <button onClick={saveEdit} className="bg-blue-600 text-white px-4 py-1 rounded">Save</button>
// // // //                   <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-4 py-1 rounded">Cancel</button>
// // // //                 </div>
// // // //               </>
// // // //             ) : (
// // // //               <>
// // // //                 <h2 className="text-xl font-semibold">{student.fullName}</h2>
// // // //                 <p><strong>Nickname:</strong> {student.nickname}</p>
// // // //                 <p><strong>Age:</strong> {student.age}</p>
// // // //                 <p><strong>Grade:</strong> {student.grade}</p>
// // // //                 <p><strong>Email:</strong> {student.email}</p>
// // // //                 <div className="flex gap-2 mt-2">
// // // //                   <button onClick={() => startEditing(student)} className="bg-yellow-500 text-white px-4 py-1 rounded">Edit</button>
// // // //                   <button onClick={() => handleDelete(student.id)} className="bg-red-600 text-white px-4 py-1 rounded">Delete</button>
// // // //                   <button onClick={() => fetchStudentResults(student.id)} className="bg-green-600 text-white px-4 py-1 rounded">Analytics</button>
// // // //                 </div>
// // // //               </>
// // // //             )}

// // // //             {/* Analytics View */}
// // // //             {selectedAnalyticsId === student.id && (
// // // //               <div className="mt-4 bg-gray-50 p-4 rounded border">
// // // //                 <h3 className="text-lg font-semibold mb-2">Test Results</h3>
// // // //                 {studentResults.length > 0 ? (
// // // //                   <ul className="list-disc pl-5">
// // // //                     {studentResults.map((result, idx) => (
// // // //                       <li key={idx} className="mb-2">
// // // //                         <p><strong>Test ID:</strong> {result.testId}</p>
// // // //                         <p><strong>Score:</strong> {result.score} / {result.total}</p>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 ) : (
// // // //                   <p>No results found for this student.</p>
// // // //                 )}
// // // //                 <button
// // // //                   onClick={() => setSelectedAnalyticsId(null)}
// // // //                   className="mt-2 text-red-600 underline text-sm"
// // // //                 >
// // // //                   Hide Analytics
// // // //                 </button>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Students;


































// // // import React, { useEffect, useState } from 'react';
// // // import { db } from '../Firebase/firebase';
// // // import {
// // //   collection,
// // //   getDocs,
// // //   deleteDoc,
// // //   doc,
// // //   updateDoc,
// // //   query,
// // //   where,
// // // } from 'firebase/firestore';

// // // const Students = () => {
// // //   const [students, setStudents] = useState([]);
// // //   const [editingId, setEditingId] = useState(null);
// // //   const [editData, setEditData] = useState({});
// // //   const [selectedStudent, setSelectedStudent] = useState(null);
// // //   const [results, setResults] = useState([]);
// // //   const [showAnalytics, setShowAnalytics] = useState(false);

// // //   useEffect(() => {
// // //     fetchStudents();
// // //   }, []);

// // //   const fetchStudents = async () => {
// // //     try {
// // //       const snapshot = await getDocs(collection(db, 'users'));
// // //       const studentList = snapshot.docs
// // //         .map((doc) => ({ id: doc.id, ...doc.data() }))
// // //         .filter((user) => user.role === 'student');
// // //       setStudents(studentList);
// // //     } catch (err) {
// // //       console.error('Error fetching students:', err);
// // //     }
// // //   };

// // //   const handleDelete = async (id) => {
// // //     if (window.confirm('Are you sure you want to delete this student?')) {
// // //       await deleteDoc(doc(db, 'users', id));
// // //       fetchStudents();
// // //     }
// // //   };

// // //   const startEditing = (student) => {
// // //     setEditingId(student.id);
// // //     setEditData(student);
// // //   };

// // //   const handleEditChange = (field, value) => {
// // //     setEditData((prev) => ({ ...prev, [field]: value }));
// // //   };

// // //   const saveEdit = async () => {
// // //     await updateDoc(doc(db, 'users', editingId), editData);
// // //     setEditingId(null);
// // //     fetchStudents();
// // //   };

// // //   const viewAnalytics = async (studentId) => {
// // //     try {
// // //       const q = query(collection(db, 'results'), where('studentId', '==', studentId));
// // //       const snapshot = await getDocs(q);
// // //       const studentResults = snapshot.docs.map((doc) => doc.data());
// // //       setResults(studentResults);
// // //       setSelectedStudent(studentId);
// // //       setShowAnalytics(true);
// // //     } catch (err) {
// // //       console.error('Error fetching analytics:', err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen p-6 bg-gray-100">
// // //       <h1 className="text-3xl font-bold mb-6 text-center">Student List (Teacher Control)</h1>
// // //       <div className="grid grid-cols-1 gap-4">
// // //         {students.map((student) => (
// // //           <div key={student.id} className="bg-white p-4 rounded shadow">
// // //             {editingId === student.id ? (
// // //               <>
// // //                 <input
// // //                   className="border p-1 mb-2 w-full"
// // //                   value={editData.fullName}
// // //                   onChange={(e) => handleEditChange('fullName', e.target.value)}
// // //                 />
// // //                 <input
// // //                   className="border p-1 mb-2 w-full"
// // //                   value={editData.nickname}
// // //                   onChange={(e) => handleEditChange('nickname', e.target.value)}
// // //                 />
// // //                 <input
// // //                   className="border p-1 mb-2 w-full"
// // //                   value={editData.age}
// // //                   onChange={(e) => handleEditChange('age', e.target.value)}
// // //                 />
// // //                 <input
// // //                   className="border p-1 mb-2 w-full"
// // //                   value={editData.grade}
// // //                   onChange={(e) => handleEditChange('grade', e.target.value)}
// // //                 />
// // //                 <div className="flex gap-2 mt-2">
// // //                   <button onClick={saveEdit} className="bg-blue-600 text-white px-4 py-1 rounded">
// // //                     Save
// // //                   </button>
// // //                   <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-4 py-1 rounded">
// // //                     Cancel
// // //                   </button>
// // //                 </div>
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <h2 className="text-xl font-semibold">{student.fullName}</h2>
// // //                 <p>
// // //                   <strong>Nickname:</strong> {student.nickname}
// // //                 </p>
// // //                 <p>
// // //                   <strong>Age:</strong> {student.age}
// // //                 </p>
// // //                 <p>
// // //                   <strong>Grade:</strong> {student.grade}
// // //                 </p>
// // //                 <p>
// // //                   <strong>Email:</strong> {student.email}
// // //                 </p>
// // //                 <div className="flex gap-2 mt-2">
// // //                   <button
// // //                     onClick={() => startEditing(student)}
// // //                     className="bg-yellow-500 text-white px-4 py-1 rounded"
// // //                   >
// // //                     Edit
// // //                   </button>
// // //                   <button
// // //                     onClick={() => handleDelete(student.id)}
// // //                     className="bg-red-600 text-white px-4 py-1 rounded"
// // //                   >
// // //                     Delete
// // //                   </button>
// // //                   <button
// // //                     onClick={() => viewAnalytics(student.id)}
// // //                     className="bg-green-600 text-white px-4 py-1 rounded"
// // //                   >
// // //                     Analytics
// // //                   </button>
// // //                 </div>
// // //               </>
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Analytics Modal */}
// // //       {showAnalytics && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // //           <div className="bg-white p-6 rounded w-full max-w-md">
// // //             <h2 className="text-xl font-bold mb-4">Student Analytics</h2>
// // //             {results.length === 0 ? (
// // //               <p>No test results found for this student.</p>
// // //             ) : (
// // //               results.map((result, index) => {
// // //                 const percent = ((result.score / result.total) * 100).toFixed(1);
// // //                 let colorClass = 'text-red-600';
// // //                 if (percent >= 80) colorClass = 'text-green-600';
// // //                 else if (percent >= 50) colorClass = 'text-yellow-600';

// // //                 return (
// // //                   <div key={index} className="mb-3 p-3 bg-gray-100 rounded">
// // //                     <p>
// // //                       <strong>Test ID:</strong> {result.testId}
// // //                     </p>
// // //                     <p>
// // //                       <strong>Score:</strong> {result.score} / {result.total}{' '}
// // //                       (<span className={colorClass}>{percent}%</span>)
// // //                     </p>
// // //                   </div>
// // //                 );
// // //               })
// // //             )}
// // //             <button
// // //               onClick={() => setShowAnalytics(false)}
// // //               className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
// // //             >
// // //               Close
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Students;






























// // import React, { useEffect, useState } from 'react';
// // import { db } from '../Firebase/firebase';
// // import {
// //   collection,
// //   getDocs,
// //   deleteDoc,
// //   doc,
// //   updateDoc,
// //   query,
// //   where,
// // } from 'firebase/firestore';

// // const Students = () => {
// //   const [students, setStudents] = useState([]);
// //   const [editingId, setEditingId] = useState(null);
// //   const [editData, setEditData] = useState({});
// //   const [selectedStudent, setSelectedStudent] = useState(null);
// //   const [results, setResults] = useState([]);
// //   const [showAnalytics, setShowAnalytics] = useState(false);

// //   useEffect(() => {
// //     fetchStudents();
// //   }, []);

// //   const fetchStudents = async () => {
// //     try {
// //       const snapshot = await getDocs(collection(db, 'users'));
// //       const studentList = snapshot.docs
// //         .map((doc) => ({ id: doc.id, ...doc.data() }))
// //         .filter((user) => user.role === 'student');
// //       setStudents(studentList);
// //     } catch (error) {
// //       console.error("Failed to fetch students:", error);
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     if (window.confirm('Are you sure you want to delete this student?')) {
// //       try {
// //         await deleteDoc(doc(db, 'users', id));
// //         fetchStudents();
// //       } catch (error) {
// //         console.error("Failed to delete student:", error);
// //       }
// //     }
// //   };

// //   const startEditing = (student) => {
// //     setEditingId(student.id);
// //     setEditData({
// //       fullName: student.fullName || '',
// //       nickname: student.nickname || '',
// //       age: student.age || '',
// //       grade: student.grade || '',
// //     });
// //   };

// //   const handleEditChange = (field, value) => {
// //     setEditData((prev) => ({ ...prev, [field]: value }));
// //   };

// //   const saveEdit = async () => {
// //     try {
// //       await updateDoc(doc(db, 'users', editingId), editData);
// //       setEditingId(null);
// //       fetchStudents();
// //     } catch (error) {
// //       console.error("Failed to save edit:", error);
// //     }
// //   };

// //   const viewAnalytics = async (studentId) => {
// //     try {
// //       const q = query(collection(db, 'results'), where('studentId', '==', studentId));
// //       const snapshot = await getDocs(q);
// //       const data = snapshot.docs.map((doc) => doc.data());
// //       setResults(data);
// //       setSelectedStudent(studentId);
// //       setShowAnalytics(true);
// //     } catch (error) {
// //       console.error("Failed to fetch analytics:", error);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen p-6 bg-gray-100">
// //       <h1 className="text-3xl font-bold text-center mb-6">Student List (Teacher Control)</h1>
// //       <div className="grid grid-cols-1 gap-4">
// //         {students.map((student) => (
// //           <div key={student.id} className="bg-white p-4 rounded shadow">
// //             {editingId === student.id ? (
// //               <>
// //                 <input
// //                   className="border p-2 w-full mb-2"
// //                   placeholder="Full Name"
// //                   value={editData.fullName}
// //                   onChange={(e) => handleEditChange('fullName', e.target.value)}
// //                 />
// //                 <input
// //                   className="border p-2 w-full mb-2"
// //                   placeholder="Nickname"
// //                   value={editData.nickname}
// //                   onChange={(e) => handleEditChange('nickname', e.target.value)}
// //                 />
// //                 <input
// //                   className="border p-2 w-full mb-2"
// //                   placeholder="Age"
// //                   value={editData.age}
// //                   onChange={(e) => handleEditChange('age', e.target.value)}
// //                 />
// //                 <input
// //                   className="border p-2 w-full mb-2"
// //                   placeholder="Grade"
// //                   value={editData.grade}
// //                   onChange={(e) => handleEditChange('grade', e.target.value)}
// //                 />
// //                 <div className="flex gap-2">
// //                   <button onClick={saveEdit} className="bg-blue-600 text-white px-4 py-1 rounded">
// //                     Save
// //                   </button>
// //                   <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-4 py-1 rounded">
// //                     Cancel
// //                   </button>
// //                 </div>
// //               </>
// //             ) : (
// //               <>
// //                 <h2 className="text-xl font-semibold">{student.fullName}</h2>
// //                 <p><strong>Nickname:</strong> {student.nickname}</p>
// //                 <p><strong>Age:</strong> {student.age}</p>
// //                 <p><strong>Grade:</strong> {student.grade}</p>
// //                 <p><strong>Email:</strong> {student.email}</p>
// //                 <div className="flex gap-2 mt-2">
// //                   <button onClick={() => startEditing(student)} className="bg-yellow-500 text-white px-4 py-1 rounded">
// //                     Edit
// //                   </button>
// //                   <button onClick={() => handleDelete(student.id)} className="bg-red-600 text-white px-4 py-1 rounded">
// //                     Delete
// //                   </button>
// //                   <button onClick={() => viewAnalytics(student.id)} className="bg-green-600 text-white px-4 py-1 rounded">
// //                     Analytics
// //                   </button>
// //                 </div>
// //               </>
// //             )}
// //           </div>
// //         ))}
// //       </div>

// //       {showAnalytics && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// //           <div className="bg-white p-6 rounded w-full max-w-md">
// //             <h2 className="text-xl font-bold mb-4">Student Analytics</h2>
// //             {results.length === 0 ? (
// //               <p>No test results found for this student.</p>
// //             ) : (
// //               results.map((result, index) => {
// //                 const percent = ((result.score / result.total) * 100).toFixed(1);
// //                 let color = percent >= 80 ? 'text-green-600' : percent >= 50 ? 'text-yellow-600' : 'text-red-600';

// //                 return (
// //                   <div key={index} className="mb-3 p-3 bg-gray-100 rounded">
// //                     <p><strong>Test ID:</strong> {result.testId}</p>
// //                     <p><strong>Score:</strong> {result.score} / {result.total} (<span className={color}>{percent}%</span>)</p>
// //                   </div>
// //                 );
// //               })
// //             )}
// //             <button onClick={() => setShowAnalytics(false)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Students;































// import React, { useEffect, useState } from 'react';
// import { db } from '../Firebase/firebase';
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
//   query,
//   where,
// } from 'firebase/firestore';

// const Students = () => {
//   const [students, setStudents] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [editData, setEditData] = useState({});
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [results, setResults] = useState([]);
//   const [showAnalytics, setShowAnalytics] = useState(false);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const snapshot = await getDocs(collection(db, 'users'));
//       const studentList = snapshot.docs
//         .map((doc) => ({ id: doc.id, ...doc.data() }))
//         .filter((user) => user.role === 'student');
//       setStudents(studentList);
//     } catch (error) {
//       console.error("Failed to fetch students:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this student?')) {
//       try {
//         await deleteDoc(doc(db, 'users', id));
//         fetchStudents();
//       } catch (error) {
//         console.error("Failed to delete student:", error);
//       }
//     }
//   };

//   const startEditing = (student) => {
//     setEditingId(student.id);
//     setEditData({
//       fullName: student.fullName || '',
//       nickname: student.nickname || '',
//       age: student.age || '',
//       grade: student.grade || '',
//     });
//   };

//   const handleEditChange = (field, value) => {
//     setEditData((prev) => ({ ...prev, [field]: value }));
//   };

//   const saveEdit = async () => {
//     try {
//       await updateDoc(doc(db, 'users', editingId), editData);
//       setEditingId(null);
//       fetchStudents();
//     } catch (error) {
//       console.error("Failed to save edit:", error);
//     }
//   };

//   const viewAnalytics = async (studentId) => {
//     try {
//       const q = query(collection(db, 'results'), where('studentId', '==', studentId));
//       const snapshot = await getDocs(q);
//       const data = snapshot.docs.map((doc) => doc.data());
//       setResults(data);
//       setSelectedStudent(studentId);
//       setShowAnalytics(true);
//     } catch (error) {
//       console.error("Failed to fetch analytics:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <h1 className="text-3xl font-bold text-center mb-6">Student List (Teacher Control)</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {students.map((student) => (
//           <div key={student.id} className="bg-white p-4 rounded shadow">
//             {editingId === student.id ? (
//               <>
//                 <input
//                   className="border p-2 w-full mb-2"
//                   placeholder="Full Name"
//                   value={editData.fullName}
//                   onChange={(e) => handleEditChange('fullName', e.target.value)}
//                 />
//                 <input
//                   className="border p-2 w-full mb-2"
//                   placeholder="Nickname"
//                   value={editData.nickname}
//                   onChange={(e) => handleEditChange('nickname', e.target.value)}
//                 />
//                 <input
//                   className="border p-2 w-full mb-2"
//                   placeholder="Age"
//                   value={editData.age}
//                   onChange={(e) => handleEditChange('age', e.target.value)}
//                 />
//                 <input
//                   className="border p-2 w-full mb-2"
//                   placeholder="Grade"
//                   value={editData.grade}
//                   onChange={(e) => handleEditChange('grade', e.target.value)}
//                 />
//                 <div className="flex gap-2">
//                   <button onClick={saveEdit} className="bg-blue-600 text-white px-4 py-1 rounded">
//                     Save
//                   </button>
//                   <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-4 py-1 rounded">
//                     Cancel
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-xl font-semibold">{student.fullName}</h2>
//                 <p><strong>Nickname:</strong> {student.nickname}</p>
//                 <p><strong>Age:</strong> {student.age}</p>
//                 <p><strong>Grade:</strong> {student.grade}</p>
//                 <p><strong>Email:</strong> {student.email}</p>
//                 <div className="flex gap-2 mt-2">
//                   <button onClick={() => startEditing(student)} className="bg-yellow-500 text-white px-4 py-1 rounded">
//                     Edit
//                   </button>
//                   <button onClick={() => handleDelete(student.id)} className="bg-red-600 text-white px-4 py-1 rounded">
//                     Delete
//                   </button>
//                   <button onClick={() => viewAnalytics(student.id)} className="bg-green-600 text-white px-4 py-1 rounded">
//                     Analytics
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>

//       {showAnalytics && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded w-full max-w-md max-h-[90vh] overflow-y-auto">
//             <h2 className="text-xl font-bold mb-4">Student Analytics</h2>
//             {results.length === 0 ? (
//               <p>No test results found for this student.</p>
//             ) : (
//               results.map((result, index) => {
//                 const percent = ((result.score / result.total) * 100).toFixed(1);
//                 let color = percent >= 80 ? 'text-green-600' : percent >= 50 ? 'text-yellow-600' : 'text-red-600';

//                 return (
//                   <div key={index} className="mb-3 p-3 bg-gray-100 rounded">
//                     <p><strong>Test ID:</strong> {result.testId}</p>
//                     <p>
//                       <strong>Score:</strong> {result.score} / {result.total}{' '}
//                       (<span className={color}>{percent}%</span>)
//                     </p>
//                   </div>
//                 );
//               })
//             )}
//             <button onClick={() => setShowAnalytics(false)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Students;

























import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/firebase';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  addDoc,
  query,
  where,
} from 'firebase/firestore';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [results, setResults] = useState([]);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    fullName: '',
    nickname: '',
    age: '',
    grade: '',
    email: '',
    role: "O'quvchi",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'users'));
      const studentList = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((user) => user.role === 'student');
      setStudents(studentList);
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Rostdan ham shu o'quvchini o'chirmoqchimisiz?")) {
      try {
        await deleteDoc(doc(db, 'users', id));
        fetchStudents();
      } catch (error) {
        console.error("O'quvchini o'chirishda xatolik:", error);
      }
    }
  };

  const startEditing = (student) => {
    setEditingId(student.id);
    setEditData({
      fullName: student.fullName || '',
      nickname: student.nickname || '',
      age: student.age || '',
      grade: student.grade || '',
    });
  };

  const handleEditChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const saveEdit = async () => {
    try {
      await updateDoc(doc(db, 'users', editingId), editData);
      setEditingId(null);
      fetchStudents();
    } catch (error) {
      console.error("O'zgarishlarni saqlashda xatolik:", error);
    }
  };

  const viewAnalytics = async (studentId) => {
    try {
      const q = query(collection(db, 'results'), where('studentId', '==', studentId));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data());
      setResults(data);
      setSelectedStudent(studentId);
      setShowAnalytics(true);
    } catch (error) {
      console.error("O'quvchi natijalarini ko'rishda xatolik:", error);
    }
  };

  const handleAddStudent = async () => {
    try {
      await addDoc(collection(db, 'users'), newStudent);
      setShowAddForm(false);
      setNewStudent({
        fullName: '',
        nickname: '',
        age: '',
        grade: '',
        email: '',
        role: "O'quvchi",
      });
      fetchStudents();
    } catch (error) {
      console.error("Yangi o'quvchi qo'shishda xatolik:", error);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">O'quvchilar ro'yxati</h1>

      <div className="mb-4 text-center">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-700 text-white px-6 py-2 rounded"
        >
          {showAddForm ? 'Ortga qaytish' : "Yangi o'quvchi qo'shish"}
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white p-6 mb-6 rounded shadow max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Yangi o'quvchi qo'shish</h2>
          <input
            className="border p-2 w-full mb-2"
            placeholder="Full Name"
            value={newStudent.fullName}
            onChange={(e) => setNewStudent({ ...newStudent, fullName: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2"
            placeholder="Nickname"
            value={newStudent.nickname}
            onChange={(e) => setNewStudent({ ...newStudent, nickname: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2"
            placeholder="Age"
            value={newStudent.age}
            onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2"
            placeholder="Grade"
            value={newStudent.grade}
            onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2"
            placeholder="Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          />
          <button
            onClick={handleAddStudent}
            className="bg-green-600 text-white px-4 py-2 rounded mt-2"
          >
            Save Student
          </button>
        </div>
      )}

      {/* Existing Student List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
          <div key={student.id} className="bg-white p-4 rounded shadow">
            {editingId === student.id ? (
              <>
                <input
                  className="border p-2 w-full mb-2"
                  placeholder="To'liq ismi"
                  value={editData.fullName}
                  onChange={(e) => handleEditChange('fullName', e.target.value)}
                />
                <input
                  className="border p-2 w-full mb-2"
                  placeholder="Taxallusi"
                  value={editData.nickname}
                  onChange={(e) => handleEditChange('nickname', e.target.value)}
                />
                <input
                  className="border p-2 w-full mb-2"
                  placeholder="Yoshi"
                  value={editData.age}
                  onChange={(e) => handleEditChange('age', e.target.value)}
                />
                <input
                  className="border p-2 w-full mb-2"
                  placeholder="Sinfi"
                  value={editData.grade}
                  onChange={(e) => handleEditChange('grade', e.target.value)}
                />
                <div className="flex gap-2">
                  <button onClick={saveEdit} className="bg-blue-600 text-white px-4 py-1 rounded">
                    saqlash
                  </button>
                  <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-4 py-1 rounded">
                    Bekor qilish
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold">{student.fullName}</h2>
                <p><strong>Taxallusi:</strong> {student.nickname}</p>
                <p><strong>Yoshi:</strong> {student.age}</p>
                <p><strong>Sinfi:</strong> {student.grade}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => startEditing(student)} className="bg-yellow-500 text-white px-4 py-1 rounded">
                    Tahrirlash
                  </button>
                  <button onClick={() => handleDelete(student.id)} className="bg-red-600 text-white px-4 py-1 rounded">
                    O'chirish
                  </button>
                  <button onClick={() => viewAnalytics(student.id)} className="bg-green-600 text-white px-4 py-1 rounded">
                    Natijalari
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Analytics Modal */}
      {showAnalytics && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Student Analytics</h2>
            {results.length === 0 ? (
              <p>Bu o'quvchining test natijalari topilmadi.</p>
            ) : (
              results.map((result, index) => {
                const percent = ((result.score / result.total) * 100).toFixed(1);
                let color = percent >= 80 ? 'text-green-600' : percent >= 50 ? 'text-yellow-600' : 'text-red-600';

                return (
                  <div key={index} className="mb-3 p-3 bg-gray-100 rounded">
                    <p><strong>Test ID:</strong> {result.testId}</p>
                    <p>
                      <strong>Natijasi:</strong> {result.score} / {result.total}{' '}
                      (<span className={color}>{percent}%</span>)
                    </p>
                  </div>
                );
              })
            )}
            <button onClick={() => setShowAnalytics(false)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;