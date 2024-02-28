
function Card(props) {
    if (props.contents.includes("https")) {
        return (

            <img src={props.contents} alt="flag" />

        );
    }
    // else if (typeof (props.contents) == Object) {
    //     for (let i = 0; i++; i < props.length) {
    //         return (
    //             <p>{props.contents[i].official}</p>
    //         );
    //     }
    // }
    else {
        return (
            <p>{props.contents}</p>
        );
    }
}
export default Card