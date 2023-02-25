import React from "react";
import Head from "next/head";

const Credits = () => {
  return (
    <>
      <Head>
        <title>Credits - CaYoDis</title>
        <meta name="description" content="Credits for CheckMyKnowledge app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div className="divider">
        <h1 className="text-lg">Credits</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* table header */}
          <thead>
            <tr>
              <th>Asset</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Navigation bar avatar</td>
              <td>
                <a
                  target="_blank"
                  className="link link-info"
                  rel="noreferrer"
                  href="https://www.flaticon.es/iconos-gratis/perfil"
                  title="perfil iconos"
                >
                  Perfil iconos creados por Pixel perfect - Flaticon
                </a>
              </td>
            </tr>

            <tr>
              <td>Home conversation Lottie</td>
              <td>
                <a
                  target="_blank"
                  className="link link-info"
                  rel="noreferrer"
                  href="https://lottiefiles.com/58723-conversation-icons"
                  title="Home conversation Lottie"
                >
                  Lottie file url
                </a>
              </td>
            </tr>

            <tr>
              <td>CaYoDis</td>
              <td>
                <a
                  target="_blank"
                  className="link link-info"
                  rel="noreferrer"
                  href="https://github.com/gastonivanfrasca"
                  title="gastonivanfrasca"
                >
                  gastonivanfrasca
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Credits;
