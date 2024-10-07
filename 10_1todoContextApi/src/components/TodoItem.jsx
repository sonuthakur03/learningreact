import React, {useState} from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);

    const {updateTodo, removeTodo, toggleComplete} = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo : todoMsg});
        setIsTodoEditable(false);
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    }
    return (
        <div
            className={`flex border border-[#e94560] rounded-lg px-3 py-1.5 gap-x-3 shadow-md transition duration-300 text-white ${
                todo.completed ? "bg-[#4caf50]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-[#e94560] px-2" : "border-transparent"
                } ${todo.completed ? "line-through text-gray-300" : "text-white"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-[#e94560] justify-center items-center bg-[#1f4068] hover:bg-[#00a8e1] transition duration-300 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-[#e94560] justify-center items-center bg-[#1f4068] hover:bg-red-600 transition duration-300"
                onClick={() => removeTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

