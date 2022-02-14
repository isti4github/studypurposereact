
import './App.css';
import ClassComponent from './ClassComponent';
import DemoProps from './DemoProps';

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
    </div>
  );
}

export default App;
