import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending verification`, error);

    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "4e432129-69a4-49cb-9c39-9d33a36ee49e",
      template_variables: {
        company_info_name: "Test Company",

        name,

        company_info_address: "Test_Company_info_address",

        company_info_city: "Test_Company_info_city",

        company_info_zip_code: "Test_Company_info_zip_code",

        company_info_country: "Test_Company_info_country",
      },
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "reset password",
    });
    console.log("Reset Email send successfully");
  } catch (error) {
    console.error("error sending reset email", error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "password reset successful",
      html: PASSWORD_RESET_REQUEST_TEMPLATE,
      category: "reset password success",
    });
    console.log("Reset password success email is send");
  } catch (error) {
    console.error("Error sending reset success email", error);
    throw new Error(`Error sending reset success email: ${error}`);
  }
};
