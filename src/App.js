import { useReducer } from 'react';
import reducer from './reducer';
import './App.css';

const initialState = {
  data: '',
  loading: false,
  error: '',
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = state;
  const fetchDog = () => {
    dispatch({ type: 'FETCH_START' });
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.message });
      })
      .catch((e) => {
        dispatch({ type: 'FETCH_ERROR', payload: e });
      });
  };
  return (
    <div className='App'>
      <div className='container'>
        <button className='fetchBtn' onClick={fetchDog} disabled={loading}>
          Get Random Dog
        </button>
        {data && (
          <div>
            <img src={data} alt='' />
          </div>
        )}
        {error && ( <p>{error}</p> )}
      </div>
    </div>
  );
}

export default App;
