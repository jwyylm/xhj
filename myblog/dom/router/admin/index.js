/**
 * 后台首页
 */
const express = require('express')
const user = require('../../middleware/user')
const pv = require('../../middleware/pv')
const category = require('../../middleware/category')
const article = require('../../middleware/article')

const indexApp = express()

/**
 * 加载首页
 */
indexApp.get('/',[ pv.getTotal, category.getCount, article.getCount], (req, res) => {
    let { user, pvTotal, articleCount, categoryCount } = req
    res.render('admin/index' , { user: user, pvTotal: pvTotal, articleCount: articleCount, categoryCount: categoryCount })
})





module.exports = indexApp