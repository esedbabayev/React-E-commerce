// Hooks
import { useRef } from "react";

// React Router
import { Link, useNavigate } from "react-router-dom";

// UUID
import { v4 as uuidv4 } from "uuid";

// Images
import Logo from "../images/Logo.png";
import SignUpHero from "../images/sign-up-hero.png";

const SignUp = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const signUpHandler = async (event) => {
    event.preventDefault();

    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const userName = userNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!firstName || !lastName || !userName || !password) {
      alert("Fill all the fields");
      return;
    }

    const userNameResponse = await fetch(
      `http://localhost:3000/users?userName=${userName}`
    );
    const usernameData = await userNameResponse.json();

    const user = usernameData[0];

    if (user?.userName) {
      alert("Username is already in use");
      return;
    }

    const newUser = {
      firstName,
      lastName,
      userName,
      password,
      id: uuidv4(),
    };

    await fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    userNameRef.current.value = "";
    passwordRef.current.value = "";

    localStorage.setItem("userId", JSON.stringify(newUser.id));

    navigate("/products");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      <div className="flex-1">
        <nav className="flex items-center gap-[80px] px-[120px] pt-[80px]">
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="bg-black rounded-[8px] text-[#fff] p-[15px]">
            English
          </div>
        </nav>
        <h1 className="font-black text-[96px] px-[120px] mt-[80px]">
          Sign up<span className="text-[#FFC700]">.</span>
        </h1>
        <form
          onSubmit={signUpHandler}
          className="px-[120px] flex flex-col gap-[40px] mt-[160px]"
        >
          <div className="flex gap-[40px]">
            <div className="flex flex-col font-black text-base">
              <label>FIRSTNAME</label>
              <input
                ref={firstNameRef}
                className="px-2 border-2 mt-[16px] rounded-[8px] h-[48px] w-[295px]"
                type="text"
              />
            </div>
            <div className="flex flex-col font-black text-base">
              <label>LASTNAME</label>
              <input
                ref={lastNameRef}
                className="px-2 border-2 mt-[16px] rounded-[8px] h-[48px] w-[295px]"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col font-black text-base">
            <label>USERNAME</label>
            <input
              ref={userNameRef}
              className="px-2 border-2 mt-[16px] rounded-[8px] h-[48px] w-[630px]"
              type="text"
            />
          </div>
          <div className="flex flex-col font-black text-base">
            <label>PASSWORD</label>
            <input
              ref={passwordRef}
              className="px-2 border-2 mt-[16px] rounded-[8px] h-[48px] w-[630px]"
              type="password"
            />
          </div>
          <div className="flex justify-between font-medium text-base">
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <p>
                Yes, I understand & agree to the{" "}
                <a className="underline" href="#">
                  Terms & Conditions
                </a>
              </p>
            </div>
          </div>
          <button className="px-[30px] py-[24px] font-black text-[20px] text-[#fff] bg-[#1D1D1D] rounded-[8px] mt-[35px] flex items-center">
            SIGN UP<i className="fa-solid fa-arrow-right ml-[470px]"></i>
          </button>
          <div className="flex gap-[5px] mb-[80px] font-medium text-base">
            <p>Already have an account?</p>
            <Link className="underline" to="/sign-in">
              Sign in here.
            </Link>
          </div>
        </form>
      </div>
      <div className="flex-1">
        <img
          src={SignUpHero}
          alt="Sign up illustration"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default SignUp;
