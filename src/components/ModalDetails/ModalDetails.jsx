import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GreenBag from '../../asess/green-bag.jpg';
export default function RightDrawer() {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => () => {
        setState(open);
    };

    const list = () => (
        <Box
            sx={{
                width: 450,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                position: "relative",
                p: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    
                }}
            >
                <Typography variant="h6" sx={{
                    display: "flex", color: "#019376", fontWeight: "bold",
                    fontSize: "15px",
                }}>
                    <ShoppingBagIcon sx={{ marginRight: "5px" }} />
                    0 Item
                </Typography>
                <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <hr />
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img src={GreenBag} alt="Empty Bag"
                    style={{
                        width: "150px",
                        height: "160px",
                        marginBottom: "16px",
                    }} />

                <Typography variant="body1" sx={{ color: "black", fontWeight: "bold" }}>
                    No products found
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    borderTop: "1px solid #ddd",
                }}
            >
                <Button
                    variant="contained"
                    sx={{ flexGrow: 1, backgroundColor: "#009688", justifyContent: "space-between", borderRadius: "30px", py: "10px" }}
                >
                    Checkout

                    <Typography
                        sx={{

                            color: "#009688",
                            fontWeight: "bold",
                            fontSize: "12px",
                            background: "white",
                            py: "10px",
                            borderRadius: "20px",
                            px: "18px"
                        }}
                    >
                        $0.00
                    </Typography>
                </Button>
            </Box>
        </Box>
    );

    return (
        <div>
            <Button
                sx={{
                    display: { xs: "none", md: "flex" },
                }}
                onClick={toggleDrawer(true)}
                style={{
                    backgroundColor: "#00A676",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "fixed",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    zIndex: 1000,
                }}
            >
                <ShoppingBagIcon sx={{ marginRight: "5px" }} />
                0 Item
                <Box
                    sx={{
                        marginLeft: "10px",
                        backgroundColor: "#fff",
                        color: "#00A676",
                        padding: "5px 8px",
                        borderRadius: "5px",
                        fontWeight: "bold",
                    }}
                >
                    $0.00
                </Box>
            </Button>
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    );
}

