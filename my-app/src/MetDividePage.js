import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Carousel } from 'antd';
import { Button, List, Avatar, Typography, Divider } from 'antd';
import { Layout } from 'antd';
import './MetDividePage.css';

const { Title, Paragraph, Text } = Typography;

const { Content } = Layout;

const contentStyle = {
    color: '#000',
    background: '#F5F5F5',
    // background: './img/101.jpg',
};

const buttonStyle = {
    // textAlign: 'center',
    // margin: 'auto',

}

const data = [
    {
        title: '最新消息：王祥喜出席“一带一路”企业家大会',
    },
    {
        title: '最新消息：“马韩郭朱”同台圆桌论坛 预计各方政见首度交锋',
    },
    {
        title: '融易要闻：这部台剧有着公共论坛意义',
    },
    {
        title: '第二届“一带一路”国际合作高峰论坛三大亮点可期',
    },
];
class CreateDividePage extends React.Component {

    constructor(props) {
        super(props);
    
        this.carouselRef = null;
    
        this.setCarouselRef = el => {
          this.carouselRef = el;
        };
      }
      nextPage() {
        // 调用
        if (this.carouselRef) this.carouselRef.next();
      }

      prevPage() {
        // 调用
        if (this.carouselRef) this.carouselRef.prev();
      }
    
      render() {
    return (
        <div>
            <Content>
                <Carousel ref={this.setCarouselRef}>
                    <div >
                        <h3 style={contentStyle} id='backImg'>
                            <Row>
                                <Col span={6}><Button id="pagebutton" onClick={this.prevPage.bind(this)}>Prev Page</Button></Col>
                                <Col span={12}>
                                    <Typography>
                                        <br />
                                        <Title>首届中国麻醉医疗药械创新论坛</Title>
                                        <hr />
                                        <Title level={2}>议题：引领麻醉医疗药械的高品质创新</Title>
                                        <Paragraph>
                                            主席：雷伟
                                    </Paragraph>
                                        <Paragraph>
                                            召开时间：9月6日|全天
                                    </Paragraph>
                                        <hr />

                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar src='./img/111.jpg' />}
                                                        title={<a href="#">{item.title}</a>}
                                                        description="据台湾“中时电子报”报道，“马英九基金会”周二将举办“突破困境，迎接挑战”重振台湾经济竞争力会议。马英..."
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                        <Divider />
                                    </Typography>
                                </Col>
                                <Col span={6}><Button id="pagebutton2" onClick={this.nextPage.bind(this)}>Next Page</Button></Col>
                            </Row>
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                        <Row>
                                <Col span={6}><Button id="pagebutton" onClick={this.prevPage.bind(this)}>Prev Page</Button></Col>
                                <Col span={12}>
                                    <Typography>
                                        <br />
                                        <Title>首届中国麻醉医疗药械创新论坛</Title>
                                        <hr />
                                        <Title level={2}>议题：引领麻醉医疗药械的高品质创新</Title>
                                        <Paragraph>
                                            主席：雷伟
                                    </Paragraph>
                                        <Paragraph>
                                            召开时间：9月6日|全天
                                    </Paragraph>
                                        <hr />

                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar src='./img/111.jpg' />}
                                                        title={<a href="#">{item.title}</a>}
                                                        description="据台湾“中时电子报”报道，“马英九基金会”周二将举办“突破困境，迎接挑战”重振台湾经济竞争力会议。马英..."
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                        <Divider />
                                    </Typography>
                                </Col>
                                <Col span={6}><Button id="pagebutton2" onClick={this.nextPage.bind(this)}>Next Page</Button></Col>
                            </Row></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                        <Row>
                                <Col span={6}><Button id="pagebutton" onClick={this.prevPage.bind(this)}>Prev Page</Button></Col>
                                <Col span={12}>
                                    <Typography>
                                        <br />
                                        <Title>首届中国麻醉医疗药械创新论坛</Title>
                                        <hr />
                                        <Title level={2}>议题：引领麻醉医疗药械的高品质创新</Title>
                                        <Paragraph>
                                            主席：雷伟
                                    </Paragraph>
                                        <Paragraph>
                                            召开时间：9月6日|全天
                                    </Paragraph>
                                        <hr />

                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar src='./img/111.jpg' />}
                                                        title={<a href="#">{item.title}</a>}
                                                        description="据台湾“中时电子报”报道，“马英九基金会”周二将举办“突破困境，迎接挑战”重振台湾经济竞争力会议。马英..."
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                        <Divider />
                                    </Typography>
                                </Col>
                                <Col span={6}><Button id="pagebutton2"  onClick={this.nextPage.bind(this)}>Next Page</Button></Col>
                            </Row>
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                        <Row>
                                <Col span={6}><Button id="pagebutton" onClick={this.prevPage.bind(this)}>Prev Page</Button></Col>
                                <Col span={12}>
                                    <Typography>
                                        <br />
                                        <Title>首届中国麻醉医疗药械创新论坛</Title>
                                        <hr />
                                        <Title level={2}>议题：引领麻醉医疗药械的高品质创新</Title>
                                        <Paragraph>
                                            主席：雷伟
                                    </Paragraph>
                                        <Paragraph>
                                            召开时间：9月6日|全天
                                    </Paragraph>
                                        <hr />

                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar src='./img/111.jpg' />}
                                                        title={<a href="#">{item.title}</a>}
                                                        description="据台湾“中时电子报”报道，“马英九基金会”周二将举办“突破困境，迎接挑战”重振台湾经济竞争力会议。马英..."
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                        <Divider />
                                    </Typography>
                                </Col>
                                <Col span={6}><Button id="pagebutton2" onClick={this.nextPage.bind(this)}>Next Page</Button></Col>
                            </Row></h3>
                    </div>
                </Carousel>
            </Content>
        </div>

    );
                                            }
};

export default withRouter(CreateDividePage);