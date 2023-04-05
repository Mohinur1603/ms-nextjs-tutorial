import { Avatar, Box, Divider, Typography } from "@mui/material"
import { format } from "date-fns"
import Image from "next/image"
import { data } from "../hero/hero"

const Content = () => {
  return (
    <Box p={3} width={{ xs: "100%", sm: '50%',md:'70%' }}>
      {data.map(item => (
        <Box sx={{ padding: "20px", mt: 2, borderRadius: "12px", boxShadow: "0px 8px 16px rgba(255,255,255,0.1)" }}>
          <Box height={{xs:'30vh',sm:'50vh'}} sx={{ position: "relative", width: "100%"}}>
            <Image src={item.image} alt={item.title} fill style={{ borderRadius: "12px", objectFit: "cover" }} />
          </Box>
          <Typography variant='h5' mt={2}>{item.title} </Typography>
          <Typography variant='body1' color={'grey'}>{item.exerpt}</Typography>
          <Divider sx={{ my: 3 }} />
          <Box
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            mt={"10px"}>
            <Avatar
              alt={item.author.name}
              src={item.author.image}
            />
            <Box sx={{ opacity: 0.6 }}>
              <Typography sx={{ fontSize: "14px" }}>
                {item.author.name}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                {format(new Date(), "dd MMM, yyyy")}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Content