import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />

            <Route path='/service/:serviceId' element={
              <PrivateRoute>
                <ServiceDetail />
              </PrivateRoute>
            } />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/*' element={<Register />} /> */}
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
