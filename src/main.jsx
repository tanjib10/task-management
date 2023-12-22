import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./Home/Home";
import AuthProvider from "./Provider/AuthProvider";
import Register from "./Register/Register";
import Login from "./Login/Login";
// import Dashboard from "./Dashboard/Dashboard";
// import ManageTasks from "./ManageTasks/ManageTasks";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
// import TaskManagementDashboard from "./ManageTasks/TaskManagementDashboard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ManageTasks from "./ManageTasks/ManageTasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/tasks",
        element: (
          <PrivateRoute>
            <ManageTasks></ManageTasks>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl mx-auto bg-[#EEE7DA]">
    <DndProvider backend={HTML5Backend}>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>
    </DndProvider>
  </div>
);
