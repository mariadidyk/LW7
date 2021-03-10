/**
 * Created by diana on 12.01.16.
 */

var pizza_info = [
    {
        id:1,
        icon:'assets/images/pizza_1.jpg',
        title: "Імпреза",
        type: 'М’ясна піца',
        content: {
            meat: ['Вітчина', 'куриця копчена'],
            pineapple: ['ананаси'],
            additional: ['сир моцарелла','соус томатний', 'петрушка', 'кукурудза']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        },
        is_new:true,

    },
    {
        id:2,
        icon:'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'М’ясна піца',
        content: {
            meat: ['Мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            mushroom: ['шампінйони'],
            additional: ['сир домашній','петрушка', 'оливки']
        },
        small_size:{
            weight: 390,
            size: 30,
            price: 105
        },
        big_size:{
            weight: 680,
            size: 40,
            price: 165
        },
        is_popular:true
    },
    
    {
        id:17,
        icon:'assets/images/pizza_3.jpg',
        title: "Маргарита",
        type: 'Вегетаріанська піца',
        content: {
            tomato: ['Томати'],
            additional: ['сир моцарелла','базилік', 'орегано', 'томатний соус']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 89
        },
         big_size:{
            weight: 660,
            size: 40,
            price: 119
        },
    },
    {
        id:90,
        icon:'assets/images/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'Морська піца',
        content: {
            ocean: ['Криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            additional: ['сир моцарелла','оливкова олія', 'вершки']
        },
        big_size:{
            weight: 845,
            size: 40,
            price: 399
        }
    },
    {
        id:6,
        icon:'assets/images/pizza_4.jpg',
        title: "Россо Густо",
        type: 'Морська піца',
        content: {
            ocean: ['Ікра червона', 'лосось копчений'],
            additional: ['сир моцарелла','оливкова олія', 'вершки']
        },
        small_size:{
            weight: 400,
            size: 30,
            price: 189
        },
        big_size:{
            weight: 700,
            size: 40,
            price: 299
        }
    },
    
        {
        id:6,
        icon:'assets/images/pizza_5.jpg',
        title: "Капричоза",
        type: 'М’ясна піца',
        content: {
            meat: ['Прошутто'],
            mushroom: ['шампінйони'],
            additional: ['сир моцарелла','руккола', 'базилік', 'болгарський перець']
        },
        small_size:{
            weight: 400,
            size: 30,
            price: 189
        },
        big_size:{
            weight: 700,
            size: 40,
            price: 299
        }
    }
];

module.exports = pizza_info;