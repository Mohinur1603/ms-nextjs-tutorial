import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import {
	Box,
	Divider,
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Typography,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { navItems } from "src/config/constants";
import { ClosedCaption } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
	window?: () => Window;
}

const drawerWidth = 240;
const Navbar = ({ window }: Props) => {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};
	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: "center" }}>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}
				px={2}>
				<Box
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<CastForEducationIcon sx={{ color: "coral", mr: 1 }} /><Typography
						variant='h6'
						alignItems={'center'} display={'flex'}
					>
						mohin
					</Typography></Box>

				<IconButton
					color='inherit'
					aria-label='open drawer'
					edge='start'
					sx={{ mr: 2, display: { sm: "none" } }}>
					<CloseIcon />
				</IconButton>
			</Box>

			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem
						key={item.route}
						disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box
			height={"10vh"}
			sx={{ display: "flex" }}>
			<AppBar component='nav'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Box
						component='div'
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
						<Box
							display={"flex"}
							alignItems={"center"}
						>
							<CastForEducationIcon sx={{ color: "coral", mr: 1 }} /><Typography
								variant='h6'
								alignItems={'center'} display={'flex'}
							>
								mohin
							</Typography></Box>
					</Box>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{navItems.map((item) => (
							<Button
								key={item.label}
								sx={{ color: "#fff" }}>
								{item.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};

export default Navbar;
