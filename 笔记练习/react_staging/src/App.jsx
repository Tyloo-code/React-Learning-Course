import React, { Component } from 'react'
import { Button,DatePicker } from 'antd'
import 'antd/dist/antd.css'
import {WechatOutlined,WeiboOutlined,SearchOutlined} from '@ant-design/icons'
const { RangePicker } = DatePicker;
export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <button>点我</button>
        <Button type="primary">按钮1</Button>
        <WechatOutlined />
        <WeiboOutlined />
        <DatePicker/>
        <RangePicker/>
      </div>
    )
  }
}
