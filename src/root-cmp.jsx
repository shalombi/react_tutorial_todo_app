import logo from './logo.svg';
import './App.css';
import { TodoApp } from './pages/todo-app';

export const RootCmp = () => {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

