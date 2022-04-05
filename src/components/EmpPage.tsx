import { Box } from '@material-ui/core'
import { width } from '@mui/system';
import React from 'react'
import Employee_Eng from "../images/Emp1.jpg";
declare module "*.jpg"

const EmpPage = () => {
  return (
    <div>
      <img src={Employee_Eng} style={{width:"100%"}}/>
    </div>
  )
}

export default EmpPage;
