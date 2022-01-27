import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import Blogs from './Pages/Dashboard/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import MakePost from './Pages/Dashboard/MakePost/MakePost';
import Review from './Pages/Dashboard/Review/Review';
import Update from './Pages/Dashboard/Update/Update';
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

            {/* //dashboard */}
            <Route path='/dashboard' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }>
              <Route path='/dashboard' element={<Blogs />} />
              <Route path='/dashboard/blogs' element={<Blogs />} />
              <Route path='/dashboard/blogs/:blogId' element={<Update />} />
              <Route path='/dashboard/makeblog' element={<MakePost />} />
              <Route path='/dashboard/admin' element={<MakeAdmin />} />
              <Route path='/dashboard/review' element={<Review />} />
            </Route>


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
