import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from '../../NavLink.jsx'
import style from './common.css'

class Header extends React.Component{
	constructor(props) {
		super(props);
	}
	// 切换导航栏显示相应的滑块
	changeNav() {
		let oNav = document.getElementById('nav'),
			oLi = oNav.getElementsByTagName('li'),
			Bar = document.getElementById('slideBar'),
			BarLeft = parseInt(Bar.style.left),
			iSpeed = 0,
			left = 0;

		const move = (obj,iTarget) => {
			clearInterval(obj.timer);
			obj.timer = setInterval( ()=>{
				iSpeed += (iTarget - obj.offsetLeft)/7;
				iSpeed *= 0.5;
				left += iSpeed;

				if(Math.abs(iSpeed) < 5 && Math.abs(left - iTarget) < 5) {
					clearInterval(obj.timer);
					obj.style.left = iTarget + 'px';
				} else {
					obj.style.left = left + 'px';
				}
			},30)
		}
		for(let i=0,len=oLi.length-1; i<len; i++){
			// 滑块移动到鼠标对应的li
			oLi[i].onmouseover = function(){
				move(Bar,this.offsetLeft);
			};
			// 鼠标移出时滑块移回原来的位置
			oLi[i].onmouseout = function(){
				console.log(BarLeft);
				move(Bar,BarLeft);
			};
			// 点击切换组件时改变滑块的位置
			oLi[i].onclick = function(){
				oBarLeft = this.offsetLeft + 'px';
			};
		}
	}
	
	// 显示页面上的时间
	getTime() {
		let oNowTime = document.getElementById('nowTime'),
		    aTime = '',
		    now = new Date(),
		    year = now.getFullYear(),
		    month = now.getMonth() + 1,
		    day = now.getDate(),
		    weekday = now.getDay(),
		    hour = now.getHours(),
		    minute = now.getMinutes(),
		    oWeekday = [
					"星期天",
					"星期一",
					"星期二",
					"星期三",
					"星期四",
					"星期五",
					"星期六"
		];

		let checkTime = (t) => {
			return t < 10 ? '0' + t : t;
		};

		month = checkTime(month);
		day = checkTime(day);
		hour = checkTime(hour);
		minute = checkTime(minute);

		aTime = year+" 年 "+month+" 月 "+day+" 日"+oWeekday[weekday]+" "+hour+":"+minute;
		oNowTime.innerHTML = aTime;
	}

	componentDidMount() {
		this.getTime();
		this.changeNav();
		setInterval(this.getTime,60000);
	}

	render() {
		// 把url参数存在数组里面
		let arr = [
			'/',
			'/about',
			'/member',
			'/studyActivity',
			'/studyTrends',
			'/masterTraining',
			'/product',
			'/oldMember'
		];
		// 申明一个变量临时储存小滑块的left值
		var temp = 0;
		// 取出页面url参数
		let currentUrl = window.location.pathname;
		for (let i = 0, len = arr.length; i < len; i++) {
			// 求出url参数在数组中的位置
			// temp=i*每个li的width
			if (currentUrl == arr[i]) {
				temp = i * 100;
			}
		}
		// 创建小滑块的行内样式
		let slideStyle = {
			position: 'absolute',
			width: 100,
			height: 7,
			backgroundColor: 'orange',
			left: temp,
			bottom: 0,
			listType: 'none',
			borderRadius: 5
		};
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
			        <ul className={style.nav} id="nav">
			          <li className={style.navItem}><IndexLink className={style.navLink} to="/">首&nbsp;&nbsp;&nbsp;页</IndexLink></li>
			          <li className={style.navItem}><Link className={style.navLink} to="/about">关于我们</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to="/member">成员介绍</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to='studyActivity'>教学活动</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to='studyTrends'>研究动态</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to='masterTraining'>研究生培养</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to='product'>产品与服务</Link></li>
			          <li className={style.navItem}><Link className={style.navLink} to='oldMember'>往届成员</Link></li>
			          <li id="slideBar" style={slideStyle}></li>
			        </ul>
			    </div>
			</div>
		)
	}
}

module.exports = Header