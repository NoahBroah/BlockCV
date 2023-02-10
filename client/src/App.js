import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";
import { UserProvider } from "./UserContext";
import { JobsProvider } from "./JobsContext"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import EditProfiles from "./components/EditProfiles";
import CreateJob from "./components/CreateJob";
import JobView from "./components/JobView";

function App() {
  // useEffect(() => {
  //   fetch("/employees").then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((user) => setCurrentUser(user));
  //     } else {
  //       resp.json().then((errorData) => setErrors(errorData.errors));
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch("/employers").then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((user) => setCurrentUser(user));
  //     } else {
  //       resp.json().then((errorData) => setErrors(errorData.errors));
  //     }
  //   });
  // }, []);

  return (
    <UserProvider>
      <JobsProvider>
        <BrowserRouter>
          <div className="App" style={{ minHeight: "100vh" }}>
            <Navbar />
            <Switch>
              <Route exact path="/signup">
                <SignupForm />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/edit_profile">
                <EditProfiles />
              </Route>
              <Route exact path="/create_job">
                <CreateJob />
              </Route>
              <Route exact path="/my_jobs/:id">
                <JobView />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </JobsProvider>
    </UserProvider>
  );
}

export default App;
