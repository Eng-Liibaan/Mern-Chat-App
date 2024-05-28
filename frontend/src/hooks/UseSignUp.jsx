import axios from "axios";
import { endpoint } from "../App";
import toast from "react-hot-toast";
import { UseAuthor } from "../Context/Auth-context";
function UseSignUp() {
  const { setauthor } = UseAuthor();
  const SendRequestSignUp = async (SignUp) => {
    let { data } = await axios.post(endpoint + "/auth/signup", SignUp);
    if (data.status === "success") {
      toast.success(data.message);
      localStorage.setItem("chat-user", JSON.stringify(data));
      setauthor(data);
    } else {
      toast.error(data);
    }
  };
  return { SendRequestSignUp };
}

export default UseSignUp;
