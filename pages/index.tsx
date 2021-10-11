import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Sem_no from './sem_no';




const Home: NextPage = () => {
  return (
    <div  >
    <Sem_no />
    </div>
  )
}

export default Home
