import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Youtube from 'react-youtube';

function generateYoutubeVideoId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length == 11) ? match[7] : false;
}

function generateNicoVideoId(url) {
  const regExp = /^.*(watch\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].match(/^sm/)) ? match[2] : false;
}

function EmbedTable() {

  //　サンプル
  const title = "サンビカ";
  const vocal = "可不";
  const url = "https://www.nicovideo.jp/watch/sm42579889";

  const youtubeVideoId = generateYoutubeVideoId(url);
  const nicovideoId = generateNicoVideoId(url);
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={6} sx={{ p: 1 }}>
              <Typography variant="h6" gutterBottom>{title} / {vocal}</Typography>
              {youtubeVideoId ? (
                <Youtube
                  videoId={youtubeVideoId}
                  className="iframe"
                  containerClassName="youtube"
                />
              ) : nicovideoId ? (
                <div className="nicovideo">
                  <iframe
                    allowfullscreen="allowfullscreen"
                    src={`https://embed.nicovideo.jp/watch/${nicovideoId}?oldScript=1&referer=&from=0&allowProgrammaticFullScreen=1`} />
                </div>
              ) : null}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default EmbedTable;