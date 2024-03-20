import { useState, useEffect } from "react";
import Modal from "react-modal"
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
                            {keys.map((prop, id) => {
                                if (typeof (countryinfo[prop]) == "string") {
                                    if (prop == "tld") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">Country code top-level domain: </p>
                                                    <p>{countryinfo[prop]}</p>
                                                </div>

                                            </>
                                        );
                                    }
                                    else if (prop == "tld") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">Country code top-level domain: </p>
                                                    <p>{countryinfo[prop]}</p>
                                                </div>

                                            </>
                                        );
                                    }
                                    else if (prop == "cca2") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">ISO 3166-1 alpha2: </p>
                                                    <p>{countryinfo[prop]}</p>
                                                </div>

                                            </>
                                        );
                                    }
                                    else if (prop == "cca3") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">ISO 3166-1 alpha3: </p>
                                                    <p>{countryinfo[prop]}</p>
                                                </div>

                                            </>
                                        );
                                    }
                                    else if (prop == "ccn3") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">ISO 3166-1 numeric: </p>
                                                    <p>{countryinfo[prop]}</p>
                                                </div>

                                            </>
                                        );
                                    }
                                    else if (prop == "cioc") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">IOC: </p>
                                                    <p>{countryinfo[prop]}</p>
                                                </div>

                                            </>
                                        );
                                    }
                                    else if (prop == "startOfWeek") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">Start of week: </p>
                                                    <p>{countryinfo[prop]}</p>
                                                </div>

                                            </>
                                        );
                                    }
                                    else {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">{prop[0].toUpperCase() + prop.substring(1)}: </p>
                                                    <p>{countryinfo[prop]}</p>
                                                </div>

                                            </>
                                        );
                                    }

                                }
                                else if (countryinfo[prop].constructor == Boolean) {
                                    if (prop == "unMember") {
                                        if (countryinfo[prop] = true) {
                                            return (
                                                <>
                                                    <div key={id} className="inline">
                                                        <p className="key" >UN member: </p>
                                                        <p>Yes</p>
                                                    </div>

                                                </>
                                            );
                                        }
                                        else {
                                            return (
                                                <>
                                                    <div key={id} className="inline">
                                                        <p className="key" >UN member: </p>
                                                        <p>No</p>
                                                    </div>

                                                </>
                                            );
                                        }
                                    }
                                    if (countryinfo[prop] = true) {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key" >{prop[0].toUpperCase() + prop.substring(1)}: </p>
                                                    <p>Yes</p>
                                                </div>

                                            </>
                                        );
                                    }
                                    else {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key" >{prop[0].toUpperCase() + prop.substring(1)}: </p>
                                                    <p>No</p>
                                                </div>

                                            </>
                                        );
                                    }

                                }
                                else if (countryinfo[prop].constructor == Array) {
                                    if (prop == "altSpellings") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key" >Alternative Spelling:</p>
                                                    <p>{countryinfo[prop].join(', ')}</p>
                                                </div>

                                            </>
                                        );
                                    }
                                    if (prop == "latlng") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key" >Latitude and Longitude: </p>
                                                    <p>{countryinfo[prop].join(', ')}</p>
                                                </div>

                                            </>
                                        );
                                    }

                                }

                                //if info is within the nested objects pass augument to ModelContent2

                                else {
                                    if (prop == "name") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">Country name: </p>
                                                    <ModalContent2 contents={countryinfo[prop]} keys={Object.keys(countryinfo[prop])} />
                                                </div>
                                            </>
                                        );
                                    }
                                    else if (prop == "currencies") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">Currency: </p>
                                                    <ModalContent2 contents={countryinfo[prop]} keys={Object.keys(countryinfo[prop])} />
                                                </div>
                                            </>
                                        );
                                    }
                                    else if (prop == "postalCode") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">Postal code: </p>
                                                    <ModalContent2 contents={countryinfo[prop]} keys={Object.keys(countryinfo[prop])} />
                                                </div>
                                            </>
                                        );
                                    }
                                    else if (prop == "coatOfArms") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">Coat of arms: </p>
                                                    <ModalContent2 contents={countryinfo[prop]} keys={Object.keys(countryinfo[prop])} />
                                                </div>
                                            </>
                                        );
                                    }
                                    else if (prop == "idd") {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">international direct dialing: </p>
                                                    <ModalContent2 contents={countryinfo[prop]} keys={Object.keys(countryinfo[prop])} />
                                                </div>
                                            </>
                                        );
                                    }
                                    else {
                                        return (
                                            <>
                                                <div key={id} className="inline">
                                                    <p className="key">{prop[0].toUpperCase() + prop.substring()}: </p>
                                                    <ModalContent2 contents={countryinfo[prop]} keys={Object.keys(countryinfo[prop])} />
                                                </div>
                                            </>
                                        );
                                    }



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