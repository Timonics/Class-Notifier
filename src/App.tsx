import { useEffect } from "react";
import AllRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
  }, []);

  return (
    <>
      <AllRoutes />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        stacked
        closeButton={false}
      />
    </>
  );
};

export default App;
