import { Helmet } from 'react-helmet';

const Head = () => {
    return (
        <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Spotify Imersão</title>
        <link rel="stylesheet" href="./src/styles/reset.css"/>
        <link rel="stylesheet" href="./src/styles/vars.css"/>
        <link rel="stylesheet" href="./src/styles/media-queries.css" />
        <link
          rel="shortcut icon"
          href="src/assets/icons/favicon.png"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/solid.css"
        integrity="sha384-Tv5i09RULyHKMwX0E8wJUqSOaXlyu3SQxORObAI08iUwIalMmN5L6AvlPX2LMoSE" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css"
        integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous" />
      </Helmet>
    );
}

export default Head;