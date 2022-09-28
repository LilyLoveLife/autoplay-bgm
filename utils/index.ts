export  const is_weixin = () => {  
    var ua: any = navigator.userAgent.toLowerCase()
    if(ua.match(/MicroMessenger/i) == "micromessenger") {  
        return true  
    } else {  
        return false 
    }  
}
export  const is_android = () => {  
    var ua: any = navigator.userAgent.toLowerCase()
    if(ua.match(/android/ig)) {  
        return true  
    } else {  
        return false 
    }  
}