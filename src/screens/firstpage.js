import { useState, useEffect } from 'react'
import axios from 'axios'
export const FirstPage = () => {
  const [enter, notenter] = useState(false)
  const [datax, Setdata] = useState([])
  console.log(datax)

  useEffect(() => {
    const getxxx = async () => {
      await axios({
        mode: 'no-cors',
        method: 'get',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-API-Key': 'Em8Byk3UYix4fUltnFd4xTfb6mkoVBsp'
        },
        url: 'https://adultvideosapi.com/api/videos/get-all'
      })
        .then((response) => {
          Setdata(response.data)
        })
        .catch((error) => {
          Setdata(error)
        })
    }
    getxxx()
  }, [])
  return (
    <div
      onMouseEnter={() => {
        notenter(true)
      }}
      onMouseLeave={() => {
        notenter(false)
      }}
      className={`mt-10 rounded-xl fixed top-0 right-0 transform duration-200 ${
        enter ? 'translate-x-0' : 'transform translate-x-[50%]'
      }  w-[50%] h-[70%] bg-green-500`}
    >
      <a className="mt-10 font-bold text-white grid grid-cols-1 place-items-center">
        show here
      </a>
      <div
        className="grid grid-cols-1 place-items-center absolute inset-x-0  top-[15%]
       h-[85%] overflow-y-auto"
      >
        <div className="grid grid-cols-3">
          {datax.map((datas) => (
            <div key={datax.indexOf(datas)}>
              <video className="m-2 w-20 h-10" src={datas.embed_url}></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
