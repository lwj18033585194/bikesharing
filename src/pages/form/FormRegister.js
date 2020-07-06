import React, { Component } from 'react'
import { Card, Form, Input, InputNumber, Button, Checkbox, Radio, Select,Switch,DatePicker,TimePicker,Upload,Icon } from 'antd'
import moment from 'moment'
const FormItem = Form.Item;
const RadioGroup=Radio.Group;
const Option=Select.Option;
const TextArea=Input.TextArea;
class FromRegister extends Component {
    state={
        imageUrl:''
    }
    //头像转码
    getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    //上传头像
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({loading:true})
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>this.setState({
                imageUrl,
                loading:false
            }))
        }
    };
    //提交
    handleSubmit=()=>{
        //获得用户信息
        let userInfo=this.props.form.getFieldValue();
        console.log(userInfo);
    }
    render(){
        let {getFieldDecorator}=this.props.form;
        let { imageUrl}=this.state;
        const formItemLayout={
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout={
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return(
            <div>
                <Card title="注册表单">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                               getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        }
                                    ]
                               })(<Input placeholder="请输入用户名"/>)  
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空'
                                        }
                                    ]
                                })(<Input type="password" placeholder="请输入密码" />)
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: '18',
                                })(
                                   <InputNumber/>
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '1',
                                })(
                                    <Select>
                                        <Option value="1">学生</Option>
                                        <Option value="2">上班族</Option>
                                        <Option value="3">程序员</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['1','2','3'],
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">读书</Option>
                                        <Option value="2">跑步</Option>
                                        <Option value="3">旅游</Option>
                                        <Option value="4">购物</Option>
                                        <Option value="5">慈善</Option>
                                        <Option value="6">生活</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName:'checked',
                                    initialValue: false
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthDay', {
                                    initialValue:moment('2020-7-3'),
                                })(
                                    <DatePicker 
                                        showTime
                                        format="YYYY-MM-DD HH:MM:SS"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address')(
                                    <TextArea
                                        autoSize={{minRows:2,maxRows:6}}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker/>
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload 
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        onChange={this.handleChange}
                                    >
                                        {imageUrl?<img src={imageUrl} style={{width:100}} alt="loading"/>:<Icon type="plus"/>}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('protocol',{

                                })(<Checkbox>我已阅读过<a href="http://www.baidu.com">协议</a></Checkbox>)
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FromRegister)