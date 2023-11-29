import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiUser, FiLogIn } from "react-icons/fi";

export default function Header(): JSX.Element {
  const signed = true;
  const loadingAuth = false;

  return (
    <div className="w-full justify-center items-center h-16 bg-white drop-shadow mb-4">
      <header className="w-full flex justify-between items-center max-w-7xl px-4 pt-2 mx-auto">
        <Link to="/">
          <img src={logo} alt="logo do site." />
        </Link>

        {!loadingAuth && signed && (
          <Link to="/dashboard">
            <div className="border-2 rounded-full p-1 border-gray-700">
              <FiUser size={22} color="#000" />
            </div>
          </Link>
        )}

        {!loadingAuth && !signed && (
          <Link to="/login">
            <div className="border-2 rounded-full p-1 border-gray-700">
              <FiLogIn size={22} color="#000" />
            </div>
          </Link>
        )}
      </header>
    </div>
  );
}
