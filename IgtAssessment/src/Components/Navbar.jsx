// Navbar Class Component
class Navbar extends Component {
    render() {
        return (
            <NavbarStyle>
                <Box className="navbarOuter">
                    <Box className="navbarBox1">Navbar Box 1</Box>
                    <Box className="navbarBox2">Navbar Box 2</Box>
                    <Box className="navbarHash">#</Box>
                </Box>
            </NavbarStyle>
        );
    }
}

export { Navbar };

// Styled Navbar
const NavbarStyle = styled(Box)({
    backgroundColor: "#f3f6f9",
    height: "40px",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    "@media(max-width:991px)": {
        marginLeft: "0px",
    },
    "& .navbarBox1": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    "& .navbarBox2": {
        display: "flex",
        justifyContent: "space-around",
    },
    "& .navbarOuter": {
        display: "flex",
        justifyContent: "space-between",
        width: "59rem",
        "@media(max-width:991px)": {
            width: "47rem",
        },
    },
    "& .textFiledSearch": {
        "@media(max-width:772px)": {
            display: "none",
        },
    },
    "& .navbarMenu": {
        backgroundColor: "white",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "1rem",
        textTransform: "capitalize",
    },
    "& .navbarHash": {
        fontSize: "35px",
        display: "none",
        "@media(max-width:991px)": {
            display: "block",
            marginRight: "13px",
        },
    },
    "& .navbarDropDown": {
        textTransform: "capitalize",
        "@media(max-width:991px)": {
            display: "none",
        },
    },
});