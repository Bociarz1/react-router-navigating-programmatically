import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return ( 
    <>
      this is HOME PAGE
      {/* number in bracket means how many level you can go back  */}
      <button onClick={()=>navigate(-1)}>Go back</button>
    </>
   );
}

export default Home;