import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const TOKEN = process.env.MAILTRAP_TOKEN || "d3f02784197f14694d91be35ecba60ba";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Furkan",
};
