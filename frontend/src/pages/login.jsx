import { useState } from "react";

function Login(){


   const[email,setemail] = useState;
   const[password,setpassword] = useState;

function handlesubmit(){

   console.log(email,password);
}   
return(

   <div><h1>HOSTEL MANAGEMTN SYSTEM </h1>
   
   <p className="text-2x1 text-blue-600 ">Book your room and enjoy</p>
   <form onClick={hadlesubmit}>
   <div className="text-center text-black-300 ">Hostel login</div>
   <div className="text-center text-red-300 ">user name email : </div>
   <input type="email" placeholder="email" required aria-label="email" value="email" > 
   <div className="text-center text-red-300 ">enter password  : </div>
   <input type="password" placeholder="password" required aria-label="passowrd" value="password">
   <button type="submit" value="submit">submit</button> 
      
     </form>
   
   </div>



);


}

export default Login;