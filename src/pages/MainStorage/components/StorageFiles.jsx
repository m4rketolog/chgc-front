import './StorageFiles.css'
import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import {fetchItemCards} from "../../../store/slices/storageItem.js"
import FileItem from "./FileItem.jsx";

const StorageFiles = () => {
    const dispatch = useDispatch();
    const itemsList = useSelector((state)=>state.items.storeItems)

    useEffect(()=>{
        dispatch(fetchItemCards());
    }, [])
    return (
        <div className={"items-list"}>
            {itemsList.map((item)=>(
                <FileItem key={item.id} fileName={item.fileName} fileType={item.fileType} isFavorite={item.isFavorite}/>
            ))}
        </div>
    )
}

export default StorageFiles;