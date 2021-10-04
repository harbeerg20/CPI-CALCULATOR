import './App.css';
import { Layout } from 'antd';
import React from "react";
import No_of_sem from './pages/no_of_sem';
import Sem_list from './pages/sem_list';


const { Header, Content } = Layout;

function App() {
  
  return (
    <div className="App">
      <Layout className="layout">
        <Header >
          <h1 className="header">CPI CALCULATOR</h1>
        </Header>
        <Content className="content">
          <No_of_sem/>
          <div className="coursesps">
            
          </div>
        </Content>
        
      </Layout>
    </div>

  );
}

export default App;
