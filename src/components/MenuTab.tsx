import React, { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from '@styles/Home.module.css';
import { TabPanel } from '../components/TabPanel';

type MenuTabProps = {
  labels: string[];
  children: ReactNode[];
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
          variant="fullWidth"
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
