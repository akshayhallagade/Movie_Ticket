import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { LoginUser } from "../apicalls/users";
import StatusComponent from "../components/StatusComponent";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/userReducers";
import { hideloader, showloader } from "../redux/reducers/loaderReducers";

const Login = () => {
  const dispatch = useDispatch();

  const [loginStatus, setLoginStatus] = useState(false);
  const [loginValues, setLoginValues] = useState({});

  const emailRef = useRef();
  const passwordRef = useRef();

  const loginForm = async (e) => {
    e.preventDefault();
    dispatch(showloader);
    const res = await LoginUser({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });

    if (res.success) {
      setLoginStatus(true);
      setLoginValues(res);
      dispatch(hideloader);
      localStorage.setItem("token", res.token);
      dispatch(setUserInfo(res.user));
    } else {
      setLoginStatus(true);
      setLoginValues(res);
    }
    // console.log(res);
  };

  useEffect(() => {
    if (loginStatus) {
      setTimeout(() => {
        setLoginStatus(false);
      }, 4000);
    }
  }, [loginStatus]);

  return (
    <div className="w-screen h-screen ">
      {loginStatus ? <StatusComponent info={loginValues} /> : null}

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-400">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            onSubmit={loginForm}
            // method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  autoComplete="email"
                  required
                  className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="./register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
