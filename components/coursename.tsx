import { Input } from 'antd';
import { InputNumber } from 'antd';
import Coursename from '../components/coursename.module.css'
import { Select } from 'antd';
const { Option } = Select;
import { useState } from 'react';

export default function coursename  (props:any)  {
    const [Value ,setValue]= useState(NaN)
    return (
        
        <div className={Coursename.div}>
            <h3 className={Coursename.h31}>
                Course Name
            </h3>
            <Input
                placeholder="Course Name"
                type='text'
                style={{width:'initial'}}
                onChange={(e) => props.onChange(e, 1)}
            />
            <h3 className={Coursename.h31}>
                Grade
            </h3>
            <Select placeholder='Grade'  style={{ width: 80, fontWeight: 'bolder', textAlign: 'center' }} onChange={(e) => { props.onChange(e, 2) }}>
                <Option value="10.0">A*</Option>
                <Option value="10">A</Option>
                <Option value="8">B</Option>
                <Option value="6">C</Option>
                <Option value="4">D</Option>
                <Option value="2">E</Option>
                <Option value="0">F</Option>
                <Option value="11">DROP</Option>
                <Option value="12">S/X</Option>
            </Select>
            <h3 className={Coursename.h31}>
                Course Credit
            </h3>
            <InputNumber min={1} max={15}
            placeholder='Credits'
            defaultValue={NaN}
            onChange={(e)=>{props.onChange(e,3)}} />
        </div>
    )
}
