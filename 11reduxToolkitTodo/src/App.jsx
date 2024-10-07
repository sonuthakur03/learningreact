import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
