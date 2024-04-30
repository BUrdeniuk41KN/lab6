import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TraficLight.css'

const TraficLight = (props) => {
    const typeOBJ = useSelector(state => state.StatusBarState.toggleTraficType);
    const colorSelected = useSelector(state => state.StatusBarState.colorNowSelected);
    let tlContoroller = props.tlContoroller;
    let type = "vertical";
    
    const id_red = "color_red";
    const id_yelow = "color_yelow";
    const id_green = "color_green";

    let Rid_red = "color_red";
    let Rid_yelow = "color_yelow";
    let Rid_green = "color_green";

    const id_active = "_Active";

    
    switch(colorSelected){
        case "red":
            Rid_red = id_red + id_active;
            break;
        case "yelow":
            Rid_yelow = id_yelow + id_active;
            break;
            
        case "green":
            Rid_green = id_green + id_active;
            break;
    }

    
    switch(typeOBJ){
        case true:
            type = "vertical";
            break;
        case false:
            type = "horizontal";
            break;

    }

    return (
        <div className='container'>
            <p> </p>
            <p> </p>
            <div className="contain_trafic">
                <div className={"trafic trafic_" + type}>
                    <div id={Rid_red} className='colors'></div>
                    <div id={Rid_yelow} className='colors'></div>
                    <div id={Rid_green} className='colors'></div>
                </div>
                {tlContoroller != null ? <div className='Controller_conteiner'>{tlContoroller}</div> : <p>Contoroller none active:</p>}
            </div>
            
        </div>
    );
}

export default TraficLight;
