import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import { ToastContainer } from "react-toastify";
import store from "../Redux/store";
import {Provider} from "react-redux";
import 'react-toastify/dist/Reacttoastify.css';


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