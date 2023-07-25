import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = ({ addNewItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addNewItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Add a new message');
    }
  };

  return (
    <div>
      <form onSubmit={(e) => { handleSubmit(e); }}>
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          onChange={(e) => { updateTitle(e); }}
          value={title}
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle size={22} />
        </button>
      </form>
      <span className="submit-warning">
        {message}
      </span>
    </div>
  );
};

InputTodo.propTypes = {
  addNewItem: PropTypes.func.isRequired,
};

export default InputTodo;
