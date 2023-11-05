import { DataGrid, GridColDef, GridRowsProp, GridToolbar } from "@mui/x-data-grid"

import "./dataTable.scss"


const DataTable = () => {




    const rows: GridRowsProp = [
        { id: 1, col1: "Hello", col2: "World" },
        { id: 2, col1: "MUI X", col2: "is awesome" },
        { id: 3, col1: "Material UI", col2: "is amazing" },
        { id: 4, col1: "MUI", col2: "" },
        { id: 5, col1: "Joy UI", col2: "is awesome" },
        { id: 6, col1: "MUI Base", col2: "is amazing" }
    ];

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "col1", headerName: "Column 1", width: 150 },
        { field: "col2", headerName: "Column 2", width: 150 }
    ];
    return (
        <div className="dataTable">
            <DataGrid
                className="dataGrid"
                columns={columns}
                rows={rows} initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
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