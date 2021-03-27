import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './MyPaperList.css';
import './index.css';
import { Image, Pagination, Statistic, List, Avatar, Layout, Button } from 'antd';

const { Content } = Layout;

const MetCreateHomePage = () => {

  return (
      <div>
          <Content
              className="site-layout-background"
              style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
              }}
          > 
               <div>
                 <p id="account-list">会议名称：2018年中国质谱学术大会</p>
               </div>
               <hr />
               <Image id="imgcenter"
      width={500}
      src='./img/112.jpg'
    />
               
          </Content>
      </div>
  );
};

export default withRouter(MetCreateHomePage);