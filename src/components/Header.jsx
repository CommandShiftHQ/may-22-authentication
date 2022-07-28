import "../styles/header.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        // TODO navigate to /login if not logged in, /account otherwise
        if (false) {
            navigate("/account")
        } else {
            navigate("/login")
        }
    }
    return (
        <nav className="header">
            {/* TODO: display username here when logged in */}
            <Link to="/">Home</Link>
            <div className="header__nav-link" onClick={handleClick}>Account</div>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Header