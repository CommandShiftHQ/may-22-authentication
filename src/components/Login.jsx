const Login = () => {
    return (
        <div>
            <p className="center">Please enter your details below to login</p>
            <div className="container">
                <form>
                    <label htmlFor="email">Email</label><br />
                    <input id="email" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input id="password" />
                </form>
            </div>
        </div>
    )
}

export default Login