import React, { Component } from 'react'
import "./coursesps.css"

 class coursesps extends Component {
    //  constructor(props) {
    //      super(props)
     
    //      this.state = {
    //           Grade_point:"10",
    //           Credits:""
    //      }
    //  }
    //  handleGradeChange=(e)=>{
    //      this.setState({
    //          Grade_point:e.target.value
    //      })
    //  }
    //  handleCreditChange=(e)=>{
    //      this.setState({
    //          Credits:e.target.value
    //      })
    //  }
    maxCheck=(object)=>{
        if(object.target.values>object.target.max){
            object.target.values = object.target.max
        }
    }
    render() {
        return (
            <div className="course1" >
                 {/* {this.state.Grade_point} {this.state.Credits} */}
                <form>
                    <label>
                        Course Name
                        <input type="text"></input>
                    </label>
                    <label className="course_grade_label">
                        Course Grade
                        <select className="course_grade_select"  onChange={(e)=>this.props.onChange(e,1) }>
                            <option value="10">A*</option>
                            <option value="10.0">A</option>
                            <option value="8">B</option>
                            <option value="6">C</option>
                            <option value="4">D</option>
                            <option value="2">E</option>
                            <option value="0">F</option>
                            <option value="12">Drop</option>
                            <option value="13">S/X</option>
                        </select>
                    </label>
                    <label className="credit_weightage">
                        Credit weightage
                        <input className="creditweightageinput" type="number" max="11" min="1" onInput={this.maxCheck}  onChange={(e) => this.props.onChange(e,2)}></input>
                    </label>
                </form>
            </div>
        )
    }
}

export default coursesps;


