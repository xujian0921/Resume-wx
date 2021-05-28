import request from './request'

export function findByAccount (data) {
	 return request({
		 url: '/resume/findByAccount',
		 data: data
	 })
}