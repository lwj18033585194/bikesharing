import React, { Component } from 'react'
import './ui.less'
import { Card, Tabs,message,Icon } from 'antd'
const TabPane = Tabs.TabPane;
class Tabss extends Component {
    newTabIndex=0;
    //点击提示选择了哪个标签
    handleCallback=(key)=>{
        message.info("Hi您选择了哪个标签"+key);
    }
    UNSAFE_componentWillMount(){
        //自定义标签
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            {
                title: 'Tab 3',
                content: 'Content of Tab 3',
                key: '3',
                closable: false,
            },
        ];
        this.setState({
            panes,
            activeKey:panes[0].key
        })
    }
    onChange = activeKey => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab'+activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };
    render(){
        let { panes, activeKey}=this.state;
        return(
            <div>
                 <Card title="Tab标签" className="card-wrapper">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab1" key="1">content of tab 1</TabPane>
                        <TabPane tab="Tab2" key="2">content of tab 2</TabPane>
                        <TabPane tab="Tab3" key="3">content of tab 3</TabPane>
                    </Tabs>
                 </Card>
                <Card title="Tab带图标签" className="card-wrapper">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">content of tab 1</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2">content of tab 2</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>Tab 3</span>} key="3">content of tab 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="可编辑Tab标签" className="card-wrapper">
                    <Tabs 
                        activeKey={activeKey}
                        onChange={this.onChange}
                        onEdit={this.onEdit}
                        type="editable-card"
                    >
                        {
                            panes.map(panes=>{
                                return <TabPane 
                                            tab={panes.title}
                                            key={panes.key}
                                        >{panes.content}</TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}
export default Tabss