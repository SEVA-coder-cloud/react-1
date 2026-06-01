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
// import './App.css';
import { UserList } from './components/users/Userslist';
// import data from "./painting.json";
// import Gallery from './components/galery/Container';
import User from './components/users/User';
import data from "./components/users/data.json"
function App() {
  return (
  
      <UserList users = {data}/>
  
  );
}

export default App;
