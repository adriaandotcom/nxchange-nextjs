import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { withTranslation, Link } from "../initializers/i18n";

function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>hoi</p>
        <p>
          <Link href="/invest/company">
            <a>Visits invest company</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["homepage"],
});

export default withTranslation("homepage")(Home);
