import app from "./app"
import login from "./endpoints/login"
import profile from "./endpoints/profile"
import signup from "./endpoints/singUp"



app.post("/user/signup", signup)
app.post("/login", login)
app.get("/user/profile", profile)
