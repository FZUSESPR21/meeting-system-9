import React from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import CollectionsPage from './LoginForm';
import CreateSearchPage from './SearchDetail';
import './index.css';
import CreateListPage from './MyPaperList';
import CreateSearchPageList from './SearchPaper';
import CreateSearchDetailPage from './PaperDetail';
import StatisticPage from './DataStatistics';
import {
  Space,
  Button,
  Select,
  Form,
  Drawer,
  Layout,
  Menu,
  Input
} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  StarOutlined,
  BarChartOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const { Search } = Input;

const { Header, Sider } = Layout;

const CreateDetailSearch = () => {
  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
      <Form.Item label="标题">
        <Input />
      </Form.Item>
      <Form.Item label="顶会">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="关键词">
        <Input />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit" id="submit-button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

const ChoosePage = ({ id }) => {
  switch (id) {
    case "SearchPaperDetail":
      return (<CreateSearchDetailPage />);
    case "MyPaperList":
      return (<CreateListPage />);
    case "SearchPaperList":
      return (<CreateSearchPageList />);
    case "StatisticPage":
      return (<StatisticPage />);
    default:
      return (<CreateSearchPage />);
  }
}

class Home extends React.Component {

  onSearch = value => {
    console.log(value);
    let { history } = this.props
    history.push({ pathname: '/SearchPaperList' })
  };

  showSearchDrawer = () => {
    this.setState({
      searchDrawervisible: true,
    });
  };

  returnHome = () => {
    let { history } = this.props
    history.push({ pathname: '/' })
  };

  onClose = () => {
    this.setState({
      visible: false,
      searchDrawervisible: false,
    });
  };

  changePageToPaperList = () => {

    // this.props.history.push({
    //   pathname: '/Home/5',
    //   search: 'a=1'
    // })
    let { history } = this.props
    history.push({ pathname: '/MyPaperList' })

  }

  changePageToDataStatistic = () => {
    let { history } = this.props
    history.push({ pathname: '/StatisticPage' })
  }

  state = {
    collapsed: true,
    searchDrawervisible: false,
    placement: 'left',
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>

        <Drawer
          title="高级搜索"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.searchDrawervisible}
          key={this.state.placement}
        >
          <CreateDetailSearch />
        </Drawer>

        <Layout>
          <Sider trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            theme="light"
          >
            <div className="logo">
              <img id="logo-img" src="./img/46.png" alt="" onClick={this.returnHome} />
            </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['']}>
              <Menu.Item key="1" icon={<StarOutlined />} onClick={this.changePageToPaperList.bind(this)}>
                我的论文列表
            </Menu.Item>
              <Menu.Item key="2" icon={<BarChartOutlined />} theme="light" onClick={this.changePageToDataStatistic.bind(this)}>
                论文分析
            </Menu.Item>
              <Menu.Item key="3" icon={<SearchOutlined />} theme="light" onClick={this.showSearchDrawer}>
                高级搜索
            </Menu.Item>
            </Menu>
          </Sider>

          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}

              <Space id="search-button" >
                <Search placeholder="input search text" style={{ width: 420 }} onSearch={this.onSearch.bind(this)} enterButton />
              </Space>

              <CollectionsPage />
            </Header>
            <ChoosePage id={this.props.match.params.id} />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(Home);