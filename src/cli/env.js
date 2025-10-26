const parseEnv = () => {
  const processEnv = process.env;
  let variablesRSS = '';

  for (const key in processEnv) {
    if (key.startsWith('RSS_')) {
      variablesRSS += `${key}=${processEnv[key]}; `;
    }
  }

  console.log(variablesRSS.trim());
};

parseEnv();
