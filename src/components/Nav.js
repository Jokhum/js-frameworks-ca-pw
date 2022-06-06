import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { NavLink } from "react-router-dom";

function Nav() {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useNavigate();

  function logout() {
    setAuth(null);
    history("/");
  }

  return (
    <>
      {" "}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {auth ? (
            <>
              <button onClick={logout}>Log out</button>
            </>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
