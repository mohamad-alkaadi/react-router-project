import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import { postListRoute } from "./pages/PostList"
import { userListRoute } from "./pages/UserList"
import { TodoListRoute } from "./pages/TodoList"
import { postRoute } from "./pages/Post"
import { userRoute } from "./pages/User"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              {
                index: true,
                ...postListRoute,
              },
              { path: ":postId", ...postRoute },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...userListRoute },
              { path: ":userId", ...userRoute },
            ],
          },
          {
            path: "todos",
            children: [{ index: true, ...TodoListRoute }, { path: "" }],
          },
          {
            path: "*",
            element: <h1>404 - Page Not Found</h1>,
          },
        ],
      },
    ],
  },
])

function ErrorPage() {
  const error = useRouteError()
  return (
    <>
      <h1>Error - Something went wrong</h1>
      <h4>{error.message}</h4>
      <h5>{error.stack}</h5>
    </>
  )
}
