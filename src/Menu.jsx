import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">    
    <NavLink className="navbar-brand" to="/">Minha APP</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">          
          <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rotas/Telas
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
                <NavLink className="dropdown-item" to="/calculo/Porcentagem">Calculadora de porcentagem</NavLink>
            </li>
            <li>
                <NavLink className="dropdown-item" to="/calculo">Calculadora basica</NavLink>
            </li>            
            <li>
                <NavLink className="dropdown-item" to="/calculoIMC">Calculadora de IMC</NavLink>
            </li>
            <li><hr className="dropdown-divider"/></li>
            <li>
                <NavLink className="dropdown-item" to="/sobre">Sobre</NavLink>
            </li>

          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
};
export default Menu;
