import { useState } from 'react'

function App() {
  const [src, setSrc] = useState("https://images.pexels.com/photos/20582302/pexels-photo-20582302/free-photo-of-woman-eating-pizza.jpeg?auto=compress&cs=tinysrgb&w=600")

  return (
      <>
        <div
        className='w-full h-screen flex flex-wrap justify-center bg-black'
        >
          <div className='h-96 w-96'>
              <img src= {src} alt="" className='h-96 w-96 duration-300  rounded-full object-cover' />
          </div>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3'>
              <button 
                onClick={() => setSrc("https://images.pexels.com/photos/20582302/pexels-photo-20582302/free-photo-of-woman-eating-pizza.jpeg?auto=compress&cs=tinysrgb&w=600")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "red"}}
                >
                  Jacket
                </button>
                <button 
                onClick={() => setSrc('https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600')}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{backgroundColor: "blue"}}
                >
                  Jeans
                </button>
          </div>
        </div>
      </>
  )
}

export default App
