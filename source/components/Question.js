import React from 'react';

const Question = (props) => (
    <div className="question-wrapper">
        <p className="answers">a-{props.answers}</p>
        <p className="question">{props.question}</p>
    </div>
);

export default Question;