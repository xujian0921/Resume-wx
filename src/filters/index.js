export function education_filters(data) {
	const educationMap = {
		0: '高中',
		1: '大专',
		2: '本科',
		3: '研究生',
		4: '博士生',
		5: '其他'
	}
	return educationMap[data]
}

export function gender_filters(data) {
	const genderMap ={ 
		0: '女',
		1: '男'
	}
	return genderMap[data]
}