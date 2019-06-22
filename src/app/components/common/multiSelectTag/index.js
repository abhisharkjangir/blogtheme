import React from "react";
import "./multiSelectTag.scss";
import Wrapper from "../wrapper";

class MultiSelectTag extends React.Component {
  clickHandler = option => {
    const { value, name, onChange, uniqueKey } = this.props;
    if (value && name) {
      let options = [...value];
      if (options.indexOf(option[uniqueKey].toString()) > -1) {
        options = options.filter(i => (i).toString() !== option[uniqueKey].toString());
      } else {
        options = [...options, option[uniqueKey].toString()];
      }
      const event = new CustomEvent("multiSelectOption", {
        detail: {
          name,
          value: options
        },
        bubbles: true,
        cancelable: true
      });
      onChange(event);
    }
  };

  render() {
    const {
      id,
      value,
      label,
      options,
      uniqueKey
    } = this.props;
    return (
      <Wrapper className="mb-3 multi-select-tag">
        <label htmlFor={id}>{label}</label>
        <div className="tags" id={id}>
          {options &&
            options.map(op => (
              <span
                onClick={() => this.clickHandler(op)}
                key={op[uniqueKey]}
                className={`tag ${value.indexOf(op[uniqueKey].toString()) > -1 ? 'active' : ''}`}
              >
                {op.name}
              </span>
            ))}
        </div>
      </Wrapper>
    );
  }
}

export default MultiSelectTag;
