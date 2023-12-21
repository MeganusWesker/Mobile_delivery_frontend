import { createReducer } from "@reduxjs/toolkit";
import {
  createMobileRequest,
  createMobileSuccess,
  createMobileFail,
  clearError,
  clearMessage,
  getAllMobilesAdminRequest,
  getAllMobilesAdminSuccess,
  getAllMobilesAdminFail,
  addMobileImagesRequest,
  addMobileImagesSuccess,
  addMobileImagesFail,
  getAllMobilesRequest,
  getAllMobilesSuccess,
  getAllMobilesFail,
} from "../constants/mobileConstants";
import { IMobileDocument } from "../../utils/interfaces";

interface IintialState {
  message?: string | null;
  error?: string | null;
  loading?: boolean;
  mobiles: IMobileDocument[];
  mobile?: IMobileDocument;
}

const initialState: IintialState = {
  mobiles: [],
};

export const mobileReducer = createReducer(initialState, (builder) => {
  // createCourse function

  builder.addCase(createMobileRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(createMobileSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });

  builder.addCase(createMobileFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //getAllMobilesAdmin Case

  builder.addCase(getAllMobilesAdminRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(getAllMobilesAdminSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
    state.mobiles = action.payload.mobiles;
  });

  builder.addCase(getAllMobilesAdminFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  // add Images function

  builder.addCase(addMobileImagesRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(addMobileImagesSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });

  builder.addCase(addMobileImagesFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //getAllMobiles Case

  builder.addCase(getAllMobilesRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(getAllMobilesSuccess, (state, action) => {
    state.loading = false;
    state.mobiles = action.payload.mobiles;
  });

  builder.addCase(getAllMobilesFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //   // clear message && clear error

  builder.addCase(clearMessage, (state) => {
    state.message = null;
  });

  builder.addCase(clearError, (state) => {
    state.error = null;
  });
});
