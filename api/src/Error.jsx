function Error(props) {
    if (props.error != "") {
        return (
            <p style={{ color: "red" }}>{props.error}</p>
        );
    }
    else {
        return (
            <p></p>
        );
    }

}

export default Error