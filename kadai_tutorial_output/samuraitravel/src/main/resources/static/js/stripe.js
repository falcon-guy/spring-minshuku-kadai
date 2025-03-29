const stripe = Stripe('pk_test_51R0GESCAUyozOywN6F9BTxqdafvjrHZbiMPCggjOT4FDVGJB3HFc7yN3xhATtwfeyi7e2fV4GA9sdeeZFtx9GvUr00Uyu4YBVC');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});