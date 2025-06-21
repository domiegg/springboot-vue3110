const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixianzhuangxiuguanli/",
            name: "zaixianzhuangxiuguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixianzhuangxiuguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线装修管理系统"
        } 
    }
}
export default base
