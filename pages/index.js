import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>The future is near, the future is Nxchange</p>
        <p>
          <Link href="/invest/company">
            <a>Visits invest company</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
