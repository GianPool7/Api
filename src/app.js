import express from "express";
import employeesRouter from './routes/employees.routes.js'
import  indexRoutes  from "./routes/index.routes.js";

const app=express();

// para recibir un json
app.use(express.json())

//console.log("hola mundo");

app.use(indexRoutes);
app.use('/api',employeesRouter);


app.use((req,res,next)=>{
    res.status(404).json({
        message:"ruta no encontrada"
    })
})

export default app;
