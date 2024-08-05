import './App.css';
import Msg from './Msg.js'


const Descripcion = () => {

  return (<p>app del curso fullstack</p>)

}

function App() {

  const mensaje = "mensaje "
  
  const a = 2
  const b = 3

  return (
    <div className="App">
      <h1>Titulo de la app</h1>
      <strong>estamos trabajando en ello </strong>

            {mensaje + ' evaluamos en JSX'} 
            <br/>
            {a+b}
            <br/>
            {+ new Date()}

            <Msg color='red' message='estamos en esto'/>
            <Msg color='green' message='este otro mensaje'/>
            <Msg color='blue' message='ultimo msg'/>
            <Descripcion/>

        <div>      
          <p>El resultado es: {a+b}</p>
          </div>
    </div>
  );
}

export default App;
