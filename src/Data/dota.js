import {appMar} from "../reder";

let data = {

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

window.state = data;
export let handlerPush = (messa) => {

    data.dlee.push(messa);
    appMar(data);
}

data.dis = data.dc.filter((number) => {
    return number.name.toLowerCase().indexOf('') !== -1;
});
data.mar = data.marvel.filter((number) => {
    return number.name.toLowerCase().indexOf('') !== -1;
});

export let hanlderChang = (prop) => {
    data.sas = prop;
    data.mar = data.marvel.filter((number) => {
        return number.name.toLowerCase().indexOf(prop) !== -1;
    });
    data.dis = data.dc.filter((number) => {
        return number.name.toLowerCase().indexOf(prop) !== -1;
    });
    appMar(data);
};

export let handlerIn = () => {
    data.sas = "";
    hanlderChang("");
    appMar(data);
 
}


export default data;
