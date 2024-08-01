// Hooks
import { useRef } from "react";

// React Router
import { Link, useNavigate } from "react-router-dom";

// Images
import SignInHero from "../images/sign-in-hero.png";
import Logo from "../images/Logo.png";

const SignIn = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const signInHandler = async (event) => {
    event.preventDefault();

    const userName = userNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!userName || !password) {
      alert("Fill all the fields");
      return;
    }

    const response = await fetch(
      `http://localhost:3000/users?userName=${userName}`
    );
    const data = await response.json();

    const user = data[0];

    if (!user || user.password !== password) {
      alert("Wrong username or password");
      return;
    }
    localStorage.setItem("userId", JSON.stringify(user.id));

    navigate("/products");
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      <div className="flex-1 flex flex-col justify-between p-[80px] max-w-[50%]">
        <nav className="flex items-center gap-[80px]">
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="bg-black rounded-[8px] text-[#fff] p-[15px]">
            English
          </div>
        </nav>
        <div>
          <h1 className="font-black text-[96px] mt-[80px]">
            Sign in<span className="text-[#FFC700]">.</span>
          </h1>
          <form
            onSubmit={signInHandler}
            className="flex flex-col gap-[40px] mt-[40px]"
          >
            <div className="flex flex-col font-black text-base">
              <label>USERNAME</label>
              <input
                ref={userNameRef}
                className="px-2 border-2 mt-[16px] rounded-[8px] h-[48px] w-full max-w-[630px]"
                type="text"
              />
            </div>
            <div className="flex flex-col font-black text-base">
              <label>PASSWORD</label>
              <input
                ref={passwordRef}
                className="px-2 border-2 mt-[16px] rounded-[8px] h-[48px] w-full max-w-[630px]"
                type="password"
              />
            </div>
            <div className="flex justify-between font-medium text-base">
              <div className="flex gap-[10px]">
                <input type="radio" />
                <p>Remember me</p>
              </div>
              <a className="underline" href="#">
                Recover my password
              </a>
            </div>
            <button className="px-[30px] py-[24px] font-black text-[20px] text-[#fff] bg-[#1D1D1D] rounded-[8px] mt-[35px] flex items-center max-w-[630px]">
              SIGN IN<i className="fa-solid fa-arrow-right ml-[auto]"></i>
            </button>
            <div className="flex gap-[5px] mb-[80px] font-medium text-base">
              <p>New here?</p>
              <Link className="underline" to="/sign-up">
                Create an account.
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1">
        <img
          className="w-full h-full object-cover"
          src={SignInHero}
          alt="Sign in illustration"
        />
      </div>
    </div>
  );
};

export default SignIn;
