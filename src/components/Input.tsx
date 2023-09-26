import React from "react"
import PropTypes from "prop-types";

export function Input(props) {
    const { placeholder, onChange, value, className } = props;

    return (
        <input
            className={className}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value} 
            />
    )
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string
};
