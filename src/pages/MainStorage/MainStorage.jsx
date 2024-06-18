import StorageHeader from "./components/StorageHeader.jsx";
import StorageFiles from "./components/StorageFiles.jsx";

import './MainStorage.css'
const MainStorage = () => {

    return (
        <div className={"main-storage"}>
            <StorageHeader/>
            <div className="storage-content">
                <div className={"storage-nav"}>
                    <p className="storage-nav_item">Главная</p>
                    <p className="storage-nav_item">Мои файлы</p>
                    <p className="storage-nav_item">Группы</p>
                    <p className="storage-nav_item">Документы</p>
                </div>
                <div className={"storage-wrapper"}>
                    <StorageFiles/>
                </div>
            </div>
        </div>
    )
}

export default MainStorage;