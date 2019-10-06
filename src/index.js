import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListHero from "./Components/Listhero";
import SwitchDc from "./Components/SwitchDc";
import SwitchMarvel from "./Components/SwitchMarvel";
import { BrowserRouter, NavLink, Route, Redirect } from "react-router-dom";
import Search from "./Components/Searh";
import store from "./Components/rdux-store/redux-store";
import { sasNullCreateAction } from "./Components/rdux-store/sas-reducer";

const App = props => {
    return (
        <BrowserRouter>
            <div className="product">
                <ListHero state={props.appState.dlee.dlee} dispatch={props.dispatch} />

                <div className="d1">
                    <Search dispatch={props.dispatch} state={props.appState} />
                </div>
                <div>
                    <Route
                        path="/dc"
                        render={() => (
                            <SwitchDc state={props.appState} handler={props.dispatch} />
                        )}
                    />
                </div>
                <div>
                    <Route
                        path="/marvel"
                        render={() => (
                            <SwitchMarvel state={props.appState} handler={props.dispatch} />
                        )}
                    />
                </div>
                <div>
                    <Route exact path="/" render={() => <Redirect to="/marvel" />} />
                </div>
                <div>
                    <div className="switch">
                        <div className="img1">
                            <NavLink to="/marvel">
                                <img
                                    onClick={() => props.dispatch(sasNullCreateAction(""))}
                                    src="https://avatanplus.com/files/resources/mid/5ab55b8326f98162546d7858.png"
                                ></img>
                            </NavLink>
                        </div>
                        <div className="img1">
                            <NavLink to="/dc">
                                <img
                                    onClick={() => props.dispatch(sasNullCreateAction(""))}
                                    src="http://pluspng.com/img-png/dc-comics-logo-png-dc-comics-logo-png-600.png"
                                ></img>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

let rerenderEmpireTrtt = state => {
    ReactDOM.render(
        <App appState={state} dispatch={store.dispatch.bind(store)} />,
        document.getElementById("root")
    );
};

rerenderEmpireTrtt(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEmpireTrtt(state);
});
