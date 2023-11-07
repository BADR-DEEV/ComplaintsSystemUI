import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const Copyright = (props: any) => {
    return (
        <Typography sx={{ color: "white" }} variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit">
                Badr
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
