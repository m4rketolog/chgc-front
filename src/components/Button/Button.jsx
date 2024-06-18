const Button = (props) => {
    const {
        onClick,
        type,
        className,
        children,
        ...restProps
    } = props;
    return (
        <button onClick={onClick} className={className} type={type}>
            {children}
        </button>
    )
}

export default Button;