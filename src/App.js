import './App.css';
import MyNavbar from './components/mynavbar/MyNavbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
