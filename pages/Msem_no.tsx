import { Layout } from 'antd';
import { useState } from 'react';
import Coursename from '../components/Mcoursename';
import No_of_courses from '../pages/no_of_courses';
import Mno_of_courses from '../pages/Mno_of_courses';
import { Button } from 'antd';
import Styles from '../pages/Msem_no.module.css'
const { Header, Content } = Layout;
import { Select,Card } from 'antd';
const { Option } = Select;


let NoOfCourses: number[] = []
let Grade: number[][] = []
let Credit: number[][] = []
let Name: string[][] = []



function cpi_calculation(props: number) {
    let num = 0;
    let denom = 0;

    for (var i = 0; i < props && NoOfCourses.length; i++) {

        for (var j = 0; j < NoOfCourses[i]; j++) {
            if (Grade[i][j] == 11 || Grade[i][j] == 12) {
                num += 0
                denom += 0
            } else if (Grade[i][j] == NaN || Credit[i][j] == NaN) {
                continue
            }
            else {
                num += Grade[i][j] * Credit[i][j]
                denom += Credit[i][j]
            }

        }
    }
    console.log(num)
    console.log(denom)
    var x = (num / denom).toFixed(2)
    return Number(x)
}

export default function sem_no() {
    const [sem, setSem] = useState(1)
    const [courseNo, setCourseNo] = useState(1)
    const [courseind, setCourseind] = useState(0)
    const [CPI, setCPI] = useState(false)
    const [button, setButton] = useState(false)
    let [cpi, setcpi] = useState(0)
    for (var i=0;i<sem;i++){
        NoOfCourses.push(1)
    }
    NoOfCourses[courseind] = courseNo
    let sem_no
    let sem_no_load = []
    sem_no = sem
    for (var i = 0; i < sem_no; i++) {
        sem_no_load.push(i)
    }
    let loadcourses: number[][] = []
    for (var j = 0; j < sem; j++) {
        loadcourses[j] = []
        for (var k = 0; k < NoOfCourses[j]; k++) {
            loadcourses[j][k] = k
        }
    }
    if (Grade.length < sem) {
        for (var i = Grade.length; i < sem; i++) {
            Grade[i] = []
            Credit[i] = []
            Name[i] = []
            for (var j = 0; j < NoOfCourses.length; j++) {
                Grade[i][j] = 10
            }
        }

    }
    return (
        <div>
            <Layout style={{position:'relative'}}>
                <Header className={Styles.header} style={{fontSize:'6vw',position:'relative'}}> CPI CALCULATOR </Header>
                < Content className={Styles.content} >
                    <div style={{position:'relative'}}>
                    <div className={Styles.centre} style={{display:'block',marginLeft:'auto',marginRight:'auto'}}>
                        <h2 style={{ paddingRight: '1vh' ,fontSize:'6vw'}}>No of Semesters</h2>
                        <Select defaultValue="1" style={{  fontWeight: 'bolder', textAlign: 'center' }} onChange={(e) => { setSem(Number(e)), setCPI(false) }}>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                        </Select>
                    </div>
                    <div>
                        {sem_no_load.map((e: number) => <div >

                            <Mno_of_courses i={e} onChange={(event: number) => { setCourseNo(event), setCourseind(e), setButton(true) }} />
                        </div>)}
                    </div>
                    <div >
                        {loadcourses.map((e: number[], i1: number) => <Card className={Styles.semdiv} style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', marginBottom:'0.1vh' }}>
                            {e[0] == 0 ? <h2 className={Styles.semno}>Semester {i1 + 1}</h2> : ''}
                            {e.map((e: number, i2: number) => <div className={Styles.semcourse}>
                                <Coursename onChange={(e: React.MouseEvent<HTMLInputElement>, check: number) => {
                                    if (check == 1) {
                                        Name[i1][i2] = e.currentTarget.value;
                                        console.log(Name)
                                    }
                                    if (check == 2) {
                                        Grade[i1][i2] = Number(e);
                                    }
                                    if (check == 3) {
                                        Credit[i1][i2] = Number(e);
                                    }
                                }} />
                            </div>)}

                        </Card>
                        )}
                    </div>
                    <div style={{ padding: '20px' }}>
                        {button ? <Button type="primary" onClick={() => { setcpi(cpi_calculation(sem)), setCPI(true) }} >
                            Calculate CPI
                        </Button> : ''}
                    </div>
                    <div className={Styles.centre}>
                        {CPI ? <h3 className={Styles.yourcpi}>Your CPI is {cpi}</h3> : ''}
                    </div>
                    </div>
                </Content>
            </Layout>

        </div>
    )
}