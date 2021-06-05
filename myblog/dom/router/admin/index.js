/**
 * 后台首页
 */
const express = require('express')
const category = require('../../middleware/category')
const article = require('../../middleware/article')

const indexApp = express()

/**
 * 加载首页
 */
indexApp.get('/',[  category.getCount, article.getCount], (req, res) => {
    let { user, articleCount, categoryCount } = req
    res.render('admin/index' , { user: user, articleCount: articleCount, categoryCount: categoryCount })
})






module.exports = indexApp