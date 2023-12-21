import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { loadUser } from "./redux/action/userAction";
import Loader from "./Components/Loader";
import ProtectedRoute from "./Pages/ProtectedRoute";
import UserList from "./Pages/Admin/UserList";
import CreateMobile from "./Pages/Admin/CreateMobile";
import MobileList from "./Pages/Admin/MobileList";
import AddMobileImage from "./Pages/Admin/AddMobileImage";
import Mobiles from "./Pages/Mobiles";
import Logout from "./Pages/Logout";


function App() {
  const { loading, user, isAuthenticated } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/mobiles",
      element: <Mobiles/>,
    },

    {
      path: "/logout",
      element: <Logout/>,
    },

    {
      path: "/admin/create",
      element:(
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={true}
        >
          <CreateMobile/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/mobile",
      element:(
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={true}
        >
          <MobileList/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/users",
      element:(
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={true}
        >
          <UserList/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/mobile/:id",
      element:(
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={true}
        >
          <AddMobileImage/>
        </ProtectedRoute>
      ),
    },

  ]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return ( loading===undefined || loading)?  (
    <Loader />
  ) : (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
