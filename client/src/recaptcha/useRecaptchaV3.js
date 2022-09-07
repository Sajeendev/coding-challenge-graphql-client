export const useRecaptchaV3 = () => {
  const recaptchaSitekey = process.env.REACT_APP_SITE_KEY_V3;

  const recaptchaReady = () =>
    new Promise((resolve) => {
      window.grecaptcha.ready(resolve);
    });

  const loadRecaptchaScript = () => {
    const recaptchaId = "recaptcha-key";
    const url = `https://www.google.com/recaptcha/api.js?render=${recaptchaSitekey}&trustedtypes=true`;

    const existingRecaptchScript = document.getElementById(recaptchaId);

    if (!existingRecaptchScript) {
      const recaptchaScript = document.createElement("script");
      recaptchaScript.type = "text/javascript";
      recaptchaScript.src = url;
      recaptchaScript.id = recaptchaId;

      document.body.appendChild(recaptchaScript);
    }
  };

  const generateRecaptchaToken = () =>
    new Promise((resolve, reject) => {
      recaptchaReady().then(() => {
        window.grecaptcha.execute(recaptchaSitekey).then((token) => {
          if (token) resolve(token);
          else reject();
        });
      });
    });

  return {
    loadRecaptchaScript,
    generateRecaptchaToken,
  };
};
