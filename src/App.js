import React from 'react';
import ErrorBoundry from './Day8/ErrorBoundry';
import Car from './Day8/Car';
import Trycatch from './Day8/Trycatch';
import ComponentLifeCycle from './Day8/ComponentLifeCycle';
// import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
// import List from './Day6/List';
// import Demo from './Day6/Demo';
// import List1 from './Day6/List1';
// import BasicButtons from './Day6/Matrial';
function App() {
  return (
    <div >
   {/* <List></List>
   <Demo></Demo>
   <List1></List1> */}
   {/* {/* <BasicButtons></BasicButtons> * */}
{/* <ErrorBoundry>
  <Car carname="THAR"></Car>
</ErrorBoundry> */}

{/* <ErrorBoundry>

  <Car carname="JCB"></Car>
</ErrorBoundry> */}
{/* <Trycatch fruit="onion"></Trycatch> */}
<ComponentLifeCycle></ComponentLifeCycle>
    </div>
  );
}
export default App;