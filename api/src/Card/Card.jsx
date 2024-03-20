import { useState } from "react";
import ModalContent2 from "../ModalContent2";
import styles from "./Card.module.css"

function Card(props) {
    return (
        <>
            {props.keys.map((prop, id) => {
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
                                        <div key={id} className="inline">
                                            <p className="key" >ISO 3166-1 alpha-2 code: </p>
                                            <p>{props.contents[prop]}</p>
                                        </div>
                                    </>
                                );
                            }
                            else if (prop == "cca3") {
                                return (
                                    <>
                                        <div key={id} className="inline">
                                            <p className="key">ISO 3166-1 alpha-3 code: </p>
                                            <p>{props.contents[prop]}</p>
                                        </div>
                                    </>
                                );
                            }
                            return (
                                <>
                                    <div key={id} className="inline">
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
                            <div key={id} className="inline">
                                <p className="key">{prop}: </p>
                                <p>{props.contents[prop].join(' ')}</p>
                            </div>

                        </>
                    );
                }
                else if (props.contents[prop].constructor == Object) {
                    if (prop == "flags") {
                        return (

                            <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} key={props.key} />
                        );
                    }
                    else {
                        switch (prop) {
                            case "item":
                                return (
                                    <>
                                        <div key={id} >
                                            <Card key={props.key} contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />
                                        </div>
                                    </>
                                );
                            case "name":
                                return (
                                    <>

                                        <p key={id} className="key">Country name: </p>
                                        <Card key={props.key} contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />

                                    </>
                                );
                            case "nativeName":
                                return (
                                    <>

                                        <p key={id} className="key">Country native name: </p>
                                        <Card key={props.key} contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />


                                    </>
                                );
                            case "idd":
                                return (
                                    <>

                                        <p key={id} className="key">International direct dialing: </p>
                                        <Card key={props.key} contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />


                                    </>
                                );
                            default:
                                return (
                                    <>

                                        <p key={id} className="key">{prop}: </p>
                                        <Card key={props.key} contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />


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