import './StorageFiles.css'
import {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux";
import {fetchItemCards} from "../../../store/slices/storageItem.js"
import FileItem from "./FileItem.jsx";
import Button from "../../../components/Button/Button.jsx";
import ModalPermissions from "./ModalPermissions.jsx";
import AddFileModal from "./AddFileModal.jsx";

const StorageFiles = () => {
    const dispatch = useDispatch();
    const itemsList = useSelector((state)=>state.items.storeItems)
    const [isModal, setIsModal] = useState(false);
    const [fileModal, setFileModal] = useState(false);

    const handleModal = () => setIsModal(!isModal);
    const handleAddModal = () => setFileModal(!fileModal);
    useEffect(()=>{
        dispatch(fetchItemCards());
    }, [])
    return (
        <>
            <div className={"item-path-box"}>
                <div className="item-path">
                    <img src="../../../../public/icons/fold_ico1.svg" alt="fold-ico"/>
                    <p className={"item-path-box_text"}>lib/cpp/go++</p>
                </div>
                <Button onClick={handleModal} className={"item-path_back-btn"}>
                    <img src="../../../../public/icons/up-button.svg" alt="button"/>
                </Button>
            </div>
            <div className="filters-box">
                <select className="filter-by_btn">
                    <option value="1">Время загрузки</option>
                    <option value="2">Название</option>
                    <option value="3">Тип файла</option>
                    <option value="4">Объем</option>
                </select>
                <button onClick={handleAddModal} className={"filter-by_btn"}>Добавить файл</button>
            </div>
            <div className={"items-list"}>
                {itemsList.map((item)=>(
                    <FileItem key={item.id} fileName={item.fileName} fileType={item.fileType} isFavorite={item.isFavorite}/>
                ))}
            </div>
            <ModalPermissions
                isOpen={isModal}
                onClose={handleModal}
                onClick={()=>console.log(39)}
                title={"Редактирование файла main.exe"}
            />
            <AddFileModal
                isOpen={fileModal}
                onClose={handleAddModal}
                onClick={()=>console.log("fileAdded")}
            />
        </>

    )
}

export default StorageFiles;