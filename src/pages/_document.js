// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document(props) {
//   const { locale, dir } = props;

//   return (
//     <Html lang={locale} dir={dir}>
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

// Document.getInitialProps = async (ctx) => {
//   const initialProps = await ctx.defaultGetInitialProps(ctx);
//   const locale = ctx.query.locale;

//   const dirResponse = await fetch(
//     `https://app.thisislam.net/api/get_direction/${locale}`
//   );
//   const dir = await dirResponse.json();
//   return {
//     ...initialProps,
//     locale,
//     dir,
//   };
// };

import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  const { locale, dir } = props;

  return (
    <Html lang={locale} dir={dir}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
