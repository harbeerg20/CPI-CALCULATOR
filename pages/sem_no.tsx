import { Layout } from 'antd';
import { Menu, Dropdown } from 'antd';
import  { useState } from 'react';
import Coursename  from '../components/coursename';
import No_of_courses from '../pages/no_of_courses';
import { Button } from 'antd';
import Styles from '../pages/sem_no.module.css'
const { Header, Footer, Content } = Layout;

let NoOfCourses: any = []
let Grade:any[][]=[]
let Credit:any=[]
let Name:any=[]



function cpi_calculation(props:any){
    let num=0;
    let denom=0;
    
    for(var i=0;i<props&&NoOfCourses.length;i++){
        
        for(var j=0;j<NoOfCourses[i];j++){
            if (Grade[i][j] == 11 || Grade[i][j]==12){
                num += 0
                denom += 0
            } else if (Grade[i][j] == NaN || Credit[i][j] == NaN){
                continue
            }
            else{
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
    const [courseNo, setCourseNo] = useState(0)
    const [courseind, setCourseind] = useState(0)
    const [CPI,setCPI]=useState(false)
    const [button,setButton]=useState(false)
    let [cpi, setcpi] = useState(0)
    NoOfCourses[courseind] = courseNo
    //console.log(NoOfCourses)
    let sem_no
    let sem_no_load = []
    sem_no = sem
    for (var i = 0; i < sem_no; i++) {
        sem_no_load.push(i)
    }
    let loadcourses: any = []
    for (var j = 0; j < sem; j++) {
        loadcourses[j] = []
        for (var k = 0; k < NoOfCourses[j]; k++) {
            loadcourses[j][k] = k
        }
    }
    if(Grade.length<sem){
        for (var i = Grade.length; i < sem; i++) {
            Grade[i] = []
            Credit[i] = []
            Name[i] = []
            for(var j=0;j<NoOfCourses.length;j++){
                Grade[i][j]=10
            }
        }
       
    }
    // if(NoOfCourses[0]>=1){
    //     setButton(true)
    // }else{
    //     setButton(false)
    // }
    const menu = (
        <Menu onClick={(e) => setSem(Number(e.key)) }>
            <Menu.Item key="1">1</Menu.Item>
            <Menu.Item key="2">2</Menu.Item>
            <Menu.Item key="3">3</Menu.Item>
            <Menu.Item key="4">4</Menu.Item>
            <Menu.Item key="5">5</Menu.Item>
            <Menu.Item key="6">6</Menu.Item>
            <Menu.Item key="7">7</Menu.Item>
            <Menu.Item key="8">8</Menu.Item>
        </Menu>
    );
    return (
        <div>
            <Layout>

                <Header className={Styles.header}> CPI CALCULATOR </Header>
                < Content className={Styles.content} >
                    <div className={Styles.centre}>
                        <h2 style={{ paddingRight: '15px' }}>No of Semesters</h2>
                        <Dropdown
                            overlay={menu}
                            overlayStyle={{ color: 'black' }}
                            arrow={true}
                        >
                            <a className={Styles.a}>{sem}</a>
                        </Dropdown>
                    </div>
                    <div>
                        {sem_no_load.map((e: any) => <div>
                            
                            <No_of_courses i={e} onChange={(event: any) => { setCourseNo(event), setCourseind(e), setButton(true)}} />
                        </div>)}
                    </div>
                    <div >
                        {loadcourses.map((e:any,i1:any) =>  <div className={Styles.semdiv}>
                            {e[0]==0?<h2 style={{position:'relative',left:'-20rem'}}>Semester {i1+1}</h2>:''}
                            {e.map((e: any, i2: any) => <div style={{ paddingBottom:'0.2rem' }}>
                                <Coursename onChange={(e: any, check: any) => {
                                    if (check == 1) {

                                    }
                                    if (check == 2) {
                                        Grade[i1][i2] = e.key
                                        console.log(Grade)
                                    }
                                    if (check == 3) {
                                        Credit[i1][i2] = e
                                        console.log(Credit)
                                    }
                                }} />

                            </div>)}
                            
                        </div>
                        )}
                    </div>
                    <div style={{padding:'20px'}}>
                        {button ? <Button type="primary" onClick={() => { setcpi(cpi_calculation(sem)), setCPI(true) }} >
                            Calculate CPI
                        </Button>:''}
                    </div>
                    <div className={Styles.centre}>
                        {CPI?<h3 className={Styles.yourcpi}>Your CPI is {cpi}</h3>:''}
                    </div>
                </Content>
                < Footer className="footer" > Footer </Footer>

            </Layout>

        </div>
    )
}