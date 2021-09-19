import React, {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import item1 from "../../../image/slider/1.png"
import item2 from "../../../image/slider/2.png"
import item3 from "../../../image/slider/3.png"
import item4 from "../../../image/slider/4.png"
import item5 from "../../../image/slider/5.png"
import item6 from "../../../image/slider/6.png"
import item7 from "../../../image/slider/7.png"
import item8 from "../../../image/slider/8.png"
import item9 from "../../../image/slider/9.png"
import right from "../../../image/slider/right.svg"
import left from "../../../image/slider/left.svg"
import style from './DiplomGallery.module.css'


const items = [
    <div className={style.item} data-value="1"><img src={item1} alt=""/></div>,
    <div className={style.item} data-value="1"><img src={item2} alt=""/></div>,
    <div className={style.item} data-value="1"><img src={item3} alt=""/></div>,
    <div className={style.item} data-value="1"><img src={item4} alt=""/></div>,
    <div className={style.item} data-value="1"><img src={item5} alt=""/></div>,
    <div className={style.item} data-value="1"><img src={item6} alt=""/></div>,
    <div className={style.item} data-value="1"><img src={item7} alt=""/></div>,
    <div className={style.item} data-value="1"><img src={item8} alt=""/></div>,
    <div className={style.item} data-value="1"><img src={item9} alt=""/></div>,
];

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const createItems = (length, [handleClick]) => {
    let deltaX = 0;
    let difference = 0;
    const swipeDelta = 20;

    return items.map((item, i) => (
        <div
            data-value={i + 1}
            className="item"
            onMouseDown={(e) => (deltaX = e.pageX)}
            onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
            onClick={() => (difference < swipeDelta) && handleClick(i)}
        >
            {item}
        </div>
    ));
};

export const DiplomGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [items] = useState(createItems(5, [setActiveIndex]));

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return [
        <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={items}
            activeIndex={activeIndex}
            responsive={responsive}
            onSlideChanged={syncActiveIndex}
        />,
        <div className={style.btns}>
            <div className={style.btn} onClick={slidePrev}><img src={left} alt=""/></div>
            <div className={style.btn} onClick={slideNext}><img src={right} alt=""/></div>
        </div>,
    ];
};