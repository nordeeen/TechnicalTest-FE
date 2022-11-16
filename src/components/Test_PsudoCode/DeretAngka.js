import React, { useState } from 'react'

// Soal Nomor 1 PsudoCode
const DeretAngka = () => {
  const [test, setTest] = useState('')
  const [title, setTItle] = useState('')
  const [show, setShow] = useState(false)

  const handleSHowvalue = (e) => {
    if (parseInt(title) <= 60) {
      setTest('KURANG')
    } else if (parseInt(title) > 60 && parseInt(title) <= 70) {
      setTest('CUKUP')
    } else if (parseInt(title) > 70 && parseInt(title) <= 80) {
      setTest('BAIK')
    } else if (parseInt(title) > 80) {
      setTest('LUARBIASA')
    } else {
      setTest('UNKWON')
    }
    e.preventDefault()
    setShow(true)
  }

  const inputChangeHandler = (e) => {
    const re = /^[0-9\b]+$/
    if (e.target.value === '' || re.test(e.target.value)) {
      if (title !== e.target.value) {
        setShow(false)
      }
      setTItle(e.target.value)
    }
  }
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '100px' }}>
        <p>{show && test}</p>
        {/* <Select options={options} onChange={(e) => setTItle(e.value)} /> */}
        <div>
          <input
            type='text'
            value={title}
            style={{ border: '3px solid black' }}
            onChange={inputChangeHandler}
          />
        </div>
        <button onClick={handleSHowvalue} style={{ marginTop: '50px' }}>
          SHow Value
        </button>
      </div>
    </div>
  )
}

export default DeretAngka
