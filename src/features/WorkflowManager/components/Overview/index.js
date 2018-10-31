import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Button from "@boomerang/boomerang-components/lib/Button";
import TextArea from "@boomerang/boomerang-components/lib/TextArea";
import TextInput from "@boomerang/boomerang-components/lib/TextInput";
import assets from "./assets";
import "./styles.scss";

class Overview extends Component {
  static propTypes = {
    workflow: PropTypes.object.isRequired
  };

  static defaultProps = {
    workflow: {}
  };

  constructor(props) {
    super(props);
    this.state = props.workflow;
  }

  handleOnChange = (value, errors, name) => {
    console.log(value, name);
    this.setState(
      () => ({
        [name]: value
      }),
      () => this.props.handleOnChange(this.state)
    );
  };

  render() {
    const { name, shortDescription, description, icon } = this.state;
    return (
      <div className="c-worklfow-overview">
        <div className="c-general-info">
          <h1 className="s-general-info-title">General</h1>
          <TextInput
            value={name || ""}
            title="Name"
            placeholder="Name"
            name="name"
            theme="bmrg-white"
            onChange={this.handleOnChange}
          />
          <TextInput
            value={shortDescription || ""}
            title="Short description"
            placeholder="Short description"
            name="shortDescription"
            theme="bmrg-white"
            onChange={this.handleOnChange}
          />
          <TextArea
            detail={description || ""}
            title="Description"
            placeholder="Description"
            name="description"
            theme="bmrg-white"
            handleChange={this.handleOnChange}
          />
          <h2 className="s-worklflow-icons-title">Icon</h2>
          <div className="b-worklflow-icons">
            {assets.map(image => (
              <img
                className={classnames("b-worklflow-icons__icon", {
                  "--active": icon === image.name
                })}
                src={image.src}
                onClick={() => this.handleOnChange(image.name, {}, "icon")}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Overview.propTypes = {
  handleOnChange: PropTypes.func.isRequired
};

export default Overview;