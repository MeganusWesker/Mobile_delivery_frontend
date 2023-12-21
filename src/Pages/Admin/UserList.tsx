import { useEffect} from "react";
// import Footer from "../../Components/Footer";
import Loader from "../../Components/Loader";
import SideBar from "../../Components/SideBar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllUsers, updateUser } from "../../redux/action/userAction";
import toast from "react-hot-toast";
import Navbar from "../../Components/Navbar";

const tableHeadingList: string[] = [
  "Id",
  "Name",
  "Email",
  "Role",
  "Action"
];

interface documentCourse {
  id: string;
  name: string;
  email: string;
  role: string;
  updatHandler:Function,
}

const UserList = () => {


  const dispatch = useAppDispatch();
  const { loading,message,users,error } = useAppSelector((state) => state.user);


  const updateUserHandler=async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>,id:string)=>{
    e.preventDefault();
   await dispatch(updateUser(id));
   dispatch(getAllUsers());
 }

  useEffect(() => {
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'})
    }

    if(error){
      toast.error(error);
      dispatch({type:'clearError'})
    }
    dispatch(getAllUsers());
  }, [dispatch,message,error]);


  return loading ? (
    <Loader />
  ) : (
    <>
    <Navbar/>
      <div className="grid grid-cols-1fr-5fr max-[1100px]:grid-cols-1fr">
        <SideBar />

        {/* table */}

        <div className="overflow-x-auto">
        <div className="mt-14 w-[98%] grid-cols-table m-auto" id="userListTable">
          {/* table Heading */}
          <div className="rounded grid grid-cols-table items-center h-8 px-2 bg-mainColor2">
            {tableHeadingList.map((item, i) => (
              <p
                className={`text-white text-${i===tableHeadingList.length-1 && 'center'}`}
                key={i}
              >
                {item}
              </p>
            ))}
          </div>

          {users &&
            users.map((item) => (
              <CourseListComponent
                key={item._id}
                id={item._id}
                name={item.name}
                email={item.email}
                role={item.role}
                updatHandler ={updateUserHandler}
              />
            ))}
        </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

const CourseListComponent = ({
  id,
  name,
  email,
  role,
  updatHandler
}: documentCourse) => (
  <div
    key={id}
    className="rounded grid grid-cols-table items-center h-12 px-2 my-3"
  >
    <p className="font-loto">#{id}</p>
    <p className="font-loto">{name}</p>
    <p className="font-loto">{email}</p>
    <p className="font-loto">{role}</p>
 

    <div className="flex items-center justify-around">
  
        <button 
        className="text-sm bg-mainColor2 border text-white rounded px-2 py-1 group hover:border-maincolor2 hover:bg-white hover:text-mainColor2 hover:border-mainColor2 hover:-translate-y-1  transition duration-300 ease-in-out"
        onClick={(e)=>updatHandler(e,id)}
        >
          Update Role
        </button>
   


    </div>
  </div>
);

export default UserList