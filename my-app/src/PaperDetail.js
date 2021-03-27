import React from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Typography, Divider } from 'antd';
import { Layout } from 'antd';
const { Title, Paragraph, Text } = Typography;

const { Content } = Layout;

const CreateSearchDetailPage = () => {
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
                <Typography>
                    <Title>Environmental Pollution: Its Effects on Life and Its Remedies</Title>
                    <Paragraph>
                        Researcher World: Journal of Arts, Science & Commerce, Vol. 2, No. 2, pp. 276-285, 2011
                    </Paragraph>
                    <Paragraph>
                        https://papers.ssrn.com/sol3/results.cfm?npage=2&
                        
                    </Paragraph>
                    <Title level={2}>Abstract</Title>
                    <Paragraph>
                    Environment pollution is a wide-reaching problem and it is likely to influence 
                    the health of human populations is great. This paper provides the insight view 
                    about the affects of environment pollution in the perspective of air pollution, 
                    water and land/soil waste pollution on human by diseases and problems, animals and 
                    trees/plants. Study finds that these kinds of pollutions are not only seriously 
                    affecting the human by diseases and problems but also the animals and trees/plants. 
                    According to author, still time left in the hands of global institutions, governments 
                    and local bodies to use the advance resources to balance the environment for living and 
                    initiates the breathed intellectuals to live friendly with environment. As effective 
                    reply to contamination is largely base on human appraisal of the problem from every 
                    age group and contamination control program evolves as a nationwide fixed cost-sharing 
                    effort relying upon voluntary participation (Sharp & Bromley, 1979).
                    </Paragraph>

                    <Paragraph>
                    <Text strong>
                    Keywords:
                        </Text>Environment Pollution, Air Pollution, Water Pollution, Soil Pollution, Land Pollution, Remedies
                    </Paragraph>
                    <Divider />   
                </Typography>
            </Content>
        </div>
    );
};

export default withRouter(CreateSearchDetailPage);