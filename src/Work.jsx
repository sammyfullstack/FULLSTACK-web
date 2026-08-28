// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


// import { useState } from 'react';

// function App() {
//   // 1. This is 'useState' (State). It tells React to remember a number that can change.
//   const [sneakerCount, setSneakerCount] = useState(0);

//   // 2. These are standard JavaScript functions to handle clicking the buttons
//   const addSneaker = () => {
//     setSneakerCount(sneakerCount = + 1);
//   };

//   const removeSneaker = () => {
//     if (sneakerCount > 0) {
//       setSneakerCount(sneakerCount - 1);
//     }
//   };

//   // 3. This is JSX. It looks like HTML, but it allows us to inject JS variables using {}
//   return (
//     <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px' }}>
//       <h1>Sammy Soles Inventory Tracker</h1>
      
//       <div style={{ fontSize: '24px', margin: '20px 0' }}>
//         Shoes in Cart: <strong>{sneakerCount}</strong>
//       </div>

//       <div>
//         <button 
//           onClick={removeSneaker} 
//           style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px', cursor: 'pointer' }}
//         >
//           Remove Shoe
//         </button>
        
//         <button 
//           onClick={addSneaker} 
//           style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
//         >
//           Add Shoe
//         </button>
//       </div>

//       {sneakerCount >= 5 && (
//         <p style={{ color: 'green', marginTop: '20px', fontWeight: 'bold' }}>
//           🔥 Nice! You're building up stock.
//         </p>
//       )}
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';

// function app(){
// const [setCountNumber, countNumber] = useState(0);

//   return(
//   const addNumber = () => {
//     setCountNumber(countNumber + 1)
//   }
//   )
// }

import './App.css'
import Parent2 from './components/Parent2';
import Sneaker from "./Sneaker"
import Login from "./Login"
import Count from "./Count"''

function App(){
  const username = "sammy"
  const userLoggedIn = true;

  return (
    <>
      <h1>This is a login page</h1>
      <Parent2 username={username} />
      
      <Sneaker />
      <Login/>
      <Count/>
      {userLoggedIn ? <h1>Welcome</h1> : <h1>Log in</h1>}
    </>
  );
}

export default App;


// import {useState} from "react";
   
// function Sneaker(){
//   const [sneakerCount, setSneakerCount] = useState(0);

//   const addSneaker = ()=>{
//     setSneakerCount(sneakerCount + 1)
//   }

//   const removeSneaker = ()=>{
//     setSneakerCount(sneakerCount - 1)
//   }
//   return(
//     <div>
//       <h1 style={{fontSize: "40px"}}>Sammy Soles</h1>
//       <p>Cart: <strong>{sneakerCount}</strong></p>
//       <button onClick={addSneaker}
//       style={{padding: "5px", borderRadius: "4px", backgroundColor: "gold"}}>Add cart</button>
//       <button onClick={removeSneaker}
//       style={{padding: "5px", borderRadius: "4px", backgroundColor: "gold"}}>Remove cart</button>
//     </div>
//   )
// }

// export default Sneaker;

