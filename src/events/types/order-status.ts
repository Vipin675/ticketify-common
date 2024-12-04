export enum OrderStatus {
  // When a order has been created but the ticket that is trying to order has not been reserved
  Created = "create",

  // 1. The ticket that the order is trying to reserver is already has already been reserved
  // 2. The user cancelled the order
  // 3. The Order expires before payment
  Cancelled = "cancelled",

  // The order is successfully reserved the ticket
  AwaitingPayment = "awaiting:payment",

  // The Order has reserved the ticket and the user has provided the payment successfully
  Complete = "complete",
}
