import Head from 'next/head';

export default function HeadParts() {
  return (
    <Head>
      <title>Culmino</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Yomogi&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossOrigin="anonymous"
      />
      <script
        src="https://kit.fontawesome.com/3a343982c4.js"
        crossOrigin="anonymous"
      ></script>
    </Head>
  );
}
