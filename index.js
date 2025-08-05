import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>LifeChain - 任務鏈挑戰平台</title>
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>🎯 歡迎來到 LifeChain</h1>
        <p>每天一條任務鏈，完成任務拿積分，挑戰自律換 USDT。</p>
        <Link href="/tasks">開始挑戰</Link>
      </main>
    </div>
  );
}