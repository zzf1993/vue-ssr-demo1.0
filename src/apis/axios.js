//引入axios
import axios from "axios";
import qs from "qs";

//服务器切换
// const IP = '../qvbian';  // 线上
const IP = "http://122.224.201.20:8111/qvbian"; // 测试

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.get["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = IP;

//请求之前处理参数
axios.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//统一处理返回状态
axios.interceptors.response.use(
  config => {
    if (config.data.status === -1) {
      //未登录暂不统一处理
      alert("未登录");
    } else if (config.data.status === 0) {
      // msgError('系统异常！');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//post请求头一
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}
//get请求头一
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}
const indexApi = {
    //获取首页banner
    getHomepageBanner(params) {
        return get('/api/getHomepageBanner',params)
    },
    //test
    getT(params){
      return get('https://cnodejs.org/api/v1/topics',params)
    },
    //获取首页banner
    getCaseListBy(params) {
      return get('/api/getInformationByPage?pageNo=1&pageSize=12',params)
    }
}

export{
  indexApi
}