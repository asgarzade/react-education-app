import React from 'react';
import Question from './Question';

export default class Questions extends React.Component {
    state = {
        askedQuestions: [],
        answeredQuestions: [],
        showAskedQuestions: true,
        itemsToShow: this.props.itemsToShow
    }
    componentDidMount() {
        this.sortCourses(this.props.questions);
    }
    sortCourses(questions) {
        for (const question of questions) {
            if (question.type == "asked") {
                this.setState( (prevState) => ({ askedQuestions: prevState.askedQuestions.concat({
                        name: question.name,
                        answers: question.answers
                    }) 
                }));
            }
            else if (question.type == "asnwered"){
                this.setState( (prevState) => ({ answeredQuestions: prevState.answeredQuestions.concat({
                        name: question.name,
                        answers: question.answers
                    }) 
                }));
            }
        }
    }
    handleShowAskedQuestions = () => {
        this.setState( () => ({ showAskedQuestions: true }));
        console.log(this.state.askedQuestions);
    }
    handleShowAnsweredQuestions = () => {
        this.setState( () => ({ showAskedQuestions: false }));
        console.log(this.state.answeredQuestions);
    }
    render() {
        return (
            <div className="questions widget">
            <div className="btn-wrapper">
                <div 
                    className={this.state.showAskedQuestions ? "btn-large btn-active" : "btn-large"} 
                    onClick={this.handleShowAskedQuestions}
                >
                    <p className="number">{this.state.askedQuestions.length}</p>
                    <p className="text">Asked Questions</p>
                </div>
                <div
                    className={!this.state.showAskedQuestions ? "btn-large btn-active" : "btn-large"} 
                    onClick={this.handleShowAnsweredQuestions}
                >
                    <p className="number">{this.state.answeredQuestions.length}</p> 
                    <p className="text">Answered Questions</p>
                </div>
            </div>

            { 
                this.state.showAskedQuestions ? 
                this.state.askedQuestions.map( (question, index) => (
                    <Question key={index} question={question.name} answers={question.answers}/>
                )) :
                this.state.answeredQuestions.map( (question, index) => (
                    <Question key={index} question={question.name} answers={question.answers}/>
                )) 
            }
            
            <button className="btn-link">Show more</button>
        </div>
        );
    }
}