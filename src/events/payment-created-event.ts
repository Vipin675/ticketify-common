import { Subjects } from "./subjects";

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    userId: string;
    orderId: string;
    stripeId: string;
  };
}
