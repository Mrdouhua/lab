import React from 'react'
import ReactDOM from 'react-dom'

import $ from '../../lib/jquery.js'

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			index: this.props.cur
		};
	}

	changeNav() {
		let oNav = $('.navWrap'),
			oUl = oNav.find('ul'),
			oLi = oUl.find('li'),
			oA = oLi.find('a'),
			index = this.state.index; // 当前目前显示nav部分第几个;

		let setActive = function(index){
			$(oA[index]).addClass('navLinkCur');
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
			<div className='heaWrap'>
				<div className='header'>
				    <a className='logoLink' href='index.html'><img className='logoImg' src='img/logo.png' /></a>
				    <div className='langEle'>
				        <a className='langItem' href='#'>中文</a>| 
				        <a className='langItem' href='#'>English</a>
				    </div>
				    <p className='welCon'>欢迎访问本网站，今日时刻：<span className='nowTime' id="nowTime"></span></p>
				</div>
				<div className='navWrap'>
			        <ul className='nav'>
			            <li className='navItem'><a className='navLink' href='index.html'>首页</a></li>
			            <li className='navItem'><a className='navLink' href='about.html'>关于我们</a></li>
			            <li className='navItem'><a className='navLink' href='member.html'>成员介绍</a></li>
			            <li className='navItem'><a className='navLink' href='studyActivity.html'>教学活动</a></li>
			            <li className='navItem'><a className='navLink' href='studyTrends.html'>研究动态</a></li>
			            <li className='navItem'><a className='navLink' href='masterTraining.html'>研究生培养</a></li>
			            <li className='navItem'><a className='navLink' href='product.html'>产品与服务</a></li>
			            <li className='navItem'><a className='navLink' href='oldMember.html'>往届成员</a></li>
			        </ul>
			    </div>
			</div>
		)
	}
}

module.exports = Header