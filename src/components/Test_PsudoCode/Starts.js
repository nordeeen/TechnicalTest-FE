import React, { useState } from 'react'

// Soal nomor 3 PsudoCode
const Starts = () => {
  const [val, setVal] = useState('')
  const [show, setShow] = useState(false)
  const [starArr, setStarArr] = useState([])
  const star = '*'

  const handleInput = (e) => {
    setVal(e.target.value)
  }

  const handleStar = (e) => {
    e.preventDefault()
    let arr = []
    for (let i = 1; i <= val; i++) {
      let temp = star.repeat(i)
      arr.push(temp)
    }
    setStarArr(arr)
    setShow(true)
  }

  return (
    <>
      <div>
        <label>Masukan Angka : </label>
        <input type='number' onChange={handleInput} />
        <button onClick={handleStar}>Click Button</button>
        {show &&
          starArr.map((item) => {
            return (
              <div key={item}>
                <h2>{item}</h2>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Starts
