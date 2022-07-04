import { Box, Container, Typography, Link } from "@mui/material";

const Footer:React.FC = () => (
  <footer data-testid = "footer">
    <Box
      sx={{
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Typography textAlign="center" variant="body1">
          <Link
            href="https://www.linkedin.com/in/mykola-nazimkov-6b29b218a/"
            target="_blank"
            rel="noreferrer noopener"
          >
            by Mykola Nazimkov
          </Link>
        </Typography>
      </Container>
    </Box>
  </footer>
);

export default Footer;
