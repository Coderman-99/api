
function Body(props) {

    return (
        <>
            <p key={props.uniqueKey}>{props.body}</p>
            <p>{props.length}</p>
        </>
    );
}
export default Body
//     < div >
//     {(Object.keys(props.body)).map((key) => (
//         <p key={key}>
//             {key}:{props.body.key}
//         </p>
//     ))}
// </div >