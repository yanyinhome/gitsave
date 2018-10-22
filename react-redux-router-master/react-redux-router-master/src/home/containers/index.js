import React, { Component, PropTypes } from 'react'
import Banner from 'banner'
import Btn from 'btn'
import Alert from 'alert'
import * as tool from 'publicJs'
import GetPage from 'getPage'
class Main extends Component {
  componentDidMount() {
    this.list = [
      {
        bannerUrl: 'image/home/1.jpg'
      },{
        bannerUrl: 'image/home/2.jpg'
      },{
        bannerUrl: 'image/home/3.jpg'
      }
    ];
  }
  btnClick1 =()=> {
    window.location.href = '#/demo1';
  }
  btnClick2 =()=> {
    window.location.href = '#/demo2';
  }
  btnClick3 =()=> {
    this.props.state.alertShow = true;
    this.props.state.alertMsg = '我是弹窗';
    this.props.setState(this.props.state);
  }
  render() {
    return (
      <div>
        <Banner list={this.list}></Banner>
        <Btn className='m-top32'  size = '3' onClick={this.btnClick1}>跳转表单验证页面</Btn>
        <Btn className='m-top32' type = '2' size = '2' onClick={this.btnClick2}>跳转图片懒加载页面</Btn>
        <Btn className='m-top32' onClick={this.btnClick3}>点击触发弹窗</Btn>
      </div>
    )
  }
}

module.exports = GetPage({
  id:"home",
  component: Main
})
