import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { format } from "date-fns"

export const data = [
  {
    image: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/85328/s300_skills_gov.uk.jpg',
    title: 'Technical SEO with Hygraph',
    exerpt: 'Get started with your SEO implementation when using a Headless CMS',
    author: {
      name: 'Samar Badriddinov',
      image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
    },
  },
  {
    image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
    title: 'Union Types and Sortable Relations with Hygraph',
    exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
    author: {
      name: 'Samar Badriddinov',
      image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
    },
  },
];

const Hero = () => {
  return (
    <Box height={'70vh'} width={'100%'}>
      <Carousel
        containerClass="carousel-container"
        itemClass="carousel-item"
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {data.map((item) => (
          <Box key={item.title}>
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
              <Box sx={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, bgcolor: "rgba(0,0,0,.6)", }}>
                <Box
                  width={{ xs: '100%', sm: "100%" }}
                  sx={{ position: "relative", color: "#fff", zIndex: 999, top: "50%", transform: "translateY(-50%)", pl: { xs: "30px", sm: "70px" } }}
                >
                  <Typography variant="h3">{item.title}</Typography>
                  <Typography variant="h6">{item.exerpt}</Typography>
                  <Box
                    display={'flex'} gap={'10px'} alignItems={'center'}
                    mt={'20px'}>
                    <Avatar alt={item.author.name} src={item.author.image} />
                    <Box>
                      <Typography>{item.author.name}</Typography>
                      <Typography>{format(new Date(), 'dd MMM, yyyy')} • 10min read</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default Hero;

