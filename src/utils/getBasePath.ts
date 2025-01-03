import { useRouter } from 'next/router';

export default function getBasePath() {
  const router = useRouter();
  const basepath = router.basePath;
  return basepath;
}
