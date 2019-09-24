import './index.css';
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
        
        this.state = {
            "dc": [
                {
                    "name": "Аквамен",
                    "image": "http://www.ramrus.ru/pic/dc/aquaman.jpg",
                    "count": ""
                },
                {
                    "name": "Бэтмен",
                    "image": "http://www.ramrus.ru/pic/dc/batman.jpg",
                    "count": ""
                },
                {
                    "name": "Киборг",
                    "image": "http://www.ramrus.ru/pic/dc/cyborg.jpg",
                    "count": ""
                },
                {
                    "name": "Флэш",
                    "image": "http://www.ramrus.ru/pic/dc/flash.jpg",
                    "count": ""
                },
                {
                    "name": "Зелёный Фонарь",
                    "image": "http://www.ramrus.ru/pic/dc/greenlantern.jpg",
                    "count": ""
                },
                {
                    "name": "Супергёрл",
                    "image": "http://www.ramrus.ru/pic/dc/supergirl.jpg",
                    "count": ""
                },
                {
                    "name": "Супермен",
                    "image": "http://www.ramrus.ru/pic/dc/superman.jpg",
                    "count": ""
                },
                {
                    "name": "Чудо-женщина",
                    "image": "http://www.ramrus.ru/pic/dc/wonderwoman.jpg",
                    "count": ""
                }
            ],
            "marvel": [
                {
                    "name": "Чёрная Пантера",
                    "image": "http://www.ramrus.ru/pic/marvel/blackpanther.jpg",
                    "count": ""
                },
                {
                    "name": "Капитан Америка",
                    "image": "http://www.ramrus.ru/pic/marvel/captainamerica.jpg",
                    "count": ""
                },
                {
                    "name": "Сорвиголова",
                    "image": "http://www.ramrus.ru/pic/marvel/daredevil.jpg",
                    "count": ""
                },
                {
                    "name": "Доктор Стрэндж",
                    "image": "http://www.ramrus.ru/pic/marvel/doctorstrange.jpg",
                    "count": ""
                },
                {
                    "name": "Халк",
                    "image": "http://www.ramrus.ru/pic/marvel/hulk.jpg",
                    "count": ""
                },
                {
                    "name": "Железнй Человек",
                    "image": "http://www.ramrus.ru/pic/marvel/ironman.jpg",
                    "count": "",
                },
                {
                    "name": "Человек-паук",
                    "image": "http://www.ramrus.ru/pic/marvel/spiderman.jpg",
                    "count": ""
                },
                {
                    "name": "Тор",
                    "image": "http://www.ramrus.ru/pic/marvel/thor.jpg",
                    "count": ""
                }
            ],
            "dlee": [],
            "sas": "",
            "count": ""
        };


    };

    handlerCount = (heroObject) => {
        let obj = this.state.dlee.find(a => a.image === heroObject.image);
        obj.count ++;

         }
    
    handlerP = (messag) => {

        console.warn(messag);
        
        this.setState((state) => {
                        
            if ( state.dlee.indexOf(messag) == -1) {
                state.dlee = state.dlee.concat([messag]); 
            }else {
                    this.handlerCount(messag);
                }        
              
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

    handlDel = (prop) => {

        this.setState((state) => {
            state.dlee.splice(prop.index, 1)
            return state;
        });

    }
    render() {
        return (
            <BrowserRouter>
                <div className='product'>

                    <ListHero dcd={this.state.dlee} handler={this.handlDel} count ={this.state.count} />
                           
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


ReactDOM.render(
    <App />,
    document.getElementById('root')
);





