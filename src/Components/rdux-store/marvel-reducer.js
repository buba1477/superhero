
let initalState = {
    "marvel": [
        {
            "name": "Чёрная Пантера",
            "image": "http://www.ramrus.ru/pic/marvel/blackpanther.jpg",
            "count": null
        },
        {
            "name": "Капитан Америка",
            "image": "http://www.ramrus.ru/pic/marvel/captainamerica.jpg",
            "count": null
        },
        {
            "name": "Сорвиголова",
            "image": "http://www.ramrus.ru/pic/marvel/daredevil.jpg",
            "count": null
        },
        {
            "name": "Доктор Стрэндж",
            "image": "http://www.ramrus.ru/pic/marvel/doctorstrange.jpg",
            "count": null
        },
        {
            "name": "Халк",
            "image": "http://www.ramrus.ru/pic/marvel/hulk.jpg",
            "count": null
        },
        {
            "name": "Железнй Человек",
            "image": "http://www.ramrus.ru/pic/marvel/ironman.jpg",
            "count": null,
        },
        {
            "name": "Человек-паук",
            "image": "http://www.ramrus.ru/pic/marvel/spiderman.jpg",
            "count": null
        },
        {
            "name": "Тор",
            "image": "http://www.ramrus.ru/pic/marvel/thor.jpg",
            "count": null
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