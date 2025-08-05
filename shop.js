export default function Shop() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛒 商店</h2>
      <ul>
        <li>任務門票（$10）</li>
        <li>膠水（斷鏈救援） · 每罐 $5</li>
      </ul>
      <button>使用 Stripe 結帳</button>
    </div>
  );
}