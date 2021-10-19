import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutDetails from './components/AboutDetails/AboutDetails';
import Details from './components/Details/Details';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import Home from './components/Home/Home/Home';
import Footer from './components/Home/Shared/Footer/Footer';
import Header from './components/Home/Shared/Header/Header';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/detail/:serviceId">
              <Details></Details>
            </PrivateRoute>
          <PrivateRoute path="/doctorDetail/:doctorId">
           <DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <PrivateRoute path="/aboutDetails">
           <AboutDetails></AboutDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
