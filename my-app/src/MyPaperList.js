import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './MyPaperList.css';
import './index.css';
import { Pagination, Statistic, List, Avatar, Layout, Button } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
    number: 1,
  },
  {
    title: 'Ant Design Title 2',
    number: 2,
  },
  {
    title: 'Ant Design Title 3',
    number: 3,
  },
  {
    title: 'Ant Design Title 4',
    number: 4,
  },
  {
    title: 'Ant Design Title 5',
    number: 5,
  },
  {
    title: 'Ant Design Title 6',
    number: 6,
  },
  {
    title: 'Ant Design Title 7',
    number: 7,
  },
];

const { Content } = Layout;

const CreateListPage = () => {

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
                <Button id="search-paper-link" type="link" href="/SearchPaperList" >点击获取更多论文</Button>
                 <p id="account-list">221801219 的论文列表 (7)</p>
               </div>
               <hr />
               <div id="paparList">
                 <List
                   itemLayout="horizontal"
                   dataSource={data}
                   renderItem={item => (
                     <List.Item>
                       <p>{item.number}.&nbsp;&nbsp;</p>
                       <List.Item.Meta
                         avatar={<Avatar src="./img/45.jpg" />}
                         title={<Link to="/SearchPaperDetail/" style={{ color: 'black' }}>
                           {item.title}
                         </Link>}
                         description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                       />
                       <Statistic title="View" value={112} />
                     </List.Item>
                   )}
                 />
               </div>
               <hr />
               <div id="divide-page">
                 <Pagination size="small" total={50} showQuickJumper />
               </div>
          </Content>
      </div>
  );
};

export default withRouter(CreateListPage);