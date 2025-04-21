import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Profile Page</h1>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <img src={user.photoURL} alt="Profile" className="w-24 h-24 rounded-full mt-2" />
        </div>
      ) : (
        <p>User not logged in.</p>
      )}
    </div>
  );
};

export default Profile;