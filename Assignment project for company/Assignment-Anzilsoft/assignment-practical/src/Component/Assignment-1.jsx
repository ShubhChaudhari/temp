import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ArithmeticOperation = () => {
    const [values,setValues] = useState({num1:'',num2:''})
    const [total, setTotal] = useState("Enter number and perform Aritmetic Operation")


    const handleChange = (e) => {
         const { name, value } = e.target;

         setValues({
           ...values,
           [name]: value,
         });
         console.log(values)
	};

    //Addition

    const Addition = ()=>{
        const ans = parseInt(values.num1) + parseInt(values.num2);
        setTotal("Numbers Of Addition is ="+ ans)
    }

    // Subtraction

    const Subtraction = ()=>{
        const ans = parseInt(values.num1) - parseInt(values.num2);
        setTotal("Numbers Of Subtraction is ="+ ans)
    }

    // Multiplication

    const Multiplication = ()=>{
        const ans = parseInt(values.num1) * parseInt(values.num2);
        setTotal("Numbers Of Multiplication is ="+ ans)
    }

    //Division

    const Division = ()=>{
        const ans = parseInt(values.num1) / parseInt(values.num2);
        setTotal("Numbers Of Division is ="+" " + ans)
    }

  return (
    <>

    <h1>Assignment 1 Arithmetic Operation Perform</h1>
    <div className='container'>
    

    <TextField sx={{marginLeft:"10px",marginRight:"20px"}} type="number" label="Number 1 " name="num1" value={values.num1} onChange={handleChange}  variant="outlined" />
        
    <TextField label="Number 2" name="num2" type="number" value={values.num2} onChange={handleChange} variant="outlined" />
    <h1>{total}</h1>
    <Stack spacing={2} direction="row">
    <Button variant="contained" onClick={Addition}>Addition</Button>
    <Button variant="contained" onClick={Subtraction}>Subtraction</Button>
        
    <Button variant="contained" onClick={Multiplication}>Multiplication</Button>
    <Button variant="contained" onClick={Division}>Division</Button>
    </Stack>
    <h3><Link to={"/assignment2"}>Go to Assignment 2</Link></h3>
    <h3><Link to={"/dragdrop"}>Go to dragdrop Demo</Link></h3>
    </div>

</>
  )
}

export default ArithmeticOperation