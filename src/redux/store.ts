import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducer/userReducer'
import { mobileReducer } from './reducer/mobileReducer'


export const store = configureStore({
  reducer: {
    user:userReducer,
    mobile:mobileReducer,
  },
})


export const server="https://mobile-delivery-backend.vercel.app/api/v1"
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch