import './App.css';
import AddUrl from './components/AddUrl/AddUrl';
import ViewUrl from './components/ViewUrl/ViewUrl';
// import UserManagement from './components/user-management/UserManagement';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <ViewUrl />
        <AddUrl />
        {/* <UserManagement/> */}
      </div>
      <ToastContainer/>
    </Provider>
  );
}

export default App;
