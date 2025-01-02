import { CsvDic } from "../utils/csvDic";

export const getUseableSoftweare = async () => {
  const apikey = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_API_KEY;
  const sheetsId = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_DOC_ID;
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetsId}/values/vocal?key=${apikey}`)
    .then(res => res.json())
    .then(datas => {
      return CsvDic(datas.values);
    })
}

export const getYoutubeEmbet = async () => {
  const apikey = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_API_KEY;
  const sheetsId = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_DOC_ID;
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetsId}/values/works?key=${apikey}`)
    .then(res => res.json())
    .then(datas => {
      return CsvDic(datas.values);
    });
}
