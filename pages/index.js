import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaTrashAlt, FaCheck } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const Home = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [active, setActive] = useState(false)
  const [buttonActive, setButtonActive] = useState(true)

  const handleTodo = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo.trim() === '') {
      alert('Please enter a todo')
      return
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { text: todo, id: uuidv4(), active: active }]
    })
    setTodo('')
  }

  const handleActive = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.active = !todo.active
        }
        return todo
      })
    )
  }

  const handleButtonActive = () => {
    setButtonActive(true)
  }

  const handleButtonCompleted = () => {
    setButtonActive(false)
  }

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <Head>
        <title>Daniel TODO App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='justify-center items-center flex flex-col h-screen overflow-hidden bg-gradient-to-br from-purple-200 to-green-200 bg-fixed bg-no-repeat bg-cover p-20 md:p-60'>
          <div className='max-w-400 w-full mx-auto bg-white font- var(--font) rounded-lg text-15 text-gray-700  shadow-lg p-10'>
            <h1 className='font-extrabold text-center text-6xl md:text-4xl pb-10'>
              Todo App
            </h1>

            <div className=' flex justify-end'>
              <button className='mr-6' onClick={handleButtonActive}>
                Active
              </button>
              <button
                className='completedButton'
                onClick={handleButtonCompleted}
              >
                Completed
              </button>
            </div>
            <div>
              <form className='pb-6' onSubmit={handleSubmit}>
                <input
                  className='input'
                  type='text'
                  placeholder='Enter Todo'
                  value={todo}
                  onChange={handleTodo}
                />
                <button className='submit ' type='submit'>
                  Submit
                </button>
              </form>
            </div>

            <div className='todos '>
              {todos
                .filter((todo) => (buttonActive ? !todo.active : todo.active))
                .map((todo) => (
                  <div
                    key={todo.id}
                    className={`todo ${todo.active ? 'active' : 'complete'} `}
                  >
                    <div className='todo-text'>{todo.text}</div>
                    <div className='todo-icons flex justify-end'>
                      <FaCheck
                        className='icon'
                        onClick={() => handleActive(todo.id)}
                      />
                      <FaTrashAlt
                        className='icon'
                        onClick={() => handleDelete(todo.id)}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
