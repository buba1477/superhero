
let initalState = {
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
    ]
};

const marvelReduxer = (state = initalState, action) => {

        switch (action.type) {

            default:
                return state;
        }
    }

export default marvelReduxer;