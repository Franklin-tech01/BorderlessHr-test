import React from 'react';
import '../../App.css';

type InputProps = {
    label: string;
    placeholder: string;
    type: string;
};

const Input: React.FC<InputProps> = ({ label, placeholder, type }) => {
    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="input-field"
            />
        </div>
    );
};

export default Input;
