// import Footer from "../../Components/Footer";
import SideBar from "../../Components/SideBar";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SmallLoader from "../../Components/SmallLoader";
import toast from "react-hot-toast";
import { addMobileImages } from "../../redux/action/mobileAction";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";


const AddMobileImage = () => {

    const params = useParams();

  const [avatar, setAvatar] = useState<File>();
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const dispatch = useAppDispatch();
  const { error, message, loading } = useAppSelector((state) => state.mobile);

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    const fileReader = new FileReader();
    setAvatar(file);

    fileReader.onloadend = () => {
      setAvatarPreview(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const myForm = new FormData();


    if (avatar) {
      myForm.append("file", avatar); // it wil throw an error if it was of type object why bcoz file is a blob type
    }

   dispatch(addMobileImages(myForm,params.id as string));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, dispatch]);

  return (
    <>
    <Navbar/>
      <div className="grid grid-cols-1fr-5fr max-[800px]:grid-cols-1fr">
        <SideBar />

        <div>
          <h1 className="font-bold font-roboto text-3xl tracking-wider text-center mt-5">
            Add A New I<span className="text-mainColor">mage</span>
          </h1>

          <div className="min-h-[30Vw] w-[25%] m-auto mt-5 p-2 max-[800px]:w-4/6">
            <form onSubmit={submitHanlder}>
              <label className="font-semibold block mt-2">Choose Image</label>
              <input
                type="file"
                accept="image/*"
                name="avatar"
                className="w-full p-2 fileUploader"
                onChange={fileHandler}
              />

              {avatarPreview && (
                <div className="w-full h-[50%] rounded  flex justify-center my-2">
                  <img
                    className="object-cover w-[50%] h-[100%] rounded"
                    src={avatarPreview}
                    alt=""
                  />
                </div>
              )}

              <button
                className="flex items-center justify-center w-[100%] group hover:border text-lg  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[12px] py-[6px] rounded font-roboto self-end transition duration-300 ease-in-out"
                disabled={loading}
              >
                {loading ? (
                  <SmallLoader />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white dark:text-white group-hover:text-mainColor2 mr-1"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path>
                  </svg>
                )}
                Add Image
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default AddMobileImage