import jwt from "jsonwebtoken"

const fakeLogin = (details) => {
    const validUser = [
        {
            username: "Ben",
            email: "ben.s@builtbypixel.com",
            password: "supermelon"
        },
        {
            username: "testUser",
            email: "test@email.com",
            password: "testing"
        }
    ]
    const isUser = validUser.some((user) => {
        return (
            user.username === details.username &&
            user.email === details.email &&
            user.password === details.password
        )
    })
    if (isUser) {
        const token = jwt.sign({
            email: details.email,
            username: details.username
        },
            process.env.REACT_APP_KEY
        )
        return { token: token }
    } else {
        return { error: "details are incorrect" }
    }
}

export default fakeLogin