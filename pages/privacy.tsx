import styles from '../styles/privacy.module.scss';
import Head from '../src/components/head';

import { Box, Typography } from '@mui/material';

export default function Privacy() {
  return (
    <Box>
      <Head />
      <Box className={styles.privacy}>
        <Box className={styles.privacy_logo}>
          <img src="/image/mainlogo.jpg" alt="Culmino" />
        </Box>

        <Box className={styles.privacy_container}>
          <Typography component="h2" className={styles.privacy_heading}>
            プライバシーポリシー
          </Typography>

          <Box>
            <Typography>
              　Ｃｕｌｍｉｎｏ株式会社（以下「当社」という。）は、プライバシーに関す方針（以下「本プライバシーポリシー」とします。）は、以下のとおりです。
              <br />
              　本プライバシーポリシーにおいて、「プライバシー情報」は、個人情報並びに履歴情報及び特性情報から構成されるものとします。
              <br />
              　「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。また、他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。「履歴情報および特性情報」とは、上記に定める「個人情報」以外のものをいい、ご利用いただいた本サービス（ソフトウエアを含みます。以下本章において同じ）、ご覧になったページや広告の履歴、利用者が検索された検索キーワード、ご利用日時、ご利用の方法、ご利用環境、郵便番号や性別、職業、年齢、利用者のＩＰアドレス、クッキー情報、位置情報、端末の個体識別情報などを指します。
              <br />
              　その他の用語の定義については、Ｃｕｌｍｉｎｏ利用規約（以下「本規約」といいます。）に従います。
            </Typography>
          </Box>

          <Box>
            <Typography>第１条（履歴情報および特性情報について）</Typography>
            <Box className={styles.privacy_flex}>
              <Typography>１</Typography>
              <Typography>
                　履歴情報および特性情報の取得
                <br />
                　利用者が会員登録される際に年齢、性別、職業などをお尋ねします。また、当社は、ご利用の内容（利用者が利用された本サービス、購入されたサービス、ご覧になったページや広告の履歴、利用者が検索された検索キーワード、利用者が本サービスと電子機器を接続し、利用者が当該電子機器を操作すること等を通じてやりとりされる情報等を含みます）、ご利用日時、ご利用の方法、ご利用環境（携帯端末を通じてご利用の場合の当該端末の通信状態、ご利用に際しての各種設定情報なども含みます）、利用者のＩＰアドレス、クッキー情報、位置情報、端末の個体識別情報などの情報を、利用者が当社や当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下「提携先」といいます。）のサービスをご利用になる際に取得することがあります。また、当社は、独自の基準で分類した利用者の興味関心分野や推定した利用者の属性に関するデータ（以下「顧客傾向データ」といいます。）の提供を受けます。また、当社は、一定の場合を除いて、利用者が本サイトにて閲覧される内容等を機械的に解析し、当該解析の結果を取得して広告の表示、配信に利用します。
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>２</Typography>
              <Typography>
                　履歴情報および特性情報の利用目的
                <br />
                　当社は履歴情報および特性情報を大きく分けて以下の目的で利用します。
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>①</Typography>
              <Typography>
                　ログインが必要な本サービスで、同じ利用者からのアクセスかどうかを確認する場合
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>②</Typography>
              <Typography>
                　利用者のセキュリティを確保するため、一定の時間が経過した利用者に対してＩＤやパスワードの再入力を促す場合
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>③</Typography>
              <Typography>
                　当社や当社から広告を配信している提携先サービスの利用者数や当社や提携先サービスへの誘導数を調査する場合
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>④</Typography>
              <Typography>
                　当社や提携先が最適なコンテンツ、広告、各種サービスのご案内などを利用者に配信したり提供したりする場合
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>⑤</Typography>
              <Typography>
                　当社や提携先が提供しているサービスや広告の内容を、充実させたり、改善したり、あるいは新しいサービスを検討したりするための分析・抽出等を行う場合
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>⑥</Typography>
              <Typography>
                　利用者が本サービスをご利用になる際の環境の改善に向けた基礎資料とするために、携帯端末の通信状態等の情報を分析した結果を公表する場合
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>⑦</Typography>
              <Typography>
                　提携先に、どのような広告や情報、本サービスなどを掲載または提供していただくことが効果的であるかなどを分析して提供する場合
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>⑧</Typography>
              <Typography>
                　通信事業者に、通信環境の改善のための参考資料として、携帯端末の通信状態等の情報を提供する場合
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>⑨</Typography>
              <Typography>
                　調査会社や研究機関等に、インターネットの利用状況調査の基礎資料として、利用者がご覧になったページの履歴に関する情報を匿名加工分析して提供する場合
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>⑩</Typography>
              <Typography>
                　当社が提供している本サービスの充実や改善、新しいサービスの検討、インターネット環境の改善等を目的として外部の研究機関（大学、研究所を含みますがこれらに限りません）と共同研究を行うために、当該研究機関に提供する場合
              </Typography>
            </Box>
            <Box className={styles.privacy_flex}>
              <Typography>⑪</Typography>
              <Typography>
                　利用者からのお問い合わせに対応するために、利用者の本サービスご利用状況を確認する場合
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第２条（個人情報について）</Typography>
            <Box className={styles.privacy_flex}>
              <Typography>１</Typography>
              <Typography>
                　個人情報の取得
                <br />
                　利用者がＩＤを登録される際にメールアドレス、生年月日などをお尋ねし、年齢確認のために身分証明書をお送りいただくことがあります。また、ご利用いただく方を特定する必要がある場合や当社にお問い合わせをいただいた際に連絡先を確認させていただく必要がある場合に、氏名、生年月日、住所、電話番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、利用者と提携先などとの間でなされた利用者の個人情報を含む取引記録や、決済に関する情報を当該提携先などから取得することがあります。当社が取得した個人情報は、当社の本サービスまたは当社を経由してご利用いただくサービスを提供するために必要なものに限られています。
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>２</Typography>
              <Typography>
                　個人情報の利用
                <br />
                　当社は当社が取得した個人情報を大きく分けて以下の目的で利用します。
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>①</Typography>
              <Typography>
                　利用者にご自分の登録情報の閲覧や修正、ご利用状況の閲覧を行っていただくために、氏名、住所、連絡先、支払方法などの登録情報、利用されたサービスや購入されたサービスおよびそれらの代金などに関する情報を表示する場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>②</Typography>
              <Typography>
                　利用者にお知らせや連絡（当社や提携先の提供するサービスや商品のご案内を含みます）をしたり、賞品や商品を送付したりするため、氏名や住所、メールアドレスなどの連絡先情報を利用する場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>③</Typography>
              <Typography>
                　当社や提携先が提携しているサービスや広告の内容を充実させたり、改善したり、あるいは新しいサービスを検討したりするために利用者の情報を利用する場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>④</Typography>
              <Typography>
                　利用者の本人確認を行うために、生年月日、住所、電話番号、銀行口座番号、クレジットカード番号、運転免許証番号、配達証明付き郵便の到達結果などの情報を利用する場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑤</Typography>
              <Typography>
                　利用者に代金を請求するために、購入されたサービス、商品名や数量、利用されたサービスの種類や期間、回数、請求金額、氏名、住所、銀行口座番号やクレジットカード番号などの支払に関する情報などを利用する場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑥</Typography>
              <Typography>
                　安全かつ安心な取引を実現するために、エスクローサービス又は本人確認サービスを提供するため
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑦</Typography>
              <Typography>
                　信頼性向上のために、電話確認サービス又は利用者ランクサービスを提供するため
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑧</Typography>
              <Typography>
                　利用者が簡便にデータを入力できるようにするために、当社に登録されている情報を入力画面に表示させたり、利用者のご指示に基づいて他のサービスなど（提携先が提供するものも含みます）に転送したりする場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑨</Typography>
              <Typography>
                　代金の支払を延滞したり第三者に損害を発生させたりするなど、本利用規約に違反した方や、不正・不当な目的で本サービスを利用しようとする方のご利用をお断りするために、ご利用態様、氏名や住所など個人を特定するための情報を利用する場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑩</Typography>
              <Typography>
                　利用者からのお問い合わせに対応するために、お問い合わせ内容や代金の請求に関する情報など当社が利用者に対して本サービスを提供するにあたって必要となる情報や、利用者の本サービスご利用状況、連絡先情報などを利用する場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑪</Typography>
              <Typography>
                　利用者が、Ｆａｃｅｂｏｏｋ社が運営するＳＮＳサービスである「Ｆａｃｅｂｏｏｋ」との連携を希望した場合に、「Ｆａｃｅｂｏｏｋ」上の登録情報を本サービスにおいて表示するため
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑫</Typography>
              <Typography>
                　利用者が、Ｆａｃｅｂｏｏｋ社が運営するＳＮＳサービスである「Ｉｎｓｔａｇｒａｍ」との連携を希望した場合に、「Ｉｎｓｔａｇｒａｍ」上の登録情報を本サービスにおいて表示するため
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑬</Typography>
              <Typography>
                　利用者が、Ｇｏｏｇｌｅ社が運営するＳＮＳサービスである「Ｇｏｏｇｌｅ」との連携を希望した場合に、「Ｇｏｏｇｌｅ」上の登録情報を本サービスにおいて表示するため
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑭</Typography>
              <Typography>
                　利用者が、ＹｏｕＴｕｂｅ社が運営するＳＮＳサービスである「ＹｏｕＴｕｂｅ」との連携を希望した場合に、「ＹｏｕＴｕｂｅ」上の登録情報を本サービスにおいて表示するため
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑮</Typography>
              <Typography>
                　利用者が、Ｔｗｉｔｔｅｒ社が運営するＳＮＳサービスである「Ｔｗｉｔｔｅｒ」との連携を希望した場合に、「Ｔｗｉｔｔｅｒ」上の登録情報を本サービスにおいて表示するため
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑯</Typography>
              <Typography>
                　利用者が、ＬＩＮＥ社が運営するＳＮＳサービスである「ＬＩＮＥ」との連携を希望した場合に、「ＬＩＮＥ」上の登録情報を本サービスにおいて表示するため
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>３</Typography>
              <Typography>
                　個人情報の開示への同意
                <br />
                　当社の本サービスのご利用に際しては次の事項をあらかじめご承知いただくものとします。
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>①</Typography>
              <Typography>
                　投稿者、掲載者などを利用者同士が識別できるように、ＩＤやニックネームを、本サービスを閲覧している人に表示すること。また、個人情報を不特定多数に対して開示する必要がある本サービスで利用者の一部情報を表示すること。
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>②</Typography>
              <Typography>
                　利用者が提携先の提供するサービスや商品の申込みをしようとする際に、氏名、住所、連絡先など当社にすでに登録されている情報のうち、申込みに必要な情報を当該提携先に開示すること
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>③</Typography>
              <Typography>
                　利用者が支払を遅滞し、または、破産もしくは民事再生の手続きの申立てを受け、もしくは利用者自らがそれらの申立てを行うなど、利用者の信用不安が発生したと当社が判断した場合に、当該提携先が利用者に対して自ら代金を請求するために必要な情報を、当該提携先からの個別の求めに応じて開示すること
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>④</Typography>
              <Typography>
                　提携先のサービスなど、当社以外の会社が提供するサービスに関するお問い合わせを当社が受けた場合で、お問い合わせに対する回答を提携先から直接行うことが適切であると当社が判断した場合、お問い合わせの内容およびメールアドレスなどの回答先情報を当該提携先に開示すること
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑤</Typography>
              <Typography>
                　代金の支払を遅滞したり第三者に損害を発生させたりするなど、本利用規約に違反した方や、不正・不当な目的で本サービスを利用しようとする方の利用をお断りするために、ＩＤ、ご利用態様、氏名や住所などの個人を特定するための情報を提携先等に開示すること
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑥</Typography>
              <Typography>
                　当社の本サービスの利用に関連して、利用者が法令に違反した疑いがあると認めた官公庁から、利用者と直接連絡を取るために必要な情報の開示の求めがあった場合において、当該求めに応じることが適切であると当社が判断した場合に、連絡先情報を当該官公庁に開示すること
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>⑦</Typography>
              <Typography>
                　当社の本サービスの終了や当社と第三者との事業提携等に伴って第三者が当該本サービスの全部もしくは一部を承継する場合、または当該本サービスの全部もしくは一部について、第三者がすでに提供している本サービスと統合される場合に、本サービスの承継や統合に必要な情報を当該第三者に提供すること
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>４</Typography>
              <Typography>
                　個人情報の第三者への提供
                <br />
                　前項であらかじめ同意いただいている場合以外についても、以下の場合には、当社は個人情報を第三者に提供することがあります。
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>①</Typography>
              <Typography>
                　裁判所から、法令に基づく開示を命じる判決もしくは命令を受けた場合、または、警察などの公的機関から、捜査権限を定める法令に基づき正式な照会を受けた場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>②</Typography>
              <Typography>
                　当社または提携先の本サービスの利用に関連して、利用者が法令や本利用規約、ガイドラインなどに反し、第三者または当社の権利、財産、本サービスなどを保護するために必要と認められる場合であって、本人の同意を得ることが困難な場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>③</Typography>
              <Typography>
                　人の生命、身体および財産などに対する差し迫った危険があり、緊急の必要性がある場合であって、本人の同意を得ることが困難な場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>④</Typography>
              <Typography>
                　その他、個人情報保護法上許容される場合、及び利用者の同意がある場合
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>５</Typography>
              <Typography>
                　個人情報の安全対策
                <br />
                　当社は、個人情報の正確性及び安全性確保の為に、セキュリティに万全の対策を講じます。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>
              第３条（プライバシーポリシーの変更、改定について）
            </Typography>
            <Typography>
              　当社は、利用者に対して事前に通知することなく、本プライバシーポリシーの全部または一部を変更し、改定することがあります。当社は、変更する場合には、変更後の本プライバシーポリシーの施行時期及び内容を当社のウェブサイト上での表示その他の適切な方法により周知し、または利用者に通知します。
            </Typography>
          </Box>

          <Box>
            <Typography>第４条（個人情報の開示）</Typography>
            <Typography>
              　当社は、利用者から、個人情報保護法の定めに基づき個人情報の開示を求められたときは、利用者ご本人からのご請求であることを確認の上で、利用者に対し、遅滞なく開示を行います（当該個人情報が存在しないときにはその旨を通知いたします。）。但し、個人情報保護法その他の法令により、当社が開示の義務を負わない場合は、この限りではありません。なお、個人情報の開示につきましては、手数料（1件あたり1,000円）を頂戴しておりますので、あらかじめ御了承ください。
            </Typography>
          </Box>

          <Box>
            <Typography>第５条（個人情報の訂正及び利用停止等）</Typography>
            <Box className={styles.privacy_flex}>
              <Typography>１</Typography>
              <Typography>
                　当社は、利用者から、(1)個人情報が真実でないという理由によって個人情報保護法の定めに基づきその内容の訂正を求められた場合、及び(2)あらかじめ公表された利用目的の範囲を超えて取扱われているという理由または偽りその他不正の手段により収集されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止を求められた場合には、利用者ご本人からのご請求であることを確認の上で遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正または利用停止を行い、その旨を利用者に通知します。なお、訂正または利用停止を行わない旨の決定をしたときは、利用者に対しその旨を通知いたします。
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>２</Typography>
              <Typography>
                　当社は、利用者から、利用者の個人情報について消去を求められた場合、当社が当該請求に応じる必要があると判断した場合は、利用者ご本人からのご請求であることを確認の上で、個人情報の消去を行い、その旨を利用者に通知します。
              </Typography>
            </Box>

            <Box className={styles.privacy_flex}>
              <Typography>３</Typography>
              <Typography>
                　個人情報保護法その他の法令により、当社が訂正等または利用停止等の義務を負わない場合は、前条の規定は適用されません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第６条（お問い合わせ窓口）</Typography>
            <Typography>
              　ご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、下記の窓口までお願いいたします。
              <br />
              　住所：東京都中央区日本橋小舟町9番3号
              <br />
              　Culmino株式会社（代表取締役 細谷南雲）
              <br />
              　個人情報取扱責任者：細谷南雲
            </Typography>
            <Typography>
              第７条（附則について）
              <br />
              　２０２２年８月２３日　制定・施行
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
