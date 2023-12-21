import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logoutUser } from "../redux/action/userAction";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, loading, message } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      navigate("/");
   
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/");
    }

    dispatch(logoutUser());
  }, [dispatch, message, error]);

  return loading ? <Loader /> : <div></div>;
};

export default Logout;
