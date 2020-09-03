import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({guessedWords}) => {
    const table = () => {
        return <div>Table</div>
    }
    
    return (
        <div data-test="component-guessed-words">
            {guessedWords.length === 0
                ? <span data-test="guess-instructions">Try to guess the secret word!</span>
                : table()
            }
        </div>
    );
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired
}

export default GuessedWords;
