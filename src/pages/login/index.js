import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import classnames from 'classnames'
import { Layout, Form, Icon, Input, Button, Checkbox, Row, Col, message } from 'antd';
import auth from 'src/utils/auth'
import './index.less'

const { Content } = Layout;
const FormItem = Form.Item;

class Login extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);

        if(values.userName == 'admin' && values.password == 'admin') {
          auth.register(values)
          browserHistory.push('/')
        }
        else {
          message.error('用户名或密码错误', 3)
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Content>
         <Row className="login-row" type="flex" justify="space-around" align="middle">
          <Col span="8">
            <div className='login-box'>
              <div className='login-logo'>
                扶贫信息网
              </div>
              <div className='login-form'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <FormItem label='用户名'>
                    {getFieldDecorator('userName', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                  </FormItem>
                  <FormItem label='密码'>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                  </FormItem>
                  <FormItem>                 
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      登 录
                    </Button>
                  </FormItem>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Content>     
    )
  }
}

export default Form.create()(Login)