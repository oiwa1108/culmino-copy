import styles from '../styles/commercial.module.scss';
import Head from '../src/components/head';

import { Box, Typography } from '@mui/material';

export default function Commercial() {
  return (
    <Box>
      <Head />
      <Box className={styles.commercial}>
        <Box className={styles.commercial_logo}>
          <img src="/image/mainlogo.png" alt="Culmino" />
        </Box>

        <Box className={styles.commercial_container}>
          <Typography component="h2" className={styles.commercial_heading}>
            特定商取引法の表示
          </Typography>

          <table>
            <tbody>
              <tr>
                <th>販売事業者名称・所在地</th>
                <td>
                  <p>
                    　Culmino株式会社 <br />
                    　東京都中央区日本橋小舟町9番3号
                  </p>
                </td>
              </tr>
              <tr>
                <th>代表者名・運営責任者名</th>
                <td>　細谷　南雲</td>
              </tr>
              <tr>
                <th>お問い合わせ</th>
                <td>
                  <p>　サービスに関するお問い合わせは公式LINEにて承ります。</p>
                </td>
              </tr>
              <tr>
                <th>販売価格</th>
                <td>　購入手続きの際に画面に表示されます。</td>
              </tr>
              <tr>
                <th>利用可能時期</th>
                <td>　購入取引完了後、直ちにご利用いただけます。</td>
              </tr>
              <tr>
                <th>支払い方法</th>
                <td>
                  <p>
                    　クレジットカード
                    {/* <!-- <br>　AppleID -->
                    <!-- <br>　GooglePlay</p> --> */}
                  </p>
                </td>
              </tr>
              <tr>
                <th>キャンセル</th>
                <td>
                  　購入後のお客様のご都合によるキャンセルは、お受けできません。
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
}
