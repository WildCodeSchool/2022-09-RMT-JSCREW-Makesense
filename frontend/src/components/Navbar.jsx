import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Logo from "@assets/logo1.svg";
import PictoHome from "@assets/home.svg";
import PictoArchive from "@assets/archive.svg";
import PictoDecision from "@assets/decision.svg";
import PictoLogout from "@assets/logout.svg";
import PictoUsers from "@assets/users.svg";
import User from "../contexts/User";

import DarkModeButton from "./DarkModeButton";

function Navbar() {
  const { user, handleUser } = useContext(User.UserContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    handleUser(null);
    navigate("/");
  };
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <>
      <div
        id="navbar"
        className="hidden sm:flex justify-between pb-1 bg-[#ced7da] dark:bg-[#6d888f] dark:text-[#e7ebec] font-bold"
      >
        <Link to="/home">
          <img className="ml-10 mt-3 aspect-auto" src={Logo} alt="logo" />
        </Link>
        <div className="mt-3">
          <DarkModeButton />
        </div>
        <div>
          <div className="inline-block text-center place-content-center items-center mr-4">
            <Link to="/home">
              <img
                className="inline place-content-center p-1 m-1"
                src={PictoHome}
                alt="logo1"
              />
              <p>Parcourir les décisions</p>
            </Link>
          </div>
          <div className="inline-block text-center place-content-center mr-4">
            <img
              className="inline place-content-center p-1 m-1"
              src={PictoDecision}
              alt="logo2"
            />
            <p>Mes décisions</p>
          </div>
          <div className="inline-block text-center place-content-center mr-4">
            <Link to="/archives">
              <img
                className="inline place-content-center p-1 m-1"
                src={PictoArchive}
                alt="logo3"
              />
              <p>Archives</p>
            </Link>
          </div>
          {user?.role === "administrator" && (
            <div className="inline-block text-center place-content-center mr-4">
              <Link to="/admin/users">
                <img
                  className="inline place-content-center m-1"
                  src={PictoUsers}
                  alt="users"
                />
                <p>Gestion des utilisateurs</p>
              </Link>
            </div>
          )}
          <button
            type="button"
            onClick={handleLogOut}
            className="text-center place-content-center mr-10"
          >
            <img className="ml-9 p-1 m-1" src={PictoLogout} alt="logo6" />
            <p>Se déconnecter</p>
          </button>
        </div>
      </div>
      <div className="sm:hidden relative flex justify-end mr-1 bg-[#ced7da]">
        <Link to="/home">
          <img className="ml-6 mt-2 aspect-auto w-3/4" src={Logo} alt="logo" />
        </Link>
        <button
          className="p-4 space-y-2"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-[#0c3944] rounded-md`}
          />
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-[#0c3944] rounded-md`}
          />
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-[#0c3944] rounded-md`}
          />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-full z-40 bg-white`}
        >
          <div className="relative w-full bg-[#ced7da]">
            <button
              className="absolute right-0 mr-4 mt-4 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              X
            </button>
            <div className="p-10">
              <Link to="/home">
                <p className="text-xl font-bold py-2">
                  Parcourir les décisions
                </p>
              </Link>
              <p className="text-xl font-bold py-2">Mes décisions</p>
              <Link to="/archives">
                <p className="text-xl font-bold py-2">Archives</p>
              </Link>
              {user?.role === "administrator" && (
                <Link to="/admin/users">
                  <p className="text-xl font-bold py-2">
                    Gestion des utilisateurs
                  </p>
                </Link>
              )}
              <button type="button" onClick={handleLogOut}>
                <p className="text-xl font-bold py-2">Se déconnecter</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
