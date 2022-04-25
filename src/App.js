import Router from './pages/Router';
import './App.css';




/*const chats = [
  {
    name: 'Работа',
    message: 'Срочно явиться к директору',
  },
  {
    name: 'Дом',
    message: 'Милый, жду домой к 8',
  }
]*/

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Router />
      </header>
    </div>
  );
}

export default App;
