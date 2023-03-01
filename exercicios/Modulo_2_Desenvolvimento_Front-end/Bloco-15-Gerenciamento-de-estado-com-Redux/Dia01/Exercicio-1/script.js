
const previous = document.getElementById('previous')
const next = document.getElementById('next')
const ramdom = document.createElement('button'); ramdom.id ='ramdom';
ramdom.innerText = 'ramdom'
const container = document.getElementById('container')
container.appendChild(ramdom)

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}




previous.addEventListener('click', () => {
  store.dispatch({type: 'previous'})
})

next.addEventListener('click',() => {
  store.dispatch({type: 'next'})
})

ramdom.addEventListener('click', () => {
  store.dispatch({type: 'ramdom'})
})


const reducer = (state=ESTADO_INICIAL, acttion) => {

  switch (acttion.type) {
    case 'next':
    return {
      ...state,
      index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
    }
    case 'previous':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      }
      case 'ramdom':
        return{
          ... state,
          colors:[...state.colors, criarCor()],
          index: state.colors.length,
        }
      default:
        return state
      }
      
    }
    
    const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

     store.subscribe(() => {
      const { colors, index } = store.getState();
      document.getElementById('value').innerHTML = colors[index];
      document.getElementById('container').style.backgroundColor = colors[index];
    });

