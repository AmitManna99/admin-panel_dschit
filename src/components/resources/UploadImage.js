import React, { Component } from 'react';
import firbase from 'firebase/app';
import FileUploader from 'react-firebase-file-uploader';
import { storage } from '../../config/fbConfig'

class UploadImage extends Component {

  state = {
    imgSrc: "",
    image: ""
  }

  handleSubmit = filename => {
    this.setState({
      image: filename
    })

    storage.ref(`images/resources/${this.props.id}`).child(filename).getDownloadURL()
      .then(url => {
        this.setState({
          imgSrc: url
        })
        this.props.UploadImage(this.state);
      })
  }

  render() {
    return (
      <div>

        <FileUploader
          accept="image/*"
          name="image"
          storageRef={firbase.storage().ref(`images/resources/${this.props.id}`)}
          onUploadSuccess={this.handleSubmit} />

      </div>
    )
  }
}

export default UploadImage