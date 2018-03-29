import request from '@/utils/request'

export function categoryList() {
  return request({
    url: '/category/list'
  })
}

export function modifyCategoryStatus(data) {
  return request({
    url: '/category/modifyStatus',
    method: 'get',
    params:data
  })
}

export function addCategory(data) {
  return request({
    url: '/category/add',
    method: 'post',
    data
  })
}

export function upCategory(data) {
  return request({
    url: '/category/update',
    method: 'post',
    data
  })
}
