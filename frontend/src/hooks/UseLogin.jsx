import axios from "axios";
import { endpoint } from "../App";
import toast from "react-hot-toast";

function UseLogin() {
  const SendRequestLogin = async (login) => {
    let { data } = await axios.post(endpoint + "/auth/login",login);
 
    if (data.status === "Success") {
      toast.success(data.message);
    } else {
      toast.error(data);
    }
  };
  return {SendRequestLogin};
}

export default UseLogin;
