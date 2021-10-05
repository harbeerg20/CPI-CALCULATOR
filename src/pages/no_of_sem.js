import React, { Component } from 'react'
import "./no_of_sem.css"
import { Button } from 'antd';
import Sem_list from './sem_list';
import Coursesps from './coursesps';

let doit = true
let doit2=true
let doit3=true

class no_of_sem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sems: "1",
            ar:[0],
            ar1:[],
            ar2:[],
            ar3:[],
            ar4:[],
            ar5:[]
        }
    }
    handleSemsChange = (event) => {
        this.setState({
            sems: event.target.value
        });
    }
    handleChange=(event,i)=>{
        let temp=this.state.ar1
        //let doit=true
        if(doit){
            for (let i = 0; i < this.state.sems; i++) {
                temp.push(0);
            }
            doit=false
        }
        temp[i-1]=event.target.value
        this.setState({ ar1: temp })
        console.log(this.state.ar1)
        // console.log(i)
        // console.log(event.target.value)
    }
    renderCoursesps(){
        let temp = [];
        for (let i = 0; i < this.state.sems; i++) {
            temp.push(i);
        }
        this.setState({ ar: temp })
        //console.log(this.state.ar)
    }
    loadcourseinput(){
        let temp=[]
        //let temp1=[]
        for(var i=0;i<this.state.sems;i++){
            temp[i]=[]
            for(var k=0;k<this.state.ar1[i];k++){
                temp[i][k]=k
            }
            
        }
        // console.log(temp)
        // for(var j=1;j<=this.state.sems;j++){
        //     temp1.push(j)
        // }
       this.setState({ar2:temp})
    }
    handleChangeCourses=(e,p,i1,i2)=>{
        let temp=this.state.ar3
        let temp1=this.state.ar4
        if(doit2){
            for (var i = 0; i < this.state.sems; i++) {
                temp[i] = []
                for (var k = 0; k < this.state.ar1[i]; k++) {
                    temp[i][k] = 10
                }

            }
            doit2=false
        }
        if (doit3) {
            for (var i = 0; i < this.state.sems; i++) {
                temp1[i] = []
                for (var k = 0; k < this.state.ar1[i]; k++) {
                    temp1[i][k] = 0
                }

            }
            doit3=false
        }
        if(p===1){
           temp[i1][i2] = e.target.value      
        }else{
            temp1[i1][i2]=e.target.value
        }
        this.setState({
            ar3:temp,
            ar4:temp1
        })
        // console.log(this.state.ar3)
        // console.log(this.state.ar4)
    //     console.log(i1)
    //     console.log(i2)
    //    console.log(e.target.value)
    //     console.log(k)
    }
    calculateCPI=()=>{
        for (var i = 0; i < this.state.sems; i++) {
            for (var k = 0; k < this.state.ar1[i]; k++) {
                if (this.state.ar3[i][k] == 12 || this.state.ar3[i][k] == 13){
                    this.state.ar3[i][k] =0
                    this.state.ar4[i][k] =0
                }
            }
        }
        let num=0
        let denom=0
        for (var i = 0; i < this.state.sems; i++) {
            for (var k = 0; k < this.state.ar1[i]; k++) {
                num += this.state.ar3[i][k] * this.state.ar4[i][k]
            }
        }
        for (var i = 0; i < this.state.sems; i++) {
            for (var k = 0; k < this.state.ar1[i]; k++) {
                denom +=  1*this.state.ar4[i][k]
            }
        }
        let temp = []
        temp.push((num/denom).toFixed(2))
        // console.log(temp)
        // console.log(num)
        // console.log(denom)
        this.setState({ar5:temp})
    }
    render() {
    
        return (
            <div>
                <form >
                    <div className="title">
                        <label >
                            <p className="noofsems">Number of Semesters:</p>
                        </label>
                        <select className="select_no_of_sems" value={this.state.sems} onChange={this.handleSemsChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                        <div className="Go_button">
                            <Button type="primary" onClick={()=>this.renderCoursesps()}>Go</Button>
                        </div>
                    </div>
                </form>
                <div className='no-of-course'>
               {this.state.ar.map((i)=><Sem_list values={i+1}  onChange={(e,i)=>this.handleChange(e,i)}/>)}
               <button className="Go2"
                onClick={()=>this.loadcourseinput()}
               >
                   Go
               </button>
                </div>
                <div className="courseload">
                    
                    {this.state.ar2.map((arr,i1)=><div>
                        <h2 className="semstext">Semester {i1+1}</h2>
                        {arr.map((ar,i2)=><Coursesps onChange={(e,p)=>this.handleChangeCourses(e,p,i1,i2)} />)}
                        </div>
                        
                        )}
                    <button className="Go3"
                        onClick={() => this.calculateCPI()}
                    >
                        Calculate CPI
                    </button>
                    
                </div>
                
                <div className="yourcpi">
                    {this.state.ar5.map((cpi)=><div className="yourcpitext">
                        YOUR CPI IS {cpi}
                    </div>)}
                </div>
            </div>
        )
    }
}


export default no_of_sem;
