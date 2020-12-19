import React from 'react'
const BoilingVerdict = (props) => {
    if (props.celsius>=100) {
        return 'The water will boil';
    }
    return 'The water will not boil';
}

export default BoilingVerdict;