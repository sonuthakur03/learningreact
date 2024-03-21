import React from 'react'

export default function Checkbox(props) {
  return (
    <>
    <div className='mx-5 my-2 inline-block'>
    <input 
    type="checkbox" 
    name={props.name} 
    id={props.id}
    className='mx-1 my-2 outline-none cursor-pointer'
    />
    <label
    className='text-white mx-1' 
    htmlFor={props.id}>{props.name}</label>
    </div>
    </>
  )
}
