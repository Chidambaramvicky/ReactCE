// import React from 'react';
// import ErrorBoundry from './Day8/ErrorBoundry';
// import Car from './Day8/Car';
// import Trycatch from './Day8/Trycatch';
// import ComponentLifeCycle from './Day8/ComponentLifeCycle';
// import GetAxios from './Components/Day11/GetAxios';
// import PostAxios from './Components/Day11/PostAxios';
// import CounterComponent from './Thunk/CounterComponent';
// import { Provider } from 'react-redux';
// import store from './Thunk/Store';
// import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
// import List from './Day6/List';
// import Demo from './Day6/Demo';
// import List1 from './Day6/List1';
// import BasicButtons from './Day6/Matrial';
// function App() {
//   return (
//     <div >
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
{/* <ComponentLifeCycle></ComponentLifeCycle> */}
{/* <GetAxios></GetAxios> */}
{/* <PostAxios></PostAxios> */}
{/* <Provider></Provider> */}
import React from "react";
import { Provider } from "react-redux";
import store from "./Thunk/Store";
import CounterComponent from "./Thunk/CounterComponent";
function App(){
return(
  <div>
    <Provider store={store}>
      <CounterComponent/>
    </Provider>
  </div>
);
}
export default App;