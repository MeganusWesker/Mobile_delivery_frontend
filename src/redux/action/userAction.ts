import axios from "axios";
import { server, AppDispatch } from "../store";

export const register =
  (name:string,email: string, password: string) => async (dispatch: AppDispatch) => {
    try {

      dispatch({
        type: "registerUserRequest",
      });

      const { data } = await axios.post(
        `${server}/register`,
        { name,email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(data);

      dispatch({
        type: "registerUserSuccess",
        payload: {
          user: data.user,
          message: data.message,
        },
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "registerUserFail",
        payload: error.response.data.message,
      });
    }
};

export const loginUser =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "loginUserRequest",
      });

      const { data } = await axios.post(
        `${server}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(data);

      dispatch({
        type: "loginUserSuccess",
        payload: {
          user: data.user,
          message: data.message,
        },
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "loginUserFail",
        payload: error.response.data.message,
      });
    }
  };

export const loadUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "loadUserSuccess",
      payload: {
        user: data.user,
      },
    });
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};



//admin routes
export const getAllUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "getAllUsersRequest",
    });

    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllUsersSuccess",
      payload: data.users,
    });

  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "getAllUsersFail",
      payload: error.response.data.message,
    });
  }
};

export const updateUser = (id:string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "updateUserRequest",
    });

    const { data } = await axios.get(`${server}/admin/updateUser/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "updateUserSuccess",
      payload: data.message,
    });

  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "updateUserFail",
      payload: error.response.data.message,
    });
  }
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "logoutUserRequest",
    });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    console.log(data);

    dispatch({
      type: "logoutUserSuccess",
      payload:data.message,
    });
    
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "logoutUserFail",
      payload: error.response.data.message,
    });
  }
};