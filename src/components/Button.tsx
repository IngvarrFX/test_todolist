import React from 'react';

type propsType = {
    callBack: (id: number) => void
    id: number
}
export const Button = (props: propsType) => {
    return (
        <button onClick={() => props.callBack(props.id)}>X</button>
    )
}