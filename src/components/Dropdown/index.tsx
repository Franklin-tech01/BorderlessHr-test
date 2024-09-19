import React from 'react';
import '../../App.css';

type DropdownProps = {
    label: string;
    className?: string;
    options: string[];
    placeholder?: string;
};

const Dropdown: React.FC<DropdownProps> = ({ label, options, placeholder, className }) => {
    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            <select className={`input-field ${className}`}>
                <option className='option' value="" disabled>
                    {placeholder}
                </option>
                {options.map((option, index) => (
                    <option className='option' key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
