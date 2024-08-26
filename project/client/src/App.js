import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  // const loader = useSelector((state) => state.loader);
  console.log(user);
  // console.log(loader);

  return (
    <div className="App relative">
      {/* {loader ? null : (
        <div className="absolute left-1/2 top-1/2 translate-y-1/2 -translate-x-1/2 bg-slate-300">
          <div className="loader"></div>
        </div>
      )} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
