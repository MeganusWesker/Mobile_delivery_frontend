import { createAction} from "@reduxjs/toolkit"
import { UserDocument } from "../../utils/interfaces";

interface ICombinedUser{
    user:UserDocument;
    message?:string;
}


//laodUserConstants
export const loadUserRequest = createAction<void>('loadUserRequest');
export const loadUserFail = createAction<string>('loadUserFail');
export const loadUserSuccess = createAction<ICombinedUser>('loadUserSuccess');

// registerConstants 
export const registerUserRequest = createAction<void>('registerUserRequest');
export const registerUserFail = createAction<string>('registerUserFail');
export const registerUserSuccess = createAction<ICombinedUser>('registerUserSuccess');

// loginConstants 
export const loginUserRequest = createAction<void,'loginUserRequest'>('loginUserRequest');
export const loginUserFail = createAction<string,"loginUserFail">('loginUserFail');
export const loginUserSuccess = createAction<ICombinedUser,"loginUserSuccess">('loginUserSuccess');

//logoutUserConstants
export const logoutUserRequest = createAction<void>('logoutUserRequest');
export const logoutUserFail = createAction<string>('logoutUserFail');
export const logoutUserSuccess = createAction<string>('logoutUserSuccess');




//admin routes

// getAllUsersConstants 
export const getAllUsersRequest = createAction<void>('getAllUsersRequest');
export const getAllUsersFail = createAction<string>('getAllUsersFail');
export const getAllUsersSuccess = createAction<UserDocument[]>('getAllUsersSuccess');

//updateUserConstants
export const updateUserRequest = createAction<void>('updateUserRequest');
export const updateUserFail = createAction<string>('updateUserFail');
export const updateUserSuccess = createAction<string>('updateUserSuccess');




// clearMessage && clearError constants
export const clearMessage = createAction<void>('clearMessage');
export const clearError = createAction<void>('clearError');
