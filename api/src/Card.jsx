import { useState } from "react";
import ModalContent2 from "./ModalContent2";

function Card(props) {
    return (
        <>
            {props.keys.map((prop) => {
                if (typeof (props.contents[prop]) == "string") {
                    if (prop == "png") {
                        return (
                            <img src={props.contents[prop]} alt="flag" />
                        );
                    }
                    else {
                        if (prop == "svg" || prop == "alt") {
                            return (
                                <></>
                            );
                        }
                        else {
                            return (
                                <>
                                    <div className="inline">
                                        <p className="children-key" style={{ color: props.color }} >{prop}: </p>
                                        <p>{props.contents[prop]}</p>
                                    </div>

                                </>
                            );
                        }

                    }
                }
                else if (props.contents[prop].constructor == Array) {
                    return (
                        <>
                            <div className="inline">
                                <p className="children-key" style={{ color: props.color }}>{prop}: </p>
                                <p>{props.contents[prop].join(' ')}</p>
                            </div>

                        </>
                    );
                }
                else if (props.contents[prop].constructor == Object) {
                    if (prop == "flags") {
                        return (<Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} />
                        );
                    }
                    else {
                        switch (prop) {
                            case "name":
                                return (
                                    <>
                                        <p className="parent-key">Country name: </p>
                                        <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} />
                                    </>
                                );
                            case "nativeName":
                                return (
                                    <>
                                        <p className="parent-key">Country native name: </p>
                                        <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} />
                                    </>
                                );
                            case "idd":
                                return (
                                    <>
                                        <p className="parent-key">International direct dialing: </p>
                                        <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} />
                                    </>
                                );
                            default:
                                return (
                                    <>
                                        <p className="parent-key">{prop}: </p>
                                        <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} />
                                    </>
                                );

                        }

                    }
                }
                else {
                    return (
                        <></>
                    );
                }
            })
            }
        </>
    );
}
export default Card