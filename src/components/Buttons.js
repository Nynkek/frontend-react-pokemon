import React from 'react';

function Buttons({onClickBtn, isDisabled, children}) {
    return (
        <button type="button" onClick={onClickBtn} disabled={isDisabled}>{children}</button>
    );
}

export default Buttons;