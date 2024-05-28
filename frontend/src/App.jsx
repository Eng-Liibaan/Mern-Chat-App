import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import { UseAuthor } from "./Context/Auth-context";
export const endpoint = "http://localhost:3000/api";

function App() {
  const { author } = UseAuthor();


  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="" element={author ? <Home/> :<Navigate to="/login" /> } />
        <Route
          path="signup"
          element={author ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="login"
          element={author ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
