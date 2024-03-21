import { useState } from "react";
import ModalContent2 from "../ModalContent2";
import styles from "./Card.module.css"

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
                                        <div key={prop} className="inline">
                                            <p className="key" >ISO 3166-1 alpha-2 code: </p>
                                            <p>{props.contents[prop]}</p>
                                        </div>
                                    </>
                                );
                            }
                            else if (prop == "cca3") {
                                return (
                                    <>
                                        <div key={prop} className="inline">
                                            <p className="key">ISO 3166-1 alpha-3 code: </p>
                                            <p>{props.contents[prop]}</p>
                                        </div>
                                    </>
                                );
                            }
                            return (
                                <>
                                    <div key={prop} className="inline">
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
                            <div key={prop} className="inline">
                                <p className="key">{prop}: </p>
                                <p>{props.contents[prop].join(' ')}</p>
                            </div>

                        </>
                    );
                }
                else if (props.contents[prop].constructor == Object) {
                    if (prop == "flags") {
                        return (
                            <div key={prop}>
                                <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} key={props.key} />
                            </div>
                        );
                    }
                    else {
                        switch (prop) {
                            case "item":
                                return (
                                    <>
                                        <div key={prop} >
                                            <Card key={props.key} contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />
                                        </div>
                                    </>
                                );
                            case "name":
                                return (
                                    <>
                                        <div key={prop} >
                                            <p className="key">Country name: </p>
                                            <Card key={props.key} contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />
                                        </div>

                                    </>
                                );
                            case "nativeName":
                                return (
                                    <>
                                        <div key={prop} >
                                            <p className="key">Country native name: </p>
                                            <Card key={props.key} contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />
                                        </div>


                                    </>
                                );
                            case "propd":
                                return (
                                    <>
                                        <div key={prop} >
                                            <p key={prop} className="key">International direct dialing: </p>
                                            <Card key={props.key} contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />
                                        </div>

                                    </>
                                );
                            default:
                                return (
                                    <>
                                        <div key={prop} >
                                            <p key={prop} className="key">{prop}: </p>
                                            <Card key={props.key} contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} color={"blue"} border={"none"} />

                                        </div>


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