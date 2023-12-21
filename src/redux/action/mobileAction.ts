import axios from "axios";
import { server, AppDispatch } from "../store";

export const createMobile =
  (formData: FormData) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "createMobileRequest",
      });

      const { data } = await axios.post(`${server}/addMobile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      dispatch({
        type: "createMobileSuccess",
        payload: data.message,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "createMobileFail",
        payload: error.response.data.message,
      });
    }
  };

export const addMobileImages =
  (formData: FormData,id:string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "addMobileImagesRequest",
      });

      const { data } = await axios.put(`${server}/add/image/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      dispatch({
        type: "addMobileImagesSuccess",
        payload: data.message,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "addMobileImagesFail",
        payload: error.response.data.message,
      });
    }
  };

export const getAllMobilesAdmin = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "getAllMobilesAdminRequest",
    });

    const { data } = await axios.get(`${server}/admin/mobiles`, {
      withCredentials: true,
    });

    console.log(data.mobiles);

    dispatch({
      type: "getAllMobilesAdminSuccess",
      payload: {
        mobiles: data.mobiles,
      },
    });
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "getAllMobilesAdminFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllMobiles = (name:string,os:string,ram:string,rom:string,processor:string,price:number) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "getAllMobilesRequest",
    });

    const { data } = await axios.get(`${server}/getAllMobiles?name=${name}&os=${os}&ram=${ram}&rom=${rom}&processor=${processor}&price=${price}`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllMobilesSuccess",
      payload: {
        mobiles: data.mobiles,
      },
    });
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "getAllMobilesFail",
      payload: error.response.data.message,
    });
  }
};
