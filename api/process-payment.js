export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Payment information to display
    const paymentInfo = {
      title: "Payment Instructions",
      description: "To ensure smooth operation of the building, please make your payments on time.",
      methods: [
        {
          type: "Bank Transfer",
          details: "Account Number - 12345678, BSB - 987654"
        }
      ]
    };

    // Respond with the payment information
    return res.status(200).json(paymentInfo);
  } else {
    // Return a 405 Method Not Allowed for unsupported methods
    return res.status(405).json({ message: "Method not allowed" });
  }
}