import React, { useState } from 'react';

import styles from '../../styles/cards.module.scss';

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Link,
} from '@mui/material';

type CardsData = {
  id: string;
  name: string;
  avg_rating: number;
  sex: string;
  icon_img_url?: string;
  hitokoto?: string;
  self_introduction?: string;
  sns_link?: string;
  specialty?: string;
};

type CardsProps = {
  cardsData: CardsData[];
};

export function Cards(props: CardsProps) {
  const { cardsData } = props;
  const [selectedItem, setSelectedItem] = useState<string>('');

  const openDialog = (id: string) => {
    setSelectedItem(id);
  };

  const onCloseDialog = () => {
    setSelectedItem('');
  };

  return (
    <List>
      {cardsData.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem
              alignItems="center"
              key={index}
              button
              className={styles.item}
              onClick={() => openDialog(item.id)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={item.name}
                  src={item.icon_img_url}
                  sx={{ width: 56, height: 56 }}
                />
              </ListItemAvatar>
              <div className={styles.item_content}>
                <p className={styles.item_name}>{item.name}</p>
              </div>
            </ListItem>

            <Dialog
              fullWidth
              open={item.id === selectedItem}
              onClose={onCloseDialog}
              sx={{
                '& .MuiDialog-container': {
                  '& .MuiPaper-root': {
                    width: '90%',
                    maxWidth: '375px',
                    margin: 0,
                  },
                },
              }}
            >
              <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  alt={item.name}
                  src={item.icon_img_url}
                  sx={{ width: 80, height: 80 }}
                />
                <span className={styles.modal_name}>{item.name}</span>
              </DialogTitle>

              <DialogContent sx={{ maxHeight: 260 }}>
                {item.specialty && (
                  <Typography gutterBottom>
                    <span className={styles.modal_text_tag}>得意分野:</span>
                    <span>{item.specialty}</span>
                  </Typography>
                )}
                {item.hitokoto && (
                  <Typography gutterBottom>
                    <span className={styles.modal_text_tag}>ひとこと:</span>
                    <span>{item.hitokoto}</span>
                  </Typography>
                )}
              </DialogContent>

              <DialogActions>
                <Link href="/" className={styles.modal_link}>
                  この講師を見る
                </Link>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        );
      })}
    </List>
  );
}
