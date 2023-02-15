import { useState, useEffect } from 'react'
import axios from 'axios'
export const FirstPage = () => {
  const [enter, notenter] = useState(false)
  const [datax, Setdata] = useState([])

  console.log(datax)
  useEffect(() => {
    axios
      .get('https://adultvideosapi.com/api/videos/get-all', {
        headers: {
          'x-api-key': 'Em8Byk3UYix4fUltnFd4xTfb6mkoVBspyp'
        }
      })
      .then((response) => {
        Setdata(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
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
        hello world
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
