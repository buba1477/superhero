
let initalState = {
    "dc": [
        {
            "name": "Аквамен",
            "image": "http://www.ramrus.ru/pic/dc/aquaman.jpg",
            "count": null
        },
        {
            "name": "Бэтмен",
            "image": "http://www.ramrus.ru/pic/dc/batman.jpg",
            "count": null
        },
        {
            "name": "Киборг",
            "image": "http://www.ramrus.ru/pic/dc/cyborg.jpg",
            "count": null
        },
        {
            "name": "Флэш",
            "image": "http://www.ramrus.ru/pic/dc/flash.jpg",
            "count": null
        },
        {
            "name": "Зелёный Фонарь",
            "image": "http://www.ramrus.ru/pic/dc/greenlantern.jpg",
            "count": null
        },
        {
            "name": "Супергёрл",
            "image": "http://www.ramrus.ru/pic/dc/supergirl.jpg",
            "count": null
        },
        {
            "name": "Супермен",
            "image": "http://www.ramrus.ru/pic/dc/superman.jpg",
            "count": null
        },
        {
            "name": "Чудо-женщина",
            "image": "http://www.ramrus.ru/pic/dc/wonderwoman.jpg",
            "count": null
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