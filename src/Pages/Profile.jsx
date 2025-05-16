// // // // // // // // import React from 'react';

// // // // // // // // const Profile = () => {
// // // // // // // //   const user = JSON.parse(localStorage.getItem('user'));

// // // // // // // //   return (
// // // // // // // //     <div className="p-4">
// // // // // // // //       <h1 className="text-xl font-bold mb-4">Profile Page</h1>
// // // // // // // //       {user ? (
// // // // // // // //         <div>
// // // // // // // //           <p><strong>Name:</strong> {user.displayName}</p>
// // // // // // // //           <p><strong>Email:</strong> {user.email}</p>
// // // // // // // //           <img src={user.photoURL} alt="Profile" className="w-24 h-24 rounded-full mt-2" />
// // // // // // // //         </div>
// // // // // // // //       ) : (
// // // // // // // //         <p>User not logged in.</p>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Profile;





// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import { auth } from '../Firebase/firebase';
// // // // // // // import { db } from '../Firebase/firebase';
// // // // // // // import { doc, getDoc } from 'firebase/firestore';

// // // // // // // const Profile = () => {
// // // // // // //   const [userData, setUserData] = useState(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchUserData = async () => {
// // // // // // //       const currentUser = auth.currentUser;
// // // // // // //       if (!currentUser) return;

// // // // // // //       const docRef = doc(db, "users", currentUser.uid);
// // // // // // //       const docSnap = await getDoc(docRef);

// // // // // // //       if (docSnap.exists()) {
// // // // // // //         setUserData(docSnap.data());
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchUserData();
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className="container mx-auto p-4">
// // // // // // //       {userData ? (
// // // // // // //         <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // //           <h2 className="text-2xl font-bold mb-4">Profile</h2>
// // // // // // //           <p><strong>Email:</strong> {userData.email}</p>
// // // // // // //           <p><strong>Role:</strong> {userData.role}</p>
// // // // // // //           <p><strong>Account Created:</strong> {userData.createdAt.toDate().toLocaleString()}</p>
// // // // // // //         </div>
// // // // // // //       ) : (
// // // // // // //         <p>Loading profile...</p>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Profile;






































// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import { auth, db } from '../Firebase/firebase';
// // // // // // import { doc, getDoc } from 'firebase/firestore';

// // // // // // const Profile = () => {
// // // // // //   const [userData, setUserData] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     const fetchUserData = async () => {
// // // // // //       const currentUser = auth.currentUser;
// // // // // //       if (!currentUser) {
// // // // // //         setLoading(false);
// // // // // //         return;
// // // // // //       }

// // // // // //       try {
// // // // // //         const docRef = doc(db, "users", currentUser.uid);
// // // // // //         const docSnap = await getDoc(docRef);

// // // // // //         if (docSnap.exists()) {
// // // // // //           setUserData(docSnap.data());
// // // // // //         }
// // // // // //       } catch (error) {
// // // // // //         console.error('Failed to fetch user data:', error);
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchUserData();
// // // // // //   }, []);

