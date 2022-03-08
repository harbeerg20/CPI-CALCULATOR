import { Input } from 'antd';
import { Menu, Dropdown } from 'antd';
import { useState } from 'react';
import { InputNumber } from 'antd';
import Mcoursename from '../components/Mcoursename.module.css';
import { Divider } from 'antd';
import { Select ,Space} from 'antd';
const { Option } = Select;

export default function coursename(props: any) {
    return (
        <div  >
            <Divider
                style={{ background: 'black' ,marginTop:'0vh' }}
            />
            <div className={Mcoursename.centre} style={{ marginTop: '0.5rem'}}>
                <h3 style={{marginLeft:'1rem',marginRight:'2rem',fontSize:'1.8vh'}}>
                    Course Name
                </h3>
                <Input
                    placeholder="Course Name"
                    type='text'
                    style={{ width: 'initial', marginRight: '1rem' }}
                    onChange={(e) => props.onChange(e, 1)}
                />
            </div>
            <Space/>
            {/* <Divider
                style={{ background: 'white', marginTop: '1vh', marginBottom: '1vh' }}
            /> */}
            <div style={{display:'flex',marginTop:'1vh'}}>
            <div className={Mcoursename.centre}>
                <h3 style={{ marginLeft: '0.5rem', marginRight: '1.5rem',fontSize:'1.6vh' }}>
                    Grade
                </h3>
                <Select placeholder='Grade' style={{  fontWeight: 'bolder', textAlign: 'center', marginLeft: '1rem' }} onChange={(e) => { props.onChange(e, 2) }}>
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
            </div>
            {/* <Divider 
                style={{ background: 'white', marginTop: '1vh', marginBottom: '1vh' }}
            /> */}
            <div className={Mcoursename.centre}>
                <h3 style={{ marginLeft: '1rem', marginRight: '2rem' ,fontSize:'1.6vh'}} >
                    Course Credit
                </h3>
                <InputNumber min={1} max={15}
                    placeholder='Credits'
                    onChange={(e) => props.onChange(e, 3)} 
                    />
            </div>
            </div>
            
        </div>
    )
}
