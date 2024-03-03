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
                                    <p className="second-key">{prop} :</p>
                                    <p> {props.contents[prop]} </p>
                                </>
                            );
                        }

                    }
                }
                else if (props.contents[prop].constructor == Array) {
                    return (
                        <>
                            <p className="first-key">{prop} : {props.contents[prop].join(' ')}</p>
                        </>
                    );
                }
                else if (props.contents[prop].constructor == Object) {
                    if (prop == "flags") {
                        return (<Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} />
                        );
                    }
                    else {
                        return (
                            <>
                                <p className="first-key">{prop}: </p>
                                <Card contents={props.contents[prop]} keys={Object.keys(props.contents[prop])} />
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
        </>
    );
}
export default Card