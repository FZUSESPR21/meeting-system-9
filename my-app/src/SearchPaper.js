import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './SearchPaper.css';
import './index.css';
import { Pagination, Statistic, List, Avatar, Layout } from 'antd';

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

const CreateSearchPageList = () => {
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
          <p id="result-infor">从论文列表获得 3 条结果，以下是第 1 页</p>
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

export default withRouter(CreateSearchPageList);