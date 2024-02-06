import './App.css';
import { Component } from 'react';
import routesss from "./routes/routes";
import {
  BrowserRouter as Router, Route, Routes, Navigate
} from "react-router-dom";


class App extends Component {

  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  render() {
    //parse and arrange routes;
    let allRoutes = [];
    routesss.map(({ spaceName, secure, role, routes }) => {

      routes.map(({ path, component, role }) => {
        // console.log(role)
        allRoutes.push({ path: path, component: component, role: role, secure: secure });
      })
    });
    //allRoutes is an array of objects where each object is constituted of a path, a component, a secure boolean and a role.
    const routeComponents = allRoutes.map(({ path, component, secure, role }, key) => {

      return (<Route exact path={path} element={component} key={key} role={role} />)
    });
    const { match } = this.props;
    console.log(routeComponents);
    return (
      <Router>

        <Routes>
          {routeComponents}
        </Routes>
      </Router>
    );
  }
}


export default App;
