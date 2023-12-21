import { Link } from "react-router-dom";
import { useState, useEffect,useRef } from "react";
import { register } from "../redux/action/userAction";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import SmallLoader from "../Components/SmallLoader";
import { colorTogglerOnBlur, colorTogglerOnFocused, togglePassword } from "../utils/toggleFunctions";
import Navbar from "../Components/Navbar";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const nameInputRef = useRef<HTMLDivElement>(null);
  const emailInputRef = useRef<HTMLDivElement>(null);
  const passwordInputRef = useRef<HTMLDivElement>(null);
  const [eyeToggler, setEyeToggler] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error, message, registerLoading ,isAuthenticated} = useAppSelector(
    (state) => state.user
  );

  const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(name,email,password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      console.log(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/");
    }
    if(isAuthenticated){
      dispatch({ type: "clearMessage" });
      navigate("/");
    }

  }, [error, message, dispatch,isAuthenticated]);

  return (
    <>
      <Navbar />

      <h1 className="font-bold font-roboto text-3xl tracking-wider text-center mt-5">
        Create A<span className="text-mainColor">n Account</span>
      </h1>
      <p className="tracking-wide font-loto text-xl text-center">
        Register and Start Learning
      </p>

      <div className="min-h-[30Vw] w-[25%] m-auto mt-5 p-2 max-md:w-[70%]">
        {/* <div className="flex justify-center w-full h-24">
          <img
            src={avatarPreview}
            alt=""
            className="w-24 h-full rounded-full object-cover mx-2"
          />
        </div> */}

        <form onSubmit={submitHanlder}>
          <label className="font-semibold block mb-1">Name</label>
          <div
            className={`flex border border-solid border-color3 p-1 rounded`}
            ref={nameInputRef}
          >
            <svg
              className={`w-7 h-7 text-color3 dark:text-white`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <input
              type="text"
              name="name"
              required
              onFocus={() => colorTogglerOnFocused(nameInputRef)}
              onBlur={() => colorTogglerOnBlur(nameInputRef)}
              placeholder="name"
              className="outline-none text-base ml-3 font-thin w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label className="font-semibold block mt-2">Email</label>
          <div className="flex border border-solid border-color3 p-1 rounded"
           ref={emailInputRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6  text-color3"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <input
              type="email"
              name="email"
              placeholder="email"
              required
              value={email}
              onFocus={() => colorTogglerOnFocused(emailInputRef)}
              onBlur={() => colorTogglerOnBlur(emailInputRef)}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none text-base ml-3 font-thin w-full"
            />
          </div>
          <label className="font-semibold block mt-2">Password</label>
          <div className="flex border border-solid border-color3 p-1 rounded"
           ref={passwordInputRef}
          >
            <svg
              className="w-6 h-6 text-color3 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
            </svg>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onFocus={() => colorTogglerOnFocused(passwordInputRef)}
              onBlur={() => colorTogglerOnBlur(passwordInputRef)}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none text-base ml-3 font-thin w-full"
            />

            
{password.length > 0 && (
              <button
                onClick={(e) =>
                  togglePassword(e, passwordInputRef, setEyeToggler)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  {!eyeToggler ? (
                    <>
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clipRule="evenodd"
                      />
                    </>
                  ) : (
                    <>
                      <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                    </>
                  )}
                </svg>
              </button>
            )}
          </div>

          <button
            className="flex items-center justify-center w-[100%] group hover:border text-lg  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[12px] py-[6px] rounded font-roboto self-end transition duration-300 ease-in-out"
            disabled={registerLoading}
          >
            {registerLoading ? (
              <SmallLoader />
            ) : (
              <svg
                className="w-6 h-6 text-white dark:text-white group-hover:text-mainColor2 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
              </svg>
            )}
            SignUP
          </button>

          <p className="text-color3 tracking-wide text-center mt-2">
            Already have an Account?{" "}
            <Link
              to={"/login"}
              className="font-bold text-black font-roboto tracking-wide hover:text-mainColor2"
            >
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Register;
