import React from 'react';

const DraggableElement = ({image, onDragStartHandler, onDragLeave,onBlurHandler}) => {
    const styles = {
        width: image.width,
        height: image.height,
        top: image.y + 'px',
        left: image.x + 'px',
        position: 'absolute',
        cursor:'grab',
        transform:`rotate(${image.rotate}deg) scale(${image.scale})`,
        zIndex:10
    }
    const onDragHandler = (e) => {

        console.log(e)
        onDragStartHandler(e)
    }

    const onDragEndHandler = (e) => {
        console.log(e);
        onDragLeave(e)

    }
    return  <img
        draggable={true}
        tabIndex={10}
        onClick={onDragHandler}
        onDragStart={(e) => onDragHandler(e)}
        onDragEnd={(e) => onDragEndHandler(e)}
        src={image.link}
        style={styles}/>
};


export default DraggableElement;