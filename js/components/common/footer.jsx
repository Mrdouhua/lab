import React from 'react'
import ReactDOM from 'react-dom'

import $ from '../../lib/jquery.js'

class Footer extends React.Component{
	render(){
		return (
			<div className='fooWrap'>
				<div className='footer'>
				    <div className='friLink'>
				        <h3 className='friLinkTit'>友情链接</h3>
				        <div className='friLinkCon'>
				            <div className='friLinkCul'>
				                <a className='firLinkItem' href='#'>重庆邮电大学</a>
					            <a className='firLinkItem' href='#'>经济管理学院</a> 
				            </div>
				            <div className='friLinkCul'>
				                <a className='firLinkItem' href='#'>经管联盟工作室</a>
					            <a className='firLinkItem' href='#'>信息系统协会中国分会</a>
				            </div>
				            <div className='friLinkCul'>
				                <a className='firLinkItem' href='#'>信息系统学报</a>
					            <a className='firLinkItem' href='#'>高校社科网</a>
				            </div>
				            <div className='friLinkCul'>
				                <a className='firLinkItem' href='#'>红岩网校</a>
					            <a className='firLinkItem' href='#'>工业和信息化部</a>
				            </div>
				        </div>
				    </div>
				    <div className='relLink'>
				        <div className='address'>
				            版权所有<span>|</span>重庆邮电大学<span>|</span>重庆市南岸区崇文路2号<span>|</span>400065号<span>|</span>渝ICP:10005091-2
				        </div>
				        <div className='extraLink'>
				            <a className='exLinkItem' href='#'>联系我们</a>
				            <span>|</span>
				            <a className='exLinkItem' href='#'>后台登录</a>
				        </div>
				        <p className='copyright'>CopyRight © 2016 重庆邮电大学经济管理学院</p>
				    </div>
				</div>
			</div>
		)
	}
}

module.exports = Footer