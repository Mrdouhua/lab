import React from 'react'
import ReactDOM from 'react-dom'

import $ from '../../lib/jquery.js'
import style from './member.css'

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
			<div className={style.main}>
				<div className={style.main_wrap}>
					<div className={style.title}>
						<h2 className={style.title1}>成员介绍</h2>
					</div>
					<div className={style.member}>
						<div className={style.member_list}>
							<div className={style.member_pic}>
								<img src={this.state.member[1]["picture"]} alt="成员头像"/>
							</div>
							<div className={style.member_info}>
								<h3 className={style.member_name}>{this.state.member[1]["name"]}</h3>
								<div className={style.job}>
									<div className={style.job_tit}>
										<span>担任职位：</span>
										<b className={style.job_name}>{this.state.member[0]["position"]}</b>
									</div>
									<div className={style.job_info}>
										{this.state.member[0]["summary"]},{this.state.member[0]["id"]},{this.state.member[0]["name"]}
									</div>
								</div>
								<div className={style.email}>
									<span>邮箱:</span>
									<b className={style.email1}>122344566@163.com</b>
								</div>
								<div className={style.more}>
									<a href="#"></a>
								</div>
							</div>
						</div>
						<div className={style.member_list}>
							<div className={style.member_pic}>
								<img src={this.state.member[1]["picture"]} alt="成员头像"/>
							</div>
							<div className={style.member_info}>
								<h3 className={style.member_name}>{this.state.member[1]["name"]}</h3>
								<div className={style.job}>
									<div className={style.job_tit}>
										<span>担任职位：</span>
										<b className={style.job_name}>{this.state.member[0]["position"]}</b>
									</div>
									<div className={style.job_info}>
										{this.state.member[0]["summary"]},{this.state.member[0]["id"]},{this.state.member[0]["name"]}
									</div>
								</div>
								<div className={style.email}>
									<span>邮箱:</span>
									<b className={style.email1}>122344566@163.com</b>
								</div>
								<div className={style.more}>
									<a href="#"></a>
								</div>
							</div>
						</div>
						<div className={style.member_list}>
							<div className={style.member_pic}>
								<img src={this.state.member[1]["picture"]} alt="成员头像"/>
							</div>
							<div className={style.member_info}>
								<h3 className={style.member_name}>{this.state.member[1]["name"]}</h3>
								<div className={style.job}>
									<div className={style.job_tit}>
										<span>担任职位：</span>
										<b className={style.job_name}>{this.state.member[0]["position"]}</b>
									</div>
									<div className={style.job_info}>
										{this.state.member[0]["summary"]},{this.state.member[0]["id"]},{this.state.member[0]["name"]}
									</div>
								</div>
								<div className={style.email}>
									<span>邮箱:</span>
									<b className={style.email1}>122344566@163.com</b>
								</div>
								<div className={style.more}>
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