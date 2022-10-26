declare const window: any;

export const useRecaptchaV2 = () => {
  const recaptchaSitekey = '6LeuWNkhAAAAAEVEBYB1tXFCLoTj_3Hg_yXNuyF-';

  const loadRecaptchaScriptV2 = () => {
    const recaptchaId = 'recaptcha-key-v2';
    const url = `https://www.google.com/recaptcha/api.js?render=${recaptchaSitekey}&trustedtypes=true`;

    const existingRecaptchScript = document.getElementById(recaptchaId);

    if (!existingRecaptchScript) {
      const recaptchaScript = document.createElement('script');
      recaptchaScript.type = 'text/javascript';
      recaptchaScript.src = url;
      recaptchaScript.id = recaptchaId;
      recaptchaScript.async = true;
      recaptchaScript.defer = true;

      document.body.appendChild(recaptchaScript);
    }
  };

  window.handleRecaptchaSubmit = async () => {
    const token = await window.grecaptcha.getResponse();
    console.log(token);
  };

  return { loadRecaptchaScriptV2 };
};
