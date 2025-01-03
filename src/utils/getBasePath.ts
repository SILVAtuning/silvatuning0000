import _get from 'lodash/get';
import NextConfig from "../../next.config";

export default function getBasePath() {
  return _get(NextConfig, 'basePath');
}
