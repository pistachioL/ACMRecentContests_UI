export function isEmail(value){
  if (!value) {
    return '请输入邮箱'
  }
  let pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
  if(!pattern.test(value)){
    return '输入的邮箱格式错误'
  }
  return ''
}