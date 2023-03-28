import { useReducer } from 'react';
import reducer from './reducer';
import './App.css';

const initialState = {
  data: '',
  loading: true,
  error: '',
};

function App() {
  const [state, action] = useReducer(reducer, initialState);
  const fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((res) => console.log('get dog obj: ', res))
      .catch((e) => console.log('Error: ', e));
  };
  return (
    <div className='App'>
      <button className='fetchBtn' onClick={fetchDog}>
        Get Random Dog
      </button>
    </div>
  );
}

export default App;
