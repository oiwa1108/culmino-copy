import Head from 'next/head';

export default function HeadParts() {
  return (
    <Head>
      <title>Culmino</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Yomogi&display=swap" rel="stylesheet" />
      <script
        src="https://kit.fontawesome.com/3a343982c4.js"
        crossOrigin="anonymous"
      ></script>
    </Head>
  );
}
