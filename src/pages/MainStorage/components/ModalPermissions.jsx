import ModalWrapper, {
    ModalBox,
    ModalClose,
    ModalContent,
    ModalFooter,
    ModalHeader} from '../../../components/Modal/index.jsx'
import Button from "../../../components/Button/Button.jsx";

import './ModalPermissions.css'
const ModalPermissions = ({onClose, isOpen, onClick, title}) => {
    const groupsList = [{name:"Бухгалтерия", hasPermission: true}, {name:"Работники", hasPermission: true},{name:"Финансы", hasPermission: false} , {name:"Администрация", hasPermission: true}, {name:"Работники 2", hasPermission: false}]

   return (
       <>
           <ModalWrapper onClick={onClose} isOpen={isOpen}>
                <ModalBox className="modal-card">
                    <ModalClose onClick={onClose}/>
                    <ModalHeader>
                        <p className={"modal-header_text"}>{title}</p>
                    </ModalHeader>
                    <ModalContent>
                        <div className="modal-container">
                            <div className="modal-container_title">
                                <p>Группы</p>
                                <p>Изменить права</p>
                            </div>
                            <div className="groups-list">
                                {groupsList.map((item)=> (
                                    <div className={"group-item"}>
                                        <p className={"group-item_name"}>{item.name}</p>
                                        {item.hasPermission ? (<img className={"group-item_btn"} src={"../../../../public/icons/delete_1.svg"} alt={"del"}/>) : (<img className={"group-item_btn"} src={"../../../../public/icons/add_3.svg"} alt={"add"}/>)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ModalContent>
                    <ModalFooter>
                        <Button className="modal-save-btn" onClick={onClick}>
                            Сохранить
                        </Button>
                    </ModalFooter>
                </ModalBox>
           </ModalWrapper>
       </>
   )
}

export default ModalPermissions;