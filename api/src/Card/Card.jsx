import { useState } from "react";
import ModalContent2 from "../ModalContent2";

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
                            if (prop == "cca2") {
                                return (
                                    <>
                                        <div className="inline">
                                            <p className="key" >ISO 3166-1 alpha-2 code: </p>
                                            <p>{props.contents[prop]}</p>
                                        </div>
                                    </>
                                );
                            }
                            else if (prop == "cca3") {
                                return (
                                    <>
                                        <div className="inline">
                                            <p className="key">ISO 3166-1 alpha-3 code: </p>
                                            <p>{props.contents[prop]}</p>
                                        </div>
                                    </>
                                );
                            }
                            return (
                                <>
                                    <div className="inline">
                                        <p className="key">{prop[0].toUpperCase() + prop.substring(1)}: </p>
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
                                <p className="key">{prop}: </p>
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
                            case "item":
                                return (
                                    <>
                                        <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />

                                    </>
                                );
                            case "name":
                                return (
                                    <>

                                        <p className="key">Country name: </p>
                                        <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />

                                    </>
                                );
                            case "nativeName":
                                return (
                                    <>

                                        <p className="key">Country native name: </p>
                                        <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />


                                    </>
                                );
                            case "idd":
                                return (
                                    <>

                                        <p className="key">International direct dialing: </p>
                                        <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />


                                    </>
                                );
                            default:
                                return (
                                    <>

                                        <p className="key">{prop}: </p>
                                        <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />


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