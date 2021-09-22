const moongoose =require("mongoose");
const pizzaSchema =mongoose.Schema({
    name:{type: string,require},
    Base:[],
    customise:[],
    price:[],
    category:{type:string,require},
    image:{type:string,require}
},{
    timestamp:true,
})
const pizzamodel =mongoose.model("pizzas",pizzaSchema)
module.exports =pizzamodel
