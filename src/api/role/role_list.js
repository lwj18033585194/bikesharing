import Mock from 'mockjs'

Mock.mock(/\/api\/role_list*?/, 'get', (options) => {
    const nowpage = options.url.substr(options.url.indexOf('?') + 1).split('=')[1]
    return Mock.mock({
        success: true,
        "list|7": [{
            'key|+1': 0,
            "id|+1": 1,
            "role_name": /(管理人员)|(客服专员)|(财务专员)|(市场专员)|(人力专员)|(研发)|(测试)|(系统管理员)/,
            "status|0-1": 1,
            "authorize_user_name": "@cname",
            "authorize_time": 1521270166000,
            "create_time": 1499305790000,
            "menus": ["/home", "/ui/buttons", "/ui/modals", "/ui/loadings", "/ui/notification", "/ui/messages", "/ui/tabs", "/ui/gallery", "/ui/carousel", "/ui"]
        }],
        page: parseInt(nowpage),
        page_size: 20,
        total: 100
    })
})