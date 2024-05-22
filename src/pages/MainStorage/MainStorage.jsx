import StorageHeader from "./components/StorageHeader.jsx";

import './MainStorage.css'
import StorageFiles from "./components/StorageFiles.jsx";

const MainStorage = () => {
    return (
        <div className={"main-storage"}>
            <StorageHeader/>
            <StorageFiles/>
            <div className={"storage-wrapper"}>
                <StorageFiles/>
            </div>
        </div>
    )
}

export default MainStorage;