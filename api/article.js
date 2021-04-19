import {request} from '@/plugins/request.js'

export const getArticles = params => {
  return request({
    method: 'GET',
    url:'/api/articles',
    params
  })
}

export const getYourFeddArticles = params => {
  return request({
    method: 'GET',
    url:'/api/articles/feed',
    // headers: {
    //   // 添加用户身份，数据格式：Token空格Token数据
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDgxMTYsInVzZXJuYW1lIjoibHB6OTk5IiwiZXhwIjoxNjIzOTA4MTkyfQ.r--sjLC2xcsZwzeAGqMP-rpyblnuU_8KECKBwc5vpEY`
    // },
    params
  })
}
// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

// 获取文章详情
export const getArticle  = slug => {
  return  request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

