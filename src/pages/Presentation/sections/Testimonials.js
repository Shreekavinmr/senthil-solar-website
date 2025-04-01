/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            100+ customers from various cities
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many companies, houses, and government institutions love Senthil Solar&apos;s products.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Raj Pal"
              date="3 months ago"
              review="8 kw on grid solar power plant subsidy scheme comission by senthil solar team.... Very thank full to his team... I hope next project will meet you sir soon....."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Viji THomas"
              date="3 months ago"
              review="Excellent behavior, very good dealing. Everything perfectly done."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Muruganandhan Sengadon"
              date="2 yearss ago"
              review="He is very experienced in installation of solar roof top. Discusses pros and cons openly and suggests different products and the good one. Not demanding any amount more than the Govt approved rate. Installation was quick."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Mc Gokul"
              date="2  yearss ago"
              review="Very professional and experienced Solar service provider. Very prompt in response and keeps us updated properly. He is a genuine business man."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Ashu Chandramohan"
              date="2 yearss ago"
              review="Good experience
We learn more information about solar
Good explanation...thank you sir and overall companies"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Kathis S"
              date="3 years ago"
              review="Good Knowledge and experience with Good quality products 👌"
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
