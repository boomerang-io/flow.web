import React from "react";
import PropTypes from "prop-types";

const Slack = ({ className, ...rest }) => {
  return (
    <svg className={className} focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" style={{willChange: "transform"}} {...rest}><path d="M9.0423,19.1661A2.5212,2.5212,0,1,1,6.5212,16.645H9.0423Z"></path><path d="M10.3127,19.1661a2.5212,2.5212,0,0,1,5.0423,0v6.3127a2.5212,2.5212,0,1,1-5.0423,0Z"></path><path d="M12.8339,9.0423A2.5212,2.5212,0,1,1,15.355,6.5212V9.0423Z"></path><path d="M12.8339,10.3127a2.5212,2.5212,0,0,1,0,5.0423H6.5212a2.5212,2.5212,0,1,1,0-5.0423Z"></path><path d="M22.9577,12.8339a2.5212,2.5212,0,1,1,2.5211,2.5211H22.9577Z"></path><path d="M21.6873,12.8339a2.5212,2.5212,0,0,1-5.0423,0V6.5212a2.5212,2.5212,0,1,1,5.0423,0Z"></path><path d="M19.1661,22.9577a2.5212,2.5212,0,1,1-2.5211,2.5211V22.9577Z"></path><path d="M19.1661,21.6873a2.5212,2.5212,0,0,1,0-5.0423h6.3127a2.5212,2.5212,0,1,1,0,5.0423Z"></path><title>Logo slack</title></svg>
  );
};

Slack.propTypes = {
  className: PropTypes.string
};

export default Slack;
