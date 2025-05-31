import { createBrowserRouter } from "react-router-dom";
import Game from "./routes/Game";
import LoginForm from "./routes/Login";
import Home from "./routes/Home";
import Root from "./routes/Root";
import ProtectedRoute from "./components/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/game",
    element: (
      <ProtectedRoute>
        <Game />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

export default routes;
