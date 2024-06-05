import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <div>
      {/* <Signup /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
