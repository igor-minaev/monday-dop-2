import React, {FC} from 'react';

type ButtonType = {
    name: string
    onClick: () => void
    className?: string
}

export const Button: FC<ButtonType> = ({name, onClick, className}) => {
    const onClickHandler = () => onClick()
    return (
        <button className={className} onClick={onClickHandler}>{name}</button>
    );
};

