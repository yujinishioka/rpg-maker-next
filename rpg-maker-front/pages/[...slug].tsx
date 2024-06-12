import { useRouter } from 'next/router';

export default function Slug():any {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback || !slug) {
    return <div className='container min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)] items-center'>Loading...</div>;
  }

  return <div className="container min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)]">
    <h1 className='mb-6 uppercase'>{slug}</h1>
    <p>slug: {slug}</p>
  </div>
}