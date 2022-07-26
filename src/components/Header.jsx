import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="header">
            <Link to="/">Home</Link>
            <Link to="/account">Account</Link>
        </nav>
    )
}

export default Header