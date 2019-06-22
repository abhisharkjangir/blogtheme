import React from "react";
import "./quillEditor.scss";
import Wrapper from "../wrapper";
import { isServer } from "../../../utils/common";

const DefaultQuillModule = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image"],
    ["clean"]
  ]
};

const DefaultQuillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "clean"
];

class QuillEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    // As window Object is not available on server side
    if (!isServer) {
      this.ReactQuill = require("react-quill");
    }
  }

  changeHandler = value => {
    const { name, onChange } = this.props;
    const event = new CustomEvent("QuillEditorChange", {
      detail: {
        name,
        value
      },
      bubbles: true,
      cancelable: true
    });
    onChange(event);
  };

  render() {
    const { id, value, label } = this.props;
    const ReactQuill = this.ReactQuill;
    // As window Object is not available on server side
    if (!isServer && ReactQuill) {
      return (
        <Wrapper className="mb-3">
          <label htmlFor={id}>{label}</label>

          <ReactQuill
            value={value}
            onChange={this.changeHandler}
            modules={DefaultQuillModule}
            formats={DefaultQuillFormats}
          />
        </Wrapper>
      );
    } else return null;
  }
}

export default QuillEditor;
