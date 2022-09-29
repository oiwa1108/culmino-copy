import React, { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from '@styles/Home.module.css';

type TabPanelProps = {
  children: ReactNode;
  value: number;
  index: number;
};

type MenuTabProps = {
  labels: string[];
  children: ReactNode[];
};

const TabPanel = (props: TabPanelProps) => {
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

export function MenuTab(props: MenuTabProps) {
  const { labels, children } = props;
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
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
          {labels.map((label, index) => (
            <Tab label={label} key={index}></Tab>
          ))}
        </Tabs>
      </Paper>

      {children.map((child, index) => (
        <TabPanel value={value} index={index} key={index}>
          {child}
        </TabPanel>
      ))}
    </div>
  );
}
