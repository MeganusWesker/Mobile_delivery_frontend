import { createAction} from "@reduxjs/toolkit"
import { IMobileDocument } from "../../utils/interfaces";

interface ICombinedMobiles{
    mobiles:IMobileDocument[],
    message?:string,
}

// createMobileConstants 
export const createMobileRequest = createAction<void>('createMobileRequest');
export const createMobileFail = createAction<string>('createMobileFail');
export const createMobileSuccess = createAction<string>('createMobileSuccess');

// getAllMobilesAdmin
export const getAllMobilesAdminRequest = createAction<void>('getAllMobilesAdminRequest');
export const getAllMobilesAdminFail = createAction<string>('getAllMobilesAdminFail');
export const getAllMobilesAdminSuccess = createAction<ICombinedMobiles>('getAllMobilesAdminSuccess');

export const addMobileImagesRequest = createAction<void>('addMobileImagesRequest');
export const addMobileImagesFail = createAction<string>('addMobileImagesFail');
export const addMobileImagesSuccess = createAction<string>('addMobileImagesSuccess');

// getAllCourses
export const getAllMobilesRequest = createAction<void>('getAllMobilesRequest');
export const getAllMobilesFail = createAction<string>('getAllMobilesFail');
export const getAllMobilesSuccess = createAction<ICombinedMobiles>('getAllMobilesSuccess');

// clearMessage && clearError constants
export const clearMessage = createAction<void>('clearMessage');
export const clearError = createAction<void>('clearError');