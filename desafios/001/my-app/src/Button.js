function Button (props) {
    return (
        <button kind={props.kind} class={props.kind}>
            {props.children}
        </button>
    );
};

export default Button;