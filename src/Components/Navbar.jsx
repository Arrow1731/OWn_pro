import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from '../Firebase/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { Menu, X } from 'lucide-react';
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

function Navigation() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setRole(userData.role); // get role (e.g., teacher or student)
        }
      } else {
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setRole(null);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#f7bf9f]">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink exact="true" to="/" className="text-xl font-bold text-[#424551]">Logo</NavLink>

        <button className="lg:hidden text-[#424551]" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`flex-col lg:flex-row lg:flex gap-6 items-center absolute lg:static bg-[#f7bf9f] w-full lg:w-auto left-0 top-[70px] p-4 lg:p-0 z-10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <NavLink className='font-lato font-bold text-[#424551]' to="/" onClick={toggleMenu}>Bosh sahifa</NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/about" onClick={toggleMenu}>Biz haqimizda</NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/contact" onClick={toggleMenu}>Bog'lanish</NavLink>

          {user && (
            <>
              <NavLink className='font-lato font-bold text-[#424551]' to="/profile" onClick={toggleMenu}>Profile</NavLink>

              {role === "teacher" && (
                <NavLink className='font-lato font-bold text-[#424551]' to="/create-test" onClick={toggleMenu}>Test yaratish</NavLink>
              )}

              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="font-lato font-bold text-[#424551] border px-3 py-1 rounded hover:bg-red-200"
              >
                Log Out
              </button>
            </>
          )}

          {!user && (
            <NavLink className='font-lato font-bold text-[#424551]' to="/login" onClick={toggleMenu}>
              Kirish | Ro'yxatdan o'tish
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;