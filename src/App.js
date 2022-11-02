import axios from 'axios';
import './App.css';
import AppRouter from './router/AppRouter';

function App() {

 axios(`https://api.edamam.com/search?q=chocolate&app_id=0e2fcaf4&app_key=2f7fa048d0e6794e985e02b30681b2b5&mealType=dinner`)
  .then(resp => {
  
      console.log(resp.data);
  });
  
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
