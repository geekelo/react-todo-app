import TodoItem from "./todoItem";

const TodoList = ({ todoProps, clickFunction, delFunction, setUpdate }) => {

  return(
    <ul>
      { 
      todoProps.map((each) => (<TodoItem
        todoItem={each}
        triggerClickFunction={clickFunction} 
        triggerDelFunc={delFunction}
        setUpdate={setUpdate}
        />))
      }     
    </ul>
  )
}

export default TodoList;