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
              O'quchilarni boshqarish
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
              Test topshirish
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;