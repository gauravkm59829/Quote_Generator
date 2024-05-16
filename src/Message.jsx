function Message(props){
    const count = props.cnt;
    return(
        <p>You have read <span>{count}</span> quotes.</p>
    );
}

export default Message;