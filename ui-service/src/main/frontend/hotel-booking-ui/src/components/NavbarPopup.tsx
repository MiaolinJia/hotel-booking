import { Box, Paper } from "@mui/material";

export default function NavbarPopup({isPopupVisible}: {isPopupVisible: boolean}) {
    return (
        <Box sx={{ position: "relative", display: "inline-block" }}>
            {isPopupVisible && (
                <Paper
                    sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    mt: 1,
                    p: 2,
                    width: "200px",
                    boxShadow: 3,
                    }}
                >
                    
                    This is a popup window.
                </Paper>    
            )}
        </Box>
);

}