import Head from "next/head";
import Layout from "../../components/layout";
import useSWR from "swr";

export default function InvestCompany() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/company", fetcher);

  return (
    <Layout>
      <Head>
        <title>Invest company</title>
      </Head>
      <h1>{data ? `Invest in ${data.name}` : "Loading..."}</h1>
      <p>
        A full-service exchange platform for tokenized securities and digital
        assets
      </p>
    </Layout>
  );
}
