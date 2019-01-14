const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen(3000, () => {
  console.log('server is running port 3000!')
})

// mongoose
const mongoose = require('mongoose')
mongoose.connect(
  'mongodb://localhost:27017/express-react-demo',
  { useNewUrlParser: true }
)
const db = mongoose.connection
db.on('error', () => console.error('Mongo Failed to Connect!!!!'))
db.on('connected', () => console.log('Mongo Connected'))

// api
const Post = require('./models/post')
app.get('/', async (req, res) => {
  const post = new Post({
    title: 'test title'
  })
  res.send(await post.save())
})
// 查询所有文章
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    res.status(500).json({ msg: '读取错误', error })
  }
})
// 查询一篇文章
app.get('/post/:id', async (req, res) => {
  try {
    const id = req.params.id
    const post = await Post.findById(id)
    res.json(post)
  } catch (error) {
    res.status(500).json({ msg: '读取错误', error })
  }
})
// 增加文章
app.post('/post', async (req, res) => {
  try {
    const post = new Post(req.body)
    const p = await post.save()
    res.json(p)
  } catch (error) {
    res.status(500).json({ msg: '保存失败', error })
  }
})
// 更新文章
app.put('/post/:id', async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    for (const key in req.body) {
      post[key] = req.body[key]
    }
    const p = await post.save()
    res.json(p)
  } catch (error) {
    res.status(500).json({ msg: '更新失败', error })
  }
})
// 删除文章
app.delete('/post/:id', async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    const p = await post.remove()
    res.json(p)
  } catch (error) {
    res.status(500).json({ msg: '删除失败', error })
  }
})
