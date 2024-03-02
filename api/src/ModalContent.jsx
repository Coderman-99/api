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
            <div className="modal">
                {countryInfo.map((countryinfo) => {
                    return (
                        <div>
                            {props.keys.map((prop) => {
                                if (typeof (countryinfo[prop]) == "string") {
                                    return (
                                        <p>{prop} : {countryinfo[prop]}</p>
                                    );

                                }
                                else {
                                    return (

                                        <>
                                            <ModalContent2 contents={countryinfo[prop]} keys={Object.keys(countryinfo[prop])} />
                                        </>
                                    );
                                }
                            })
                            }
                        </div>
                    );
                })}
            </div>

        </>
    );
}
export default ModalContent