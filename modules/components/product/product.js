import React from 'react'

import $ from '../../lib/jquery.js'
import style from './product.css'

class About extends React.Component{
	render(){
		return (
			<div className={style.main}>
				<div className={style.main_wrap}>
					<div className={style.title}>
						<h2 className={style.title1}>产品与服务</h2>
					</div>
					<div className={style.content}>
						<div className={style.section}>
							<div className={style.product_tit}>
								<h3>产品名称</h3>
							</div>
							<div className={style.product_con}>
								<p>
									产品名称产品名称产品名称产品名称产品名称产品名称
								</p>
								<div className={style.pic_show}></div>
							</div>
						</div>
						<div className={style.section}>
							<div className={style.product_tit}>
								<h3>产品名称</h3>
							</div>
							<div className={style.product_con}>
								<p>
									产品名称产品名称产品名称产品名称产品名称产品名称
								</p>
								<div className={style.pic_show}></div>
							</div>
						</div>
						<div className={style.section}>
							<div className={style.product_tit}>
								<h3>产品名称</h3>
							</div>
							<div className={style.product_con}>
								<p>
									产品名称产品名称产品名称产品名称产品名称产品名称
								</p>
								<div className={style.pic_show}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = About