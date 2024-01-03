import { useState } from 'react';
import Card from './components/Card'
import fetchData from './api/weatherData';
import initialData from './helpers/initialData';

const App = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {

    event.preventDefault();

    fetchData(city).then((response) => {
      setData(response);

      console.log(response)
    })
  }
  
  return (
    <div 
      className="
        flex
        flex-col
        w-full 
        h-screen 
        items-center 
        p-4
        sm:justify-center
      "
    >
      <form 
        onSubmit={ handleSubmit } 
        className="
          fixed 
          bottom-0 
          w-full 
          flex 
          p-4 
          sm:relative justify-center"
      >
        <input 
          type="text" 
          placeholder="Cidade" 
          className="
            p-3 
            rounded-lg 
            outline-none
            w-full
            flex-1
            sm:max-w-[300px]
          "
          value={city}
          onChange={({target: { value }}) => setCity(value)}
        />
        <button 
          type='submit'
          className="
            p-3
            rounded-lg
            bg-blue-600
            ml-3
            text-white
            font-bold
          "
        > 
          Pesquisar
        </button>
      </form>

      <Card data={data}/>
    </div>
  )
}

export default App;