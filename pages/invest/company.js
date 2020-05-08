import Head from "next/head";
import Layout from "../../components/layout";
import useSWR from "swr";
import { withTranslation } from "../../initializers/i18n";

import { connect } from "react-redux";

function InvestCompany(props) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/company", fetcher);

  return (
    <Layout>
      <Head>
        <title>Invest company</title>
      </Head>
      <h1>{data ? `Invest in ${data.name}` : "Loading..."}</h1>
      <p>props.foo: {props.foo}</p>
      <p>
        A full-service exchange platform for tokenized securities and digital
        assets
      </p>
    </Layout>
  );
}

// InvestCompany.getInitialProps = async () => ({
//   namespacesRequired: [],
// });

// import React from "react";

// const Page = (props) => (
//   <div>
//     <div>Prop from Redux {props.foo}</div>
//     <div>Prop from getInitialProps {props.custom}</div>
//   </div>
// );

InvestCompany.getInitialProps = ({ store, isServer, pathname, query }) => {
  store.dispatch({ type: "FOO", payload: "foo" }); // The component can read from the store's state when rendered
  return { namespacesRequired: [] }; // You can pass some custom props to the component from here
};

export default connect((state) => state)(
  withTranslation("homepage")(InvestCompany)
);
