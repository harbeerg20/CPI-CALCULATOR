import { Input } from 'antd';
import { Menu, Dropdown } from 'antd';
import { useState } from 'react';
import { InputNumber } from 'antd';
import Coursename from '../components/coursename.module.css'

export default function coursename  (props:any)  {
    const[value,setValue]= useState('A*')
    const menu = (
        <Menu onClick={(e) => { props.onChange(e, 2), setValue(e.domEvent.target.outerText)}}>
            <Menu.Item key="10.0" >A*</Menu.Item>
            <Menu.Item key="10" >A</Menu.Item>
            <Menu.Item key="8">B</Menu.Item>
            <Menu.Item key="6">C</Menu.Item>
            <Menu.Item key="4">D</Menu.Item>
            <Menu.Item key="2">E</Menu.Item>
            <Menu.Item key="0">F</Menu.Item>
            <Menu.Item key="11">DROP</Menu.Item>
            <Menu.Item key="12">S/X</Menu.Item>
        </Menu>
    );
    return (
        <div className={Coursename.div}>
            <h3 style={{paddingRight:'1rem',paddingLeft:'1rem'}}>
                Course Name
            </h3>
            <Input
                placeholder="Course Name"
                type='text'
                
                style={{width:'initial'}}
                onChange={(e) => props.onChange(e, 1)}
            />
            <h3 style={{ paddingRight: '1rem',paddingLeft:'5rem' }}>
                Grade
            </h3>
            <Dropdown
                overlay={menu}
                arrow={true}
            >
                <a className={Coursename.a}>{value}</a>
            </Dropdown>
            <h3 style={{ paddingRight: '1rem', paddingLeft: '5rem' }}>
                Course Credit
            </h3>
            <InputNumber min={1} max={10}
            placeholder='Credits'
            onChange={(e)=>props.onChange(e,3)} />
        </div>
    )
}
