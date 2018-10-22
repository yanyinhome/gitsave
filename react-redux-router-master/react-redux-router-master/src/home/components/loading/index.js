import React,{Component} from 'react';//引入react
import { config,strUtil,dataUtil } from 'publicJs';

//创建loading组件
export default class Loading extends Component{
	//构建函数
	constructor(props){
		super(props);
	}
	//是否更新
	shouldComponentUpdate(nextProps){
		return this.props.loadAnimation!==nextProps.loadAnimation;
	}
	render(){
		let dealLoading=()=>{
			if(this.props.loadAnimation){
				return (
					<div className="component-loading">
						<div className="loadings">
	            <div className="loading-list"></div>
	            <div className="loading-list"></div>
	            <div className="loading-list"></div>
	            <div className="loading-list"></div>
	            <div className="loading-list"></div>
	            <div className="loading-list"></div>
	            <div className="loading-list"></div>
	            <div className="loading-list"></div>
	          </div>
	        </div>
				)
			}else{
				return <div></div>
			}
		}
		return(
			<div>
			{ dealLoading() }
			</div>
		)
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
Loading.propTypes={
  /**
   * loadAnimation: 是否显示loading
   */
  	loadAnimation: React.PropTypes.bool.isRequired
}
