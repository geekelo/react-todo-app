import React, { useState } from 'react';
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi';
import styles from './styles/todoItem.module.css';

const TodoItem = ({
  todoItem, triggerClickFunction, triggerDelFunc, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const [viewmode, setViewMode] = useState({ display: 'flex' });
  const [editmode, setEditMode] = useState({ display: 'none' });

  const triggerEditable = function () {
    if (editing) {
      setViewMode({ display: 'flex' });
      setEditMode({ display: 'none' });
      setEditing(false);
    } else {
      setViewMode({ display: 'none' });
      setEditMode({ display: 'flex' });
      setEditing(true);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewmode}>
        <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={() => {
            triggerClickFunction(todoItem.id);
            console.log(todoItem);
          }}
        />
        {todoItem.title}
        <div>
          <button>
            <HiPencilAlt size={22} onClick={triggerEditable} />
          </button>
          <button>
            <HiOutlineTrash size={22} onClick={() => { triggerDelFunc(todoItem.id); }} />
          </button>
        </div>
      </div>
      <input
        type="text"
        value={todoItem.title}
        className={styles.textInput}
        style={editmode}
        onChange={(e) => { setUpdate(e.target.value, todoItem.id); }}
        onKeyDown={(e) => { if (e.key === 'Enter') { triggerEditable(); } }}
      />
    </li>
  );
};

export default TodoItem;
