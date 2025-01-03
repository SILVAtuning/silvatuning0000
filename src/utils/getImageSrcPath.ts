import getBasePath from "./getBasePath";
import _first from "lodash/first";

/**
 * 画像のパスをBase Pathをつけて返します。
 * @param src BasePath以降のソースパスを渡します。先頭に/をつけて渡してください。
 * @returns 
 */
const getImageSrcPath = (src: string) => {
  if (_first(src) !== '/') {
    src = '/' + src;
  }
  const base = process.env.NODE_ENV === "development" ? "" : "/silvatuning0000"
  return `${getBasePath()}/${base}${src}`;
}

export default getImageSrcPath;
