import { useRouter } from 'next/router';

export default function Slug():any {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback || !slug) {
    return <div className='container min-h-[calc(100vh-10rem)] my-6 items-center'>Carregando...</div>;
  }

  return <div className="container min-h-[calc(100vh-10rem)] my-6">
    <h1 className='uppercase'>{slug}</h1>
    <p>slug: {slug}</p>
  </div>
}