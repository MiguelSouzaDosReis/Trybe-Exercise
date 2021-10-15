import './App.css';

function PrimeiroClick() {
  console.log('Clicou no botão!')
}
function SegundoClick() {
  console.log('Clicou 2 vezes no botão!')
}
 function PassoOClick() {
  console.log('Passou o Click')
} 

function App() {
  return (
    <div className="App">
 <button onClick={PrimeiroClick}>botão 1</button>
 <button onDoubleClick={SegundoClick}>botão 2</button>
 <button onMouseOver={PassoOClick}>botão 3</button>
    </div>
  );
}

export default App;
