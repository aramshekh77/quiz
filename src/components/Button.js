import React from 'react'

export default function Button({ name, color }) {

    return (
        <button
            className={color === 'blue' ? 'blue_btn' : 'white_btn'}
        >
            {name}
        </button>
    )
}
