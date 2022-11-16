import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/terms.module.scss';
import Head from '../src/components/head';

import { Box, Button, Typography } from '@mui/material';

export default function Terms() {
  const router = useRouter();
  const [agree, setAgree] = useState(true);

  const changeBottomPostion = useCallback(() => {
    const bottomPosition =
      document.body.offsetHeight - (window.scrollY + window.innerHeight);

    if (bottomPosition <= 1) {
      setAgree(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeBottomPostion);
    return () => window.removeEventListener('scroll', changeBottomPostion);
  }, []);

  return (
    <Box>
      <Head />
      <Box className={styles.terms}>
        <Box className={styles.terms_logo}>
          <img src="/image/mainlogo.png" alt="Culmino" />
        </Box>

        <Box className={styles.terms_container}>
          <Typography component="h2" className={styles.terms_heading}>
            利用規約
          </Typography>
          <Box>
            <Typography>
              　この利⽤規約（以下「本規約」という。）は、Ｃｕｌｍｉｎｏ株式会社（以下「当社」という。）が提供するＣｕｌｍｉｎｏ（クルミノ）に関する全てのサービス（以下「本サービス」という。）の利⽤に関する条件を定めるものであり、本サービスを利⽤するお客様（以下「利⽤者」という。）と当社との間で定めるものです。利⽤者は、本サービスを利⽤する前に、本規約をよくお読みください。
            </Typography>
          </Box>

          <Box>
            <Typography>第１条（規約の運用）</Typography>
            <Typography>
              　本規約の規定が利用者と当社の契約に適用される関連法令に反するとされる場合、当該規定は、その限りにおいて、当該利用者との契約には適用されないものとします。
              <br />
              但し、この場合でも、本規約の他の規定の効力には影響しないものとします。
            </Typography>
          </Box>

          <Box>
            <Typography>
              第２条（本サービス及び利用規約の変更について）
            </Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　本規約の規定は、民法第５４８条の２第１項に定める定型約款に該当し、本規約の各条項は、お客様の一般の利益に適合する場合又は変更を必要とする相当の事由があると認められる場合には、民法第５４８条の４の定型約款の変更に規定に基づいて変更するものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　前項による本規約の規定の変更は、変更後の規定の内容を、当社のホームページで公表し、公表の際に定める日から適用されるものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　前項に基づき定める本規約の変更後に、利用者が本サービスをご利用される場合には、変更後の本規約の内容を承諾したものとみなします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　利用者は、変更後の本規約に同意しない場合には、直ちに本サービスの利用を停止するものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>５</Typography>
              <Typography>
                　当社は、理由の如何を問わず、また、利用者に事前に通知することなく、本サービスの内容の全部又は一部を変更、追加又は中止することができるものとし、利用者は予めこれを承諾するものとします。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第３条（定義）</Typography>
            <Typography>
              　本規約において、次の用語はそれぞれ以下のように定義します。
            </Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　「利用者」とは、当社が定めた本サービスの登録手続きに従い、本規約に対し同意の上、本サービスの会員登録をしたか否かにかかわらず、本サービスを利用する個人を指します。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　「会員」とは、当社に対して会員登録を申込み、当社の審査を経て、当該申込みについて承諾した者を指し、無料会員と有料会員を含むものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　「コンテンツ」とは、本サービスを通して利用者が入力した、氏名等のプロフィール、メッセージなどの一切の情報、検索およびマッチングサービスなどの機能を指します。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　「児童」とは、１８歳に満たない者を指します。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第４条（規約への同意）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　利用者は、本規約の定めに従って本サービスを使用しなければなりません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　利用者は、本規約に同意をした場合にのみ本サービスを利用できます。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第５条（本サービスの内容）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　本サービスは、日本在住の男女を利用者として想定した、１８歳以上の方がパートナー探しを行うためのサービスです。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　本サービスはパートナーが出来ることを保証するものではありません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>
              第６条（本サービスの利用条件、変更および中止、非保証）
            </Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　当社は、本サービスの提供を受ける利用者を、会員登録の有無、年齢、ご本人確認の有無、その他、当社が必要と判断する条件を満たしたお客様に限定することができるものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　当社は、以下のいずれかに該当する場合には、利用者に事前に通知することなく、本サービスの利用の全部又は一部を停止又は中断することができるものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>①</Typography>
              <Typography>
                　本サービスに係るコンピューター・システムの点検又は保守作業を定期的又は緊急に行う場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>②</Typography>
              <Typography>
                　コンピューター、通信回線等が事故等により停止した場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>③</Typography>
              <Typography>
                　火災、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>④</Typography>
              <Typography>
                　その他、当社が停止又は中断を必要と判断した場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　当社は、当社が必要と判断する場合、あらかじめ利用者に通知することなく、いつでも、本サービスの全部または一部の内容を変更し、また、その提供を中止することができるものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　当社は、本サービスに瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害など事実上及び法律上の瑕疵を含みますが、これらに限りません）がないことを保証しません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第７条（利用資格）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　利用者は、１８歳以上であることが必要となります。但し、年齢及び独身者であるか否かについては、会員登録時に入力された生年月日、交際ステータス、本人の自己申告等を元に可能な範囲で行うものであり、当社は、利用者が、１８歳以上かつ独身者であることについては保証しかねます。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　登録後に、登録情報が事実に反することが判明した場合、会員登録を無効とさせていただくことがあります。この場合、無効としたことにより利用者及び他の利用者に発生した損害について一切の責任を負いません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　当社が必要と判断する場合、あらかじめ利用者に通知することなく、いつでも、本サービスの全部または一部の内容を変更し、また、その提供を中止することができるものとします。当社は、当該変更又は中止により利用者に生じた障害について一切の責任を負いません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　当社は、利用者が本サービスを利用した時点で、本規約の規約と条件の全てに従う能力及び権限を有することを表明・保証したものと看做します。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>５</Typography>
              <Typography>
                　当社は、会員への経歴の問い合わせ、会員の申告の確認、会員の経歴調査は行っておりません。したがって、当社は、利用者の経歴等の真正性については保証しかねます。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>６</Typography>
              <Typography>
                　当社は、利用者について、利用可能な公的記録を使用して、犯罪履歴等の調査を行うことがあるものとしますが、これを行う義務を負うものではありません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>７</Typography>
              <Typography>
                　当社や当社のパートナー企業、会員やその他の個人または団体が、本サービスを通じて表示し、アップロードし、または配布する助言、意見、声明やその他の情報について、当社はその正確さや信頼性を表明し保証するものではありません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>８</Typography>
              <Typography>
                　当社は、利用者について、１８歳未満であることに疑義が生じた場合には、当該利用者に対して何度でも身分証明書の提出を求めることができるものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>9</Typography>
              <Typography>
                　当社は、利用者が下記の事由に相当する場合は、会員登録の拒否を行うことが出来るものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>①</Typography>
              <Typography>
                　本規約に違反した場合、又は違反するおそれがあると判断した場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>②</Typography>
              <Typography>
                　当社に提供された登録情報の全部又は一部につき記載漏れ、誤記又は虚偽記載があった場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>③</Typography>
              <Typography>
                　過去に本サービスの利用の登録を取り消された者である場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>④</Typography>
              <Typography>
                　成年被後見人、被保佐人、又は被補助人のいずれかであり、法定代理人、後見人、保佐人又は補助人の同意等を得ていなかった場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑤</Typography>
              <Typography>
                　反社会的勢力等（暴力団、暴力団体、右翼団体、反社会的勢力、その他これに準ずる者を意味します。以下同じ。）である、又は資金提供その他を通じて反社会的勢力等の維持、運営若しくは経営に協力若しくは関与する等反社会的勢力等との何らかの交流若しくは関与を行っていると当社が判断した場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑥</Typography>
              <Typography>
                　利用者が、自ら又は第三者を利用して次の各項目の一つにでも該当する行為をした場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>・</Typography>
              <Typography>　暴力的な要求行為</Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>・</Typography>
              <Typography>　法的な責任を超えた不当な要求行為</Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>・</Typography>
              <Typography>
                　取引に関して、脅迫的な言動をし、または暴力を用いる行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>・</Typography>
              <Typography>
                　風説を流布し、偽計を用いて当社の信用を毀損し、または、当社の業務を妨害する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>・</Typography>
              <Typography>　上記各号に準ずる行為</Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>・</Typography>
              <Typography>　その他、当社が適当でないと判断した行為</Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑦</Typography>
              <Typography>
                　その他、当社が登録を適当でないと判断した場合
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第８条（利用者の責任）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　利用者は、自己の責任において、ユーザーＩＤ及びパスワードを管理および保管するものとし、これを第三者に利用させ、貸与、譲渡、名義変更、売買等をしてはならないものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　利用者は、当社に対し、ユーザーＩＤおよびパスワードを第三者に盗用されるなどにより、利用者のコンテンツの改変や改竄、個人情報等の無断閲覧などにより発生するあらゆる紛争、損害賠償の請求などについて一切を免責するものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　利用者が他人の著作物を使用し、又は他人の権利を侵害したことなどにより紛争、損害賠償の請求などが起きた場合、利用者は、自らの責任で対応するものとし、当社に損害賠償の請求等をすることはできないものとします。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第９条（禁止事項）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　利用者は、以下の行為を行ってはならないものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>①</Typography>
              <Typography>
                　本規約、法令または公序良俗に違反する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>②</Typography>
              <Typography>　反社会的行為</Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>③</Typography>
              <Typography>
                　前２号に掲げる行為を予告、助長し、もしくはこれに関与する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>④</Typography>
              <Typography>　対償を受け、又は受ける約束で行う性行為</Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑤</Typography>
              <Typography>
                　本サービスを１８歳未満の方が利用し、またはその利用を促す行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑥</Typography>
              <Typography>
                　虚偽の情報（名前、年齢、性別、勤務先、肩書き、学校名、メールアドレス、などの個人情報を含むがこれらに限らない。）を登録し、本サービスを利用する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑦</Typography>
              <Typography>
                　１人で複数のアカウントを使って本サービスを利用する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑧</Typography>
              <Typography>
                　本人の許可の有無にかかわらず、第三者に成りすます行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑨</Typography>
              <Typography>
                　利用者以外の自然人・法人・団体・組織等の第三者（以下「第三者」という。）に自己のユーザーＩＤおよびパスワードを譲渡して、本サービスを利用させる行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑩</Typography>
              <Typography>
                　第三者に自己のユーザーＩＤおよびパスワードを閲覧可能な状態にしておく行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑪</Typography>
              <Typography>
                　自殺、自傷行為、薬物乱用等を美化・誘発・助長する恐れのある表現の投稿、掲載
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑫</Typography>
              <Typography>
                　民族・人種・性別・年齢等による差別につながる表現の投稿、掲載行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑬</Typography>
              <Typography>
                　政治活動、選挙運動、またはこれらに類似する行為および公職選挙法に抵触する行為または宗教活動行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑭</Typography>
              <Typography>
                　他人への嫌がらせを内容に含むコンテンツを掲載する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑮</Typography>
              <Typography>
                　違法な武器の製造、購入や、コンピューターウイルスの製造など、違法行為に関する説明を提供するコンテンツを掲載する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑯</Typography>
              <Typography>
                　第三者の特許権、商標権、著作権等の知的財産権を侵害する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑰</Typography>
              <Typography>
                　第三者の信用もしくは名誉を侵害し、第三者の個人情報を公開し、又は第三者のプライバシー権、肖像権その他一切の権利を侵害する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑱</Typography>
              <Typography>
                　他の利用者のアイコン画像、サブ写真を含む、本サービス上の画像を当社の承諾なくキャプチャーその他の方法より複製、利用又は公開する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑲</Typography>
              <Typography>
                　当社が許可なく、本サービス上の文章、画像、ニックネーム、アイコン画像、サブ写真、プロフィール情報、自己紹介文、その他の会員の情報を無断で使用する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑳</Typography>
              <Typography>
                　通常利用の範囲を超えてサーバーに負担をかける行為、およびそれを助長する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉑</Typography>
              <Typography>
                　本サービスに使用されているソフトウェアや本サービスのために使用されているソフトウェアの修正、改変、使用許諾、翻訳、販売、解析、模倣、解読、逆コンパイル、逆アセンブルその他これらに類する行為を行い、又は他人にこれを行わせる行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉒</Typography>
              <Typography>
                　有害なコンピューターウイルス、コード、ファイル、プログラム等を開示する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉓</Typography>
              <Typography>
                　コンテンツ閲覧者を含む利用者以外の自然人・法人・団体・組織等の第三者の個人情報の収集を行う行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉔</Typography>
              <Typography>
                　「ジャンクメール」、「チェーンメール」、「迷惑メール」、「スパム」などの送信に関連するコンテンツを掲載する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉕</Typography>
              <Typography>
                　海賊版コンピューター・プログラムを提供し、製品に組み込まれたコピー防止機能を回避する情報を提供したり、海賊版音楽を提供したり、海賊版音楽ファイルにリンクを張ったりするなどして、他人の著作権によって保護された作品を違法又は不正にコピーすることを助長するコンテンツを掲載する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉖</Typography>
              <Typography>
                　性的交渉の強要、詐欺、脅迫する行為（本サービス外でのやりとりも対象とする。）
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉗</Typography>
              <Typography>
                　物やサービス等の取引、求人行為、引き抜き行為、商用目的の広告行為（それらの宣伝・告知・勧誘を含むがこれに限らない。）を目的とする情報の掲載または、メッセージの送信行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉘</Typography>
              <Typography>
                　無限連鎖講およびマルチ商法、またはそれに類するもの、あるいは当社が無限連鎖講およびマルチ商法、またはそれに類するものと判断する内容を掲載する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉙</Typography>
              <Typography>
                　本サービスについて、その部分あるいは一部を問わずに、営利目的で利用（使用、再生、複製、複写、販売、再販売等、形態の如何を問わない。）する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉚</Typography>
              <Typography>
                　本サービスを通じて入手した情報について、本サービス利用以外の目的で利用し、または他の利用者、第三者に同様の行為をさせる行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉛</Typography>
              <Typography>
                　他の利用者の個人情報を収集、蓄積する行為、またはこれらの準備行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉜</Typography>
              <Typography>
                　本人、第三者の如何を問わず、個人のメールアドレス、電話番号、住所、金融機関口座番号など、個人を特定しうる情報（他の情報と照合することにより個人を特定しうる情報を含みます。）の掲載行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉝</Typography>
              <Typography>
                　当社が許可した場合を除く、本サービス上において他会員に自己の連絡先や他サービスのＩＤ等を連絡・共有する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉞</Typography>
              <Typography>
                　虚偽または他人の誤解を招くような内容を含む情報等を掲載、登録する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㉟</Typography>
              <Typography>
                　他の利用者に対する、本サービスの利用を妨害する行為
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㊱</Typography>
              <Typography>　本サービスの運営を妨げる行為</Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>㊲</Typography>
              <Typography>　その他当社が不適切であると判断する行為</Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Box>
                　利用者が前項の禁止行為を行った、又は行うおそれがあると当社が判断した場合、利用者に通知することなく、当社は該当する内容のデータの削除、当該利用者に対して注意を促す表示を行う、又は利用制限もしくは強制退会させることができるものとします。ただし、当社は、当該データ等を掲載停止又は削除する義務を負うものではなく、データの削除及び利用制限等の処分につきまして当社は説明の義務を負わないものとします。
              </Box>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　当社は、本条に基づき当社が行った措置に基づき利用者に生じた損害について一切の責任を負いません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第１０条（情報の目的外利用の禁止）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　利用者が、本サービスから得た情報を、宣伝、勧誘、嫌がらせや罵倒、危害を加える目的で使用し、又は、本人から同意を得ずに、他の会員を含む第三者に、情報を公開、漏洩、伝達等をすることは禁止します。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　上記のような宣伝や勧誘から当社の会員を守るために、利用者が他の会員に２４時間以内に送ることができるメールの数を、当社の妥当な判断で適切な数に制限することがあり、利用者はこれに対する異議を述べることはできないものとします。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第１１条（契約期間および契約の終了）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　利用者が本サービスの会員である限り、当社と利用者間の本規約に基づく契約は有効であるものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　利用者は本サービスの退会申請フォームから契約終了の通知を当社にお送りいただくことで、会員資格を終了させることができます。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　利用者が本規約の一つ以上の条項に違反した場合、また、そのおそれがあると当社が判断した場合、当社はいつでも利用者の会員資格を即座に終了させ、利用者のコンテンツを削除し、本サービスの利用を終了させることができます。さらに、利用者が本サービスの全部又は一部にアクセスすることを、恒久的又は一時的に当社は禁止することができます。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　前項の場合、有料サービスについて利用者が購入された利用期間が未経過であったとしても、一切、当社に返金を求めることは出来ません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>５</Typography>
              <Typography>
                　利用者の有料サービスについて利用期間が未経過である状況で、本サービスへの登録を終了させた場合でも、日割りでの返金を求めることは出来ません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>６</Typography>
              <Typography>
                　当社は、（本サービスに最後に接続した日から数えて）180日以上本サービスを利用しなかった会員のアカウントを、無効にし、又は削除することができます。これにより利用者に損害が生じても、当社に対して損害賠償を求めることは出来ません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第１２条（再利用の禁止）</Typography>
            <Typography>
              　利用者が、当社のサービスやそれらを構成するデータを、本サービスを利用する目的を超えて利用した場合、当社は、それらの行為を差し止め、又はそれらの行為によって利用者が得た利益相当額を当社が受けた損害とみなし、利用者に請求する権利を有します。
            </Typography>
          </Box>

          <Box>
            <Typography>第１３条（利用料金）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　本サービスは、無料でご利用いただけるサービスと有料でご利用いただけるサービスがあります。投稿への応募機能または投稿機能および追加機能を利用するには、本サービスの有料会員になる必要があります。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　有料会員へのお申し込み後の変更・キャンセルは出来ません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　利用者が申し込まれた有料サービスを利用期間の途中で利用休止またはご解約された場合も、返金や未利用期間の日割り計算による精算は一切行なっておりません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第１４条（コインの取り扱い）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　会員は、クレジットカード決済その他当社の定める方法によりコインを購入することができます。コインの内容および利用条件については、当社が別途定め、本サービスにおいて表示するところに従うものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　会員は、購入したコインについて、当社所定の条件及び方法に従い、本サービスにおける商品またはサービスなどとの交換に利用することができます。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　利用者は、理由のいかんを問わず、コインを換金することはできず、当社はコインの払い戻しをいたしません。また、コインを第三者に貸与、譲渡、売買、質入れ等をすることもできず、コインを交換することもできません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　当社は、当社所定の方法により、会員が獲得したコイン、コインの残高を、会員に告知します。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>５</Typography>
              <Typography>
                　会員は、コインの発行を受けた日から180日間のみ利用することができます。有効期限を過ぎた未使用のコインは消滅し、その後利用することはできません。また、コインの有効期限の起算点は、キャンセル等により返還された場合等を含めて、いずれの場合も当初取得した日とします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>６</Typography>
              <Typography>
                　コインの使用は、会員本人が行うものとし、当該会員本人以外の第三者が行うことはできません。第三者による不正使用であった場合でも、当社は、使用されたコインを返還する義務を負わず、会員に生じた損害について一切責任を負いません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>７</Typography>
              <Typography>
                　理由のいかんを問わず、会員が退会した場合又は会員資格が消滅した場合には、当該会員が保有するコインは全て失効し、以後利用することはできないものとし、利用者はこれによる損害を当社に対して請求できません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第１５条（収益合計残高）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　会員は、本サービスから得た収益を収益合計残高から確認することができます。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                会員は、当社所定の手続きにより、保有する収益合計残高の範囲内で、会員が指定する金額を、あらかじめ登録した本人名義の金融機関の預金口座に出金することができます。当社は、原則として、会員から出金指示を受けた日の翌月末までに振込手続きを行うものとします。なお、支払いに関し発生する振込手数料は、当該会員の負担とします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　会員は、当社所定の手続きにより、保有する収益合計残高の範囲内で、会員が指定する金額分を、当社提携先前払式支払手段と交換をすることができます。交換後の当社提携先前払式支払手段の取扱いについては、提携先の規約に従うものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　会員が本サービスから得た収益は、収益発生から10年を経過することにより消滅するものとします。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第１６条（税金及び費用）</Typography>
            <Typography>
              前条に定める収益の支払にともない税金や付帯料金が発生する場合には、利用者がこれらを負担するものとします。
            </Typography>
          </Box>

          <Box>
            <Typography>第１７条（投稿、アカウント等の削除）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　利用者が本サービスに投稿などしたコンテンツと、本サービスを通して利用者が他の利用者に転送したコンテンツについて、利用者は単独で責任を負います。利用者が投稿した場合はいつでも、そのコンテンツが、正確かつ本規約に違反せず、あらゆる点で誰にも害が及ばないことを、お客様は表明し保証したものとみなします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　当社は、提供するサービスを適正に運営するために、以下の場合には、あらかじめ通知することなく、データやコンテンツを削除したり、サービスの全部または一部の利用をお断りしたり、利用者のアカウントを削除したりするといった措置を講じることができるものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>①</Typography>
              <Typography>
                　利用者が本規約に定められている事項に違反した場合、もしくはそのおそれがあると当社が判断した場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>②</Typography>
              <Typography>
                　当社にお支払いいただく代金について支払の遅滞が生じた場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>③</Typography>
              <Typography>
                　本サービスの代金決済手段として指定されたクレジットカードや銀行口座の利用が停止された場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>④</Typography>
              <Typography>
                　利用者が破産もしくは民事再生の手続の申立てを受け、または利用者自らがそれらの申立てを行うなど、利用者の信用不安が発生したと当社が判断した場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑤</Typography>
              <Typography>
                　アカウントが反社会的勢力又はその構成員や関係者によって登録または使用された場合、もしくはそのおそれがあると当社が判断した場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑥</Typography>
              <Typography>
                　利用者が一定期間にわたってアカウントまたは特定のサービスを使用していない場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑦</Typography>
              <Typography>
                　その他、利用者との信頼関係が失われた場合など、当社と利用者との契約関係の維持が困難であると当社が判断した場合
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　本サービス上での利用者間のメッセージのやりとりは、当該メッセージのやりとりをされる利用者同士と当社の三者が閲覧できる、当社の管理する電子掲示板を通じて提供されます。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　利用者は、当社が事故防止ならびに健全なサービスを運営する目的で、メッセージの内容を閲覧、削除することに同意するものとします。但し、当社として電子掲示板を巡回・監視する義務を負うものではありません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第１８条（コンテンツの取扱い）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　本サービスの保守や改良などの必要が生じた場合には、当社は利用者が当社の管理するサーバーに保存しているデータを、本サービスの保守や改良などに必要な範囲で複製等することができるものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　利用者が投稿などをしたコンテンツ（位置情報、画像データ、テキストを含みますが、これらに限られません。以下「投稿コンテンツ」といいます。）については、利用者又は当該投稿コンテンツの著作権者に著作権が帰属します。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　コンテンツについて、利用者は当社に対して、日本の国内外で無償かつ非独占的に利用（複製、上映、公衆送信、展示、頒布、譲渡、貸与、翻訳、翻案、出版を含みます。）する権利を期限の定めなく許諾（サブライセンス権を含みます。）したものとみなします。ただし、利用者間のメッセージ内容については、本条の許諾対象には含まないものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　利用者は著作者人格権を行使しないものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>５</Typography>
              <Typography>
                　利用者が本サービスを利用して生成したコンテンツについての著作権を除き、本サービスおよび本サービスに関連する一切の情報についての著作権及びその他知的財産権はすべて当社又は当社がその利用を許諾した権利者に帰属し、利用者は無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送信（送信可能化を含みます。）、伝送、配布、出版、営業使用等をしてはならないものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>６</Typography>
              <Typography>
                　当社は、コンテンツの利用を、利用者自身を除く、他の利用者その他の第三者に許諾するものではなく、利用者は他の利用者のコンテンツの権利を侵害する行為を行ってはならないものとします。また、利用者はコンテンツを自動的に収集、解析してはならないものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>７</Typography>
              <Typography>
                　当社は、利用者が、他の利用者のコンテンツを本人の承諾なく利用したことによって生じさせた損害について、一切の責任を負いません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第１９条（損害賠償）</Typography>
            <Typography>
              　利用者が法令または本規約に違反したことにより、当社が直接的もしくは間接的に何らかの損害、損失または費用負担（特別事情による損害及び逸失利益、及び弁護士費用の負担を含みます。）を被った場合、利用者は、当社に対し、直ちにこれを賠償するものとします。
            </Typography>
          </Box>

          <Box>
            <Typography>第２０条（連絡方法）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　利用者は、本規約に特別の定めがある場合を除き、当社への連絡はお問い合わせフォームから行うものとします。電話による連絡および来訪は受け付けておりません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　当社は、利用者への連絡の必要がある場合には、登録されたメールアドレス宛にメールにて連絡を行うものとします。ただし、利用者が正確な連絡先を提供していない場合に利用者に生じる不利益について、当社は一切責任を負いません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第２１条（会員間の紛争について）</Typography>
            <Typography>
              　利用者は、本サービスの他の会員との交流に関する一切の事柄について、自ら単独で責任を負うものとし、他の会員との紛争は自己の責任と費用で解決するものとします。当社は、当該紛争を監視し又は解決する義務を負わないものとします。
            </Typography>
          </Box>

          <Box>
            <Typography>第２２条（プライバシー）</Typography>
            <Typography>
              　本サービスの使用には、当社のプライバシーポリシーも適用されます。
            </Typography>
          </Box>

          <Box>
            <Typography>第２３条（権利義務などの譲渡）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　当社は、児童を誘引する行為の規制を行うため、身分証明書の確認など予め定められた方法による年齢確認を行います。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　前項の年齢確認が済んでいない児童と利用者との接点が生じる可能性を考慮し、年齢確認の前の利用者の自己紹介文に、連絡先、待ち合わせ場所や時間等の要素が入っていると解釈できる場合は、当社は、予告なく、当該自己紹介文の掲載を停止し、又は削除の措置をとることがあります。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>
              第２４条（児童誘引行為を制限するための措置）
            </Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　利用者は、本規約に基づくすべての契約について、その契約上の地位およびこれにより生じる権利義務の全部または一部を、第三者に譲渡、担保提供または貸与することはできません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　当社は本サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡に伴い利用者の契約上の地位、本規約に基づく権利及び義務並びに利用者の登録情報その他の情報を、当該事業譲渡の譲受人に譲渡することができるものとし、利用者は、あらかじめにこれに同意したものとします。会社分割等その他の組織再編行為により事業が他社に移転する場合も同様とします。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第２５条（委託）</Typography>
            <Typography>
              当社は、本サービスの全部または一部を、利用者の承諾を得ることなく自己の責任において第三者に委託することができるものとします。
            </Typography>
          </Box>

          <Box>
            <Typography>第２６条（秘密保持）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　利用者は、本掲載契約に関連して知り得た当社の情報（以下「秘密情報」という。）について秘密保持義務を負うものとし、当社の書面による事前承諾を得ない限り、第三者（法律上の守秘義務を負う第三者を除く）に対して秘密情報を開示または漏洩してはならないものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　利用者は、善良なる管理者の注意をもって秘密情報を管理し、本広告掲載の履行以外の目的に使用してはならないものとします。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第２７条（免責事項）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　当社は、当社の故意又は重過失により利用者に損害に与えた場合に限り、利用者に対して債務不履行責任を負うものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　利用者との本規約に基づく契約が消費者契約法に定める消費者契約に該当する場合、前項の免責は適用されないものとし、当社の過失により（故意・重過失に起因する場合を除く）、利用者が損害を受けたときは、通常生じうる損害の範囲内で損害を賠償するものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　前項の賠償は、有料サービスの３か月分相当額を上限とします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　当社は、本規約上の規定に基づき当社が行った措置により利用者に生じた損害について一切の責任を負いません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>５</Typography>
              <Typography>
                　利用者の行動について当社は責任を負わないものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>６</Typography>
              <Typography>
                　本サービスは、日本国内においてのみ使用されることを想定しており、当社は、日本国外において本サービスの利用ができることを保証しないものとします。また、当社は、日本国外における本サービスの利用について、一切のサポートを提供する義務を負わないものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>７</Typography>
              <Typography>
                　消費者契約法を含む強行法規上の権利については、本条の免責事項にかかわらず、利用者に留保されます。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第２８条（注意事項）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　本サービスは、不特定多数の者が利用することを想定しています。そのため本サービスを悪用しようとする者が利用者となる可能性を排除できませんので、他の利用者に対して個人情報、連絡先等を開示する際には、慎重を期して、本サービスをご利用ください。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　規約違反の疑いがある利用者を発見した場合は、すみやかに違反報告、またはお問い合わせより違反内容をご報告ください。但し、対応の必要の有無又は方法は、当社において判断するものとし、当社は対応結果を報告する義務を負わないものとします。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第２９条（反社会的勢力との取引排除）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　利用者および当社は、次に定める事項を表明し、保証するものとする。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>①</Typography>
              <Typography>
                　自己および自己の役員・株主（以下「関係者」という。）が、暴力団、暴力団関係企業、もしくは、これらに準ずる者、またはその構成員（以下総称して「反社会的勢力」という。）でないこと
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>②</Typography>
              <Typography>
                　自己および自己の関係者が、反社会的勢力を利用しないこと
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>③</Typography>
              <Typography>
                　自己および自己の関係者が、反社会的勢力に資金等の提供、便宜の供給等、反社会的勢力の維持運営に協力、または関与しないこと
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>④</Typography>
              <Typography>
                　自己および自己の関係者が、反社会的勢力と関係を有しないこと
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑤</Typography>
              <Typography>
                　自己が自ら、または第三者を利用して相手方に対し、暴力的行為、詐術、脅迫的言辞を用いず、相手方の名誉や信用を毀損せず、また相手方の業務を妨害しないこと
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　甲および乙は、相手方が前項に違反したと認める場合には、通知、催告、その他の手続を要しないで、直ちに本契約の全部または一部を解除することができる。この場合、相手方は他方当事者に発生した全ての損害を直ちに賠償するものとする。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第３０条（準拠法）</Typography>
            <Typography>
              　本規約は、日本法に準拠し、解釈されるものとします。
            </Typography>
          </Box>

          <Box>
            <Typography>第３１条（管轄裁判所）</Typography>
            <Typography>
              　利用者と当社との間で訴訟の必要が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </Typography>
          </Box>

          <Box>
            <Typography>第３２条（附則）</Typography>
            <Typography>　２０２２年１１月１日　制定・施行</Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 4 }} className={styles.terms_container}>
          <Typography component="h2" className={styles.terms_heading}>
            インストラクター利用規約
          </Typography>
          <Box>
            <Typography>
              　この利用規約（以下「本規約」という。）は、Ｃｕｌｍｉｎｏ株式会社（以下「当社」という。）が提供するＣｕｌｍｉｎｏ（以下「原サービス」という。）のインストラクターサービス（以下「本サービス」という。）に参加する会員が、本サービスの利用に関して遵守すべき事項を定めるものです。本サービスに関し本規約に規定のない事項については、Ｃｕｌｍｉｎｏ利用規約（以下「原サービス利用規約」という。）が適用されます。
            </Typography>
          </Box>
          <Box>
            <Typography>第１条（定義）</Typography>
            <Typography>
              　本規約において、次の用語はそれぞれ以下のように定義します。
            </Typography>
            <Box className={styles.terms_flex}>
              <Typography>①</Typography>
              <Typography>
                　「インストラクター」とは、原サービスにおいて利用者に対して技術指導をする者を指します。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>②</Typography>
              <Typography>
                　「技術指導」とは、原サービスにおいてインストラクターが行う知識や技術の指導を指します。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>③</Typography>
              <Typography>
                　「候補生」とは、原サービスを利用する会員のうち、本サービスを希望しインストラクターになるための講習等を受講する者を指します。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>④</Typography>
              <Typography>
                　「講習等」とは、候補生に対して当社が行うインストラクターになるための知識や技術の講習等を指します。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>⑤</Typography>
              <Typography>
                　「試験」とは、講習等の課程を修了した候補生が受験することができる当社が提供するインストラクターになるための試験を指します。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第２条（本サービスの目的）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　本サービスは、原サービスの会員が候補生又はインストラクターとして利用することを目的とします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　本サービスは、会員がインストラクターになることを保証するものではありません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第３条（規約への同意）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　本サービス利用者は、本規約の定めに従って本サービスを使用しなければなりません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　本サービス利用者は、本規約に同意をした場合にのみ本サービスを利用できます。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　本規約の規定の変更は、変更後の規定の内容を、当社のホームページで公表し、公表の際に定める日から適用されるものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　前項に基づき定める本規約の変更後に、利用者が本サービスをご利用される場合には、変更後の本規約の内容を承諾したものとみなします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>５</Typography>
              <Typography>
                　利用者は、変更後の本規約に同意しない場合には、直ちに本サービスの利用を停止するものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>５</Typography>
              <Typography>
                　当社は、理由の如何を問わず、また、利用者に事前に通知することなく、本サービスの内容の全部又は一部を変更、追加又は中止することができるものとし、利用者は予めこれを承諾するものとします。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第４条（候補生の利用料金）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　本サービスへ候補生として参加する会員は、当社に対して別途定める受講料を支払うものとする。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　候補生へのお申し込み後の変更・キャンセルは出来ません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　候補生が申し込まれた講習等の利用期間の途中で利用休止又はご解約された場合も、返金や未利用期間の日割り計算による精算は一切行なっておりません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　当社は、候補生の講習等の受講後の試験の結果に関わらず、受講料の返還義務を負わず、候補生に生じた損害については一切責任を負いません。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第５条（試験結果の開示・修正等）</Typography>
            <Typography>
              　当社は、候補生の試験における回答内容及びその採点結果について、候補生及び第三者には開示しません。また、返却義務を負わないものとします。候補生は、試験終了後、回答内容の変更・追加・削除を行うことはできません。
            </Typography>
          </Box>

          <Box>
            <Typography>第６条（（インストラクターとしての利用）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　試験に合格した候補生は、原サービスにおいてインストラクターとして利用する資格を得ることができます。原サービスをインストラクターとして利用するには、本サービスの有料会員になる必要があります。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　前項の有資格者は、原サービスをインストラクターとして利用するためには、本サービスの有料会員になる必要があります。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　インストラクターは、当社が定める条件に従い、会員に対して技術指導を行うことができます。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>４</Typography>
              <Typography>
                　インストラクターは、当社指定の条件に従い、自ら技術指導を行う条件を設定し、原サービス内において登録します。技術指導を希望する会員は、当社の定めに従い、当該技術指導に対して、原サービス内のクルミノコイン消費し技術指導の応募を行った場合、当該利用者間で技術指導契約が成立したものと見做します。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>５</Typography>
              <Typography>
                　技術指導契約が成立した場合、当該会員はキャンセルすることができず、当社は、当該会員に対してクルミノコインの返還を行わないものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>６</Typography>
              <Typography>
                　当該技術指導の過程でいずれかの利用者に損害が生じたとしても、当該損害が当社の故意又は重過失により生じたものでない限り、当社は一切の責任を負いません。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>７</Typography>
              <Typography>
                　インストラクターは、本サービスを利用するにあたり、当社が依頼する原サービス集客のための宣伝依頼等に協力するものとします。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第７条（分配額の支払）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　当社は、前条に基づきインストラクターが行った技術指導の分配額について、当該技術指導のために消費されたクルミノコインの数量、当該インストラクターの取引の実績等にもとづき、当社が独自に定める方法により算定するものとし、かつ、その算定方法は当社が自由に変更できるものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　当社は、前項の支払いを、前条に規定する技術指導契約成立時の翌々月15日迄に、インストラクターの収益合計残高へ追加する方法により行うものとします。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>３</Typography>
              <Typography>
                　未払の分配額を残した状態でインストラクターが原サービスを退会した場合、当社の当該インストラクターに対する当該分配額の支払義務は消滅するものとする。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>第８条（権利の非許諾）</Typography>
            <Typography>
              　当社は、本規約で明文をもって許諾された以外の権利をインストラクターに対し付与するものではありません。パートナーは、当社の商号、商標、標章等の利用を許諾された等、本規約の明文で許諾された以外の権利を付与されたものと、本契約を解釈してはなりません。
            </Typography>
          </Box>

          <Box>
            <Typography>第９条（競業避止義務）</Typography>
            <Box className={styles.terms_flex}>
              <Typography>１</Typography>
              <Typography>
                　本サービスを利用する会員は、本サービス利用終了後3年間において、以下の行為を行わないものとする。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>①</Typography>
              <Typography>
                　当該会員が当社サービス以外で、インストラクター活動を目的とした利用者及び第三者へのインストラクター活動その他本サービスと同一又は類似のサービスを行うこと。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>②</Typography>
              <Typography>
                　当該会員がマッチングサービス又はインストラクターとして開業すること。
              </Typography>
            </Box>
            <Box className={styles.terms_flex}>
              <Typography>２</Typography>
              <Typography>
                　当該会員が前項の定めに違反した場合は、原サービス利用規約第１９条に規定する損害賠償の責めを負うものとする。
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography>
              第１０条（附則）
              <br />
              　２０２２年１１月１日　制定・施行
            </Typography>
          </Box>
        </Box>

        <Box className={styles.terms_agree}>
          <Button
            className={styles.terms_agreeButton}
            variant="contained"
            disabled={agree}
            onClick={() => router.push('/signUp')}
            sx={{
              '&:hover': {
                backgroundColor: 'primary.main',
              },
              '&.Mui-disabled': {
                opacity: '0.8',
                color: 'primary.contrastText',
                backgroundColor: 'primary.main',
              },
            }}
          >
            同意する
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
