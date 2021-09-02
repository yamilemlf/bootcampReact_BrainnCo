function Button (props) {
    return (
        <button class={props.kind}>
            {props.children}
        </button>
    );
};

export default Button;