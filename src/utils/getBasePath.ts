import _get from 'lodash/get';
import nextConfig from '../../next.config';

export default function getBasePath() {
  return _get(nextConfig, 'basePath', '');
}