// // // // // //   if (loading) return <p>Loading profile...</p>;
// // // // // //   if (!auth.currentUser) return <p>Please log in to view your profile.</p>;

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       {userData ? (
// // // // // //         <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // //           <h2 className="text-2xl font-bold mb-4">Profile</h2>
// // // // // //           <p><strong>Email:</strong> {userData.email}</p>
// // // // // //           <p><strong>Role:</strong> {userData.role}</p>
// // // // // //           <p><strong>Account Created:</strong> 
// // // // // //             {userData.createdAt?.toDate 
// // // // // //               ? userData.createdAt.toDate().toLocaleString() 
// // // // // //               : 'N/A'}
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         <p>No user data found.</p>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Profile;




























// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { auth } from '../Firebase/firebase';
// // // // // import { db } from '../Firebase/firebase';
// // // // // import { doc, getDoc } from 'firebase/firestore';

// // // // // const Profile = () => {
// // // // //   const [userData, setUserData] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const fetchUserData = async () => {
// // // // //       const currentUser = auth.currentUser;
// // // // //       if (!currentUser) return;

// // // // //       const docRef = doc(db, "users", currentUser.uid);
// // // // //       const docSnap = await getDoc(docRef);

// // // // //       if (docSnap.exists()) {
// // // // //         setUserData(docSnap.data());
// // // // //       }
// // // // //     };

// // // // //     fetchUserData();
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
// // // // //       {userData ? (
// // // // //         <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
// // // // //           <img
// // // // //             src={userData.photoURL || "https://via.placeholder.com/150"}
// // // // //             alt="User"
// // // // //             className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border"
// // // // //           />
// // // // //           <h2 className="text-2xl font-bold text-blue-600 mb-2">{userData.name}</h2>
// // // // //           <p className="text-gray-700 mb-1"><strong>Taxallus:</strong> {userData.nickname}</p>
// // // // //           <p className="text-gray-700 mb-1"><strong>Email:</strong> {userData.email}</p>
// // // // //           <p className="text-gray-700 mb-1"><strong>Yosh:</strong> {userData.age}</p>
// // // // //           <p className="text-gray-700 mb-1"><strong>Sinf:</strong> {userData.grade}</p>
// // // // //           <p className="text-gray-700 mb-1"><strong>Rol:</strong> {userData.role}</p>
// // // // //           <p className="text-gray-700"><strong>Ro'yxatdan o'tgan vaqti:</strong> {userData.createdAt?.toDate().toLocaleString()}</p>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <p className="text-center text-lg font-semibold text-gray-700">Profil yuklanmoqda...</p>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Profile;













































// // // // import React, { useEffect, useState } from 'react';
// // // // import { auth, db } from '../Firebase/firebase';
// // // // import { doc, getDoc } from 'firebase/firestore';
// // // // import { onAuthStateChanged } from 'firebase/auth';

// // // // const Profile = () => {
// // // //   const [userData, setUserData] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// // // //       if (user) {
// // // //         const docRef = doc(db, "users", user.uid);
// // // //         const docSnap = await getDoc(docRef);

// // // //         if (docSnap.exists()) {
// // // //           setUserData(docSnap.data());
// // // //         }
// // // //       }
// // // //       setLoading(false);
// // // //     });

// // // //     return () => unsubscribe();
// // // //   }, []);

// // // //   if (loading) {
// // // //     return <div className="text-center mt-10 text-lg">Loading profile...</div>;
// // // //   }

// // // //   if (!userData) {
// // // //     return <div className="text-center mt-10 text-red-500">User not found or not logged in.</div>;
// // // //   }

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
// // // //         <h2 className="text-2xl font-bold mb-4 text-center">Profile Information</h2>
// // // //         {userData.photoURL && (
// // // //           <div className="flex justify-center mb-4">
// // // //             <img
// // // //               src={userData.photoURL}
// // // //               alt="Profile"
// // // //               className="w-32 h-32 rounded-full object-cover"
// // // //             />
// // // //           </div>
// // // //         )}
// // // //         <p><strong>Name:</strong> {userData.name}</p>
// // // //         <p><strong>Nickname:</strong> {userData.nickname}</p>
// // // //         <p><strong>Age:</strong> {userData.age}</p>
// // // //         <p><strong>Grade:</strong> {userData.grade}</p>
// // // //         <p><strong>Email:</strong> {userData.email}</p>
// // // //         <p><strong>Role:</strong> {userData.role}</p>
// // // //         <p><strong>Created At:</strong> {userData.createdAt?.toDate().toLocaleString()}</p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Profile;





































// // // import React, { useEffect, useState } from 'react';
// // // import { auth, db } from '../Firebase/firebase';
// // // import { doc, getDoc, updateDoc } from 'firebase/firestore';

// // // const Profile = () => {
// // //   const [userData, setUserData] = useState(null);
// // //   const [editing, setEditing] = useState(false);
// // //   const [newName, setNewName] = useState('');

// // //   useEffect(() => {
// // //     const fetchUserData = async () => {
// // //       const currentUser = auth.currentUser;
// // //       if (!currentUser) return;

// // //       const docRef = doc(db, "users", currentUser.uid);
// // //       const docSnap = await getDoc(docRef);

// // //       if (docSnap.exists()) {
// // //         setUserData(docSnap.data());
// // //         setNewName(docSnap.data().fullName || '');
// // //       }
// // //     };

// // //     fetchUserData();
// // //   }, []);

// // //   const handleEditName = async () => {
// // //     try {
// // //       const docRef = doc(db, "users", auth.currentUser.uid);
// // //       await updateDoc(docRef, { fullName: newName });

// // //       setUserData({ ...userData, fullName: newName });
// // //       setEditing(false);
// // //       alert("Ism yangilandi!");
// // //     } catch (error) {
// // //       console.error("Error updating name:", error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-6">
// // //       {userData ? (
// // //         <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl mx-auto">
// // //           <h2 className="text-3xl font-bold text-center mb-6">Profil</h2>

// // //           <div className="space-y-3 text-lg">
// // //             <p><strong>Ism:</strong> {userData.fullName}</p>
// // //             <p><strong>Taxallus:</strong> {userData.nickname}</p>
// // //             <p><strong>Yosh:</strong> {userData.age}</p>
// // //             <p><strong>Sinf:</strong> {userData.grade}</p>
// // //             <p><strong>Email:</strong> {userData.email}</p>
// // //             <p><strong>Roli:</strong> {userData.role}</p>
// // //           </div>

// // //           <div className="mt-6">
// // //             <button
// // //               onClick={() => setEditing(!editing)}
// // //               className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
// // //             >
// // //               Sozlamalar
// // //             </button>

// // //             {editing && (
// // //               <div className="mt-4">
// // //                 <label className="block mb-2 text-sm font-medium">Yangi ism:</label>
// // //                 <input
// // //                   type="text"
// // //                   value={newName}
// // //                   onChange={(e) => setNewName(e.target.value)}
// // //                   className="w-full p-2 border border-gray-300 rounded-lg mb-2"
// // //                 />
// // //                 <button
// // //                   onClick={handleEditName}
// // //                   className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // //                 >
// // //                   Saqlash
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       ) : (
// // //         <p className="text-center text-lg">Yuklanmoqda...</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Profile;





































// // import React, { useEffect, useState } from 'react';
// // import { auth, db } from '../Firebase/firebase';
// // import { doc, getDoc, updateDoc } from 'firebase/firestore';

// // const Profile = () => {
// //   const [userData, setUserData] = useState(null);
// //   const [newName, setNewName] = useState('');
// //   const [editing, setEditing] = useState(false);

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       const currentUser = auth.currentUser;
// //       if (!currentUser) return;

// //       const docRef = doc(db, "users", currentUser.uid);
// //       const docSnap = await getDoc(docRef);
// //       if (docSnap.exists()) {
// //         const data = docSnap.data();
// //         setUserData(data);
// //         setNewName(data.fullName || '');
// //       }
// //     };

// //     fetchUserData();
// //   }, []);

// //   const handleEdit = async () => {
// //     try {
// //       const docRef = doc(db, "users", auth.currentUser.uid);
// //       await updateDoc(docRef, { fullName: newName });
// //       setUserData((prev) => ({ ...prev, fullName: newName }));
// //       setEditing(false);
// //       alert("Ism yangilandi");
// //     } catch (err) {
// //       alert("Xatolik: " + err.message);
// //     }
// //   };

// //   if (!userData) return <p className="text-center mt-8">Yuklanmoqda...</p>;

// //   return (
// //     <div className="container mx-auto p-6">
// //       <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl mx-auto">
// //         <h2 className="text-3xl font-bold text-center mb-6">Profil</h2>

// //         <div className="space-y-2 text-lg">
// //           <p><strong>Ism:</strong> {userData.fullName}</p>
// //           <p><strong>Taxallus:</strong> {userData.nickname}</p>
// //           <p><strong>Yosh:</strong> {userData.age}</p>
// //           <p><strong>Sinf:</strong> {userData.grade}</p>
// //           <p><strong>Email:</strong> {userData.email}</p>
// //           <p><strong>Roli:</strong> {userData.role}</p>
// //         </div>

// //         <div className="mt-4">
// //           <button
// //             onClick={() => setEditing(!editing)}
// //             className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
// //           >
// //             {editing ? "Bekor qilish" : "Ismni tahrirlash"}
// //           </button>

// //           {editing && (
// //             <div className="mt-4">
// //               <input
// //                 type="text"
// //                 value={newName}
// //                 onChange={(e) => setNewName(e.target.value)}
// //                 className="w-full p-2 border rounded mb-2"
// //               />
// //               <button
// //                 onClick={handleEdit}
// //                 className="bg-blue-600 text-white px-4 py-2 rounded"
// //               >
// //                 Saqlash
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;



































// import React, { useEffect, useState } from 'react';
// import { auth, db } from '../Firebase/firebase';
// import { doc, getDoc, updateDoc } from 'firebase/firestore';

// const Profile = () => {
//   const [userData, setUserData] = useState(null);
//   const [newName, setNewName] = useState('');
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const currentUser = auth.currentUser;
//       if (!currentUser) return;

//       const docRef = doc(db, "users", currentUser.uid);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         setUserData(data);
//         setNewName(data.fullName || '');
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleEdit = async () => {
//     try {
//       const docRef = doc(db, "users", auth.currentUser.uid);
//       await updateDoc(docRef, { fullName: newName });
//       setUserData((prev) => ({ ...prev, fullName: newName }));
//       setEditing(false);
//       alert("Ism yangilandi");
//     } catch (err) {
//       alert("Xatolik: " + err.message);
//     }
//   };

//   if (!userData) return <p className="text-center mt-8">Yuklanmoqda...</p>;

//   return (
//     <div className="container mx-auto p-6">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6">Profil</h2>

//         <div className="space-y-2 text-lg">
//           <p><strong>Ism:</strong> {userData.fullName}</p>
//           <p><strong>Taxallus:</strong> {userData.nickname}</p>
//           <p><strong>Yosh:</strong> {userData.age}</p>
//           <p><strong>Sinf:</strong> {userData.grade}</p>
//           <p><strong>Email:</strong> {userData.email}</p>
//           <p><strong>Roli:</strong> {userData.role}</p>
//         </div>

//         <div className="mt-4">
//           <button
//             onClick={() => setEditing(!editing)}
//             className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
//           >
//             {editing ? "Bekor qilish" : "Ismni tahrirlash"}
//           </button>

//           {editing && (
//             <div className="mt-4">
//               <input
//                 type="text"
//                 value={newName}
//                 onChange={(e) => setNewName(e.target.value)}
//                 className="w-full p-2 border rounded mb-2"
//               />
//               <button
//                 onClick={handleEdit}
//                 className="bg-blue-600 text-white px-4 py-2 rounded"
//               >
//                 Saqlash
//               </button>
//             </div>
//           )}
//         </div>

//         {/* ✅ Only for Teachers */}
//         {userData.role === 'teacher' && (
//           <div className="mt-6">
//             <button
//               onClick={() => window.location.href = '/students'}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Manage Students
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;





































import React, { useEffect, useState } from 'react';
import { auth, db } from '../Firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [newName, setNewName] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData(data);
        setNewName(data.fullName || '');
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = async () => {
    try {
      const docRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(docRef, { fullName: newName });
      setUserData((prev) => ({ ...prev, fullName: newName }));
      setEditing(false);
      alert("Ism yangilandi");
    } catch (err) {
      alert("Xatolik: " + err.message);
    }
  };

  if (!userData) return <p className="text-center mt-8">Yuklanmoqda...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Profil</h2>

        <div className="space-y-2 text-lg">
          <p><strong>Ism:</strong> {userData.fullName}</p>
          <p><strong>Taxallus:</strong> {userData.nickname}</p>
          <p><strong>Yosh:</strong> {userData.age}</p>
          <p><strong>Sinf:</strong> {userData.grade}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Roli:</strong> {userData.role}</p>
        </div>

        <div className="mt-4">
          <button
            onClick={() => setEditing(!editing)}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          >
            {editing ? "Bekor qilish" : "Ismni tahrirlash"}
          </button>

          {editing && (
            <div className="mt-4">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
              <button
                onClick={handleEdit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Saqlash
              </button>
            </div>
          )}
        </div>

        {/* ✅ Only for Teachers */}
        {userData.role === 'teacher' && (
          <div className="mt-6">
            <button
              onClick={() => window.location.href = '/students'}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Manage Students
            </button>
          </div>
        )}

        {/* ✅ Only for Students */}
        {userData.role === 'student' && (
          <div className="mt-6">
            <a
              href="/tests"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Take a Test
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;