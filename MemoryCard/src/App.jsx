import { Route, Routes } from "react-router-dom";
// import Game from "./component/Game";
import Layout from "./component/Layout";
import HomePage from "./router/HomePage";
import AboutUs from "./router/AboutUs";
import Game from "./router/Game";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage/></Layout>}/>
      <Route path="/about" element={<Layout><AboutUs/></Layout>}/>
      <Route path="/game" element={<Layout><Game/></Layout>}/>
       
    </Routes>
    
  )
}