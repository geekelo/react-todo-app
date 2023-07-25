import React from 'react';
import Header from './components/todoheader'; // assuming correct file path and capitalization
import './App.css';
import TodosLogic from './components/todosLogic';

function App() {
  const item = {
    title: 'To Dos',
    description: 'Items will be preserved in browser storage',
  };

  return (
    <div className="wrapper">
      <div className="todos">
        <Header headingProp={item} />
        <TodosLogic itemProp={item} />
      </div>
    </div>
  );
}

export default App;
