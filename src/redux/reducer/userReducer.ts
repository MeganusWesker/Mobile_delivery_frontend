import { createReducer } from "@reduxjs/toolkit";
import {
  clearError,
  clearMessage,
  getAllUsersFail,
  getAllUsersRequest,
  getAllUsersSuccess,
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginUserFail,
  loginUserRequest,
  loginUserSuccess,
  logoutUserFail,
  logoutUserRequest,
  logoutUserSuccess,
  registerUserFail,
  registerUserRequest,
  registerUserSuccess,
  updateUserFail,
  updateUserRequest,
  updateUserSuccess,
} from "../constants/userConstants";
import {  UserDocument } from "../../utils/interfaces";

interface IintialState {
  isAuthenticated: boolean;
  user?: UserDocument;
  message?: string | null;
  error?: string | null;
  registerLoading?: boolean;
  verifyLoading?: boolean;
  loginLoading?: boolean;
  loading?: boolean;
  changePasswordLoading?: boolean;
  updateProfileLoading?: boolean;
  users: UserDocument[];
  adminLoading?: boolean;
}

const initialState: IintialState = {
  isAuthenticated: false,
  users: [],
};

export const userReducer = createReducer(initialState, (builder) => {
  // register function
  builder.addCase(registerUserRequest, (state) => {
    state.registerLoading = true;
    state.isAuthenticated = false;
  });

  builder.addCase(registerUserSuccess, (state, action) => {
    state.registerLoading = false;
    state.isAuthenticated = true;
    console.log(action.payload);
    state.message = action.payload.message;
    state.user = action.payload.user;
  });

  builder.addCase(registerUserFail, (state, action) => {
    state.registerLoading = false;
    state.error = action.payload;
  });

//   //verifyCase
//   builder.addCase(verifyUserRequest, (state) => {
//     state.verifyLoading = true;
//     state.isAuthenticated = false;
//   });

//   builder.addCase(verifyUserSuccess, (state, action) => {
//     state.registerLoading = false;
//     state.isAuthenticated = true;
//     console.log(action.payload);
//     state.message = action.payload.message;
//     state.user = action.payload.user;
//   });

//   builder.addCase(verifyUserFail, (state, action) => {
//     state.registerLoading = false;
//     state.error = action.payload;
//   });

  //loginUserCase
  builder.addCase(loginUserRequest, (state) => {
    state.loginLoading = true;
    state.isAuthenticated = false;
  });

  builder.addCase(loginUserSuccess, (state, action) => {
    state.loginLoading = false;
    state.isAuthenticated = true;
    console.log(action.payload);
    state.message = action.payload.message;
    state.user = action.payload.user;
  });

  builder.addCase(loginUserFail, (state, action) => {
    state.loginLoading = false;
    state.error = action.payload;
  });

  //loadUserCase
  builder.addCase(loadUserRequest, (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  });

  builder.addCase(loadUserSuccess, (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
  });

  builder.addCase(loadUserFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //logoutUserCase
  builder.addCase(logoutUserRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(logoutUserSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    state.isAuthenticated = false;
  });

  builder.addCase(logoutUserFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //getAllUsersCase
  builder.addCase(getAllUsersRequest, (state) => {
    state.adminLoading = true;
  });

  builder.addCase(getAllUsersSuccess, (state, action) => {
    state.adminLoading = false;
    state.users = action.payload;
  });

  builder.addCase(getAllUsersFail, (state, action) => {
    state.adminLoading = false;
    state.error = action.payload;
  });

  //udpateUserCase
  builder.addCase(updateUserRequest, (state) => {
    state.adminLoading = true;
  });

  builder.addCase(updateUserSuccess, (state, action) => {
    state.adminLoading = false;
    state.message = action.payload;
  });

  builder.addCase(updateUserFail, (state, action) => {
    state.adminLoading = false;
    state.error = action.payload;
  });



  // clear message && clear error

  builder.addCase(clearMessage, (state) => {
    state.message = null;
  });

  builder.addCase(clearError, (state) => {
    state.error = null;
  });
});
