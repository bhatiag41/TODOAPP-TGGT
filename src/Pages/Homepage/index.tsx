import React from 'react';
import { todoStore } from '../../State/TodoStore';
import TodoList from '../../Component/Base/Todolist';
import FormInput from '../../Component/Base/forminput';

function Index() {
  const todoState = todoStore();

  const randomId = (): number => {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const addTodo = (todo: string, priority: 'high' | 'medium' | 'low') => {
    todoState.addTodo({
      id: randomId(),
      todo,
      priority,  
      isDone: false,
    });
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">TODO</h1>
        <p className="description">From office tasks, to household chores, and personal memos - this to-do list is a great way to keep track of them all.</p>
        <FormInput addTodo={addTodo} />
        <TodoList />
      </div>
    </div>
  );
}

export default Index;

