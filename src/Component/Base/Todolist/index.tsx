import React from 'react';
import { todoStore } from '../../../State/TodoStore';


const TodoList: React.FC = () => {
  const todos = todoStore((state) => state.todos);
  const todoState = todoStore();

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case "high":
        return { backgroundColor: "#f8d7da" }; 
      case "medium":
        return { backgroundColor: "#fff3cd" }; 
      case "low":
      default:
        return { backgroundColor: "#d4edda" }; 
    }
  };

  return (
    <div className="todo-list">
      {todos.map((t) => (
        <div key={t.id} className="todo-item" style={getPriorityStyle(t.priority)}>
          <span>{t.todo}</span>
          <button
            className="remove-button"
            onClick={() => todoState.removeTodo(t.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

