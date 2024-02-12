import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {

  const location = useLocation();

  const isLoginPage = location.pathname === '/';

  if (isLoginPage) {
    return null; 
  }

    return (
      <nav className="nav">
        <a href="/" className="site-title">
          BaleineALunettes
        </a>
        <ul>
            <CustomLink to="/about">ABOUT</CustomLink>
            <CustomLink to="/ideas">IDEAS GENERATOR</CustomLink>
            <CustomLink to="/contact">CONTACT</CustomLink>
            <CustomLink to="/projects">PROJECTS</CustomLink>
        </ul>
      </nav>
    )
  }

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }