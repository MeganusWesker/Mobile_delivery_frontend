import { useNavigate } from "react-router-dom";
import { UserDocument } from "../utils/interfaces";
import {useEffect} from 'react';
import toast from "react-hot-toast";

const ProtectedRoute = ({
  user,
  isAuthenticated,
  isAdmin,
  children
}: {
  user: UserDocument | undefined;
  isAuthenticated: boolean;
  isAdmin: boolean;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();


  useEffect(() => {
    if (!isAuthenticated) {
       toast.error('SignIn First to access');
        navigate("/login");
    }
  
    if (isAdmin && user !== undefined && user.role !== "admin") {
      toast.error('Not Authorized');
      navigate("/");
    }
  }, [isAuthenticated,isAdmin,user?.role])
  
  return  children; 
};

export default ProtectedRoute;
