import React from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from '@styles/Home.module.css';

// 追加
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export function MenuTab(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.all}>
      <Paper
        sx={{
          root: {
            flexGrow: 1,
          },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {/* <Tab label="募集・応募" />
              <Tab label="セミナー" />
              <Tab label="ランキング" /> */}
          {props.labels.map((label) => (
            <Tab label={label}></Tab>
          ))}
        </Tabs>
      </Paper>

      {/* 公式ドキュメントの各タブのコンテンツ
        <TabPanel value={value} index={0}>
            募集一覧
        </TabPanel>
        <TabPanel value={value} index={1}>
            セミナー情報
        </TabPanel>
        <TabPanel value={value} index={2}>
            ランキング情報
        </TabPanel>
        */}
      {props.children.map((child, index) => (
        <TabPanel value={value} index={index}>
          {child}
        </TabPanel>
      ))}
    </div>
  );
}
