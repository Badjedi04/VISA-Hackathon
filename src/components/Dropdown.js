import React from 'react';

const Dropdown = ({ options, onChange }) => {
    return (
        <select onChange={onChange}>
            <option value="" disabled selected>Select an option</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
