export default async function handler(req, res) {
  // Edge function for processing payments
  if (req.method === 'POST') {
    const { amount } = req.body;
    
    // In a real app, you would process the payment here
    console.log(`Processing payment of $${amount}`);
    
    // Redirect after successful payment
    res.redirect(307, '/payment-success');
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}