import PropTypes from "prop-types";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { i18n, withTranslation, Link } from "../initializers/i18n";

function Home({ t }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{t("description")}</p>
        <p>
          <Link href="/invest/company">
            <a>{t('visit-invest-company')</a>
          </Link>
        </p>
        <p>
          {" "}
          <button
            type="button"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "nl" : "en")
            }
          >
            {t("change-locale")}
          </button>
        </p>
      </section>
    </Layout>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Home);
