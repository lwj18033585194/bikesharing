import React,{Component} from 'react'
import {Card,Button,Table,Form,Select,Modal,message} from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils'
const FormItem=Form.Item;
const Option=Select.Option;   
class City extends Component{
    //页数
    params={
        page:1
    }
    //初始state
    state={
        dataSource:[],
        isShowOpenCity:false
    }
    componentDidMount(){
        this.request()
    }
    //请求city接口
    request=()=>{
        //提取this防止作用域
        let _this=this;
        axios.ajax({
            url:'/api/city',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then(res=>{
            this.setState({
                //数据源
                dataSource:res.city_list.map((item,index)=>{
                    //添加key值
                        item.key = item.id
                        return item
                }),
                //分页
                pagination:Utils.pagination(res,(current)=>{
                    //将选择的页码传过来给页码page
                    _this.params.page=current;
                    //重新请求
                    _this.request();
                })
            })
        })
    }
    //开通城市
    handleOpenCity=()=>{
        this.setState({
            isShowOpenCity:true
        })
    }
    //开通城市提交时
    handleSubmit=()=>{
        //通过ref获取form表单中的值
        let cityInfo=this.cityForm.props.form.getFieldsValue();
        this.setState({
            isShowOpenCity:false
        })
        this.request();
        message.success(`开通城市编号为${cityInfo.city_id}`);
    }
    render(){
        //结构
        let {dataSource,pagination,isShowOpenCity}=this.state;
        //表格属性
        const columns=[
            {
                title:"城市Id",
                dataIndex:'id'
            },
            {
                title:"城市名称",
                dataIndex:'name'
            },
            {
                title: "用车模式",
                dataIndex: 'mode',
                render:(mode)=>{
                    return mode===1?'停车点':'禁停区'
                }
            },
            {
                title: "营运模式",
                dataIndex: 'op_mode',
                render: (op_mode) => {
                    return op_mode ===1? '自营' : '加盟'
                }
            },
            {
                title: "授权加盟商",
                dataIndex: 'franchisee_name'
            },
            {
                title: "城市管理员",
                dataIndex: 'city_admin',
                render:(arr)=>{
                    return arr.map(item=>{
                        return item.user_name
                    }).join(',')
                }
            },
            {
                title: "城市开通时间",
                dataIndex: 'open_time'
            },
            {
                title: "操作时间",
                dataIndex: 'update_time',
                render: (data) => {
                    return Utils.formateDate(data);
                }
            },
            {
                title: "操作人",
                dataIndex:'sys_user_name'
            }
        ]
        return(
            <div>
                <Card>
                    <FilterForm/>
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={dataSource}
                        pagination={pagination}
                    />
                </div>
                <Modal
                    title="开通城市"
                    visible={isShowOpenCity}
                    onCancel={()=>{this.setState({isShowOpenCity:false})}}
                    onOk={this.handleSubmit}
                >
                    <OpenCityForm wrappedComponentRef={(inst)=>{this.cityForm=inst}}/>
                </Modal>
            </div>
        )
    }
}
export default City
class FilterForm extends Component{
    render(){
        const {getFieldDecorator}=this.props.form
        return(
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                placeholder="全部"
                                style={{width:80}}
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京</Option>
                                <Option value="2">杭州</Option>
                                <Option value="3">上海</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select
                                placeholder="全部"
                                style={{ width: 150 }}
                            >
                                <Option value="">全部</Option>
                                <Option value="1">指定停车点模式</Option>
                                <Option value="2">禁停区模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                placeholder="全部"
                                style={{ width: 80 }}
                            >
                                <Option value="">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                placeholder="全部"
                                style={{ width: 90 }}
                            >
                                <Option value="">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
FilterForm=Form.create({})(FilterForm)
class OpenCityForm extends Component{
    render(){
        //栅格化布局
        const formItemLayout={
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:10
            }
        }
        //getFieldDecorator自动获取form中的值
        const {getFieldDecorator}=this.props.form;
        return(
            <Form layout="horizontal">
                <FormItem label="选择城市" {...formItemLayout}>
                    {
                        getFieldDecorator('city_id',{
                            initialValue:'1'
                        })(
                            <Select>
                                <Option value="">全部</Option>
                                <Option value="1">北京</Option>
                                <Option value="2">天津</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式"  {...formItemLayout}>
                    {
                        getFieldDecorator('op_mode',{
                            initialValue:"1"
                        })(
                            <Select>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式"  {...formItemLayout} >
                    {
                        getFieldDecorator('use_mode',{
                            initialValue:'1'
                        })(
                            <Select>
                                <Option value="1">指定停车点</Option>
                                <Option value="2">禁停区</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>
        )
    }
}
OpenCityForm = Form.create({})(OpenCityForm)
