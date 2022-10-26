import * as yup from 'yup';
import { ValidationMessages } from '../validation-messages.enum';
import { ValidationRulesEnum } from '../validation-rules.enum';

/**
 * Signin Validations
 */
export const signinValidationSchema = () =>
  yup.object({
    email: yup
      .string()
      .email(`${ValidationMessages.InvalidEmail}`)
      .required(`${ValidationMessages.RequiredField}`)
      .max(
        ValidationRulesEnum.EmailMaxLength,
        `${ValidationMessages.MaxLength}: ${ValidationRulesEnum.EmailMaxLength}`
      ),
    password: yup
      .string()
      .required(`${ValidationMessages.RequiredField}`)
      .min(
        ValidationRulesEnum.PasswordMinLength,
        `${ValidationMessages.MinLength}: ${ValidationRulesEnum.PasswordMinLength}`
      )
      .max(
        ValidationRulesEnum.PasswordMaxLength,
        `${ValidationMessages.MaxLength}: ${ValidationRulesEnum.EmailMaxLength}`
      ),
  });

/**
 * Signup Validations
 */
export const signupValidationSchema = () =>
  yup.object({
    email: yup
      .string()
      .email(`${ValidationMessages.InvalidEmail}`)
      .required(`${ValidationMessages.RequiredField}`)
      .max(
        ValidationRulesEnum.EmailMaxLength,
        `${ValidationMessages.MaxLength}: ${ValidationRulesEnum.EmailMaxLength}`
      ),
    password: yup
      .string()
      .required(`${ValidationMessages.RequiredField}`)
      .min(
        ValidationRulesEnum.PasswordMinLength,
        `${ValidationMessages.MinLength}: ${ValidationRulesEnum.PasswordMinLength}`
      )
      .max(
        ValidationRulesEnum.PasswordMaxLength,
        `${ValidationMessages.MaxLength}: ${ValidationRulesEnum.EmailMaxLength}`
      ),
    acceptTerms: yup.bool().oneOf([true], ValidationMessages.AcceptTerms),
  });

/**
 * Email Validations
 */
export const emailValidationSchema = () =>
  yup.object({
    email: yup
      .string()
      .email(`${ValidationMessages.InvalidEmail}`)
      .required(`${ValidationMessages.RequiredField}`)
      .max(
        ValidationRulesEnum.EmailMaxLength,
        `${ValidationMessages.MaxLength}: ${ValidationRulesEnum.EmailMaxLength}`
      ),
  });

/**
 * Password Validations
 */
export const passwordValidationSchema = () =>
  yup.object({
    password: yup
      .string()
      .required(`${ValidationMessages.RequiredField}`)
      .min(
        ValidationRulesEnum.PasswordMinLength,
        `${ValidationMessages.MinLength}: ${ValidationRulesEnum.PasswordMinLength}`
      )
      .max(
        ValidationRulesEnum.PasswordMaxLength,
        `${ValidationMessages.MaxLength}: ${ValidationRulesEnum.EmailMaxLength}`
      ),
  });

/**
 * Change Password Validations
 */
export const changePasswordValidationSchema = (t: any) =>
  yup.object({
    currentPassword: yup
      .string()
      .required(`${ValidationMessages.RequiredField}`)
      .min(
        ValidationRulesEnum.PasswordMinLength,
        `${ValidationMessages.MinLength}: ${ValidationRulesEnum.PasswordMinLength}`
      )
      .max(
        ValidationRulesEnum.PasswordMaxLength,
        `${ValidationMessages.MaxLength}: ${ValidationRulesEnum.EmailMaxLength}`
      ),
    newPassword: yup
      .string()
      .required(`${ValidationMessages.RequiredField}`)
      .min(
        ValidationRulesEnum.PasswordMinLength,
        `${ValidationMessages.MinLength}: ${ValidationRulesEnum.PasswordMinLength}`
      )
      .max(
        ValidationRulesEnum.PasswordMaxLength,
        `${ValidationMessages.MaxLength}: ${ValidationRulesEnum.EmailMaxLength}`
      ),
    confirmPassword: yup
      .string()
      .required(`${ValidationMessages.RequiredField}`)
      .oneOf(
        [yup.ref('newPassword'), null],
        `${t('validation:matchPassword')}`
      ),
  });
