import { BrowserRouter,Routes, Route} from "react"



function App(){
return(
  <BrowserRouter>
  <Routes>

   <Route path="/" element = {<Login/>} />

  </Routes>


  </BrowserRouter>
);


}