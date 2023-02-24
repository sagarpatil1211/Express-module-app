let express = require("express"); // add express module

let app = express();  
let fs = require("fs") // add fs module

app.use(express.static("public")) // add middele layer using use to access images,css

let header = fs.readFileSync("pages/header.html")
let footer = fs.readFileSync("pages/footer.html")

function page(name){
    return (header + fs.readFileSync("pages/"+ name) + footer)
}

app.get("/",(req,res)=>{
    res.end(header + fs.readFileSync('pages/index.html') + footer)
})

app.get("/about", (req,res)=>{
    res.end(header + fs.readFileSync('pages/about.html') + footer)
})

app.get("/courses", (req,res)=>{
    res.end(header + fs.readFileSync("pages/courses.html") + footer)
})

app.get("/trainers", (req,res)=>{
    res.end(page("trainers.html"))
})

app.get("/events", (req,res)=>{
    res.end(page("events.html"))
})

app.get("/pricing", (req, res)=>{
    res.end(page("pricing.html"))
})

app.get("/contact", (req,res)=>{
    res.end(page("contact.html"))
})


app.listen(8081, ()=>{
    console.log("Website working on http://localhost:8081");
})