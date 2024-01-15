import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/api/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };
  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post("/api/auth/google", {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            console.log(res)
            dispatch(loginSuccess(res.data));
            navigate("/")
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
  return (
    <div className="h-screen text-white mt-[-70px] ml-[-137px] flex items-center justify-center top-0 bottom-0 right-0 left-0 m-auto ">
      <div className="flex flex-col items-center border w-[300px] border-[#202020] rounded-md">
        <div className="text-center gap-4">
          <h1 className="font-semibold mt-3">Sign In</h1>
          <p className="mt-5 mb-3 text-xs">to continue to MaxTube</p>
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center gap-2 "
          >
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
              className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg placeholder:text-[#202020]"
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg placeholder:text-[#202020]"
            />
            <button className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg">
              Sign in
            </button>
          </form>

          <h1>or</h1>
          <button className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg mb-2" onClick={signInWithGoogle} >Signin with Google</button>
          <div className="flex flex-col items-center gap-2">
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
              className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg placeholder:text-[#202020]"
            />
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg placeholder:text-[#202020]"
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg placeholder:text-[#202020]"
            />
            <button className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg">
              Sign up
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-16 mt-7">
          <span className="text-xs">English(USA)</span>
          <div className="text-xs ">
            <Link>
              <span className="mr-2">Help</span>
            </Link>
            <Link>
              <span className="mr-2">Privacy</span>
            </Link>
            <Link>
              <span className="mr-2">Terms</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
