// class FileEntity {
//     id = "f6b0f9fb8e6c157dca7e3db6034c0be1";
//     type = "xml";
//     isFavorite = true;
//     fileName = "xue"
//     img = "file.jpg"
// }
import './FileItem.css'

const FileItem = ({fileType, isFavorite, fileName}) => {
    const typesList = ["folder", "py"]
    return (
        <div className={"file-cell"}>
            { typesList.includes(fileType) ? (
                    <div className="file-cell_icobox">
                        <img src={`./public/icons/icon-${fileType}.svg`} alt={fileName} className="file-cell_img"/>
                    </div>
                )
                : (
                <div className="file-cell_icobox">
                    <img src={'./public/icons/default_icon.svg'} alt={fileName} className="file-cell_img"/>
                </div>
                )
            }

            <p className="file-cell_name">
                {fileName}
            </p>
        </div>
    )
}

export default FileItem;