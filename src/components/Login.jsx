import {useState} from "react"
import axios from "axios"

const Login = () => {
    const [mode, setMode] = useState("login")
    const [details, setDetails] = useState({email: "", password: ""})
    const handleSwitch = () => {
        setMode(prev => prev === "login" ? "create" : "login")
    }

    const handleChange=({target: {value, id}}) => {
        setDetails(prev => ({...prev, [id]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(details, "<-- details")
        axios.post("http://localhost:4000/user", details).then((res) => {
            console.log(res)
        })
    }

    return (
        <div>
            <p className="center">Please enter your details below to login</p>
            <button onClick={handleSwitch} className="center">create new user</button>
            <div className="container">
                {/* <form>
                    <label htmlFor="email">Email</label><br />
                    <input id="email" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input id="password" />
                    <button type="submit">Login</button>
                </form> */}
            </div>
                {mode === "create" && (
                <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label><br />
                    <input id="email" onChange={handleChange}/><br />
                    <label htmlFor="password">Password</label><br />
                    <input id="password" onChange={handleChange} />
                    <button type="submit">Create new user</button>
                </form>
            </div>
            )}
        </div>
    )
}

export default Login