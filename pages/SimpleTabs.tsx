import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import styles from '../styles/Home.module.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

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

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.all}>
      <Paper className={classes.root}>
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
