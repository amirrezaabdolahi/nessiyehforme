import Footer from "@/components/main/Footer";
import FinalCTASection from "@/features/main/components/FinalCTASection";
import HeroSection from "@/features/main/components/HeroSection";
import ShowCases from "@/features/main/components/ShowCases";
import { Box } from "@mui/material";

const Mainpage = () => {
    return (
        <div
            className="flex flex-col gap-10"
        >
            <HeroSection />
            <div className="container mx-auto">
                <ShowCases />
            </div>
            <div className="container mx-auto">
                {/* <DescriptionSection /> */}
            </div>
            <div className="container mx-auto">
                <FinalCTASection />
            </div>
            {/* <div className="container mx-auto">
                <SupermarketsMapWrapper />
            </div> */}



            <Footer />
        </div>
    );
};

export default Mainpage;


// <Box component="main">
//   <HeroSection />
//   <ShowCases />
//   <DescriptionSection />
//   <Testimonials />
//   <FinalCTA />
//   <MapSection />
//   <Footer />
// </Box>