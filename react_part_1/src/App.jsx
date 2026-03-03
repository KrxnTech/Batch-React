import "./App.css"
import Title from "./Component's/Title.jsx"
// import {Title} from "./Component's/Title.jsx"
import ProductTab from "./Component's/ProductTab.jsx";


// OUR FIRST COMPONENT
// function Title() {
//   return (
//     <h1 className="hello_world">HELLO WORLD</h1>
//   )
// }


// OUR SECOND COMPONENT
function Description() {
  return (
    <p>Hello I love ❤️‍🩹 React so Much ... Thnx FaceBook</p>
  )
}






// APP COMPONENT .... 
function App() {
  return (
    <>

      {/* COMPONENTS HIRARCHY */}
      <Title/>
      <Description/>
      <img src="https://img.freepik.com/free-vector/word-hello-typography-vector_53876-85344.jpg?semt=ais_hybrid&w=740&q=80" />
      <ProductTab/>


      {
      /* 
      <Title/>
      <Title/> 
      */
      }
      


      {/* MARKUP HTML */}
      {/* <h2>1 - I m from App component</h2>
      <h3>2 - I m from App component</h3>
      <h4>3 - I m from App component</h4> */}




    </>
  )  
}

export default App



