import React, { Suspense, lazy } from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const ContactUs = lazy(() => import("./pages/contact-us"));

const Routes = () => {
  return (
    <Suspense fallback="Loading routes...">
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </ReactRouterRoutes>
    </Suspense>
  );
};

export default Routes;
