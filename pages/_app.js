import "semantic-ui-css/semantic.min.css";
import "../styles/global.css";
import { Grid } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      redirectUri={"http://localhost:3000/my-account"}
    >
      <Grid container>
        <Grid.Row>
          <Navbar />
        </Grid.Row>
        <Component {...pageProps} />
        <Grid.Row>
          <Footer />
        </Grid.Row>
      </Grid>
    </Auth0Provider>
  );
}

export default MyApp;
