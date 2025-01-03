import { useRouter } from 'next/navigation';

export default function getBasePath() {
  const router = useRouter();
  const basepath = router.basePath;
  return basepath;
}
