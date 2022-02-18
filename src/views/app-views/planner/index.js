import React, {useEffect, useRef, useState} from 'react';
import s from './styles.module.css'
import {furniture, plans} from "./config";
import Preview from "./Preview";
import DraggableElement from "./DraggableElement";
import {Button, Col, Row} from "antd";
import Flex from "../../../components/shared-components/Flex";

const Planner = () => {
    const [state, setState] = useState([])
    const canvasRef = useRef(null)
    const [currentItem, setCurrentItem] = useState(null)
    const [scale, setScale] = useState(1)
    const [coordsXY, setCoordsXY] = useState(null)
    const [canvasSize, setCanvasSize] = useState([plans.plans[0].width, plans.plans[0].height])
    const [furnitureIsOpen, setFurnitureIsOpen] = useState(false)
    const [plansIsOpen, setPlansIsOpen] = useState(false)
    const [currentPlan, setCurrentPlan] = useState(plans.plans[0])
    const [linkForExport, setLinkForExport] = useState(null)

    useEffect(() => {
        getFromLS()
    }, [])
    useEffect(() => {
        setCoordsXY(canvasRef.current.getBoundingClientRect())
    }, [currentPlan])

    const onButtonClick = (e, id) => {
        let stuff = furniture.objects.filter(elem => elem.id === id)[0]
        stuff = {...stuff, id: stuff.id + Date.now()}
        setState(prev => [...prev, stuff])
    }

    const onDragLeave = (e, item) => {
        const x = e.clientX - coordsXY.left - item.width / 2
        const y = e.clientY - coordsXY.top - item.height / 2
        const finalX = x < 0 ? 0 : x > canvasSize - item.width ? canvasSize - item.width : x
        const finalY = y < 0 ? 0 : y > canvasSize - item.height ? canvasSize - item.height : y
        setState(prev => {
            return prev.map(elem => elem.id === item.id ? {...elem, x: finalX, y: finalY} : elem)
        })
    }

    const saveToLS = () => {
        localStorage.setItem('plan', JSON.stringify(state))
    }
    const getFromLS = () => {
        const plan = JSON.parse(localStorage.getItem('plan'))
        if (plan) {
            setState(plan)
        }
    }
    const rotateElement = () => {
        if (currentItem) {
            setState(prev => {
                return prev.map(elem => elem.id === currentItem.id ? {...elem, rotate: elem.rotate + 90} : elem)
            })
            setCurrentItem(prev => ({...prev, rotate: prev.rotate + 90}))
        }
    }
    const onBlurHandler = (e) => {
        if (e.target.draggable !== true) {
            setCurrentItem(null)
        }
    }
    const changeScale = (e) => {
        if (e.currentTarget.value === 'plus') {
            setScale(prev => Math.round((prev + 0.1) * 10) / 10)
        } else if (e.currentTarget.value === 'minus') {
            setScale(prev => Math.round((prev - 0.1) * 10) / 10)
        }
    }

    const setFurnitureIsOpenHandler = () => {
        setFurnitureIsOpen(prev => !prev)
    }
    const setPlansIsOpenHandler = () => {
        setPlansIsOpen(prev => !prev)
    }

    const setNewCanvas = (plan) => {
        setCurrentPlan(plan)
        setCanvasSize([plan.width, plan.height])
    }

    const getExportedFile = () => {
        const link = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], {
            type: "application/json"
        }));
        setLinkForExport(link)
    }

    const clearCanvas = () => {
        setState([])
    }

    const importFile = (e) => {
        const reader = new FileReader()
        const file = e.target.files[0]
        reader.readAsDataURL(file)
        reader.onloadend = (e) => {
            const fileURL = e.target.result
            let httpRequest = new XMLHttpRequest();
            httpRequest.open("GET", fileURL.toString(), true);
            httpRequest.send();
            httpRequest.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                    setState(JSON.parse(this.response))
                }
            });
        }
    }
    return (
        <Row className={s.wrapper}>
            <Col span={2} className={s.buttons}>
                <Button className={s.btn} onClick={setFurnitureIsOpenHandler}>{furniture.name}</Button>
                {furnitureIsOpen && furniture.objects.map(elem => {
                    return <Preview key={elem.id} item={elem} onClick={(e) => onButtonClick(e, elem.id)}/>
                })}
                <Button className={s.btn} onClick={setPlansIsOpenHandler}>{plans.name}</Button>
                {plansIsOpen && plans.plans.map(plan => <Preview key={plan.name} onClick={() => setNewCanvas(plan)}
                                                                 item={plan}/>)}
            </Col>
            <Col span={20} className={s.canvasContainer}>
                <div ref={canvasRef} style={{
                    transform: `scale(${scale})`,
                    background: `url(${currentPlan.link}) #fafafa`,
                    width: currentPlan.width,
                    height: currentPlan.height
                }}
                     className={s.canvas} onClick={onBlurHandler}>
                    {state.map(item => <DraggableElement key={item.id} onBlurHandler={onBlurHandler}
                                                         onDragStartHandler={() => setCurrentItem(item)}
                                                         onDragLeave={(e) => onDragLeave(e, item)} image={item}/>)}
                </div>
            </Col>
            <Col span={2} className={s.buttons}>
                <div>Width: {currentPlan.width/100} m.</div>
                <div>Height: {currentPlan.height/100} m.</div>
                <div className={s.scale}>Scale: {scale}</div>
                <Flex className={s.flex}>
                    <button className={s.size} value='plus' onClick={changeScale}>+</button>
                    <button className={s.size} value='minus' onClick={changeScale}>-</button>
                </Flex>
                <Button className={`${s.btn} ${s.rotate}`} onClick={rotateElement}>rotate</Button>

                <label htmlFor="file" className={s.fileLabel}>
                    <input className={s.file} id={'file'} type="file" onChange={importFile}/>
                    <span>Upload plan</span>
                </label>
                {linkForExport && <a className={s.fileLabel}  href={linkForExport} download={"plan.json"}>download</a>}
                {!linkForExport && <Button className={s.btn} onClick={getExportedFile}>export</Button>}
                <Button className={s.btn} onClick={saveToLS}>save</Button>
                <Button className={s.btn} onClick={clearCanvas}>remove</Button>

            </Col>
        </Row>
    )
}

export default Planner;