import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Addtocart from './Components/Addtocart';
import Blogs from './Components/Blogs';
import {Homepage} from './Homepage/Homepage';

function App() {
  return (
    <div className="App">
<Homepage />
  {/* <Addtocart/> */}
    </div>
  );
}

export default App;
