import { HiOutlineTrash } from 'react-icons/hi';

const TodoItem = ({ todoItem, triggerClickFunction, triggerDelFunc }) => {
  return (
    <li>
        <input
        type="checkbox"
        checked={todoItem.completed}
        onChange={() => {
          triggerClickFunction(todoItem.id);
          console.log(todoItem);
        }}
      />
      {todoItem.title}
      <button>
      <HiOutlineTrash  size={22}
      onClick={() => {triggerDelFunc(todoItem.id)}}/>
      </button>
    </li>
  );
};

export default TodoItem;
