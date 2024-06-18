import ModalWrapper, {
    ModalBox,
    ModalClose,
    ModalContent,
} from '../../../components/Modal/index.jsx';

import DragnDrop from "../../../components/DragnDrop/DragnDrop.jsx";

import './ModalPermissions.css'

const AddFileModal = ({onClose, isOpen}) => {
    return (
            <>
                <ModalWrapper onClick={onClose} isOpen={isOpen}>
                    <ModalBox className="modal-card">
                        <ModalClose onClick={onClose}/>
                        <ModalContent>
                            <DragnDrop/>
                        </ModalContent>
                    </ModalBox>
                </ModalWrapper>
            </>
        )
}

export  default AddFileModal;