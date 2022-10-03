import NavigationBar from "./components/window/NavigationBar";

import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

function Router() {
  const Home = lazy(() => import("./App"));
  const Login = lazy(() => import("./components/auth/Login.js"));

  return (
    <>
      <NavigationBar />
      <HashRouter>
        <Suspense>
          <Routes>
            {/* Home Page */}
            <Route element={<Home />} path="/" />
            {/* Login Page */}
            <Route element={<Login />} path="/login" />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default Router;
