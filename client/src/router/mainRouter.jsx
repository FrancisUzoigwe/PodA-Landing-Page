import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../Layout/FirstLayout";
import EmailLayout from "../Layout/EmailLayout";
import VerifiedLayout from "../Layout/VerifiedLayout";

export const mainRouter = createBrowserRouter([
  {
    element: <FirstLayout />,
    children: [
      {
        path: "/",
        element: <FirstLayout />,
      },
    ],
  },
  {
    path: "/api/send-email",
    element: <EmailLayout />,
    children: [
      {
        index: true,
        element: <EmailLayout />,
      },
    ],
  },
  {
    path: "/api/:token/verify-account",
    element: <VerifiedLayout />,
    children: [
      {
        index: true,
        element: <VerifiedLayout />,
      },
    ],
  },
]);
