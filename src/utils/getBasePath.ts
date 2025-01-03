import _get from 'lodash/get';

export default function getBasePath() {
  console.log("base path: ", _get(process.env, 'NEXT_PUBLIC_REACT_APP_BASE_PATH', ''))
  return _get(process.env, 'NEXT_PUBLIC_REACT_APP_BASE_PATH', '');
}
