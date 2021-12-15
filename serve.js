const http = require('http');
let user = [{
    id:1,
    name:'dingyinming'
},
    {
        id:2,
        name:'caoqiang'
    },
    {
        id:3,
        name:'qiaoqiao2'
    }
]
  let server  = http.createServer((req,res)=>{
        res.setHeader('Access-Control-Allow-origin','*');
      if(req.url === '/api/users'){

          res.end(JSON.stringify(user))
      } else {
          res.end('Not Found')
      }
  })
server.listen(3000,()=>{
    console.log('后端API接口服务器已经启动')
})
