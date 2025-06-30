
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import store from "./stores/index.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
      <App />
  </Provider>
);
