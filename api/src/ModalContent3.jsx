import { useState, useEffect } from "react";
import Modal from "react-modal"
import OpenModal from "./OpenModal";

function ModalContent3(props) {

    return (
        <>
            <div className="modal">
                <div>
                    {props.keys.map((prop) => {
                        if (typeof (props.contents[prop]) == "string") {
                            return (
                                <p>{prop} : {props.contents[prop]}</p>
                            );

                        }
                        else {
                            return (

                                <>
                                    <ModalContent3 contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} />
                                </>
                            );
                        }
                    })
                    }
                </div>
            </div>

        </>
    );
}
export default ModalContent3