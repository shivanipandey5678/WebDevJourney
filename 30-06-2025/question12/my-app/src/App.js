import logo from './logo.svg';
import './App.css';

function App() {
  let array=["react","css","javascript"];
  const vari="hik"
  return (
    <div className="App">
        <ul>
          {array.map((el,i)=>{
            return <li key={i} >{el}</li>
          })}
        </ul>
    </div>
  );
}

export default App;
