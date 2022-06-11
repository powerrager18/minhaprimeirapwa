import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import NotFound from './NotFound';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Calculo from './Calculo';
import CalculoIMC from './CalculoIMC';
import CalculoPorcentagem from './CalculoPorcentagem';

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/calculo/Porcentagem" element={<CalculoPorcentagem/>}/>
        <Route exact path="/sobre" element={<Sobre/>}/>
        <Route exact path="/calculo" element={<Calculo/>}/>
        <Route exact path="/calculoIMC" element={<CalculoIMC/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
