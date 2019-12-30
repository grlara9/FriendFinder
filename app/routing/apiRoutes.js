
module.exports = function(app){
    app.get("/api/friends", (req, res)=>{
        res.json("hello")
    })

    app.post("/api/friends", (req, res)=> {
        res.json("hello2")
    })
    
}