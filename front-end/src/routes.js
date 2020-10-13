import React from "react";
// import { Navigate } from 'react-router-dom';

import B2s from "./views/b2s";
import Elimination from "./views/elimination";
import Interpolation from "./views/interpolation";
import Differentiation from "./views/differentiation";
import Integration from "./views/integration";
import RootFinding from "./views/root-finding";
import Home from "./views/home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "commath-project1",
    element: <Home />,
  },
  {
    path: "b2s",
    element: <B2s />,
  },
  {
    path: "elimination",
    element: <Elimination />,
  },
  {
    path: "interpolation",
    element: <Interpolation />,
  },
  {
    path: "differentiation",
    element: <Differentiation />,
  },
  {
    path: "integration",
    element: <Integration />,
  },
  {
    path: "root-finding",
    element: <RootFinding />,
  },
];

export default routes;
