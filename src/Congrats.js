import React from 'react';

const Congrats = ({success}) => {
    return (
        <div data-test="component-congrats">
            {success 
                ? <span data-test="congrats-message">
                    Congratulations! You guessed the word!
                </span> 
                : null
            }
        </div>
    );
}

export default Congrats;