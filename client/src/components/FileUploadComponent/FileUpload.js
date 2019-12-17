import React, { Component } from "react";
import './FileUpload.css'
import ProfilePicture from '../ProfilePicture/ProfilePicture'

class FileUpload extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: null,
      render: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    evt.preventDefault()
    evt.persist()
    console.log(evt)
    this.setState({ 
      file: evt.target.files[0],
      render: <ProfilePicture type="medium" image={URL.createObjectURL(evt.target.files[0])}></ProfilePicture>
     })
  }

  componentDidMount() {
    if (this.props.context) {
      this.setState({
        render:
          <div className='NewUserUpload'>
            <p>{this.props.header}</p>
            <label htmlFor="inputTypeFile" className="FileUpload__label" >{this.props.buttonLabel}</label>
            <input onChange={this.handleChange} accept={this.props.fileType} type="file" id="inputTypeFile" className='FileUpload' ></input>
          </div>
      })
    } else {
      this.setState({
        render:
          <div>
            <label htmlFor="inputTypeFile" className="FileUpload__label" >{this.props.buttonLabel}</label>
            <input accept={this.props.fileType} type="file" id="inputTypeFile" className='FileUpload' ></input>
          </div>
      })
    }
  }

  render() {
    return this.state.render
  }
}

FileUpload.defaultProps = {
  buttonLabel: 'Browse Files',
  fileType: 'image/*',
  handleFile: () => {
    console.log("function handles the file")
  }
}

export default FileUpload;