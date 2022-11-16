import React, { useState } from 'react'

// Soal Nomor 2 PsudoCode
const Fibonacci = () => {
  const [data, setData] = useState([])
  const [show, setShow] = useState(false)

  const fibon = (num) => {
    if (num < 2) {
      return num
    } else {
      return fibon(num - 1) + fibon(num - 2)
    }
  }

  const changeHandler = (e) => {
    setData(e.target.value)
    // console.log(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (data <= 0) {
      console.log('Enter a positive integer.')
    } else {
      let arr = []
      for (let i = 0; i < data; i++) {
        let newData = fibon(i)
        // console.log(newDate)
        arr.push(newData)
      }
      setData(arr)
    }
    setShow(true)
  }

  return (
    <>
      <div>
        <label>Masukan Angka :</label>
        <input type='number' value={data} onChange={changeHandler} />
        <button onClick={handleClick}>test</button>
        <div>
          {show && data.map((item, index) => <p key={index}>{item}</p>)}
        </div>
      </div>
    </>
  )
}

export default Fibonacci
