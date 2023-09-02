import React, { useState } from 'react'
import '../index.css'

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const data = { username, password }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const handleSubmit = async (e) => {
        const json = await (await fetch('http://localhost:5010/login', options)).json();
        console.log(json);
    }


    return (
        <form>
            <h3>Log in</h3>
            <div>
                <input className="input-text" type="text" name='username' onChange={(e) => setUsername(e.target.value)} placeholder='Enter username' required /> <br /> <br />
                <input className="input-text" type="password" name='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' required /> <br />
            </div>
            <button type='submit' onClick={handleSubmit}>Login</button>
        </form>
    )
}
