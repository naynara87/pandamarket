import Nav from "../components/ui/Nav";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="fixed">
      <div className="header-wrap">
        <Link to="/" className="logo">
          <h1 className="sr-only">판다마켓</h1>
        </Link>
        {user ? (
          <>
            <Nav />
            <Link to="/login" className="btn-sm btn-primary">
              로그인
            </Link>
          </>
        ) : (
          <button className="btn-sm btn-primary" onClick={logout}>
            로그아웃
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
