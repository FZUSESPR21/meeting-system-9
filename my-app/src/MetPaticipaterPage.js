import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './MyPaperList.css';
import './index.css';
import { Pagination, Statistic, List, Avatar, Layout, Button } from 'antd';
import { Table, Tag, Space } from 'antd';


const { Content } = Layout;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      tags: ['cool', 'teacher'],
    },
  ];

const MetCreatePaticipaterPage = () => {

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
                 <p id="account-list">与会人员</p>
               </div>
               <hr />
               <Table columns={columns} dataSource={data} />
                
               
          </Content>
      </div>
  );
};

export default withRouter(MetCreatePaticipaterPage);