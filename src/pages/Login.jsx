import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Login submitted')
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to your account
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?{' '}
          <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  )
}

export default Login