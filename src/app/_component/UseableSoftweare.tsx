"use client"

import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

import _isEmpty from 'lodash/isEmpty';
import _forEach from 'lodash/forEach';
import _map from 'lodash/map';
import _get from 'lodash/get';

import { getUseableSoftweare } from "@/api/spreadsheet";

// @ts-expect-error ignore
function generateTypes(datas) {
  const newObj = {};

  _forEach(datas, (data) => {
    const type = data.type;
    if (!(type in newObj)) {
      // @ts-expect-error ignore
      newObj[type] = [];
    }
    // @ts-expect-error ignore
    newObj[type].push({
      primaty: data.name,
      secondary: data.secondary,
      url: data.url
    });
  });
  return newObj;
}

// @ts-expect-error ignore
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
    default:
      return 'Other'
  }

}

/**
 * 使用可能音源一覧テーブル
 */
// @ts-expect-error ignore
function generateVocalList(datas) {
  const vocalListObj = generateTypes(datas);

  if (!datas) return null;

  return (
    _map(vocalListObj, (items, key) => {

      return (
        <Box key={`key-useable-${key}`}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">~{transKeyName(key)}~</Typography>
          <Grid container size={12}>
            {_map(items, (item, index) => {
              return (
                <Grid size={{ xs: 6, sm: 4, md: 3 }} key={`useable-item-${index}`}>
                  <List>
                    {_get(item, 'url') ? (
                      // @ts-expect-error ignore
                      <ListItemButton component="a" href={item.url} target="_blank">
                        {/* @ts-expect-error ignore */}
                        <ListItemText primary={item.primaty} secondary={item.secondary} />
                      </ListItemButton>
                    ) : (
                      <ListItem>
                        {/* @ts-expect-error ignore */}
                        <ListItemText primary={item.primaty} secondary={item.secondary} />
                      </ListItem>
                    )}
                  </List>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      )
    })
  );
}

/**
 * 使用可能音源一覧
 */
function UseableSoftweare() {

  // GoogleスプレッドシートからWorksデータ取得
  const [datas, setDatas] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const initFetch = async () => {
      const data = await getUseableSoftweare().finally(() => setLoading(false));
      setDatas(data);
    }
    initFetch();
  }, []);

  if (isLoading) {
    return (
      <CircularProgress size={100} color="secondary" />
    );
  } else if (_isEmpty(datas)) {
    return (
      <Paper elevation={0} sx={{ px: 1, py: 0.5, mb: 5 }}>
        <Typography variant="body1">データがありません。</Typography>
      </Paper>
    );
  }

  return (
    <React.Fragment>
      <Paper elevation={3} sx={{ px: 1, py: 0.5, mb: 5 }}>
        {generateVocalList(datas)}
      </Paper>
    </React.Fragment>
  );
}

export default UseableSoftweare;
