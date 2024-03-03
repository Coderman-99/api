import { useState, useEffect } from "react";
import Modal from "react-modal"
import OpenModal from "./OpenModal";
import ModalContent3 from "./ModalContent3";
function ModalContent2(props) {
    return (
        <>
            <div className="modal-content">
                <div>
                    {props.keys.map((prop) => {
                        if (typeof (props.contents[prop]) == "string") {
                            return (
                                <p>{prop} : {props.contents[prop]}</p>
                            );

                        }
                        else if (props.contents[prop].constructor == Array) {
                            return (
                                <>
                                    <p>{prop} : {props.contents[prop].join(' ')}</p>
                                </>
                            );
                        }
                        else if (props.contents[prop].constructor == Object) {
                            return (
                                <>
                                    <ModalContent2 contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} />
                                </>
                            );
                        }
                        else {
                            return (
                                <></>
                            );
                        }
                    })
                    }
                </div>
            </div>
        </>
    );
}
export default ModalContent2