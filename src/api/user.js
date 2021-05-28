import request from './request'

export function login(data) {
	 return request({
		 method: 'POST',
		 url: '/users/login',
		 data: data
	 })
}

export function getPersonUser() {
	return request({
		url: '/users/getPersonUser'
	})
}