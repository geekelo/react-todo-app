import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = ({
  todoProps, clickFunction, delFunction, setUpdate,
}) => (
  <ul>
    {
      todoProps.map((each) => (
        <TodoItem
          key={each.id} // Add a unique "key" prop for each TodoItem
          todoItem={each}
          triggerClickFunction={clickFunction}
          triggerDelFunc={delFunction}
          setUpdate={setUpdate}
        />
      ))
    }
  </ul>
);

TodoList.propTypes = {
  todoProps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  clickFunction: PropTypes.func.isRequired,
  delFunction: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoList;
