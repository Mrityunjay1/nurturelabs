import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { data } from '../data';


const TableForm = () => {
    const [datas,setDatas] = React.useState(data);
  return (
<TableContainer className='tablecontainer-box'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='tablerow-container'>
            <TableCell>ASSET</TableCell>
            <TableCell align="right">AMOUNT</TableCell>
            <TableCell align="right">USERACCOUNT</TableCell>
            <TableCell align="right">REFFERALEARNING</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color:'white', display:'flex' }}>
                <div className='first-tablecell-container'>
                    <img src={row.img} alt={row.asset} style={{height:'50px',width:'40px'}}/>
                    <div className='first-tablecell-container1'>
                        <p>{row.asset}</p>
                        <div className='first-tablecell-container'> 
                            <p style={{fontSize:'15px', marginLeft:'5px',color:'#808191'}}>{row.type}</p>
                            <div className='first-tablecell-container3'>
                                <img src={row.chain.img} alt={row.type}/>
                                <p>{row.chain.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
              </TableCell>
              <TableCell align="right"><p style={{color:'white',fontSize:'20px',textAlign:'center'}}>{row.amount}BNB</p>
                <p style={{color:'gray', fontSize:'12px',textTransform:'uppercase',textAlign:'center'}}>{row.state}</p>
              </TableCell>
              <TableCell align="right" ><p style={{color:'white',textAlign:'center'}}>{row.user}</p></TableCell>
              <TableCell align="right"><p style={{color:'white',fontSize:'20px',textAlign:'center'}}>{row.amount}BNB</p>
              <p style={{color:'gray', fontSize:'12px',textAlign:'center'}}>View on BSC Scan</p>
              </TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableForm;