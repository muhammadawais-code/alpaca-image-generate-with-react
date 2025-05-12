import { useState } from "react";
import '../styles/style.css'



function Buttons ({btns , newAlpaca}){

    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const [subButtons,setSubButtons] = useState("backgrounds");

    return (
        <>
            <div className="col-md-6 col-12" id="btns-div">

                <div id="main-heading-btns">
                    <h4>Accessorize the Alpaca's</h4>
                    {Object.entries(btns).map((ent) => (
                        <button onClick={() => setSubButtons(ent[0])}>{capitalize(ent[0])}</button>
                    ))}
                </div>

                <div id="heading-all-btns">
                <h4>Style</h4>

                    { (subButtons && subButtons !== "backgrounds") &&
                        Object.entries(btns[subButtons]).map((ent) => (
                            <button
                            key={ent[0]}
                            onClick={() =>
                              newAlpaca((prev_val) => ({
                                ...prev_val,
                                [subButtons]: ent[1][1], // or ent[1][0] if you want the label
                              }))
                            }
                          >
                            {ent[1][0]}
                          </button>
                           
                        )
                            
                        )
                    }
                   
                    { (subButtons && subButtons === "backgrounds") &&
                        Object.entries(btns[subButtons]).map((ent) => (
                            <button
                            id="bg-btn"
                            key={ent[0]}
                            style={{background: "none",border:"none"}}
                            onClick={() =>
                              newAlpaca((prev_val) => ({
                                ...prev_val,
                                [subButtons]: ent[1], // or ent[1][0] if you want the label
                              }))
                            }
                          >
                            <img id="bg-image"  style={{width: 30, height:30,borderRadius:'50%'}} src={`alpaca/${subButtons}/${ent[1]}`} alt="" />
                            
                          </button>
                           
                        )
                            
                        )
                    }

                </div>



            </div>
        </>
    )
}


export {Buttons}