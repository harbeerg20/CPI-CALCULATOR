import { InputNumber } from 'antd';

export default function no_of_courses(props:any){
    return (
        <div style={{ paddingTop: '15px', paddingBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center',color:'white'}}>
            <h2 style={{ paddingRight: '20px', color: 'black'}}>Number of Courses in Sem {Number(props.i+1)}</h2>
            <InputNumber min={1} max={10} defaultValue={1} onChange={props.onChange}  />
        </div>
    )
}
