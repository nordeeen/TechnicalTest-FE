import React from 'react'
import classes from './UserLogin.module.css'

const UserLogin = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.form}>
          <div className={classes.title}>Selamat Datang</div>
          <div className={`${classes.inputContainer} ${classes.ic1}`}>
            <input
              id='firstname'
              className={classes.input}
              type='text'
              placeholder=' '
            />
            <div className={classes.cut}></div>
            <label for='firstname' className={classes.placeholder}>
              username
            </label>
          </div>
          <div className={`${classes.inputContainer} ${classes.ic2}`}>
            <input
              id='lastname'
              className={classes.input}
              type='text'
              placeholder=' '
            />
            <div className={classes.cut}></div>
            <label for='lastname' className={classes.placeholder}>
              password
            </label>
          </div>
          <div className={`${classes.inputContainer} ${classes.ic2}`}>
            <div className={`${classes.cut} ${classes.cutShort}`}></div>
          </div>
          <button type='text' className={classes.submit}>
            log in
          </button>
          <button type='text' className={classes.submit}>
            log out
          </button>
        </div>
      </div>
    </>
  )
}

export default UserLogin
