import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './todoList';
import InputTodo from './todoInput';

const TodosLogic = () => {
  function getStoredItems() {
    const storedItems = localStorage.getItem('todos');
    const temp = JSON.parse(storedItems);
    return temp || [];
  }

  const [todos, setTodos] = useState(getStoredItems());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addNewItem = (newtitle) => {
    const newTodo = {
      id: uuidv4(),
      title: newtitle,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleClick = (id) => {
    setTodos((prevState) => prevState.map((each) => {
      if (each.id === id) {
        return {
          ...each,
          completed: !each.completed,
        };
      }
      return each;
    }));
  };

  const delTodo = (id) => {
    setTodos((prevState) => prevState.filter((each) => each.id !== id));
  };

  const setUpdate = (newTitle, titleId) => {
    setTodos((prevState) => prevState.map((each) => {
      if (each.id === titleId) {
        return {
          ...each,
          title: newTitle,
        };
      }
      return each;
    }));
  };

  return (
    <div>
      <InputTodo addNewItem={addNewItem} />
      <TodoList
        todoProps={todos}
        setTodo={setTodos}
        clickFunction={handleClick}
        delFunction={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default TodosLogic;
