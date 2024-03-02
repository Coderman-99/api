
function Card(props) {
    let i = 0;
    return (
        <div>
            {props.keys.map((prop) => {
                if (prop == "flags") {
                    return (
                        <img src={props.contents[prop].png} alt="flag" />
                    );
                }
                else if (prop == "name") {
                    return (
                        <p>{props.contents[prop].official}</p>
                    );
                }
                else if (prop == "cca3") {
                    return (
                        <p>{props.contents[prop]}</p>
                    );
                }
                else if (prop == "cca2") {
                    return (
                        <p>{props.contents[prop]}</p>
                    );
                }
                else {
                    return (
                        <p>{props.contents[prop]}</p>
                    );
                }
            }
            )}
        </div>
    );
}
export default Card