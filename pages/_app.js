import "semantic-ui-css/semantic.min.css";
import "../styles/global.css";
import { Grid } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import connectDB from "../database/db";

function MyApp({ Component, pageProps }) {
  connectDB();

  return (
    <Provider store={store}>
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_DOMAIN}
        clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
        redirectUri={"https://print-tex.vercel.app/my-account"}
      >
        <Grid container>
          <Grid.Row only="computer">
            <Navbar />
          </Grid.Row>
          <Grid.Row only="mobile tablet">
            <MobileNavbar />
          </Grid.Row>
          <Component {...pageProps} />
          <Grid.Row>
            <Footer />
          </Grid.Row>
        </Grid>
      </Auth0Provider>
    </Provider>
  );
}

export default MyApp;
