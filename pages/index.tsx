import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Sem_no from './sem_no';
import Msem_no from './Msem_no';
import {isMobile} from 'react-device-detect';





const Home: NextPage = () => {
  return (
    <div >
      {isMobile?<Msem_no/>:<Sem_no/>}
    </div>
  )
}

export default Home
