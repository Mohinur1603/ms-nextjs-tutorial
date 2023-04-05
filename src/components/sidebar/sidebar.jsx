import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { navItems } from "src/config/constants";
import { data } from "../hero/hero";
import { format } from "date-fns";

const Sidebar = () => {
	return (
		<Box width={{xs:"100%",sm:'50%',md:'30%'}}>
			<div style={{ position: "sticky", top: "100px" }}>
				<Box
					sx={{
						p: 3,
						border: "1px solid grey",
						borderRadius: "8px",
					}}>
					<Typography
						variant='h5'
						mb={2}>
						Latest blog
					</Typography>
					<Box>
						{data.map((i) => (
							<Box key={i.title}>
								<Stack
									direction={"row"}
									alignItems={"center"}
									gap={2}>
									<Image
										src={i.image}
										alt={i.title}
										width={100}
										height={100}
										sx={{ objectFit: "cover" }}
									/>
									<Box>
										<Typography variant='body2'>{i.title}</Typography>
										<Box
											display={"flex"}
											gap={"10px"}
											alignItems={"center"}
											mt={"10px"}>
											<Avatar
												alt={i.author.name}
												src={i.author.image}
											/>
											<Box sx={{ opacity: 0.6 }}>
												<Typography sx={{ fontSize: "14px" }}>
													{i.author.name}
												</Typography>
												<Typography sx={{ fontSize: "12px" }}>
													{format(new Date(), "dd MMM, yyyy")}
												</Typography>
											</Box>
										</Box>
									</Box>
								</Stack>
								<Divider sx={{ my: 3 }} />
							</Box>
						))}
					</Box>
				</Box>
				<Box
					sx={{
						p: 3,
						border: "1px solid grey",
						borderRadius: "8px",
						mt: 2,
					}}>
					<Typography variant='h5'>Category</Typography>
					{navItems.map((nav) => (
						<>
							<Button
								key={nav.label}
								mt={2}
								fullWidth
								sx={{ justifyContent: "flex-start", height: "50px" }}>
								{nav.label}
							</Button>
							<Divider />
						</>
					))}
				</Box>
			</div>
		</Box>
	);
};

export default Sidebar;
