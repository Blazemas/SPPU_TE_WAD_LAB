const dbConnect = require('./mongodb')
const express = require('express');
const app = express();
app.use(express.json())

//READ (Get-API)
app.get('', async (req, res) => {
    let result = await dbConnect();
    result = await result.find().toArray();
    res.send(result);
})

//CREATE (Post-API)
app.post('/', async (req, res) => {
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send("Data Inserted Successfully");
})

// UPDATE (Put-API)
app.put('/:name', async (req, res) => {
    let result = await dbConnect();
    result = await result.updateOne({ name: req.params.name }, { $set: req.body });
    res.send("Data Updated Successfully");
});

//DELETE (Delete-API)
app.delete('/:name', async (req, res) => {
    let result = await dbConnect();
    result = await result.deleteOne({name:req.params.name});
    res.send("Data Deleted Successfully");
})

app.listen(3000);
console.log("Connected to DB");