exports.index = (req,res)=>{
    res.send("welcome to API\n");
};

exports.show = (req,res) => {
    res.send(`showing data for id: ${req.params.id}\n`);
};

exports.store =(req,res) =>{
    res.send(`data received: ${req.body.name},${req.body.city}\n`);
};

exports.update =(req,res) =>{
    res.send(`data updated for id:${req.params.id}, Name: ${req.body.name}, City: ${req.body.city}\n`);
};

exports.delete = (req,res) =>{
    res.send(`Data deleted for id: ${req.params.id}\n`);
};