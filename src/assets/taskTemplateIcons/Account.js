import React from "react";
import PropTypes from "prop-types";

const Account = ({ className, ...rest }) => {
  return (
    <svg className={className} focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" style={{willChange: "transform"}}{...rest}><path d="M8,14H19v2H8Zm0,5H21v2H8Z"></path><path d="M28,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Zm0,2V8H4V6ZM4,26V10H28V26Z"></path><title>Account</title></svg>
  );
};

Account.propTypes = {
  className: PropTypes.string
};

export default Account;
