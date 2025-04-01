import PropTypes from "prop-types";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import Container from "@mui/material/Container";

// The DefaultFooter component
function DefaultFooter({ content }) {
  const { brand, address, copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <MKBox>
          <MKTypography variant="h6" align="center">
            {brand.name}
          </MKTypography>
          {address && (
            <MKTypography variant="body2" align="center" color="textSecondary">
              {address}
            </MKTypography>
          )}
          <MKBox sx={{ textAlign: "center", mt: 2 }}>{copyright}</MKBox>
        </MKBox>
      </Container>
    </MKBox>
  );
}

// Prop validation for DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.shape({
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      route: PropTypes.string,
    }).isRequired,
    address: PropTypes.string.isRequired,
    copyright: PropTypes.node.isRequired,
  }).isRequired,
};

export default DefaultFooter;
