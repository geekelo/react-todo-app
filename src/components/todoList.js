import TodoItem from './todoItem';

const TodoList = ({
  todoProps, clickFunction, delFunction, setUpdate,
}) => (
  <ul>
    {
      todoProps.map((each) => (
        <TodoItem
          todoItem={each}
          triggerClickFunction={clickFunction}
          triggerDelFunc={delFunction}
          setUpdate={setUpdate}
        />
      ))
      }
  </ul>
);

export default TodoList;
