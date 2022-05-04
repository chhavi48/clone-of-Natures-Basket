import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Slider from './Components/Slider';
import Cards from './Components/Cards';
import Events from './Components/Events';
function App() {
  return (
    <div className="App">
    <h1>hello</h1>
    <Slider/>
  <Cards/>
  <Events/>
    </div>
  );
}

export default App;
