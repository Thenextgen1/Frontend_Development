import Head from "next/head";
import { FC } from "react";
import { Footer, Header } from "@/components";

interface Props {
  children: JSX.Element;
  title: string;
  description: string;
  keywords: string;
}

const BaseLayout: FC<Props> = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta
          name="application-name"
          content="Homex"
        />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Homex"
        />
        <meta
          name="description"
          content={description}
        />
        <meta
          name="format-detection"
          content="telephone=no"
        />
        <meta
          name="theme-color"
          content="#2A324B"
        />
      </Head>
      <Header />
      {children}

      <Footer />
    </>
  );
};

export default BaseLayout;
