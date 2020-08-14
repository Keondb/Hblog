/**
 * article模块接口列表
 */

import base from '../base'; // 导入接口域名列表
import axios from '../../utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块


const article = {
    // 新闻列表
    articleList(e) {
        return axios.get(`${base.sq}/article/lists?page=` +
            e);
    },
    // 新闻详情,
    articleDetail(params) {
        return axios.post(`${base.sq}/article/shows`, qs.stringify({
            id: params
        }));
    },
    // 其他接口…………
}

export default article;