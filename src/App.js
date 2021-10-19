
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";

import Home from './components/Home/Home'
import OurExperts from "./components/OurExperts/OurExperts";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import ExpertDetails from "./components/ExpertDetails/ExpertDetails";
import Pharmecy from "./components/Pharmecy/Pharmecy";
import AuthProvider from "./context/AuthProvider";
import Department from "./components/Department/Department";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/ourExperts'>
              <OurExperts></OurExperts>
            </Route>

            <Route path='/pharmecy'>
              <Pharmecy></Pharmecy>
            </Route>

            <Route path='/departments'>
              <Department></Department>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <PrivateRoute path='/details/:doctorId'>
              <ExpertDetails></ExpertDetails>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
