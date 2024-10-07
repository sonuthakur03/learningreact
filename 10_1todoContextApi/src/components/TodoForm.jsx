import React, {useState} from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo, setTodo] = useState('');
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return;

        addTodo({todo, completed: false});
        setTodo('');
    }


    return (
        <form className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-[#e94560] rounded-l-lg px-4 py-2 outline-none bg-[#1f4068] text-white placeholder:text-gray-400 transition duration-150 focus:ring-2 focus:ring-[#e94560]"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button 
                type="submit" 
                className="rounded-r-lg px-4 py-2 bg-[#00a8e1] text-white hover:bg-[#0091c2] transition duration-300"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
