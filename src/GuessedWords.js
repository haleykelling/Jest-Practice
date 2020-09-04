import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({guessedWords}) => {
    const table = () => {
        const guessedWordsRows = guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        return (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead >
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </table>
            </div>
        )
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