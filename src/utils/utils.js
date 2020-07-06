export default{
    //格式化当前时间a
    formateDate(time){
        if(!time)return ;
        let date=new Date(time);
        let year = date.getFullYear(); 
        let month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 :'0'+(date.getMonth() + 1);
        let day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
        let hours = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
        let minutes = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
        let seconds = date.getSeconds()>10 ? date.getSeconds(): '0' + date.getSeconds();
        return year+"-"+month+"-"+day+" "+hours+":"+minutes+':'+seconds;
    },
    //table分页
    pagination(data, callback) {
        return {
            onChange: (current) => {
                callback(current)
            },
            current: data.page,//当前页数
            pageSize: data.page_size,//每一页条数
            total: data.total,//总条数
            showTotal: () => {  //显示多少条
                return `共${data.total}条`
            },
            showQuickJumper: true //是否可以快速跳转到哪页
        }
    },
}