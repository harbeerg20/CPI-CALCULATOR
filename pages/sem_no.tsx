import { Layout } from 'antd';
import { Select } from 'antd';
const { Option } = Select;
import { useState } from 'react';
import Coursename from '../components/coursename';
import No_of_courses from '../pages/no_of_courses';
import { Button,  } from 'antd';
import Styles from '../pages/sem_no.module.css'
import { Statistic, Card, Row, Col } from 'antd';


const { Header, Content } = Layout;

let NoOfCourses: number[] = []
let Grade: number[][] = []
let Credit: number[][] = []
let Name: string[][] = []
let x = 0;


function cpi_calculation(props: number) {
    let num = 0;
    let denom = 0;

    for (var i = 0; i < props && i < NoOfCourses.length; i++) {

        for (var j = 0; j < NoOfCourses[i]; j++) {
            if (Grade[i][j] == NaN || Credit[i][j] == NaN) {
                continue
            }
            else if (Grade[i][j] == 11 || Grade[i][j] == 12) {
                num += Number(0)
                denom += Number(0)
            }
            else {
                num += Number(Grade[i][j] * Credit[i][j])
                denom += Number(Credit[i][j])
            }

        }
    }
    var x = (num / denom).toFixed(2)
    return Number(x)
}

export default function sem_no() {
    const [sem, setSem] = useState(1)
    const [courseNo, setCourseNo] = useState(1)
    const [courseind, setCourseind] = useState(0)
    const [CPI, setCPI] = useState(false)
    const [button, setButton] = useState(false)
    const [change, SetChange] = useState(0)
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
            for (var j = 0; j < NoOfCourses[i]; j++) {
                Grade[i][j] = 10
            }
        }
    }
    return (
        <div>
            <Layout >
                <Header className={Styles.header}> <h1 style={{ color: 'white', fontSize: '2.5rem' }}>CPI CALCULATOR</h1> </Header>
                < Content className={Styles.content}  >   
                        <Card className={Styles.card} >
                            <div style={{position:'relative'}}>
                            <Row style={{ marginLeft: '44%' }}>
                                <div className={Styles.centre} >
                                    <h2 className={Styles.centre} style={{ paddingRight: '15px', color: 'black' }}>No of Semesters</h2>
                                    <Select defaultValue="1" style={{ width: 60, fontWeight: 'bolder', textAlign: 'center' }} onChange={(e) => { setSem(Number(e)), setCPI(false),setCourseNo(Number(1)),setCourseind(Number(e)) }}>
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
                            </Row>
                            <div>
                                {sem_no_load.map((e: number) => <div>

                                    <No_of_courses i={e} onChange={(event: number) => { setCourseNo(event), setCourseind(e), setButton(true), setCPI(false) }} />
                                </div>)}
                            </div>
                            <Card className={Styles.card2}>
                                <div style={{position:'relative'}}>
                                {loadcourses.map((e: number[], i1: number) => <div className={Styles.semdiv}>
                                    {e[0] == 0 ? <h2 className={Styles.semno}>Semester {i1 + 1}</h2> : ""}
                                    {e.map((e: number, i2: number) => <div style={{ paddingBottom: '0.2rem' }}>
                                        <Coursename onChange={(e: React.MouseEvent<HTMLInputElement>, check: number) => {
                                            if (check == 1) {
                                                Name[i1][i2] = e.currentTarget.value;
                                                console.log(Name)
                                            }
                                            if (check == 2) {
                                                console.log(e)
                                                Grade[i1][i2] = Number(e);
                                                setCPI(false);
                                            }
                                            if (check == 3) {

                                                Credit[i1][i2] = Number(e);
                                                console.log(Credit[i1][i2]);
                                                setCPI(false);
                                            }
                                        }} />
                                    </div>)}

                                </div>
                                )}
                                </div>
                            </Card>
                            <div className={Styles.cpibutton} >
                                {button ? <Button onClick={() => { setcpi(cpi_calculation(sem)), setCPI(true) }} type="primary"  size="large">
                                    Calculate CPI
                                </Button> : ''}
                            </div>
                            {CPI ? <div className="site-statistic-demo-card" style={{ position: 'relative', left: '43%' }}>

                                <Col span={4} >
                                    <Card className={Styles.cpicard} hoverable={true}>
                                        <Statistic
                                            title="YOUR CPI"
                                            value={cpi}
                                            precision={2}
                                            valueStyle={{ color: 'black', fontWeight: 'bolder' }}
                                        />
                                        {/* <Progress type="circle" percent={cpi*10} width={80} /> */}
                                    </Card>
                                </Col>

                            </div> : ''}
                            </div>
                        </Card>
                    
                </Content>

            </Layout>

        </div>
    )
}