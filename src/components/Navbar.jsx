import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link to="/" className="logo">
                    <span className="logo-mark">@</span>
                    <span>Threads</span>
                </Link>

                
                <div className="nav-menu">
                    <Link
                        to="/"
                        className={
                            location.pathname === "/"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        <FaHome />
                        <span>Untuk Anda</span>
                    </Link>
                    <Link
                        to="/profile"
                        className={
                            location.pathname === "/profile"
                                ? "nav-link active"
                                : "nav-link"
                            }
                    >
                        <FaUser />
                        <span>Profil</span>
                    </Link>
                </div>
                <div className="nav-footer">
                    <button className="nav-link logout-btn">
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;