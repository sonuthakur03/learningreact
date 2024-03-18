import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username : 'sonu',
    age : '19'
  }
  let newArr = [1, 2, 3]
  return (
    <> 
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username='chaiaurcode' someObj={myObj} arr={newArr} btnText="click me"/>   
     <Card username='Sonu' btnText="visit me"/>
     {/* // passing values for props to work with */}
    </>
  )
}

export default App
