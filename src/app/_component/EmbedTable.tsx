"use client"
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';

import { getYoutubeEmbet } from "@/api/spreadsheet";

function generateYoutubeVideoId(url: string) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : false;
}

function generateNicoVideoId(url: string) {
  const regExp = /^.*(watch\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].match(/^sm/)) ? match[2] : false;
}

function generateVideoItems(item: any, index: number) {

  if (!item) return;

  const { title, url, vocal } = item;

  const youtubeVideoId = generateYoutubeVideoId(url);
  const nicovideoId = generateNicoVideoId(url);

  return (
    <Grid className="video-item" size={{ xs: 12, sm: 6 }} key={`video-item-${index}`}>
      <Paper elevation={6} sx={{ p: 1 }}>
        <Typography noWrap variant="h6" gutterBottom>{title} / {vocal}</Typography>
        {youtubeVideoId ? (
          <div
            className="youtube"
            style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%' }}
            />
          </div>
        ) : nicovideoId ? (
          <div
            className="nicovideo"
            style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
          >
            <iframe
              allowFullScreen
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

  // GoogleスプレッドシートからWorksデータ取得
  const [datas, setDatas] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const data = await getYoutubeEmbet().finally(() => setLoading(false));
      setDatas(data);
    }
    fetch();
  }, []);


  if (isLoading) {
    return (
      <CircularProgress size={100} color="secondary" />
    );
  } else if (_isEmpty(datas)) {
    return (
      <Typography variant="body1" color="textDisabled">
        現在、登録されているデータはありません。
      </Typography>
    );
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {_map(datas, (data, index) => {
            return (
              generateVideoItems(data, index)
            )
          })}
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default EmbedTable;
