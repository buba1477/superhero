
let initalState = {
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
    ]
};

const dcReduxer = (state = initalState, action) => {

    switch (action.type) {

        default:
            return state;
    }
}



export default dcReduxer;