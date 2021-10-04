import React from "react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="facebook-domain-verification"
          content="7ud2sktrh4fs97wkhupmq7ejfcrw9d"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="icon"
          type="image/png"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAD0UlEQVRYCe1WO0yTURQ+tSiUR9FKUP5qoqHRolSMA6gDLJC4qpPERIUFHzEOJia6GIODLkaJMCEMGidp4qRBBxYSakw0xVds0URaDI+SFqEgIN7vlPPn74tQhbBwkv73nnPPPe9zbk1XHL0LtIawYQ11s+p1A9YjsGIROHZ5J937eoRctbaM6nrFDBCt9n15sl3WmmXkshSYqVx54PdEKBSY4SOh9b8KUXRingS37cimwMdJ6n89bhQRt0c0tLJcCg3OkNyPY1BIvAHWLKq/62Dm9vNfmNdRVci0ly2D5O0eo4uPy8liNetyfH0Renj6g47L5tKT/VRaaRWUopF5xddPgU9TOg2buBTA63H1QxTgKcBRFRMSGpymxjYnK4fC64c89KZrhM+RfyPUnC1h5fAafOCH0Q2tTiMb7+MMAMXbHeIDV12smGSdnflDW+zZnB54jXS8ePCDecVIRtRH7ribvzMf+JFWpC2RN8kAT9ewboBNKYTSoArbxOgs05FPAakTwRNX4znqJRUkGYAcwVqkAaEEwChRrDlzdTniTTQyp9OwEdzYkqglgMhhRH3iilCIPR1DnMNqZcC0CrXn2TCHEoahsBpa96pimlQGanylp3NIhTamAATgcODUHQdpnUGyl+VxNxi7S3QlRQAHXlU8KDDeq5pAvgHtTZ+Zjhyj8EwmoqfXfIQc+/rCzIMPcNBxDj7wQx7uJ4Ip1f8Bu+rdq88r2PtbNW91AxIvrwSeFAEUHnod4G7+tqrKoSOpBlBAfk9Y5X2EUwGm1YSUKVhKIdIDkImWiGOAaaroUHAC6Ba0odSS0LGaD9sabxoJS+3Rlq66rVRWvZl2HSxQs+E3VZ4o5ioHbXggSmfu71HFZ6J61QHoBoxkIhPVNtm5c2SeiJ6kGpCDVKtFvRWYCXgn0KLo6SmVMgwrvIKVJ4u5ZTEhMYTgOXiAo7VhfCJkZIBcRpjxZtSc07hTHl2IPVx4L9D/SEtOvpkHEmYAAAbKgBI5WJOK0HiYan/8xm6VyzkVhVhPo8/hKYaVZ3F2wFOkAXXSowYR0oBIuDuCSSIzNsB9+xsPGpEkzzZweK45lafKQAEYJYYJzbhm1AWYEQhjqmoWoTACtYJpuBzIKALG1y2dcGnPdOeJ9H8qwkQh/4OvuQHLSoG90E85Wb8Iq2Vj6j8WEoVQdDuFJotpei6fAuFSIadd4wyw5f4kzTrAihxF78lu9ZFl09IK00pePAhNbWNDAmEH+UYPUDBSStHZfP2aqaWqbcFV0kuOondK8YB+sJob32gFeYeOkn+sgv4CIEuv03Rk1AcAAAAASUVORK5CYII="
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;600;700&family=Poppins:wght@100;200;400;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="/js/main.js" />
      </Head>
      <div>{props.children}</div>
    </div>
  );
};
export default Layout;
