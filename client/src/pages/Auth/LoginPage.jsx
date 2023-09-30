import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "./AuthContext";
import "react-toastify/dist/ReactToastify.css";
import URL from '../../URL'

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const { handleLogin } = useAuth();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      handleError("Please enter both email and password.");
      return;
    }

    try {
        const { data } = await axios.post(
          URL + `/auth/login`,
          { ...inputValue },
          { withCredentials: true }
        );
      
        console.log("Response from server:", data);
      
        const { success, message } = data;
      
        if (success) {
          handleSuccess(message);
          navigate('/');
          handleLogin(data.user); // Pass the user data from the response
        } else {
          handleError(message);
        }
      } catch (error) {
        if (error.response) {
          // Server responded with an error status code (4xx or 5xx)
          handleError(error.response.data.message);
        } else if (error.request) {
          // Request was made but no response was received
          handleError("Network error. Please try again later.");
        } else {
          // Something else happened
          console.error(error);
        }
      }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="pt-[10rem]">
      <div className="form_container w-8/12 ml-auto mr-auto">

        {/* Image here */}

        <h2 className="font-header2 text-header2 leading-tight">Login</h2>

        <div>
          <div>
            {/* Image here */}
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input className="w-[35rem] mt-[3rem] font-input text-lightGray p-[0.5rem]"
                type="email"
                name="email"
                value={email}
                placeholder="Email or Student ID"
                onChange={handleOnChange}
              />
            </div>

            <div>
              <div>
                {/* Image here */}
              </div>
              <input className="w-[35rem] mt-[2rem] font-input text-lightGray p-[0.5rem]"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleOnChange}
              />
            </div>
            <button className="w-[35rem] h-[4.9375rem] mt-[2rem] text-notebookPaper font-button text-button"  type="submit">Login</button><br /><br />
            <div className="text-center font-input text-lightGray">
              New to our app? <a className="underline" href="/">Register</a>
            </div>
          </form>
        </div>


        <ToastContainer
          position="bottom-left"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastClassName="custom-toast" // Apply custom CSS classes to toast messages
        />
      </div>
    </div>
  );
};

export default Login;


// import React, { useContext, useState } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../../context/UserContext';
// import URL from '../../URL'

// export default function LoginPage() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);
//     const { setUser } = useContext(UserContext)

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(URL +`/auth/login`, {
//                 email,
//                 password,
//             }, { withCredentials: true });

//             if (response.status === 200) {
                
//                 console.log("Login successful!");
//                 setUser(response.data)
//                 navigate('/');
//             } else {
//                 setError("Wrong credentials!");
//             }
//         } catch (err) {
//             setError("An error occurred while logging in.");
//             console.error("Error:", err);
//         }
//     };

//     return (
//         <main className="bg-gray-100 flex justify-center pt-44 h-screen">
//             <div className="w-96">
//                 <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-600">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                             placeholder="Email"
//                             required
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="password" className="block text-gray-600">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                             placeholder="Password"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <button
//                             type="submit"
//                             className="w-full bg-bodyColor text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
//                         >
//                             Login
//                         </button>
//                     </div>
//                 </form>
//                 {error && <p className="text-red-500 text-center">{error}</p>}
//                 <p className="text-center text-gray-600">
//                     Don't have an account?{" "}
//                     <a href="/register" className="text-blue-500">
//                         Sign up
//                     </a>
//                 </p>
//             </div>
//         </main>
//     );
// }
// import { Link, useNavigate } from "react-router-dom"
// import { useContext, useState } from "react"
// import axios from "axios"
// import { UserContext } from '../../context/UserContext'


// const Login = () => {
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const [error,setError]=useState(false)
//   const {setUser}=useContext(UserContext)
//   const navigate=useNavigate()

//   const handleLogin=async()=>{
//     try{
//       const res=await axios.post("https://coffee-shop-blog-server.vercel.app/auth/login",{email,password},{withCredentials:true})
//       // console.log(res.data)
//       setUser(res.data)
//       navigate("/")

//     }
//     catch(err){
//       setError(true)
//       console.log(err)

//     }

//   }
//   return (
//     <>
//     <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
//     <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
//     <h3><Link to="/register">Register</Link></h3>
//     </div>
// <div className="w-full flex justify-center items-center h-[80vh] ">
//        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
//          <h1 className="text-xl font-bold text-left">Log in to your account</h1>
//          <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your email" />
//          <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password" />
//          <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Log in</button>
//          {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
//          <div className="flex justify-center items-center space-x-3">
//           <p>New here?</p>
//           <p className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></p>
//          </div>
//        </div>
//     </div>
//     </>
//     )
// }
// export default Login