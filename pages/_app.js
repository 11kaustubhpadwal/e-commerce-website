import "semantic-ui-css/semantic.min.css";
import "../styles/global.css";
import { Grid } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Grid container>
      <Grid.Row>
        <Navbar />
      </Grid.Row>
      <Component {...pageProps} />
      <Footer />
    </Grid>
  );
}

export default MyApp;
