import React, { Component } from 'react'
import './sem_list.css'
class sem_list extends Component {
   
    render() {
        return (
            <div className ='nocourse'>
               
                <form >
                    <label className='course_no_text'>
                        {"No of Courses in Sem " + this.props.values +"     "}
                        <input className='course_no_input' type="number" max='10' min='1' 
                            onChange={(e)=> this.props.onChange(e,this.props.values)} />
                    </label>
                </form>
            </div>
        )
    }
}

export default sem_list;
