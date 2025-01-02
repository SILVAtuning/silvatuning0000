/**
 * 取得したCSVファイルを辞書にする
 */
export const CsvDic = (props: any) => {
  if (!props) return [];
  const [header, ...rows] = props;
  return rows.map((row: any) =>
    row.reduce((acc: any, cell: any, i: number) => ({ ...acc, [header[i]]: cell }), {})
  );
}
