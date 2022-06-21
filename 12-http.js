const http = require('http');


const server = http.createServer((req,res)=> {

    if(req.url === '/'){
    res.end('welcome to homepage')
}
else if(req.url === '/about'){
    res.end('here is our histopry')

}   
else res.end(`
<h1>OOPs!<h1>
<p> We cant find page youre looking for</p>
<a href ="/">back home</a>`)

})

server.listen(8000)