import React from "react";
import "./fileBrowser.scss";
import Wrapper from "../wrapper";
import Image from "../Image/image";

class FileBrowser extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      imageUrl: ""
    };
  }

  renderImage = file => {
    const self = this;
    if (file && file !== "" && file !== null) {
      const reader = new FileReader();
      reader.onload = function(e) {
        self.setState({ imageUrl: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  imageChangeHandler = e => {
    const file = e.target.files[0];
    const { onChange } = this.props;
    this.renderImage(file);
    onChange(e);
  };

  componentWillReceiveProps(prevProps, nextProps){

    if(prevProps !== nextProps){
      if(nextProps.selectedImage === '') {
        this.setState({imageUrl : ''})
      }
    }
  }

  render() {
    const {
      id,
      name,
      label,
      disabled,
      selectedImage,
      accept,
    } = this.props;
    const { imageUrl } = this.state;

    return (
      <Wrapper className="mb-3">
        <div className="file-browser">
          <p>{label}</p>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id={id}
              name={name}
              onChange={this.imageChangeHandler}
              disabled={disabled}
              accept={accept}
            />
            <label className="custom-file-label" htmlFor={id}>
              {imageUrl !== "" ? <Image src={imageUrl} alt="" /> : null}
              <span>
                {selectedImage && selectedImage !== ""
                  ? selectedImage.name
                  : `Plese choose ${label}`}
              </span>
            </label>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default FileBrowser;
