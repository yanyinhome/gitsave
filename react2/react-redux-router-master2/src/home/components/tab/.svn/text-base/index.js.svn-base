import React,{Component} from 'react';//引入react
import * as tool from 'publicJs';
class Tab extends Component{
	//设置默认props
	static defaultProps={
		info: {}
	}
	//构建函数
	constructor(props){
		super(props);
    this.state={
        currentIndex :status||0
    };
	}
  check_tittle_index(index){
      return index===this.state.currentIndex ? "item selected" : "item";
  }

  check_item_index(index){
      return index===this.state.currentIndex ? "recommend selected" : "recommend";
  }

  render(){
      let _this=this;
			let tabList = this.props.info.tabListClass||'';
			let tabItemWrap = this.props.info.itemWrapClass||'';
			let tabItem =this.props.info.tabItemClass||'';
			let tabIcon = this.props.info.iconClass||'';
			let tabContent = this.props.info.tabContentClass||'';
      return(
          <div>
              {/*动态生成Tab导航*/}
              <ul className={`component-tab ${tabList}`}>
                  { React.Children.map( this.props.children , (element,index) => {
                      return(
                        /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                        <li onClick={ () => { this.setState({currentIndex : index}) } } className={ `${this.check_tittle_index(index)} ${tabItem}`}>
													<div className={tabItemWrap}>
														<span className={tabIcon}></span>
	                          <span className="tabs-title">{ element.props.name }</span>
													</div>
                        </li>
                      );
                  }) }
              </ul>
              {/*Tab内容区域*/}
              <ul className={tabContent}>
                  {React.Children.map(this.props.children,(element,index)=>{
                      return(
                      	<li className={ this.check_item_index(index) }>{ element }</li>
                      );
                  })}
              </ul>
          </div>
          );
  }
}
/**
 * 组件属性校正
 * @type {Object}
 */
Tab.propTypes={
  /**
	 *itemWrapClass:tab下面li的wrap样式
	 * tabItemClass:tab下面li的样式
	 * tabListClass:tab ul的样式
	 * iconClass:tab下面icon的样式
   * tabContentClass:内容区域的样式

   */
	 info: React.PropTypes.object,
}



export default Tab;
