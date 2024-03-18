import './App.css'
import Card from './components/card'

function App() {
     let jacket = 'https://images.pexels.com/photos/20582302/pexels-photo-20582302/free-photo-of-woman-eating-pizza.jpeg?auto=compress&cs=tinysrgb&w=600';
     let jeans = 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600'
  return (
    <>
      <Card productName='Utility Jacket' price='$110' src={jacket} />
      <Card productName='Jeans' price='$290' src={jeans} />

    </>
  )
}

export default App
