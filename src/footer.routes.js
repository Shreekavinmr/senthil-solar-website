// @mui icons

// Senthil Solar React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Senthil Solar",
    image: logoCT,
    route: "/",
  },
  address: `5/244 MILK DIARY STREET Villarasampatti 4
Road Nasiyanoor Main Road, Post, Thindal, Tamil Nadu 638012.`,

  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Senthil Solar.
    </MKTypography>
  ),
};
