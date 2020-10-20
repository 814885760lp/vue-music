import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
// import axios from 'axios'

// export function getRecommend() {
//   const url =
//     'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
//   const data = Object.assign({}, commonParams)
//   return jsonp(url, data, options)
// }
export function getRecommend() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg'
  const data = Object.assign({}, commonParams, {
    tpl: 'v12',
    page: 'other',
    rnd: 0,
    plarform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    format: 'jsonp'
  })
  return jsonp(url, data, options)
}