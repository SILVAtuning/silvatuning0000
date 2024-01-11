import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';

function generateYoutubeVideoId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : false;
}

function generateNicoVideoId(url) {
  const regExp = /^.*(watch\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].match(/^sm/)) ? match[2] : false;
}

function generateVideoItems(item) {

  if (!item) return;

  const { title, url, vocal } = item;

  const youtubeVideoId = generateYoutubeVideoId(url);
  const nicovideoId = generateNicoVideoId(url);

  return (
    <Grid className="video-item" item xs={12} sm={6}>
      <Paper elevation={6} sx={{ p: 1 }}>
        <Typography noWrap variant="h6" gutterBottom>{title} / {vocal}</Typography>
        {youtubeVideoId ? (
          <div
            class="youtube"
            style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%' }}
            />
          </div>
        ) : nicovideoId ? (
          <div
            className="nicovideo"
            style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
          >
            <iframe
              allowfullscreen="allowfullscreen"
              src={`https://embed.nicovideo.jp/watch/${nicovideoId}?oldScript=1&referer=&from=0&allowProgrammaticFullScreen=1`}
              style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%' }}
            />
          </div>
        ) : null}
      </Paper>
    </Grid>
  );
}

function EmbedTable() {

  const apikey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
  const sheetsId = process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID;

  // GoogleスプレッドシートからWorksデータ取得
  const [datas, setDatas] = useState([])
  const CsvDic = (props) => {
    const [header, ...rows] = props;
    return rows.map((row) =>
      row.reduce((acc, cell, i) => ({ ...acc, [header[i]]: cell }), {})
    );
  }
  useEffect(() => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetsId}/values/works?key=${apikey}`)
      .then(res => res.json())
      .then(datas => {
        setDatas(CsvDic(datas.values))
      })
  }, []);


  if (_isEmpty(datas)) {
    return (
      <CircularProgress size={100} color="secondary" />
    );
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {_map(datas, (data) => {
            return (
              generateVideoItems(data)
            )
          })}
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default EmbedTable;