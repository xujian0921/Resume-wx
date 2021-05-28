import baseUrl from './config.js'
export default ({url, data, method})=> {
	const token = uni.getStorageSync('TOKEN') || ''
	const header = { 'Authorization': `Bearer ${token}` }
	console.log(header, 'header')
	return new Promise((resolve, reject) => {
		// 加载中
		uni.showLoading({
			title:"加载中"
		})
		
		wx.request({
			url: baseUrl + url,
			data: data,
			method: method || 'GET',
			header,
			success(res) {
				if(res.statusCode >= 300 || res.statusCode < 200) {
					uni.showToast({
						title:`${res.data.message}`,
						icon:"none"
					})
					reject(res)
				} else {
					resolve(res)
				}
			},
			fail(err) {
				reject(err)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}
