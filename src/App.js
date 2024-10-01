import logo from './logo.svg';
import './App.css';

import './TaskManager';
import TaskManager from './TaskManager';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
    <TaskManager />
    </Provider>
  )
}

export default App;
