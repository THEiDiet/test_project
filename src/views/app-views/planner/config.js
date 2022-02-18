import table from "./assets/table.png";
import sofa from "./assets/sofa.png";
import armchair from './assets/armchair.png'
import cupboard from './assets/cupboard.png'
import bath from './assets/bath.png'
import dinnerTable from './assets/dinner-table.png'
import sink from './assets/sink.png'
import toilet from './assets/toilet.png'
import tv from './assets/tv.png'
import bed from './assets/bed.png'
import oneRoom from './assets/one-room.jpg'
import twoRooms from './assets/two-rooms.jpg'


export const furniture = {
    name:'furniture',
    objects:[
        {
            id:'table',
            x:0,
            y:0,
            scale:1,
            width:130,
            height:69,
            rotate:0,
            link:table
        },{
            id:'sofa',
            x:0,
            y:0,
            scale:1,
            width:190,
            height:86,
            rotate:0,
            link:sofa
        },
        {
            id:'armchair',
            x:0,
            y:0,
            scale:1,
            width:90,
            height:88,
            rotate:0,
            link:armchair
        },
        {
            id:'toilet',
            x:0,
            y:0,
            scale:1,
            width:70,
            height:43,
            rotate:0,
            link:toilet
        },
        {
            id:'sink',
            x:0,
            y:0,
            scale:1,
            width:60,
            height:42,
            rotate:0,
            link:sink
        },
        {
            id:'cupboard',
            x:0,
            y:0,
            scale:1,
            width:350,
            height:90.5,
            rotate:0,
            link:cupboard
        },
        {
            id:'bath',
            x:0,
            y:0,
            scale:1,
            width:170,
            height:87,
            rotate:0,
            link:bath
        },
        {
            id:'dinner-table',
            x:0,
            y:0,
            scale:1,
            width:200,
            height:137.5,
            rotate:0,
            link:dinnerTable
        },
        {
            id:'tv',
            x:0,
            y:0,
            scale:1,
            width:120,
            height:40.5,
            rotate:0,
            link:tv
        },
        {
            id:'bed',
            x:0,
            y:0,
            scale:1,
            width:270,
            height:190,
            rotate:0,
            link:bed
        },
    ]
}
export const plans = {
    name:'plans',
    plans:[
        {
            name:'two-roomed flat',
            width:1244,
            height:734,
            link:twoRooms
        },
        {
            name:'studio apartment',
            width:700,
            height:700,
            link:oneRoom
        },
    ]
}