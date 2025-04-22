// import React from 'react';

// const Profile = () => {
//   const user = JSON.parse(localStorage.getItem('user'));

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Profile Page</h1>
//       {user ? (
//         <div>
//           <p><strong>Name:</strong> {user.displayName}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <img src={user.photoURL} alt="Profile" className="w-24 h-24 rounded-full mt-2" />
//         </div>
//       ) : (
//         <p>User not logged in.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;





import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase';
import { db } from '../Firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {userData ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Role:</strong> {userData.role}</p>
          <p><strong>Account Created:</strong> {userData.createdAt.toDate().toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;