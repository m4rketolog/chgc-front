import React, { useState } from 'react';
import {sendRequest} from "../../helpers/sendRequest.js";
import {API} from "../../constants/const.js";

import './DragnDrop.css'

const DragnDrop = ({path}) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Capture the first file
        console.log(file);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append('file', file); // 'file' is the key expected by the server
        formData.append("path", path);
        try {
            const response = await sendRequest(`${API}upload`, "POST", {
                body: {userFile: formData}}
            ).then((response)=> console.log(response));

            if (response.ok) {
                const data = await response.json(); // or response.text() if the server responds with plain text
                alert('File uploaded successfully!');
                console.log('Server response:', data);
            } else {
                alert('Failed to upload file!');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Error uploading file!');
        }
    };

    return (
        <div>
            <input className="upload-input" type="file" onChange={handleFileChange} />
            <button className={"upload-btn"} onClick={handleUpload}>Загрузить файл</button>
        </div>
    );
}

export default DragnDrop;