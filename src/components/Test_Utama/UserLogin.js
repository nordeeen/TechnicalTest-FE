import React, { useState, useEffect } from 'react'
import classes from './UserLogin.module.css'

const UserLogin = () => {
  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleName = (e) => {
    setUsername(e.target.value)
  }
  const handlePass = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username))
    localStorage.setItem('password', JSON.stringify(password))
  }, [username, password])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('ini data nama:', username)
    console.log('ini data pass:', password)
    setShow(true)
    setHide(false)
  }

  const handleOut = (e) => {
    e.preventDefault()
    localStorage.clear()
    setUsername('')
    setPassword('')
    setShow(false)
    setHide(true)
  }

  return (
    <>
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.title}>
            {show && <h2>Selamat Datang {username}</h2>}
          </div>
          <div className={`${classes.inputContainer} ${classes.ic1}`}>
            {hide && (
              <input
                className={classes.input}
                type='text'
                placeholder=' '
                name='username'
                aria-label='Username field'
                value={username || ''}
                onChange={handleName}
              />
            )}
            <div className={classes.cut}></div>
            <label for='firstname' className={classes.placeholder}>
              username
            </label>
          </div>
          <div className={`${classes.inputContainer} ${classes.ic2}`}>
            {hide && (
              <input
                className={classes.input}
                type='password'
                placeholder=' '
                name='password'
                aria-label='Password field'
                value={password || ''}
                onChange={handlePass}
              />
            )}
            <div className={classes.cut}></div>
            <label className={classes.placeholder}>password</label>
          </div>
          <div className={`${classes.inputContainer} ${classes.ic2}`}>
            <div className={`${classes.cut} ${classes.cutShort}`}></div>
          </div>
          {hide && (
            <button type='submit' className={classes.submit}>
              log in
            </button>
          )}
          {show && (
            <button onClick={handleOut} type='text' className={classes.submit}>
              log out
            </button>
          )}
        </form>
      </div>
    </>
  )
}

export default UserLogin
