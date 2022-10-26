declare const window: any;

export const useRecaptchaV3 = () => {
  const recaptchaSitekey = '6LegpuYgAAAAAO0XlFYOB2uX0gtfUarMdHbgt_3M';

  const recaptchaReady = () =>
    new Promise(resolve => {
      window.grecaptcha.ready(resolve);
    });

  const loadRecaptchaScriptV3 = () => {
    const recaptchaId = 'recaptcha-key-v3';
    const url = `https://www.google.com/recaptcha/api.js?render=${recaptchaSitekey}&trustedtypes=true`;

    const existingRecaptchScript = document.getElementById(recaptchaId);

    if (!existingRecaptchScript) {
      const recaptchaScript = document.createElement('script');
      recaptchaScript.type = 'text/javascript';
      recaptchaScript.src = url;
      recaptchaScript.id = recaptchaId;
      recaptchaScript.async = true;

      document.body.appendChild(recaptchaScript);
    }
  };

  const generateRecaptchaToken = () =>
    new Promise((resolve, reject) => {
      recaptchaReady().then(() => {
        window.grecaptcha.execute(recaptchaSitekey).then((token: string) => {
          if (token) resolve(token);
          else reject();
        });
      });
    });

  return {
    loadRecaptchaScriptV3,
    generateRecaptchaToken,
  };
};
