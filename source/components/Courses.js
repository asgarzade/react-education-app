import React from 'react';
import Course from './Course';

export default class Courses extends React.Component {
    state = {
        doneCourses: [],
        unfinishedCourses: [],
        showDoneCourses: true,
        itemsToShow: this.props.itemsToShow
    }
    componentDidMount() {
        this.sortCourses(this.props.courses);
    }
    sortCourses(courses) {
        for (const course of courses) {
            if (course.isDone) {
                this.setState( (prevState) => ({ doneCourses: prevState.doneCourses.concat(course.name) }));
            }
            else {
                this.setState( (prevState) => ({ unfinishedCourses: prevState.unfinishedCourses.concat(course.name) }));
            }
        }
    }
    handleShowDoneCourses = () => {
        this.setState( () => ({ showDoneCourses: true }));
        
    }
    handleShowUnfinishedCourses = () => {
        this.setState( () => ({ showDoneCourses: false }));
    }
    render() {
        return (
            <div className="courses widget">
                <div className="btn-wrapper">
                    <div 
                        className={this.state.showDoneCourses ? "btn-large btn-active" : "btn-large"} 
                        onClick={this.handleShowDoneCourses}
                    >
                        <p className="number">{this.state.doneCourses.length}</p>
                        <p className="text">Done Courses</p>
                    </div>
                    <div
                        className={!this.state.showDoneCourses ? "btn-large btn-active" : "btn-large"} 
                        onClick={this.handleShowUnfinishedCourses}
                    >
                        <p className="number">{this.state.unfinishedCourses.length}</p> 
                        <p className="text">Unfinished Courses</p>
                    </div>
                </div>

                { 
                    this.state.showDoneCourses ? 
                    this.state.doneCourses.map( (course, index) => (
                        <Course key={index} name={course} />
                    )) :
                    this.state.unfinishedCourses.map( (course, index) => (
                        <Course key={index} name={course} />
                    )) 
                }
                
                <button className="btn-link">Show more</button>
            </div>
        );
    }
}