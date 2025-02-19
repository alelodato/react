import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps name="Alessio!" age="I can see you're 30 years old;" greeting="nice to meet you!!" />
    </div>
  );
}

export default App;
