declare const window: any;

export const useRecaptchaEnetrprise = () => {
  const recaptchaSitekey = '6LeFG90hAAAAANL6FL0te56h7jSizkODAK6BG_Oi';

  const recaptchaReady = () =>
    new Promise(resolve => {
      window?.grecaptcha?.enterprise.ready(resolve);
    });

  const loadRecaptchaScript = () => {
    const recaptchaId = 'recaptcha-key-enterprise';
    const url = `https://www.google.com/recaptcha/enterprise.js?render=${recaptchaSitekey}&trustedtypes=true`;

    const existingRecaptchScript = document.getElementById(recaptchaId);

    if (!existingRecaptchScript) {
      const recaptchaScript = document.createElement('script');
      recaptchaScript.type = 'text/javascript';
      recaptchaScript.src = url;
      recaptchaScript.id = recaptchaId;

      document.body.appendChild(recaptchaScript);
    }
  };

  const generateRecaptchaToken = () =>
    new Promise((resolve, reject) => {
      recaptchaReady().then(() => {
        window?.grecaptcha?.enterprise
          .execute(recaptchaSitekey)
          .then((token: string) => {
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
