import * as API from './'

export default {
  //分页查询
  query: params => {
    return API.POST('/api/merchandiseAPIController/query', params)
  },

  //编辑
  edit: params => {
    return API.POST('/api/merchandiseAPIController/edit', params)
  },
  
}
