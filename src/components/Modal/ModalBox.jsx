import cn from "classnames";

const ModalBox = ({children, className}) => {
    return (
        <div className={cn("modal", className)}>
            <div className="modal-box">
                {children}
            </div>
        </div>
    );
};

export default ModalBox;