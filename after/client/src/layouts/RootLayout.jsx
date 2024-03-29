import React from "react"
import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom"

const RootLayout = () => {
  const { state } = useNavigation()
  const isLoading = state === "loading"
  return (
    <div>
      <nav className="top-nav">
        <div className="nav-text-large">My App</div>
        <ul className="nav-list">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
