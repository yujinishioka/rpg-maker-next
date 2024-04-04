import { useRouter } from 'next/router';

export default function Slug():any {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback || !slug) {
    return <div className='container min-h-[calc(100vh-10.4rem)] my-6 items-center lg:min-h-[calc(100vh-10rem)]'>Carregando...</div>;
  }

  return <div className="container min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)]">
    <h1 className='uppercase'>{slug}</h1>
    <p>slug: {slug}</p>
  </div>
}