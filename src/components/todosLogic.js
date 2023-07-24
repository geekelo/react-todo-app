import { useState } from 'react'
import TodoList from './todoList';
import InputTodo from './todoInput';

const TodosLogic = () => {
  const [ todos, setTodos ] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ])

  const addNewItem = (newtitle) => {
   const newTodo = {
      id: todos.length + 1,
      title: newtitle,
      completed: false,
    };
    
    setTodos([...todos, newTodo])
  }

  const handleClick = (id) => {
    setTodos((prevState) => {
      return prevState.map((each) => {
        if (each.id === id) {
          return {
            ...each,
            completed: !each.completed
          }
        }
        return each;
      })
    })
  }

  const delTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((each) => {
        return each.id !== id
      }
      )
    })
  }

  const setUpdate = (newTitle, titleId) => {
    setTodos((prevState) => {
      return prevState.map((each) => {
        if (each.id === titleId) {
          return {
            ...each,
            title: newTitle
          }
        }
        return each;
      })
    })
  }

  return (
    <div>
      <InputTodo addNewItem={addNewItem} />
      <TodoList todoProps={todos} setTodo={setTodos} clickFunction={handleClick} delFunction={delTodo} setUpdate={setUpdate} />
    </div>
  );
};

export default TodosLogic;
