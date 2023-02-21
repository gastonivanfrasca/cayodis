import React from "react";

const Credits = () => {
  return (
    <>
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
                  href="https://www.flaticon.es/iconos-gratis/perfil"
                  title="perfil iconos"
                >
                  Perfil iconos creados por Pixel perfect - Flaticon
                </a>
              </td>
            </tr>

            <tr>
              <td>ChMyKn</td>
              <td>
                <a
                  target="_blank"
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
