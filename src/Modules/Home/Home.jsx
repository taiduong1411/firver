import { Box } from "@mui/material";
import Carousel from "./Carousel";
import JobTypeMenu from "./JobTypeMenu";
import Services from "./Services";
import Content from "./Content/Content";

const Home = () => {
  return (
    <Box>
      {/* <JobTypeMenu /> */}
      <Carousel />
      <Services />
      <Content />
    </Box>
  );
};

export default Home;
