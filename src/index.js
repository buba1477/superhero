import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListHero from './Components/Listhero'
import SwitchDc from "./Components/SwitchDc";
import SwitchMarvel from "./Components/SwitchMarvel";
import {BrowserRouter, NavLink, Route, Redirect} from "react-router-dom";

import {handlerPush} from './Data/dota'
import data from './Data/dota';
import {appMar} from './reder'


appMar(data);

