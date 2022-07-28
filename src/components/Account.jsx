import "../styles/account.css"
import Header from "./Header"
import { useNavigate } from "react-router-dom"

const Account = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        // TODO handle logging out of user
        navigate("/")
    }
    return (
        <div>
            <Header />
            <h1 className="center">My Account</h1>
            <div className="container">
                <p>Welcome username!</p>
                <p>Here are your current details</p>
                <ul>
                    <li className="account__user-item">username: <b>yourUsername</b></li>
                    <li className="account__user-item">email: <b>yourEmail</b></li>
                </ul>
                <button className="account__button" onClick={handleClick}>Logout</button>
            </div>
        </div>
    )
}

export default Account