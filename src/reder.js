import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListHero from './Components/Listhero'
import SwitchDc from "./Components/SwitchDc";
import SwitchMarvel from "./Components/SwitchMarvel";
import { BrowserRouter, NavLink, Route, Redirect } from "react-router-dom";
import Search from "./Components/Searh";





class App extends React.Component {
    constructor(props) {
        super(props);
        this.handlerP = this.handlerP.bind(this);
        this.hanlderChang = this.hanlderChang.bind(this);
        this.handlerIn = this.handlerIn.bind(this);
        debugger;
        this.state = {
            "dc": [
                {
                    "name": "Аквамен",
                    "image": "http://www.ramrus.ru/pic/dc/aquaman.jpg"
                },
                {
                    "name": "Бэтмен",
                    "image": "http://www.ramrus.ru/pic/dc/batman.jpg"
                },
                {
                    "name": "Киборг",
                    "image": "http://www.ramrus.ru/pic/dc/cyborg.jpg"
                },
                {
                    "name": "Флэш",
                    "image": "http://www.ramrus.ru/pic/dc/flash.jpg"
                },
                {
                    "name": "Зелёный Фонарь",
                    "image": "http://www.ramrus.ru/pic/dc/greenlantern.jpg"
                },
                {
                    "name": "Супергёрл",
                    "image": "http://www.ramrus.ru/pic/dc/supergirl.jpg"
                },
                {
                    "name": "Супермен",
                    "image": "http://www.ramrus.ru/pic/dc/superman.jpg"
                },
                {
                    "name": "Чудо-женщина",
                    "image": "http://www.ramrus.ru/pic/dc/wonderwoman.jpg"
                }
            ],
            "marvel": [
                {
                    "name": "Чёрная Пантера",
                    "image": "http://www.ramrus.ru/pic/marvel/blackpanther.jpg"
                },
                {
                    "name": "Капитан Америка",
                    "image": "http://www.ramrus.ru/pic/marvel/captainamerica.jpg"
                },
                {
                    "name": "Сорвиголова",
                    "image": "http://www.ramrus.ru/pic/marvel/daredevil.jpg"
                },
                {
                    "name": "Доктор Стрэндж",
                    "image": "http://www.ramrus.ru/pic/marvel/doctorstrange.jpg"
                },
                {
                    "name": "Халк",
                    "image": "http://www.ramrus.ru/pic/marvel/hulk.jpg"
                },
                {
                    "name": "Железнй Человек",
                    "image": "http://www.ramrus.ru/pic/marvel/ironman.jpg"
                },
                {
                    "name": "Человек-паук",
                    "image": "http://www.ramrus.ru/pic/marvel/spiderman.jpg"
                },
                {
                    "name": "Тор",
                    "image": "http://www.ramrus.ru/pic/marvel/thor.jpg"
                }
            ],
            "dlee": [],
            "sas": ""
        };

    };

    handlerP = (messag) => {
        
        this.setState( (state) => {
            state.dlee = state.dlee.concat([messag]);
            return state;
        });
       
    
    }

    hanlderChang = (prop) => {

        this.setState({
            sas: prop
        })
    };

    handlerIn = () => {
        this.setState({
            sas: ""
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className='product'>

                    <ListHero dcd={this.state.dlee} />

                    <div className="d1">
                        <Search hanchang={this.hanlderChang} state={this.state} />
                    </div>
                    <div>
                        <Route path='/dc' render={() => <SwitchDc dc={this.state} handler={this.handlerP} />} />
                    </div>
                    <div>
                        <Route path='/marvel'
                            render={() => <SwitchMarvel marvel={this.state} handler={this.handlerP} />} />
                    </div>
                    <div>
                        <Route exact path="/" render={() => (<Redirect to="/marvel" />)} />
                    </div>
                    <div>
                        <div className='switch'>
                            <div className='img1'>
                                <NavLink to='/marvel'><img onClick={this.handlerIn}
                                    src='https://avatanplus.com/files/resources/mid/5ab55b8326f98162546d7858.png'></img></NavLink>
                            </div>
                            <div className='img1'>
                                <NavLink to='/dc'><img onClick={this.handlerIn}
                                    src='http://pluspng.com/img-png/dc-comics-logo-png-dc-comics-logo-png-600.png'></img></NavLink>

                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export let appMar = (state) => {
    ReactDOM.render(
        <App state={state} />,
        document.getElementById('root')
    );

}