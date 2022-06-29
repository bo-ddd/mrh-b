import axios from 'axios'


const baseURL='/api'
const getPostConfig =  { 
    baseURL, 
    headers: {
        contentType: 'application/json', 
        authorization:sessionStorage.getItem('token')
    } 
}
 
/** 
 * @description 获取验证码
 * **/
 export function getCaptchaApi() {
    return '/api/captcha?' + Math.random()
}

/**
 * @description 登录接口
 * @param payload <object>
 * @param payload.username
 * @param payload.password
 * @param payload.captcha
 **/
 export function loginApi(payload = {}) {
    return axios.post('/user/login', payload, getPostConfig)
}