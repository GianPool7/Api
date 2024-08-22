import { Router } from "express";
import { getEmployees,createEmployees,editEmployees,deleteEmployees,getEmployeesId } from "../controllers/employees.controller.js";


const router=Router()


router.get('/employees',getEmployees);

router.get('/employees/:id',getEmployeesId);

router.post('/employees', createEmployees);

// patch para parcialmente
router.patch('/employees/:id',editEmployees);

// para actualizar datos
//router.put('/employees/:id',editEmployees);

router.delete('/employees/:id',deleteEmployees);

export default router