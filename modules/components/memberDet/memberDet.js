import React from 'react'
import ReactDOM from 'react-dom'

import $ from '../../lib/jquery.js'
import style from './memberDet.css'

class MemberDet extends React.Component{
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
					<div className={style.mem-wrap}>
						<div className={style.information}>
							<div className={style.member-pic}>
								<img src={this.state.member[1]["picture"]} alt="成员"/>
							</div>
							<div className={style.basic_info}>
								<p className={style.member-_name}>{this.state.member[1]["name"]}</p>
								<div className={style.job}>
									<span>担任职位：</span>
									<p className={style.job_name}>{this.state.member[0]["name"]}</p>
								</div>
								<div className={style.email}>
									<span>邮箱：</span>
									<p className={style.email1}>{this.state.member[0]["id"]}</p>
								</div>
							</div>
						</div>
						<div className={style.detail} className={style.mt30}>
							<h3 className={style.info_tit}>个人介绍</h3>
							<p>
								{this.state.member[0]["summary"]},{this.state.member[0]["id"]},{this.state.member[0]["name"]}
							</p>
						</div>
						<div className={style.detail}>
							<h3 className={style.info_tit}>研究项目</h3>
							<p>ppppppppppppppppppppppppp</p>
						</div>
						<div className={style.detail}>
							<h3 className={style.info_tit}>论文及著作</h3>
							<p>ppppppppppppppppppppppppp</p>
						</div>
						<div className={style.detail}>
							<h3 className={style.info_tit}>获得荣誉</h3>
							<p>pppppppppppppppppppppppppppp</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = MemberDet