import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

export default function PriceCard() {
  return (
    <React.Fragment>

      <Card sx={{ mt: 5 }}>
        <CardHeader
          title="基本料金/納期"
          // subheader={tier.subheader}
          titleTypographyProps={{ align: 'center' }}
          // action={tier.title === 'Pro' ? <StarIcon /> : null}
          subheaderTypographyProps={{
            align: 'center',
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              mb: 2,
            }}
          >
            <Typography component="h2" variant="h3" color="text.primary" align="center">
              ￥6,000~
            </Typography>
          </Box>
          <ul style={{ listStyle: "none" }}>
            <Typography component="li" variant="subtitle1" align="center">
              1ボーカルあたりの料金です。
            </Typography>
            <Typography component="li" variant="subtitle1" align="center">
              2人以上のボーカルを使う際はご相談ください。
            </Typography>
            <Typography component="li" variant="subtitle1" align="center">
              通常納期は1～2週間程となります。
            </Typography>
          </ul>
        </CardContent>
      </Card>

      <Card sx={{ mt: 5 }}>
        <CardHeader
          title="快速料金/納期"
          // subheader={tier.subheader}
          titleTypographyProps={{ align: 'center' }}
          // action={tier.title === 'Pro' ? <StarIcon /> : null}
          subheaderTypographyProps={{
            align: 'center',
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              mb: 2,
            }}
          >
            <Typography component="h2" variant="h3" color="text.primary" align="center">
              基本料金＋￥1,000
            </Typography>
          </Box>
          <ul style={{ listStyle: "none" }}>
            <Typography component="li" variant="subtitle1" align="center">
              4~7日(1週間)以内の納品をご希望の場合はこちらになります。
            </Typography>
            <Typography component="li" variant="subtitle1" align="center">
              基本料金にてお見積もりの上、￥1,000を加算させていただきます。
            </Typography>
          </ul>
        </CardContent>
      </Card>

      <Card sx={{ mt: 5 }}>
        <CardHeader
          title="特急料金/納期"
          // subheader={tier.subheader}
          titleTypographyProps={{ align: 'center' }}
          // action={tier.title === 'Pro' ? <StarIcon /> : null}
          subheaderTypographyProps={{
            align: 'center',
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              mb: 2,
            }}
          >
            <Typography component="h2" variant="h3" color="text.primary" align="center">
              基本料金＋￥3,000
            </Typography>
          </Box>
          <ul style={{ listStyle: "none" }}>
            <Typography component="li" variant="subtitle1" align="center">
              2~3日以内の納品をご希望の場合はこちらになります。
            </Typography>
            <Typography component="li" variant="subtitle1" align="center">
              基本料金にてお見積もりの上、￥3,000を加算させていただきます。
            </Typography>
          </ul>
        </CardContent>
      </Card>

      <Card sx={{ mt: 5 }}>
        <CardHeader
          title="超特急料金/納期"
          // subheader={tier.subheader}
          titleTypographyProps={{ align: 'center' }}
          // action={tier.title === 'Pro' ? <StarIcon /> : null}
          subheaderTypographyProps={{
            align: 'center',
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              mb: 2,
            }}
          >
            <Typography component="h2" variant="h3" color="text.primary" align="center">
              基本料金＋￥15,000
            </Typography>
          </Box>
          <ul style={{ listStyle: "none" }}>
            <Typography component="li" variant="subtitle1" align="center">
              1日(24時間)以内での納品をご希望の方はこちらになります。
            </Typography>
            <Typography component="li" variant="subtitle1" align="center">
              例として、19日の15:00に依頼をいただいた場合、20日の15:00までの納品になります。
            </Typography>
            <Typography component="li" variant="subtitle1" align="center">
              基本料金にてお見積もりの上、￥15,000を加算させていただきます。
            </Typography>
          </ul>
        </CardContent>
      </Card>


    </React.Fragment>
  );
}