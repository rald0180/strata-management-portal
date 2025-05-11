export default async function handler(req, res) {
  // Edge function for listing payment instructions
  const paymentInfo = [
    {
      title: "Payment Instructions",
      details: "To ensure smooth operation of the building, please make your payments on time."
    },
    {
      title: "Bank Transfer",
      details: "Account Number - 12345678, BSB - 987654"
    },
    {
      title: "Online Payment Portal",
      details: "Visit https://strata-estate.vercel.app/"
    }
  ];

  // Respond with the payment information
  res.status(200).json(paymentInfo);
}