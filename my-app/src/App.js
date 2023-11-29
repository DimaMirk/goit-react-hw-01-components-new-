import './App.css';
import Statistic from './components/Statistic'
import data from './data.json'

function App() {
  return (
    <>
       <Statistic
        data={data}
      />
      <Statistic
        title="Upload stats" 
        data={data}
      />
    </>
   
  );
}

export default App;
