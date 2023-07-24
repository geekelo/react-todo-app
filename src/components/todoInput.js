import { useState } from "react";

const InputTodo = ({ addNewItem }) => {
  const [ title, setTitle ] = useState('');
  const [ message, setMessage ] = useState('');

  const updateTitle = (e) => {
    setTitle( e.target.value )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    if (title.trim()) {
      addNewItem(title);
      setTitle('');
      setMessage('');
    }
    else {
      setMessage('Add a new message');
    }
  }

  return (
    <div>
      <form  onClick={(e) => {handleSubmit(e)}}>
        <input type="text" className="input-text" placeholder="Add todo..."
        onChange={ (e) => {updateTitle(e)} }
        />
        <button className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">
        {message}
      </span>
    </div>
  );
};
export default InputTodo;