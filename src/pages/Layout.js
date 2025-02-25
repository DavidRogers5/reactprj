import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Read</Link>
          </li>
          <li>
            <Link to="/Create">Create</Link>
          </li>
          <li>
            <Link to="/Update">Update</Link>
          </li>
          <li>
            <Link to="/Delete">Delete</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;