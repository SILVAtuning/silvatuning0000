import React, { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

import _isEmpty from 'lodash/isEmpty';
import _forEach from 'lodash/forEach';
import _map from 'lodash/map';
import _get from 'lodash/get';

function generateTypes(datas) {
  let newObj = {};

  _forEach(datas, (data) => {
    const type = data.type;
    if (!(type in newObj)) {
      newObj[type] = [];
    }
    newObj[type].push({
      primaty: data.name,
      secondary: data.secondary,
      url: data.url
    });
  });

  // console.log({newObj})
  return newObj;
}

function transKeyName(key) {
  switch (key) {
    case 'vocaloid':
      return 'VOCALOID'
    case 'cevio':
      return 'CeVIO'
    case 'synthesizer_v':
      return 'Synthesizer V'
    case 'utau':
      return 'UTAU'
  }

}

function generateVocalList(datas) {
  const vocalListObj = generateTypes(datas);


  return (
    _map(vocalListObj, (items, key) => {

      return (
        <React.Fragment>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">~{transKeyName(key)}~</Typography>
          <Grid container spacing={2}>
            {_map(items, (item) => {
              console.log({item})
              return (
                <Grid item xs={6} sm={3}>
                  <List sx={{ width: '100%' }}>
                    {_get(item, 'url') ? (
                      <ListItemButton component="a" href={item.url} target="_blank">
                        <ListItemText primary={item.primaty} secondary={item.secondary} />
                      </ListItemButton>
                    ) : (
                      <ListItem>
                        <ListItemText primary={item.primaty} secondary={item.secondary} />
                      </ListItem>
                    )}
                  </List>
                </Grid>
              )
            })}
          </Grid>
        </React.Fragment>
      )
    })
  );
}

function UseableSoftweare() {

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
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetsId}/values/vocal?key=${apikey}`)
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

  console.log({ datas })

  return (
    <React.Fragment>
      <Paper elevation={3} sx={{ px: 1, py: 0.5 }}>
        {generateVocalList(datas)}
      </Paper>
    </React.Fragment>
  );
}

export default UseableSoftweare;