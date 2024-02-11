const express = require("express");
const connection = require("./db");
const zod = require("zod");

const schema = zod.array(zod.number());




const app = express();
app.use(express.json());

// database connection
connection();

const userSchema = zod.object({
    username: zod.string().min(3).max(20),
    email: zod.string().email(),
    age: zod.number().int().min(13),
    acceptedTerms: zod.boolean(),
  });

let count = 0
function calculateReques(req,res,next){
  count++;
  console.log(count);
  next();
}
// app.use(calculateReques)

app.get('/health-check',function(req,res){
    res.send("Hello")
})
app.post('/health-check',function(req,res){
    console.log('req.body', req.body)
    // const Count = req.body.count;
    const response = userSchema.safeParse(req.body)

    res.send({response});
    // res.send("Hello")
})




app.listen(8080, () => {
  console.log(`Server is running at port ${'8080'}`);
});
