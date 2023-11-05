import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DataTable from '../../Components/dataTable/DataTable';
import "./users.scss"

export default function Users() {
  return (
    <div className = "users">
      <h1>Users</h1>
      <button>
        Add New User
      </button>
      <DataTable/>
    </div>
  )
}
