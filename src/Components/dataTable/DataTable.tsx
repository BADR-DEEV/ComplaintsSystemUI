import { DataGrid, GridColDef, GridRowsProp, GridToolbar } from "@mui/x-data-grid"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import "./dataTable.scss"
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

type Props = {
    columns: GridColDef[],
    rows: GridRowsProp,
    slug : string

}
function handleDelete(id: number): void {
    console.log(id)
   
}

const DataTable = (props: Props) => {

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
         

            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <EditOutlinedIcon sx ={{color : "green" , width : '20px' , height : '20px'}} />
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteOutlineOutlinedIcon sx ={{color : "red" , width : '20px' , height : '20px' , cursor : 'pointer'}} />
                    </div>
                </div>
                
            )
        }
    }



    return (
        <div className="dataTable">
            <DataGrid
                className="dataGrid"
                columns={[...props.columns , actionColumn]}
                rows={props.rows} initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10
                        },
                    },
                }}
                slots={{
                    toolbar: GridToolbar

                }}
                slotProps={{
                    toolbar:
                    {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },

                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
            />



        </div>
    )
}

export default DataTable