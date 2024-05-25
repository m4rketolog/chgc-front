import StorageHeader from "./components/StorageHeader.jsx";
import StorageFiles from "./components/StorageFiles.jsx";

import './MainStorage.css'
const MainStorage = () => {

    return (
        <div className={"main-storage"}>
            <StorageHeader/>
            <div className={"storage-wrapper"}>
                <StorageFiles/>
            </div>
        </div>
    )
}

export default MainStorage;