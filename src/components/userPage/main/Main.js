import React from "react";
import LogoPage from "./logoPage/LogoPage";
import {Route, Switch} from "react-router-dom";
import TaskTrackContainer from "./TaskTrackContainer";

const Main = ({match}) => {
    return (
        <div id="main">
            <Switch>
                <Route path="/task/:id" component={TaskTrackContainer}/>
                <Route path="/" exact component={LogoPage}/>
            </Switch>
        </div>
    );
};

export default Main;
