const listModel = require('./models/list')
const shopModel = require('./models/shop')
const mongoose = require('mongoose')
const userModel = require('./models/user')
const shoppingcar = require('./models/shoppingCar')
var newList = new listModel({
    listImg: 'https://m15.360buyimg.com/mobilecms/s1062x420_jfs/…e36e/c7f4953bb30e1efe.png!cr_1053x420_4_0!q70.jpg',
    listName: '京东生鲜',
    listIcon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/177902/…58/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg'
})

var newShop = new shopModel({
    sort: '京东生鲜',
    name: '（黑猪腿肉）国产黑土猪肉 去皮 农家生态 生鲜冷鲜肉 烧烤烤肉食材 T7 黑土猪瘦腿肉4斤',
    ProductImg: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/…63/62c535edEd9b03ce8/2842defe458bcf20.jpg!q80.dpg',
    price: '77'
})
var newUser = new userModel({
    sort: '管理员',    //用户分类，管理员还是普通用户
    name: '张翼',
    password: '123456',
})
var shopCar = new shoppingcar()
// shoppingcar.find().then(res=>console.log(res)).catch(err=>console.log(err))
// shoppingcar.deleteOne({ _id: '6169374dbba7052ba4019787' }).then(() => {
//     console.log('success')
//     mongoose.disconnect()
// }).catch(err => console.log(err))
// newUser.save().then((res)=>{
//         console.log(res)
//         mongoose.disconnect()
//     }).catch((err)=>{
//         console.log(err)
//     })
newShop.save().then((res)=>{
    console.log(res)
    mongoose.disconnect()
}).catch((err)=>{
    console.log(err)
})
newList.save().then((res)=>{
    console.log(res)
    mongoose.disconnect()
}).catch((err)=>{
    console.log(err)
})