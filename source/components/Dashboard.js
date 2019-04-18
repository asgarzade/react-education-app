import React from 'react';
import Courses from './Courses';
import Questions from './Questions';
import Exams from './Exams';
import Experience from './Experience';
import FriendActivity from './FriendActivity';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-header">Header with further navigation</div>
                <div className="dashboard-content">
                    <Courses courses={this.props.dummyData.courses} itemsToShow={4}/>
                    <Questions questions={this.props.dummyData.questions} itemsToShow={4}/>
                    {/*<Questions />
                    <Exams />
                    <Experience />
                    <FriendActivity />
                    */}
                </div>
            </div>
        );
    }
}

Dashboard.defaultProps = {
    dummyData: {
        courses: [ {
                name: "Course 1",
                isDone: true
            }, {
                name: "Course 2",
                isDone: false
            }, {
                name: "Course 3",
                isDone: false
            }, {
                name: "Course 4",
                isDone: true
            }, {
                name: "Course 5",
                isDone: true
            }, {
                name: "Course 6",
                isDone: false
            }, {
                name: "Course 7",
                isDone: true
            }, {
                name: "Course 8",
                isDone: false
            }, {
                name: "Course 9",
                isDone: true
            }
        ],
        questions: [ {
            name: "Question 1",
            type: "asked",
            answers: 12
        }, {
            name: "Question 2",
            type: "asnwered",
            answers: 2
        }, {
            name: "Question 3",
            type: "asnwered",
            answers: 11
        }, {
            name: "Question 4",
            type: "asked",
            answers: 9
        }, {
            name: "Question 5",
            type: "asked",
            answers: 42
        }, {
            name: "Question 6",
            type: "asked",
            answers: 8
        }, {
            name: "Question 7",
            type: "asnwered",
            answers: 10
        }, {
            name: "Question 8",
            type: "asked",
            answers: 18
        }, ],
        exams: []
    }
}