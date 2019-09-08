import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListHero from './Components/Listhero'
import SwitchDc from "./Components/SwitchDc";
import SwitchMarvel from "./Components/SwitchMarvel";
import {BrowserRouter, NavLink, Route, Redirect} from "react-router-dom";
import {handlerPush} from './Data/dota'



const App = (props) => {


    return (
        <BrowserRouter>
            <div className='product'>

                <ListHero dcd={props.state.dlee} />

                <div className="d1">
                    <form>
                        <input type="text" placeholder="Имя героя..."/>
                        <button type="submit"></button>
                    </form>
                </div>
                <div>
                    <Route path='/dc' render={() => <SwitchDc dc={props.state.dc}  />}/>
                </div>
                <div>
                     <Route path='/marvel' render={() => <SwitchMarvel marvel={props.state.marvel} handler = {handlerPush}/>}/>
                </div>
                <div>
                    <Route exact path="/" render={() => (<Redirect to="/marvel"/>)}/>
                </div>
                <div>
                    <div className='switch'>
                        <div className='img1'>
                            <NavLink to='/marvel'><img
                                src='https://i.pinimg.com/originals/5f/2e/8b/5f2e8bb9837ac966fe4346387082d346.png'></img></NavLink>
                        </div>
                        <div className='img1'>
                            <NavLink to='/dc'><img
                                src='http://pluspng.com/img-png/dc-comics-logo-png-dc-comics-logo-png-600.png'></img></NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export let appMar = (state) => {
    ReactDOM.render(
        <App state = {state}/>,
        document.getElementById('root')
    );

}