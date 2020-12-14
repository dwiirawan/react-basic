import './App.css';
import Kom1 from './components/StateFull';
import Kom2 from './components/StateLess';
import Biodata from './components/Biodata';
import Hobi from './components/Hobi';


function App() {
  return (
    <div>
      <Kom1 />
      <Biodata nama="Dwi" alamat="Kebumen" />
      <Kom2 />
      <Hobi />
    </div>
  );
}

export default App;
