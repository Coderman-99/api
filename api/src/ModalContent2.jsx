import { useState, useEffect } from "react";
import Modal from "react-modal"
function ModalContent2(props) {
    return (
        <>
            <div className="modal-content">
                <div>
                    {props.keys.map((prop) => {
                        if (typeof (props.contents[prop]) == "string") {
                            if (props.contents[prop].includes("https")) {
                                return (
                                    <>
                                        <div className="inline">
                                            <p className="key">&emsp;&emsp;{prop[0].toUpperCase() + prop.substring(1)}: </p>
                                            <p><a href={props.contents[prop]}>{props.contents[prop]}</a></p>
                                        </div>

                                    </>
                                );
                            }
                            return (
                                <>
                                    <div className="inline">
                                        <p className="key">&emsp;&emsp;{prop[0].toUpperCase() + prop.substring(1)}: </p>
                                        <p>{props.contents[prop]}</p>
                                    </div>

                                </>

                            );

                        }
                        else if (props.contents[prop].constructor == Array) {
                            return (
                                <>
                                    <div className="inline">
                                        <p className="key">&emsp;&emsp;{prop[0].toUpperCase() + prop.substring(1)}: </p>
                                        <p>{props.contents[prop].join(' ')}</p>
                                    </div>

                                </>
                            );
                        }
                        else if (props.contents[prop].constructor == Object) {
                            if (prop == "nativeName") {
                                return (
                                    <>
                                        <div className="inline">
                                            <p className="key">&emsp;Native name: </p>
                                            <ModalContent2 contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} />
                                        </div>
                                    </>
                                );
                            }
                            else {
                                return (
                                    <>
                                        <div className="inline">
                                            <p className="key">&emsp;{prop[0].toUpperCase() + prop.substring(1)}: </p>
                                            <ModalContent2 contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} />
                                        </div>
                                    </>
                                );
                            }
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