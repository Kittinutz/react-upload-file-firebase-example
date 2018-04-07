import React, { Component } from 'react';

import firebaseApp from '../../config/firebase';

export default class InputUpload extends Component {

    constructor(props) {
        super(props);
        this.state = { file: null }
    }

    handleChange = (event) => {
        const file = event.target.files[0];
        this.setState({ file });
    }

    uploadToFirebase = () => {
        const storageRef = firebaseApp.storage().ref();
        storageRef.child(`${this.state.file.name}`)
            .put(this.state.file).then((snapshort) => {
                this.setState({ url: snapshort.downloadURL });
            });
    }

    render() {
        const { url } = this.state;
        const link = <a href={url} >Open</a>;
        return (
            <div>
                <h1>Firebase Upload Example</h1>
                <input type="file" onChange={this.handleChange} /><br />
                <button onClick={this.uploadToFirebase}>Upload</button><br /><br />
                {url ? link : ''}
            </div>
        )
    }
}
