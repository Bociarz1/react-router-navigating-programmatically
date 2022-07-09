// imports
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useNavigate } from "react-router-dom";


function App() {
  // declaration of useNavigate hook
  const navigate = useNavigate()

  return (
    <>
      <button onClick={()=>navigate('/home')}>Go to HOME PAGE</button>
      {/* you can add second argument, which is an object replacing routing history  */}
      <button onClick={()=>navigate('/home',{replace:true})}>Go to HOME PAGE (REPLACE HISTORY)</button>
      <Routes>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
