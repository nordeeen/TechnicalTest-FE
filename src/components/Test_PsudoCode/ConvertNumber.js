// import numWords from 'num-words'
// import React, { useState } from 'react'

// Soal Nomor 4 PsudoCode
// const ConvertNumber = () => {
//   const numWords = require('num-words')
//   const [item, setItem] = useState([])

//   const satuan = [
//     '',
//     'satu ',
//     'dua ',
//     'tiga ',
//     'empat ',
//     'lima ',
//     'enam ',
//     'tujuh ',
//     'delapan ',
//     'sembilan',
//     'sepuluh',
//     'sebelas',
//     'dua belas',
//     'tiga belas',
//     'empat belas',
//     'lima belas',
//     'enam belas',
//     'tujuh belas',
//     'delapan belas',
//     'sembilan belas',
//   ]

//   const puluhan = [
//     '',
//     '',
//     'dua puluh',
//     'tiga puluh',
//     'empat puluh',
//     'lima puluh',
//     'enam puluh',
//     'tujuh puluh',
//     'delapan puluh',
//     'sembilan puluh',
//   ]

//   const convertWords = (num) => {
//     if ((num = num.toString()).length > 9) return 'overflow'
//     angka = ('000000000' + num)
//       .substr(-9)
//       .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/)
//     if (!angka) return
//     var str = ''
//     str +=
//       angka[1] != 0
//         ? (satuan[Number(angka[1])] ||
//             puluhan[angka[1][0]] + ' ' + satuan[angka[1][1]]) + 'crore '
//         : ''
//     str +=
//       n[2] != 0
//         ? (satuan[Number(n[2])] || puluhan[n[2][0]] + ' ' + satuan[n[2][1]]) +
//           'lakh '
//         : ''
//     str +=
//       n[3] != 0
//         ? (satuan[Number(n[3])] || puluhan[n[3][0]] + ' ' + satuan[n[3][1]]) +
//           'thousand '
//         : ''
//     str +=
//       n[4] != 0
//         ? (satuan[Number(n[4])] || puluhan[n[4][0]] + ' ' + satuan[n[4][1]]) +
//           'hundred '
//         : ''
//     str +=
//       n[5] != 0
//         ? (str != '' ? 'and ' : '') +
//           (satuan[Number(n[5])] || puluhan[n[5][0]] + ' ' + satuan[n[5][1]]) +
//           'only '
//         : ''
//     return str
//   }

//   const handleInput = (e) => {
//     setItem(e.target.value)
//     console.log(e.target.value)
//   }
//   return (
//     <div>
//       <div>
//         <label>Convert Number to String :</label>
//         <span></span>
//         <input type='number' value={item} onChange={handleInput} />
//       </div>
//     </div>
//   )
// }

// export default ConvertNumber
