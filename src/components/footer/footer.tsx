import { Box, Button, Typography } from "@mui/material";
import { format } from "date-fns";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
	return (
		<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 3, py: 2, bgcolor: "#151515", color: "white" }}>
			<Typography sx={{ fontSize: { xs: '12px', sm: "14px" } }}> &copy; {format(new Date(), 'yyyy')} mohin | All Rights Reserved </Typography>
			<Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
				<TelegramIcon sx={{ cursor: "pointer" }} />
				<InstagramIcon sx={{ cursor: "pointer" }} />
				<YouTubeIcon sx={{ cursor: "pointer" }} />
			</Box>
		</Box>
	)
};

export default Footer;
