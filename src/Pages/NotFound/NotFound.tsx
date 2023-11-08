
import { Button } from "@mui/material"
import "./notFound.scss"
import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }
    return (
        <div className="parent">
            <span className="notFound">
                404 Not Found
            </span>
            <Button onClick={() => handleClick()} className="btn" >
                Go Back
            </Button>
        </div>
    )
}
