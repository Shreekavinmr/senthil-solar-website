/* eslint-disable no-param-reassign */
/**
=========================================================
* Senthil Solar React - v2.1.0
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

// Senthil Solar React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputDynamic() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput variant="standard" label="Regular" fullWidth />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputDynamic;
