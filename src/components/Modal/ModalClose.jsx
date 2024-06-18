import Button from "../Button/Button.jsx";

const ModalClose = ({onClick}) => {
    return (
        <Button type="button" onClick={onClick} className="modal-close">
            <img className="modal-close_btn" src="../../../public/icons/on_close.svg" alt="clsoe"/>
        </Button>
    );
};

export default ModalClose;