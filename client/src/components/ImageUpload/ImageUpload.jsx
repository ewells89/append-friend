import React from 'react';
import ImageUploader from 'react-images-upload';
require("react-dom/package.json");

class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: {}};
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        console.log(pictureFiles);
        this.setState({
            pictures: pictureFiles
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png']}
                maxFileSize={5242880}
                singleImage={true}
                withPreview={true}
            />
        );
    }
}


export default ImageUpload;