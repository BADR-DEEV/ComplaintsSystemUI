import { GridRowsProp } from '@mui/x-data-grid/models/gridRows';
import DataTable from '../../Components/dataTable/DataTable';
import "./complaints.scss"
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import { Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { Add } from '../../Components/add/Add';
import { useDispatch, useSelector } from 'react-redux';
import { getComplaints } from '../../Features/ComplaintsApi/ComplaintsSlice';
import { RootState } from '../../app/Store';
import { Loader } from '../../Components/loader/Loader';
// import { useDispatch, useDispatch } from 'react-redux';


const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World", status: "true" },
  { id: 2, col1: "MUI X", col2: "is awesome" },
  { id: 3, col1: "Material UI", col2: "is amazing" },
  { id: 4, col1: "MUI", col2: "" },
  { id: 5, col1: "Joy UI", col2: "is awesome" },
  { id: 6, col1: "MUI Base", col2: "is amazing" }
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "col1", headerName: "Column 1", width: 150, type: 'string' },
  { field: "col2", headerName: "Column 2", width: 150, type: 'string' },
  { field: "status", headerName: "Status", width: 100, type: "boolean" },

];



export default function Complaints() {
const complainStat = useSelector((state: RootState) => state.complaints)

 
  const [open, setOpen] = useState(false)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComplaints() as any).then((res: any) => {
      console.log(res.payload.data)
      
    })
    


  }, [])

  return (
    <>
{complainStat.isLoading! ? <Loader/>:
    <div className="complaints">
      <div className='info'>
        <h1>Users</h1>
        <Button onClick={() => setOpen(true)} color="success" variant="contained">
          Add New User
        </Button>
      </div>
      <DataTable slug="complaints" columns={columns} rows={rows} />
      {open && <Add slug="Complaint" columns={columns} setOpen={setOpen} />
      }
    </div>}
    </>
  )
}
