import ModalWrapper from "./ModalWrapper.jsx";
import ModalBox from "./ModalBox.jsx";
import ModalHeader from "./ModalHeader.jsx";
import Button from "../Button/Button.jsx";
import ModalClose from  './ModalClose.jsx'
import ModalContent from "./ModalContent.jsx";
import ModalFooter from "./ModalFooter.jsx";

const ModalBase = ({onClose, isOpen, onClick, title}) => {
    return (
        <>
        <ModalWrapper onClick={onClose} isOpen={isOpen}>
            <ModalBox>
                <ModalClose onClick={onClose}/>
                <ModalHeader>
                    {title}
                </ModalHeader>
                <ModalContent>
                </ModalContent>
                <ModalFooter>
                    <Button className="modal-save-btn" onClick={onClick}>
                    </Button>
                </ModalFooter>
            </ModalBox>
        </ModalWrapper>
        </>
    )
}
export default ModalBase;