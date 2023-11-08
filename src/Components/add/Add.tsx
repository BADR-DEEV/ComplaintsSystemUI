import React from 'react'
import "./add.scss"
import { GridColDef } from '@mui/x-data-grid'
import { Button } from '@mui/material';


type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Add = (props: Props) => {
    return (
        <div className='add'>
            <div className='model  anime'>
                <span className="close" onClick={() => props.setOpen(false)}>
                    X
                </span>
                <h1>
                    Add New {props.slug}
                </h1>
                <form>
                    {props.columns.filter(item => item.field !== 'id' && item.field !== 'img').map(column => (
                        <div className="item">
                            <label>
                                {column.headerName}
                            </label>
                            <input type={column.type} placeholder={column.headerName} />
                        </div>
                    ))}
                    <Button color='success' variant='contained'>Send</Button>
                </form>
            </div>
        </div>
    )
}
