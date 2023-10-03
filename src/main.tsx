/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./main.css";
import { persistor, store } from "./Redux/store.ts";
import routes from "./Routes/routes.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={routes} />
    </PersistGate>
  </Provider>
);
