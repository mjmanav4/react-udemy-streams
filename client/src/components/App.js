import React from "react";

import { Router, Route, Switch } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import Header from "./Header";
import history from "../history";

/* <Route
path="/streams/new"
exact
render={() => {
  return <StreamCreate />;
}}
/> */

// 20548985532-4ohmjttrtbd68631uu0uq13c41smb4nu.apps.googleusercontent.com
// scclJ-W-awSkz5aS8viUR6Vr
const App = () => {
  return (
    <div className="ui conatiner">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />

            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
