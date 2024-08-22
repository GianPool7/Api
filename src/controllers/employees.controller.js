import { pool } from "../db.js";


export const getEmployees= async(req,res)=>{

    try {
        //throw new Error('DB Error')
        const[rows]=await pool.query('SELECT * FROM employee');
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message:"a veces"
        })
    }

};

//funcion asyncrono

export const getEmployeesId= async(req,res)=>{

    try {
        // const[rows]=await pool.query('SELECT * FROM employee');
        // res.json(rows)

        // para imprimir el codigo del id que requerimos de la base de datos
        const[rows]=await pool.query('SELECT * FROM employee WHERE id = ?',[req.params.id])


        if (rows.length<=0) return res.status(404).json({
        message:'no encontrado'  
        })

        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
            message:"a veces"
        })
    }




    //console.log(rows);
    //res.send("obteniendo empleado")
};

//export const createEmployees=(req,res)=>res.send('creando empleados');
//

export const createEmployees= async (req,res)=>{

    try {

        //console.log(req.body);
        const {name,salary}=req.body
        const[rows]=await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)',[name,salary])
        res.send({
            id:rows.insertId,
            name,
            salary,
        })

    } catch (error) {
        return res.status(500).json({
        message:"a veces"
        })
    }


}

export const editEmployees=async(req,res)=>{

    try {

        const {id} =req.params
        const{name,salary}=req.body
    
        //console.log(id,name,salary);
    
        const [result]=await pool.query('UPDATE employee SET name=IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=?',[name,salary,id])
    
        if (result.affectedRows ===0) return res.status(404).json ({
            message:"empleado no encotrado"
        })
    
        const [rows]=await pool.query('SELECT * FROM employee WHERE id=?',[id])
    
        //console.log(result);
        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
            message:"a veces"
        })
    }


    
};

export const deleteEmployees=async(req,res)=>{

    try {

        //const [rows]=await pool.query('DELETE FROM employee WHERE id=?',[req.params.id])
        const [result]=await pool.query('DELETE FROM employee WHERE id=?',[req.params.id])

        if (result.affectedRows<=0) return res.status(404).json ({
        message:"no esta"  
        })

        res.sendStatus(204)
        
        //console.log(resul);
        //res.send("eliminado");

    } catch (error) {
        return res.status(500).json({
            message:"a veces"
        })
    }


};