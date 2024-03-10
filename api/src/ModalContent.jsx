import { useState, useEffect } from "react";
import Modal from "react-modal"
import OpenModal from "./OpenModal";
import ModalContent2 from "./ModalContent2";

function ModalContent(props) {

    const url = 'https://restcountries.com/v3.1/name/'
    const [countryInfo, setCountryInfo] = useState([])

    const fetchPosts = () => {
        fetch(url.concat(props.country))
            .then((response) => response.json())
            .then((data) => {
                setCountryInfo(data);
                setCountryInfo(data);
            })
    }
    useEffect(() => {
        fetchPosts()
    }, []);


    return (
        <>
            <div className="countries">
                {countryInfo.map((countryinfo) => {
                    let keys = Object.keys(countryinfo)
                    return (
                        <div>
                            {keys.map((prop) => {
                                if (typeof (countryinfo[prop]) == "string") {
                                    return (
                                        <>
                                            <p className="first-key">{prop}:</p>
                                            <p>{countryinfo[prop]}</p>
                                        </>
                                    );
                                }
                                else if (countryinfo[prop].constructor == Array) {
                                    return (
                                        <>
                                            <p className="first-key" >{prop}:</p>
                                            <p>{countryinfo[prop].join(' ')}</p>
                                        </>
                                    );
                                }
                                else {
                                    return (

                                        <>
                                            <p className="first-key">{prop}: </p>
                                            <ModalContent2 contents={countryinfo[prop]} keys={Object.keys(countryinfo[prop])} />
                                        </>
                                    );
                                }
                            })
                            }
                        </div>
                    );
                })}
            </div >

        </>
    );
}
export default ModalContent