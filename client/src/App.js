import { Route } from "react-router-dom"
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Listado from './components/Listado/Listado'

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/form"} component={Form} />
      <Route exact path={"/listado"} component={Listado} />
    </div>
  );
}

export default App;
