// import logo from './Screenshot (6).png';
// import './App.css';


// function App() {
//     return (
//         <div className='main'>
//      <img src="https://cdn.vectorstock.com/i/preview-1x/94/47/heart-logo-line-flat-web-app-icon-vector-20579447.webp" alt="vic" width='50' height='60'></img>
//    <h1>LOGIN</h1>
//     <table>
//    <tr> <td><label>
        
//         UserName
//       </label>
//       </td>
//       <input type='test'></input></tr>
//       <br></br>
//       <br></br>
//     <tr> <td><label>Password</label></td>
//       <input type='password'></input></tr>
//       <br></br>
//       <br></br>
//    <tr> <td><label>Age</label></td>
//       <input type='test'></input></tr>
//       <br></br>
//       <br></br>
//      <tr> <td><label>City</label></td>
//       <input type='test'></input></tr>
//       <br></br>
//       <br></br>
//     <tr><td><label>Email</label></td>
//       <input type='test'></input></tr>
//       <br></br>
//       <br></br>
//      <tr><td><label>Phone Number</label></td>
//       <input type='phone number'></input></tr>
//       <br></br>
//       <br></br>
//     <tr> <td><label>Select your Country</label></td>
//       <input type='test'></input></tr>
//       <br></br>
//       <br></br>
//       <div className='but'>

//       <button>Submit</button>
//       </div>
//     </table>
//    </div>
//   );
// }

// export default App;

import ClassComponents from "./Components/ClassComponents";
import FunctionComponents from "./Components/FunctionComponents";
import OneExport from "./Components/OneExport";
import PropsFunctional from "./Day4/PropFunctional";
import PropsClass from "./Day4/PropsClass";
import StateClassCom from "./Day4/StateClassCom";
import StateFunction from "./Day4/StateFunction";
import StateHoldObjects from "./Day4/StateHoldObjects";
export default function App(){
  return(
    <div>
      {/* <FunctionComponents/>
      <ClassComponents></ClassComponents>
      <OneExport></OneExport> */}
      <PropsFunctional name="Vicky" age="19"></PropsFunctional>
      {/* <PropsFunctional age="19"></PropsFunctional> */}
      <PropsClass sport="cricket"></PropsClass>
      <StateClassCom ></StateClassCom>
      <StateFunction></StateFunction>
      <StateHoldObjects></StateHoldObjects>
    </div>
  )
}
