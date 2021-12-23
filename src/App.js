import logo from './logo.svg';
import './App.css';
import AddUser from './components/Todo';
import ShowData from './components/ShowData';

function App() {
  return (
    <div className="App">
  <AddUser/>
  <ShowData/>
    </div>
  );
}

export default App;
