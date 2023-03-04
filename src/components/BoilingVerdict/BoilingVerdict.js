import React from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Вода Kипить.</p>;
    }
    return <p>Вода не закипить.</p>;
}

export default BoilingVerdict;
