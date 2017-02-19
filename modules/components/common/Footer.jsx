import React from 'react'
import { Link, IndexLink } from 'react-router'

import style from './common.css'

class Footer extends React.Component{
	render(){
		return (
			<div className={style.fooWrap}>
				<div className={style.footer}>
				    <div className={style.friLink}>
				        <h3 className={style.friLinkTit}>友情链接</h3>
				        <div className={style.friLinkCon}>
				            <div className={style.friLinkCul}>
				                <Link className={style.firLinkItem} href='#'>重庆邮电大学</Link>
					            <Link className={style.firLinkItem} href='#'>经济管理学院</Link> 
				            </div>
				            <div className={style.friLinkCul}>
				                <Link className={style.firLinkItem} href='#'>经管联盟工作室</Link>
					            <Link className={style.firLinkItem} href='#'>信息系统协会中国分会</Link>
				            </div>
				            <div className={style.friLinkCul}>
				                <Link className={style.firLinkItem} href='#'>信息系统学报</Link>
					            <Link className={style.firLinkItem} href='#'>高校社科网</Link>
				            </div>
				            <div className={style.friLinkCul}>
				                <Link className={style.firLinkItem} href='#'>红岩网校</Link>
					            <Link className={style.firLinkItem} href='#'>工业和信息化部</Link>
				            </div>
				        </div>
				    </div>
				    <div className={style.relLink}>
				        <div className={style.address}>
				            版权所有<span>|</span>重庆邮电大学<span>|</span>重庆市南岸区崇文路2号<span>|</span>400065号<span>|</span>渝ICP:10005091-2
				        </div>
				        <div className={style.extraLink}>
				            <Link className={style.exLinkItem} href='#'>联系我们</Link>
				            <span>|</span>
				            <Link className={style.exLinkItem} href='#'>后台登录</Link>
				        </div>
				        <p className={style.copyright}>CopyRight © 2016 重庆邮电大学经济管理学院</p>
				    </div>
				</div>
			</div>
		)
	}
}

module.exports = Footer