function clone(source){
    if(null == source || "object" != typeof source) return null;
    let target = new Object();
    for(let attr in source){
        if(typeof(source[attr] != 'object')){
            target[attr] = source[attr];
        }else{
            target[attr] = clone(source[attr]); //遞迴
        }
        target[attr] = source[attr];
    }
    return target;
}


//可以去改js既有的原生碼新增一些你需要的function
Date.prototype.getTWYear = function(){
    return this.getFullYear() - 1911;
}

Date.prototype.getTWWeek  = function(){
    let w = this.getDay();
    let ws = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
    return ws[w];
}