import React, { Component } from 'react';
import './App.css';
// import Kom1 from './components/StateFull';
// import Kom2 from './components/StateLess';
// import Biodata from './components/BiodataProps';
// import Biodata from './components/BiodataState';
// import FormInput from './components/FormInput';
// import Counter from './components/Counter';
import Blog from './components/AksesAPI';
// import DataLocal from './components/LocalAPI';


// function App() {
class App extends Component {
  render() {  
    return (
      <div>
        {/* <Kom1 /> */}
        {/* <Biodata nama="Dwi Irawan" alamat="Kebumen" hobi={<Hobi />}/> */}
        {/* <FormInput /> */}
        <Blog />
        {/* <DataLocal /> */}
        {/* <Counter /> */}
        {/* <Kom2 /> */}
      </div>
    );
  }
}
// const Hobi = () => {
//   return(
//       <ul>
//           <li>Membaca</li>
//           <li>Bersepeda</li>
//       </ul>
//   );
// };
export default App;
