import './App.css'
import Home from './pages/home'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer 
        position='top-center'
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        limit={1}
        theme='light'
      />
      <Home />
    </>
  )
}

export default App
