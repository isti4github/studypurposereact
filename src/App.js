
import './App.css';
import ClassComponent from './ClassComponent';
import ConstructorCheck from './ConstructorCheck';
import DemoProps from './DemoProps';
import EventHandling from './EventHandling';
import FormHandling from './FormHandling';

import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">

      <h1 style={{color:"green"}}>Function and Class Component | Idea about state and Hooks</h1>
      <FunctionalComponent/>
      <hr/>
      <ClassComponent/>

      <h1 style={{color:"green"}}> Props Example</h1>
      <DemoProps user = "Hey I am props value!"/>

      <h1 style={{color:"green"}}> Constructor Check</h1>
      <ConstructorCheck/>

      <h1 style={{color:"green"}}> Form Handling Test</h1>
      <FormHandling/>

      <h1 style={{color:"green"}}> Event Handling Test</h1>
      <EventHandling/>
    </div>
  );
}

export default App;
