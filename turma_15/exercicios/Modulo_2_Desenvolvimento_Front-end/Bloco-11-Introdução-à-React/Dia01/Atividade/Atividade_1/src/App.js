import './App.css';
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const valor = ['compromisso 1', 'compromisso 2'] 
function App() {
  return (
    valor.map((element) => Task(element))
  );
}

export default App;
