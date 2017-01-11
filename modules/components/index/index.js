import React from 'react'

import $ from '../../lib/jquery.js'
import style from './index.css'

class Home extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			studyTrendsData: "",
			studyActivityData: "..."
		};
	}

	getData() {
		// 研究动态的内容加载
		(() => {
			let promise = new Promise((resolve,reject) => {
				$.ajax({
					type: "get",
					url: "http://rap.taobao.org/mockjsdata/9989/index",
					dataType: "json",
					success: (data) => {
						if(data.status!=0){
							resolve(data);
						} else {
							reject(new Error("验证失败!"));
						}
					},
					error: () => {
						reject(new Error("网络错误!"));
					}
				})
			})
			promise.then((data)=>{
				let studyTrendsCon = data.data,
					str = '';

				studyTrendsCon.map((items)=>{
					str += `<li>
						   		<a href='#'>${items.items}
						   			<b class='date1'>${items.date}</b>
						   		</a>
						   	</li>`;
				})
				$("#studyTrendsItem").html(str);
			}).catch((value)=>{
				alert(value);
			});
		})();

		// 教学活动的内容加载
		(() => {
			let promise = new Promise((resolve,reject) => {
				$.ajax({
					type: "get",
					url: "http://rap.taobao.org/mockjsdata/9989/index",
					dataType: "json",
					success: (data) => {
						if(data.status!=0){
							resolve(data);
						} else {
							reject(new Error("验证失败!"));
						}
					},
					error: () => {
						reject(new Error("网络错误!"));
					}
				})
			})
			promise.then((data)=>{
				let studyActivityCon = data.data,
					aStr = '';

				studyActivityCon.map((items)=>{
					aStr += `<li>
						   		<a href='#'>${items.items}
						   			<b class='date1'>${items.date}</b>
						   		</a>
						   	</li>`;
				})
				$("#studyActivityItem").html(aStr);
			}).catch((value)=>{
				alert(value);
			});
		})()
	}

	componentDidMount() {
		this.getData()
	}

	render(){
		return (
			<div className={style.container}>
				<div className={style.container_wrap}>
					<div className={style.sidebar}>
						<div className={style.section}>
							<div className={style.title}>
								<h2>研究动态</h2>
								<div className={style.more}>
									<a href="#"></a>
								</div>
							</div>
							<div className={style.item}>
								<ul className={style.studyTrendsItem} id="studyTrendsItem">{this.state.studyTrendsData}</ul>
							</div>
						</div>
						<div className={style.section4} className={style.mt14}>
							<div className={style.title}>
								<h2>教学活动</h2>
								<div className={style.more}>
									<a href="#"></a>
								</div>
							</div>
							<div className={style.item}>
								<ul className={style.studyActivityItem} id="studyActivityItem">{this.state.studyActivityData}</ul>
							</div>
						</div>
						
					</div>
					<div className={style.main}>
						<div className={style.main_title}>
							<h2>关于我们</h2>
						</div>
						<div className={style.about_pic}>
							<img src="./img/index-about1.png" alt="关于我们" />
						</div>
						<div className={style.about_us_article}>
							<p>
								数据与决策信息与数据既有联系，又有区别。数据是信息的表现形式和载体，数据是符号，是物理性的，信息是对数据进行加工处理之后所得到的并对决策产生影响的数据，是逻辑性和观念性的；数据是信息的表现心事，信息是数据有意义的表示。数据是信息的表达、载体，信息是数据的内涵，是形与质的关系。数据本身没有意义，数据只有对实体行为产生影响时才成为信息
							</p>
							<p>
								数据与决策信息与数据既有联系，数据和信息是不可分离的，信息依赖数据来表达，数据则生动具体表达出信息。数据是符号，是物理性的，信息是对数据进行加工处理之后所得到的并对决策产生影响的数据，是逻辑性和观念性的；数据是信息的表现心事，信息是数据有意义的表示。数据是信息的表达、载体，信息是数据的内涵，是形与质的关系。数据本身没有意义，数据只有对实体行为产生影响时才成为信息
							</p>
						</div>
						<div className={style.more1}>
							<a href="#"></a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Home