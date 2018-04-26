let ocookie = {
    methods: {
        getCookie (name) {
            // let cookieArr = document.cookie.split('; ')
            // for (let i = 0; i < cookieArr.length; i++) {
            //     let cookieArrs = cookieArr[i].split('=')
            //     if (cookieArrs[0] === name) {
            //         return cookieArrs[1]
            //     }
            // }
            // return null
            let arr,
                dCookie = document.cookie,
                reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
            if (arr = dCookie.match(reg)) {
                return unescape(arr[2])
            } else {
                return null
            }
        },
        setCookie (name, value, time) {
            let exp = new Date()
            exp.setTime(exp.getTime() + time * 60 * 60 * 1000)
            document.cookie = name + "=" + value + ";expires=" + exp.toUTCString()
        },
        remCookie (name) {
            let exp = new Date()
            exp.setTime(exp.getTime() - 1)
            let rcookie = this.getCookie(name)
            if (rcookie != null) {
                document.cookie = name + "=" + rcookie + ";expires=" + exp.toUTCString()
            } 
        }
    }
}
export default ocookie
