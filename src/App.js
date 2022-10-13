import { useState , useEffect} from 'react';
// import logo from "./logo.svg";
import CardList from './components/cardlist/cardlist.jsx';
import Searchbox from './components/searchbox/searchbox.jsx'
import "./App.css";
const App = ()=>{
  console.log('render');
  const [searchfield,setsearchfield] = useState('');
  const [monsters,setmonsters] = useState([]);
  const [filteredmonsters,setfilteredmonsters] = useState([]);

  useEffect(()=>{
    const newfilteredmonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchfield);
    });
    console.log('useffect1');
    setfilteredmonsters(newfilteredmonsters);
    
  },[monsters,searchfield]);

  useEffect(()=>{
    console.log('useffect');
    fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((users) => {
            setmonsters(users);
          }
          );
  },[]);
  console.log('after');
 const onSearchChange = (event) => {
        console.log(event.target.value);
        const searchfieldstring = event.target.value.toLocaleLowerCase();
        setsearchfield(searchfieldstring);
      }
      
  return (
          <div className="App">
          <h1 className='app-title'>MONSTERS ROLODEX</h1>
            <Searchbox onSearchHandler ={onSearchChange} placeholder='search-monsters'/>
            <CardList monsters = {filteredmonsters} />
    
          </div>
        );

}
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       str: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return { monsters: users };
//         }
//         // () => {
//         //   console.log(this.state);
//         // }
//       ));
      
//   }
//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const str = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { str: str };
//     });
//   }
//   render() {
//     const {monsters,str} = this.state;
//     const {onSearchChange} = this;
//     const filteredmonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(str);
//     });
//     // const filteredmonsters = [];
//     return (
//       <div className="App">
//       <h1 className='app-title'>MONSTERS ROLODEX</h1>
//         <Searchbox onSearchHandler ={onSearchChange} placeholder='search-monsters'/>
//         <CardList monsters = {filteredmonsters} />

//       </div>
//     );
//   }
// };

export default App;
