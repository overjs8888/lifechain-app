import Stripe from 'stripe';

const stripe = new Stripe('sk_test_your_secret_key'); // 換成您的 Stripe Secret Key

const productMap = {
  subscription: { price: 3000, name: '月訂閱（4 張門票 + 2 膠水）' },
  ticket: { price: 1000, name: '任務門票' },
  glue: { price: 500, name: '斷鏈膠水' },
};

export default async function handler(req, res) {
  const { item } = req.body;
  const product = productMap[item];
  if (!product) return res.status(400).json({ error: 'Invalid item' });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: product.name },
        unit_amount: product.price,
      },
      quantity: 1,
    }],
    success_url: 'https://yourdomain.com/success',
    cancel_url: 'https://yourdomain.com/cancel',
  });

  res.status(200).json({ url: session.url });
}