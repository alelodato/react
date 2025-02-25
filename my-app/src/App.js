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

function App() {
  return <div className="App">
      <ControlledForm />
  </div>;
}

export default App;
