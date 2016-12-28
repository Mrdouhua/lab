import React from 'react'
import ReactDOM from 'react-dom'

import $ from '../../lib/jquery.js'

class Member extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			member: [
				{
					"picture": "./img/member1.png",
					"name": "mo",
					"position": "xuesheng",
					"summary": "jianjie"
				},
				{
					"picture": "./img/member1.png",
					"name": "mo",
					"position": "xuesheng",
					"summary": "jianjie"
				},
				{
					"picture": "./img/member1.png",
					"name": "mo",
					"position": "xuesheng",
					"summary": "jianjie"
				}
			]
		}
	}

	getMemberInfor() {
		let that = this;
		$.ajax({
			url: 'http://rap.taobao.org/mockjsdata/10008/product/listProduct.do',
			type: 'post',
			success: function(data){
				if(data.status != 0){
					console.log(data.data);
					that.setState({
						member: data.data
					})
				} else {
					alert("请求失败!");
				}
			},
			error: function(){
				alert("网络错误!");
			}
		})
	}

	componentDidMount() {
		this.getMemberInfor();
	}

	render(){
		return (
			<div className='main'>
				<div className='main-wrap'>
					<div className='title'>
						<h2 className='title1'>成员介绍</h2>
					</div>
					<div className='member'>
						<div className='member-list'>
							<div className='member-pic'>
								<img src={this.state.member[1]["picture"]} alt="成员头像"/>
							</div>
							<div className='member-info'>
								<h3 className='member-name'>{this.state.member[1]["name"]}</h3>
								<div className='job'>
									<div className='job-tit'>
										<span>担任职位：</span>
										<b className='job-name'>{this.state.member[0]["position"]}</b>
									</div>
									<div className="job-info">
										{this.state.member[0]["summary"]},{this.state.member[0]["id"]},{this.state.member[0]["name"]}
									</div>
								</div>
								<div className='email'>
									<span>邮箱:</span>
									<b className='email1'>122344566@163.com</b>
								</div>
								<div className='more'>
									<a href="#"></a>
								</div>
							</div>
						</div>
						<div className='member-list'>
							<div className='member-pic'>
								<img src={this.state.member[0]["picture"]} alt="成员头像"/>
							</div>
							<div className='member-info'>
								<h3 className='member-name'>xxx</h3>
								<div className='job'>
									<div className='job-tit'>
										<span>担任职位：</span>
										<b className='job-name'>xxxxxx</b>
									</div>
									<div className="job-info">
										重庆邮电大学经济管理学院管理科学与工程系教授，担任<b className='job-name'>xxxxxx</b>职位
									</div>
								</div>
								<div className='email'>
									<span>邮箱:</span>
									<b className='email1'>122344566@163.com</b>
								</div>
								<div className='more'>
									<a href="#"></a>
								</div>
							</div>
						</div>
						<div className='member-list'>
							<div className='member-pic'>
								<img src={this.state.member[0]["picture"]} alt="成员头像"/>
							</div>
							<div className='member-info'>
								<h3 className='member-name'>xxx</h3>
								<div className='job'>
									<div className='job-tit'>
										<span>担任职位：</span>
										<b className='job-name'>xxxxxx</b>
									</div>
									<div className="job-info">
										重庆邮电大学经济管理学院管理科学与工程系教授，担任<b className='job-name'>xxxxxx</b>职位
									</div>
								</div>
								<div className='email'>
									<span>邮箱:</span>
									<b className='email1'>122344566@163.com</b>
								</div>
								<div className='more'>
									<a href="#"></a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

module.exports = Member