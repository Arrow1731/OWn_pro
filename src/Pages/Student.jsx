import React, { useEffect, useState } from 'react';
import { auth, db } from '../Firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const Student = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentData = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        setLoading(false);
        return;
      }

      try {
        const q = query(collection(db, 'users'), where('uid', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setStudent(querySnapshot.docs[0].data());
        } else {
          console.error('No matching student found in Firestore.');
        }
      } catch (error) {
        console.error('Error fetching student info:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  if (loading) return <div className="p-6 text-lg">⏳ Loading student profile...</div>;
  if (!student) return <div className="p-6 text-red-500">❌ Student not found.</div>;

  return (
    <div className="p-6 max-w-xl mx-auto mt-10 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">🎓 Student Profile</h1>
      <div className="space-y-3 text-gray-800">
        <p><strong>👤 Full Name:</strong> {student.fullName}</p>
        <p><strong>🧑 Nickname:</strong> {student.nickname}</p>
        <p><strong>🎂 Age:</strong> {student.age}</p>
        <p><strong>🏫 Grade:</strong> {student.grade}</p>
        <p><strong>📧 Email:</strong> {student.email}</p>
        <p><strong>🔐 Role:</strong> {student.role}</p>
      </div>
    </div>
  );
};

export default Student;