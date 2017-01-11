import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from '../../NavLink'

import $ from '../../lib/jquery.js'
import style from './common.css'

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			index: this.props.cur
		};
	}

	changeNav() {
		let oNav = $('#navWrap'),
			oUl = oNav.find('ul'),
			oLi = oUl.find('li'),
			oA = oLi.find('a'),
			// index = this.state.index; // 当前目前显示nav部分第几个;
			index = 0;
		
		// let navLinkCur = `"backgroundColor":"#fdfafa", "color":"#0076c9"`;
		let setActive = function(index){
			// $(oA[index]).addClass('navLinkCur');
			$(oA[index]).css({"backgroundColor":"#fdfafa", "color":"#0076c9"});
			// $(oA[index]).attr("class","navLinkCur");
			// $(oA[index]).addClass{style.navLinkCur};
			// $(oA[index]).style = {navLinkCur};
			// $(oA[index]).css(${navLinkCur});
		}
		setActive(index);
		oA.hover(function(){
			$(oA[index]).removeClass('navLinkCur');
			$(this).addClass("navLinkCur");
		},function(){
			$(this).removeClass('navLinkCur');
			setActive(index);
		})
	}
	
	getTime() {
		let nowTime = $('#nowTime'),
		    aTime = '',
		    now = new Date(),
		    year = now.getFullYear(),
		    month = now.getMonth() + 1,
		    day = now.getDate(),
		    weekday = now.getDay(),
		    hour = now.getHours(),
		    minute = now.getMinutes(),
		    timer = null,
		    oWeekday = [
			"星期天",
			"星期一",
			"星期二",
			"星期三",
			"星期四",
			"星期五",
			"星期六",
		];

		var checkTime = (t) => {
			return t < 10 ? '0' + t : t;
		}

		month = checkTime(month);
		day = checkTime(day);
		hour = checkTime(hour);
		minute = checkTime(minute);

		aTime = year+" 年 "+month+" 月 "+day+" 日"+oWeekday[weekday]+" "+hour+":"+minute;
		nowTime.html(aTime);

		timer = setInterval(this.getTime,60000);
		
	}

	componentDidMount() {
		this.getTime();
		this.changeNav();
	}

	render() {
		return (
			<div className={style.heaWrap}>
				<div className={style.header}>
				    <Link className={style.logoLink} to="/"><img className={style.logoImg} src='/img/logo.png' /></Link>
				    <div className={style.langEle}>
				        <Link className={style.langItem} to="/">中文</Link>| 
				        <Link className={style.langItem} to="/">English</Link>
				    </div>
				    <p className={style.welCon}>欢迎访问本网站，今日时刻：<span className={style.nowTime} id="nowTime"></span></p>
				</div>
				<div className={style.navWrap} id="navWrap">
			        <ul className={style.nav}>
			          <li className={style.navItem}><IndexLink className={style.navLink} to="/">首页</IndexLink></li>
			          <li className={style.navItem}><Link className={style.navLink} to="/about">关于我们</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to="/member">成员介绍</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to='studyActivity'>教学活动</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to='studyActivity'>教学活动</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to='studyTrends'>研究动态</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to='masterTraining'>研究生培养</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to='product'>产品与服务</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to='oldMember'>往届成员</Link></li>
			        </ul>
			    </div>
			</div>
		)
	}
}

module.exports = Header