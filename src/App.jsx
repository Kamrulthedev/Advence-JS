
import Actor from './Actor';
import './App.css'
import Evant from './Evant';
import Singer from './Singer';


function App() {
  const acotrs = ['Sakib khan', 'salman khan', 'Bappa Raj', 'Sojon khan', 'Mojibur Ruhanman'];

  const singers = [
    { name: 'Dr. Mahafujur', age: 68 },
    { name: 'SImran', age: 34 },
    { name: 'Samz Vai', age: 27 },
    { name: 'monjerin', age: 28 },
    { name: 'Pritom vai', age: 54 }
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <Evant></Evant>
      {
        singers.map(singer => <Singer singer={singer} key={singer.id}></Singer>)
      }


      <Actor></Actor>
      {
        acotrs.map(actor => <Actor name={actor} key={actor.id}></Actor>)
      }


      {/* <Person>j</Person> */}
      {/* <Student></Student> */}
    </>
  )
}

// function Person() {
//   return (
//     <h1>I am a Person</h1>
//   )
// }

// function Student() {
//   return (
//     <div>
//       <h1>I am a Students</h1>
//       <p>age: 39</p>
//       <p>address: Cox`s Bazer</p>
//     </div>
//   )
// }





export default App
