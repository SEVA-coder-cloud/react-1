// import './App.css';
// import Cart from './components/Cart';
// import Link from './components/Link';
// import time from './components/time';
// import time from './components/Favoritebook';
// import time from './components/weatcher'
// import time from './components/ttt'
// import time from './components/namenlname'
// function App() {
//   return (
//     <div className="App">
//       <h1>Kaneki</h1>
//       <Cart />
//       <Link />
//     </div>
//   );
// }

// export default App;
import './App.css';
import data from "./painting.json";
import Gallery from './components/galery/Gallery';

function App() {
  return (
    <div className="App">
      <Gallery items={data} />
    </div>
  );
}

export default App;
