import React from "react";

const Input = () => {
    const onFileChange = () => {
        console.log("changed");
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={onFileChange} />
        </div>
    );
};

export default Input;
