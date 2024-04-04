import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
 const data = useLoaderData()
  // const [data, setData] = useState([])
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/sonuthakur03').then(res => res.json()).then(data => setData(data))
  //   }, [])
    


  return (
    <div className='bg-gray-700 text-white text-3xl p-4 font-bold shadow-lg rounded-md  mx-auto my-8 border-2 border-gray-400 hover:border-gray-600 focus:shadow-outline focus:outline-none text-center flex justify-center items-center gap-3'>
    <img src={data.avatar_url} alt="github pic" width={300} className='rounded-full'/>
    Github Followers: {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
 const response = await fetch('https://api.github.com/users/sonuthakur03')
 return response.json()
}