import { InputNumber } from 'antd';

export default function no_of_courses(props: any) {
    return (
        <div style={{ paddingTop: '15px', paddingBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ paddingRight: '30px',fontSize:'2vh' }}>Number of Courses in Sem {Number(props.i + 1)}</h2>
            <InputNumber defaultValue={1} min={1} max={10} onChange={props.onChange} />
        </div>
    )
}
