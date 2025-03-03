import logo from './logo.svg';
import './App.css';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import RenderingLists from './components/RenderingLists';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';

function App() {
  return <div className="App">
      <UseStateWithArrays />
  </div>;
}

export default App;
