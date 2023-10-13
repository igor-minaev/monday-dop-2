import React, {FC} from 'react';

type ButtonType = {
    name: string
    onClick: () => void
}

export const Button: FC<ButtonType> = ({name, onClick}) => {
    const onClickHandler = () => onClick()

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};

