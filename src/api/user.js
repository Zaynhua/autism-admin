import request from '@/utils/request'

export function userSignUp(data) { // 注册
  return request({
    url: `/autismAPI/user/addUser`,
    method: 'post',
    data
  })
}

export function userDelete(data) {
  return request({
    url: `/autismAPI/user/delete?uuid=${data.uuid}`,
    method: 'delete'

  })
}

export function getUserInfo(data) {
  return request({
    url: `/autismAPI/user/getUserList`,
    method: 'get',
    params: data // get请求用parama
  })
}

export function userLogin(data) { // 登录
  return request({
    url: `/autismAPI/user/login?phone=${data.phone}&password=${data.password}`,
    method: 'post',
    data
  })
}

export function userUpdate(data) {
  return request({
    url: `/autismAPI/user/update`,
    method: 'put',
    data
  })
}

export function pswUpdate(data) {
  return request({
    url: `/autismAPI/user/update?updateUserType=${data.updateUserType}&newPsw=${data.newPsd}`,
    method: 'put',
    data
  })
}

const UserAPI = {
  userSignUp,
  userDelete,
  getUserInfo,
  userLogin,
  userUpdate,
  pswUpdate
}

export default UserAPI
