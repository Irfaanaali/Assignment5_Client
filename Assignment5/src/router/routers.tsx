import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/components/pages/Dashboard";
import { CardWithFormReg } from "@/components/pages/RegistrationCard";
import { CardWithForm } from "@/components/pages/LogInCard";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <CardWithForm></CardWithForm>,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "registration",
    element: <CardWithFormReg></CardWithFormReg>,
  },
]);

export default router;
