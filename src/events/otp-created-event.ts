import { Subjects } from "./subjects";

export interface OTPCreatedEvent {
  subject: Subjects.OTPCreated;
  data: {
    userId: string;
    type: "email" | "phone";
    otp: number;
  };
}
