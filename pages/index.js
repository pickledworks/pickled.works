import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>pickled works</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:400,700,400italic"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <div className="container">
    
        <h1>pickled works</h1>
    
        <h2>what?</h2>

        <p>we invest time & money into subjectively interesting ideas like:</p>
        <ul>
          <li><a href="https://www.komunite.com.tr" alt="Komünite">Komünite<a/>, a venture builder fund for independent creators</li>
          <li><a href="https://www.saltana.com" alt="Saltana">Saltana</a>, a toolkit for digital creators</li>
          <li>a stealth project focusing on animation and story telling</li>
        </ul>
        <h2>who?</h2>
        <ul>
          <li>
            <a href="https://twitter.com/cigdemcabuker"><strong>cigdem cabuker</strong></a> runs customer success at <a href="https://put.io">put.io</a>
          </li>
          <li>
            <a href="https://twitter.com/batuhan"><strong>f. batuhan icoz</strong></a> leads product at <a href="https://www.saltana.com">Saltana</a>
          </li>
        </ul>
        <hr />
    <p><a href="mailto:hey@pickled.works">hey@pickled.works</a></p>
    
    <p><strong>Pickled Works, LLC.</strong><br />30 N Gould St Ste R<br />Sheridan, WY 82801</p>

    
    
      </div>

      <style jsx>{`
        .epilogue {
          font-size: 10px;
        }
        .lastupdated {
          font-size: 5px;
          margin-top: 5px;
        }
        #firstline {
          font-weight: 500;
          font-size: 28px;
          margin: 20px 0 15px;
          line-height: 32px;
        }
        p.text-content {
          margin-top: 10px;
          font-weight: 300;
          text-decoration: none;
        }
        header {
          margin: 30px;
          position: relative;
        }
        header a,
        .linkbuttons a,
        .linkbutton {
          background-color: #000;
          color: #fff;
          padding: 7px;
        }
        header a:hover,
        .linkbuttons a:hover,
        .linkbutton:hover {
          background-color: #666666;
          color: #fff !important;
        }

        .profile-image {
          width: 100px;
          opacity: 0.7;
        }
        .profile-image:hover {
          opacity: 1;
        }
        hr {
          margin: 25px 0px 25px 0px;
          border: 0;
          height: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        .content-area-list {
          padding: 0;
        }
        .content-area-item {
          list-style: none;
          margin-bottom: 20px;
        }
        .content-area-item .title {
          font-weight: 500;
          font-size: 18px;
          display: block;
        }
        .content-area-item .subtitle {
          font-size: 16px;
          margin: 5px 0;
          display: block;
        }
        .content-area-item .time {
          font-weight: 300;
          font-style: normal;
          margin-top: 5px;
          display: block;
          font-size: 14px;
        }
        @media print {
          .no-print,
          .no-print * {
            display: none !important;
          }
        }
        @media screen and (max-width: 1087px) {
          .container {
            width: 94% !important;
          }
        }
        @media screen and (max-width: 1024px) {
          .container {
            width: 100% !important;
            margin: 0 auto !important;
            box-shadow: none;
            /* margin: 15vh auto 15vh 15vh; */
          }
        }

        .clearfix {
          display: block;
        }
        .clearfix:after {
          visibility: hidden;
          display: block;
          font-size: 0;
          content: " ";
          clear: both;
          height: 0;
        }
        .container {
          padding-right: 5%;
          padding-left:  5%;
          margin-right: 5%;
          padding-top: 5%;
          width: 750px;
        }
        .container:before,
        .container:after {
          display: table;
          content: " ";
        }
        .container:after {
          clear: both;
        }
      `}</style>

      <style jsx global>{`
        body,
        * {
          color: #000;
          background-color: #fff;

          font-family: Merriweather, Georgia, serif;
          -webkit-font-smoothing: antialiased;
          box-sizing: border-box;
        }
        h1,
        h2 {
          font-weight: 600;
        }

        a {
          font-weight: 700;
        }
        a:hover {
          text-decoration: none;
        }
        #footer {
          margin-top: 2%;
        }

        h2 {
          font-weight: bold;
        }
        p {
          line-height: 22px;
          /* margin-bottom: auto; */
          width: 100%;
        }
        li {
          width: 100%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
