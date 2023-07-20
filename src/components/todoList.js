import TodoItem from "./todoItem";

const TodoList = ({ todoProps, clickFunction, delFunction }) => {

  return(
    <ul>
      { 
      todoProps.map((each) => (<TodoItem todoItem={each} triggerClickFunction={clickFunction}  triggerDelFunc={delFunction} />))
      }     
    </ul>
  )
}

export default TodoList;