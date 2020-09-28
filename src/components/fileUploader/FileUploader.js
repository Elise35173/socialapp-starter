import { FormatSize } from "@material-ui/icons";
import React from "react";
import Logo from "../../logo/Logo.jpg";
import MessageService from "../../services/MessageService";

const messageService = new MessageService()

class FileUploader extends React.Component {
    state = {
        imageURL: `https://socialapp-api.herokuapp.com/users/${messageService.getUsername()}/picture`,
        formData: null,
    }

    setFallbackImage = event => {
        event.target.src=Logo
    }
    
    createFormData = event => {
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append("picture", file)

        this.setState({ formData })
    }

    handleUpload = () => {
        messageService.uploadPicture(this.state.formData).then(response => {
            if (response.data.statusCode === 200) {
                this.updatePicture()
            }
        })
    }

    updatePicture() {
        const timestamp = Date.now()
        const imageURL = `https://socialapp-api.herokuapp.com/users/${messageService.getUsername()}/picture?t=${timestamp}`
        this.setState({ imageURL })        
    }

    render() {
        return (
            <div className="FileUploader">
                <input 
                    name="picture"
                    type="file" 
                    onChange={this.createFormData}
                />
                <button onClick={this.handleUpload}>Upload</button>
                <div className="image-preview">
                    <img
                        alt="user"
                        src={this.state.imageURL}
                        onError={this.setFallbackImage}
                    />
                </div>
            </div>
        )
    }
}

export default FileUploader;