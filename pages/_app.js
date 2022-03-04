import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import store from "../Redux/store";
import {Provider} from "react-redux";


function App({ Component, pageProps:{session, ...pageProps}, }) {

  return(
    <Provider store={store} >
      <SessionProvider session={session}>
        <ToastContainer/>
          <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  
  );
}

export default App
