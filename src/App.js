import './App.css';
import MyNavbar from './components/mynavbar/MyNavbar';
import Home from './components/home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
    </div>
  );
}

export default App;
