import React, { useState } from 'react'

// soal utama nomor 1 dan 2
const List = (props) => {
  return (
    <div
      style={{
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div>Name : {props.name}</div>
      <div>Club : {props.club}</div>
      <div>Nationaly : {props.nationaly}</div>
      <div>Position : {props.position}</div>
    </div>
  )
}

const Datas = () => {
  const [datas, setDatas] = useState([
    {
      name: 'Erling Haaland',
      club: 'Manchester City',
      nationaly: 'Norway',
      position: 'Forward',
    },
    {
      name: 'Harry Kane',
      club: 'Tottenham Hotspurs',
      nationaly: 'England',
      position: 'Forward',
    },
    {
      name: 'Kevin De Bruyne',
      club: 'Manchester City',
      nationaly: 'Belgium',
      position: 'Midfilder',
    },
  ])

  const handleChange = (index) => {
    const newDatas = [...datas]
    newDatas[index].name = 'Lord Hariono'
    newDatas[index].club = 'Persitara Jakarta Utara'
    newDatas[index].nationaly = 'Uganda'
    newDatas[index].position = 'Gelandang Pengangkut Air'
    setDatas(newDatas)
  }

  return (
    <>
      <div>
        <div>
          {datas.map((val, index) => {
            return (
              <button
                onClick={() => {
                  handleChange(index)
                }}
                key={index}
              >
                <List
                  key={index}
                  name={val.name}
                  club={val.club}
                  nationaly={val.nationaly}
                  position={val.position}
                />
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Datas
