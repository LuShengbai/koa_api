
const env = require('./config/config.default')

const app = require('./app')


const port = env.APP_PORT


app.listen(port, () => {
  console.log(`server is running at port ${port}: http://localhost:${port}`)
})