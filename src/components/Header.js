import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { SUPPORTED_LANGUAGES, logo } from "../utils/contants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    //toggle gpt search click;
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full px-2 md:px-6 py-2 z-20 flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-black  ">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-red-700 text-white mx-2 md:mx-4 px-2  md:px-4 py-1 my-1 rounded-sm md:rounded-md hover:bg-red-500 "
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12  rounded-full "
            src={user.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold font-xl m-2 p-2 text-white cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
