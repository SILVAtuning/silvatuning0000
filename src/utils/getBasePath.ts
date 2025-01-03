import _get from 'lodash/get';

export default function getBasePath() {
  return _get(process.env, 'NEXT_PUBLIC_BASE_PATH', '');
}
