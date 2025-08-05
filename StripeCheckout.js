export default function StripeCheckout() {
  const handleCheckout = async (item) => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item }),
      });
      const { url } = await res.json();
      window.location = url;
    } catch (error) {
      alert('建立支付頁面失敗：' + error.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>💳 Stripe 支付範例</h2>
      <button onClick={() => handleCheckout('subscription')}>訂閱（$30）</button><br /><br />
      <button onClick={() => handleCheckout('ticket')}>任務門票（$10）</button><br /><br />
      <button onClick={() => handleCheckout('glue')}>膠水（$5）</button>
    </div>
  );
}