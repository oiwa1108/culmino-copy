import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/terms.module.scss';
import Header from '../src/components/header';
import Head from '../src/components/head';

import { Box, Button } from '@mui/material';

export default function Terms() {
  const terms = [
    {
      title: '',
      contents: [
        'この利用規約（以下「本規約」という。）は、ＧｉｒｌｓＦｕｎｄｉｎｇ株式会社（以下「当社」という。）が提供するＧｉｒｌｓＢｉｚ（ガールズビズ）に関する全てのサービス（以下「本サービス」という。）の利用に関する条件を定めるものであり、本サービスを利用するお客様（以下「利用者」という。）と当社との間で定めるものです。利用者は、本サービスを利用する前に、本規約をよくお読みください。',
      ],
    },
    {
      title: '第１条（規約の運用）',
      contents: [
        '本規約の規定が利用者と当社の契約に適用される関連法令に反するとされる場合、当該規定は、その限りにおいて、当該利用者との契約には適用されないものとします。但し、この場合でも、本規約の他の規定の効力には影響しないものとします。',
      ],
    },
    {
      title: '第２条（本サービス及び利用規約の変更について）',
      contents: [
        '1. 本規約の規定は、民法第５４８条の２第１項に定める定型約款に該当し、本規約の各条項は、お客様の一般の利益に適合する場合又は変更を必要とする相当の事由があると認められる場合には、民法第５４８条の４の定型約款の変更に規定に基づいて変更するものとします。',
        '2. 前項による本規約の規定の変更は、変更後の規定の内容を、当社のホームページで公表し、公表の際に定める日から適用されるものとします。',
        '3. 前項に基づき定める本規約の変更後に、利用者が本サービスをご利用される場合には、変更後の本規約の内容を承諾したものとみなします。',
        '4. 利用者は、変更後の本規約に同意しない場合には、直ちに本サービスの利用を停止するものとします。',
        '5. 当社は、理由の如何を問わず、また、利用者に事前に通知することなく、本サービスの内容の全部又は一部を変更、追加又は中止することができるものとし、利用者は予めこれを承諾するものとします。',
      ],
    },
    {
      title: '第３条（定義）',
      contents: [
        '本規約において、次の用語はそれぞれ以下のように定義します。',
        '1. 「利用者」とは、当社が定めた本サービスの登録手続きに従い、本規約に対し同意の上、本サービスの会員登録をしたか否かにかかわらず、本サービスを利用する個人を指します。',
        '2. 「会員」とは、当社に対して会員登録を申込み、当社の審査を経て、当該申込みについて承諾した者を指し、無料会員と有料会員を含むものとします。',
        '3. 「ガールズ」とは、本サービスを利用してプロモーション依頼へ応募する会員を指します。',
        '4. 「コンテンツ」とは、本サービスを通して利用者が入力した、氏名等のプロフィール、メッセージなどの一切の情報、プロモーション依頼サービスなどの機能を指します。',
      ],
    },
    {
      title: '第４条（規約への同意）',
      contents: [
        '1. 利用者は、本規約の定めに従って本サービスを使用しなければなりません。',
        '2. 利用者は、本規約に同意をした場合のみ本サービスを利用できます。',
      ],
    },
    {
      title: '第５条（本サービスの内容）',
      contents: [
        '本サービスは、女性限定のマネタイズプラットフォームです。利用者間の下記取引の場・機会を提供するもので、利用者間の委託、売買等の保証等に関しては、すべて当事者である利用者の自己責任とし、当社は自ら取引を行うものではなく、その委託を受けるものでもありません。当社は、本規約中に別段の定めがある場合を除き、取引の遂行には一切関与しません。',
      ],
    },
    {
      title: '第６条（本サービスの利用条件、変更及び中止、非保証）',
      contents: [
        '1. 当社は、本サービスの提供を受ける利用者を、会員登録の有無、年齢、ご本人確認の有無、その他、当社が必要と判断する条件を満たしたお客様に限定することができるものとします。',
        '2. 当社は、以下のいずれかに該当する場合には、利用者に事前に通知することなく、本サービスの利用の全部又は一部を停止又は中断することができるものとします。        ',
        '①本サービスに係るコンピューター・システムの点検又は保守作業を定期的又は緊　急に行う場合',
        '②コンピューター、通信回線等が事故等により停止した場合',
        '③火災、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合',
        '④その他、当社が停止又は中断を必要と判断した場合',
        '3. 当社は、当社が必要と判断する場合、あらかじめ利用者に通知することなく、いつでも、本サービスの全部又は一部の内容を変更し、また、その提供を中止することができるものとします。',
        '4. 当社は、本サービスに瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害など事実上及び法律上の瑕疵を含みますが、これらに限りません）がないことを保証しません。',
      ],
    },
    {
      title: '第７条（利用資格）',
      contents: [
        '1. 利用者が未成年者である場合は、親権者など法定代理人の同意（本規約への同意を含みます）を得たうえで本サービスを利用してください。また、本規約に同意した時点で未成年者であった利用者が、成年に達した後に本サービスを利用した場合、未成年者であった間の利用行為を追認したものとみなします。',
        '2. 登録後に、登録情報が事実に反することが判明した場合、会員登録を無効とさせていただくことがあります。この場合、無効としたことにより利用者及び他の利用者に発生した損害について一切の責任を負いません。        ',
        '3. 当社が必要と判断する場合、あらかじめ利用者に通知することなく、いつでも、本サービスの全部又は一部の内容を変更し、また、その提供を中止することができるものとします。当社は、当該変更又は中止により利用者に生じた障害について一切の責任を負いません。        ',
        '4. 当社は、利用者が本サービスを利用した時点で、本契約の規約と条件の全てに従う能力及び権限を有することを表明・保証したものと看做します。',
        '5. 当社は、会員への経歴の問い合わせ、会員の申告の確認、会員の経歴調査は行っておりません。したがって、当社は、利用者の経歴等の真正性については保証しかねます。',
        '6. 当社は、利用者について、利用可能な公的記録を使用して、犯罪履歴等の調査を行うことがあるものとしますが、これを行う義務を負うものではありません。',
        '7. 当社や当社のパートナー企業、会員やその他の個人または団体が、本サービスを通じて表示し、アップロードし、または配布する助言、意見、名声やその他の情報について、当社はその正確さや信頼性を表明し保証するものではありません。',
        '8. 当社は、利用者が下記の事由に相当する場合は、会員登録の拒否を行うことが出来るものとします。',
        '①本規約に違反した場合、又は違反する恐れがあると判断した場合',
        '②当社に提供された登録情報の全部又は一部につき記載漏れ、誤記又は虚偽記載があった場合',
        '③過去に本サービスの利用の登録を取り消された者である場合',
        '④成年被後見人、非保佐人、又は被補助人のいずれかであり、法定代理人、後見人、保佐人又は補助人の同意等を得ていなかった場合',
        '⑤反社会的勢力等（暴力団、暴力団体、右翼団体、反社会的勢力、その他これに準ずる者を意味します。以下同じ。）である、又は資金提供その他を通じて反社会的勢力等の維持、運営若しくは経営に協力若しくは関与する等反社会的勢力等との何らかの交流若しくは関与を行っていると当社が判断した場合',
        '⑥利用者が、自ら又は第三者を利用して次の各項目の一つにでも該当する行為をした場合',
        '・暴力的な要求行為',
        '・法的な責任を超えた不当な要求行為',
        '・取引に関して、脅迫的な言動をし、又は暴力を用いる行為',
        '・風説を流布し、偽計を用いて当社の信用を毀損し、又は、当社の業務を妨害する行為',
        '・上記各号に準ずる行為',
        '・その他、当社が適当でないと判断した行為',
        '⑦利用者が、自ら又は第三者を利用して次の各項目の一つにでも該当する行為をした場合',
      ],
    },
    {
      title: '第８条（利用者の責任）',
      contents: [
        '1. 用者は、自己の責任において、ユーザーＩＤ及びパスワードを管理及び保管するものとし、これを第三者に利用させ、貸与、譲渡、名義変更、売買等をしてはならないものとします。',
        '2. 利用者は、当社に対し、ユーザーＩＤ及びパスワードを第三者に盗用されるなどにより、利用者のコンテンツの改変や改竄、個人情報等の無断閲覧などにより発生するあらゆる紛争、損害賠償の請求などについて一切を免責するものとします。',
        '3. 利用者が他人の著作物を使用し、又は他人の権利を侵害したことなどにより紛争、損害賠償の請求などが起きた場合、利用者は、自らの責任で対応するものとし、当社に損害賠償の請求等をすることはできないものとします。',
      ],
    },
    {
      title: '第９条（禁止事項）',
      contents: [
        '1. 利用者は、以下の行為を行ってはならないものとします。',
        '①本規約、法令又は公序良俗に違反する行為',
        '②反社会的行為',
        '③前２号に掲げる行為を予告、助長し、もしくはこれに関与する行為',
        '④虚偽の情報（名前、年齢、性別、勤務先、肩書き、学校名、メールアドレス、などの個人情報を含むがこれらに限らない。）を登録し、本サービスを利用する行為',
        '⑤１人で複数のアカウントを使って本サービスを利用する行為',
        '⑥本人の許可の有無にかかわらず、第三者に成りすます行為',
        '⑥本人の許可の有無にかかわらず、第三者に成りすます行為',
        '⑦利用者以外の自然人・法人・団体・組織等の第三者（以下「第三者」という。）に自己のユーザーＩＤ及びパスワードを譲渡して、本サービスを利用させる行為',
        '⑧第三者に自己のユーザーＩＤ及びパスワードを閲覧可能な状態にしておく行為',
        '⑨自殺、自傷行為、薬物乱用等を美化・誘発・助長する恐れのある表現の投稿、掲載',
        '⑩民族・人種・性別・年齢等による差別につながる表現の投稿、掲載行為',
        '⑪政治活動、選挙運動、又はこれらに類似する行為及び公職選挙法に抵触する行為又は宗教活動行為',
        '⑫児童ポルノ、あるいは当社が児童ポルノに類すると判断するサイトのリンクを貼る等して、サイトへ誘導する行為、又はそのような内容を書き込む行為',
        '⑬性器露出画像、動画、あるいは当社が性器を描写した内容等と判断した内容のサイトへのリンクを掲載する行為、又はそのような内容を書き込む行為',
        '⑭売春・ポルノ、無修正ビデオ映像のダウンロードサイト等のアダルトサイトに誘導する行為、猥褻な内容を書き込む行為',
        '⑮他人への嫌がらせを内容に含むコンテンツを掲載する行為',
        '⑯違法な武器の製造、購入や、コンピューターウイルスの製造など、違法行為に関する説明を提供するコンテンツを掲載する行為',
        '⑰第三者の特許権、商標権、著作権等の知的財産権を侵害する行為',
        '⑱第三者の信用もしくは名誉を侵害し、第三者の個人情報を公開し、又は第三者のプライバシー権、肖像権その他一切の権利を侵害する行為',
        '⑲他の利用者のアイコン画像、サブ写真を含む、本サービス上の画像を当社の承諾なくキャプチャーその他の方法より複製、利用又は公開する行為',
        '⑳当社が許可なく、本サービス上の文章、画像、ニックネーム、アイコン画像、サブ写真、プロフィール情報、自己紹介文、その他の会員の情報を無断で使用する行為',
        '㉑通常利用の範囲を超えてサーバーに負担をかける行為、及びそれを助長する行為',
        '㉒本サービスに使用されているソフトウェアや本サービスのために使用されているソフトウェアの修正、改変、使用許諾、翻訳、販売、解析、模倣、解読、逆コンパイル、逆アセンブルその他これらに類する行為を行い、又は他人にこれを行わせる行為',
        '㉓有害なコンピューターウイルス、コード、ファイル、プログラム等を開示する行為',
        '㉔コンテンツ閲覧者を含む利用者以外の自然人・法人・団体・組織等の第三者の個人情報の収集を行う行為',
        '㉕「ジャンクメール」、「チェーンメール」、「迷惑メール」、「スパム」などの送信に関連するコンテンツを掲載する行為',
        '㉖海賊版コンピューター・プログラムを提供し、製品に組み込まれたコピー防止機能を回避する情報を提供したり、海賊版音楽を提供したり、海賊版音楽ファイルにリンクを張ったりするなどして、他人の著作権によって保護された作品を違法又は不正にコピーすることを助長するコンテンツを掲載する行為',
        '㉗性的交渉の強要、詐欺、脅迫する行為（本サービス外でのやりとりも対象とする。）',
        '㉘物やサービス等の取引、求人行為、引き抜き行為、商用目的の広告行為（それらの宣伝・告知・勧誘を含むがこれに限らない。）を目的とする情報の掲載又は、メッセージの送信行為',
        '㉙無限連鎖講及びマルチ商法、又はそれに類するもの、あるいは当社が無限連鎖講及びマルチ商法、又はそれに類するものと判断する内容を掲載する行為',
        '㉚本サービスについて、その部分あるいは一部を問わずに、営利目的で利用（使用、再生、複製、複写、販売、再販売等、形態の如何を問わない。）する行為',
        '㉛本サービスを通じて入手した情報について、本サービス利用以外の目的で利用し、又は他の利用者、第三者に同様の行為をさせる行為',
        '㉛本サービスを通じて入手した情報について、本サービス利用以外の目的で利用し、又は他の利用者、第三者に同様の行為をさせる行為',
        '㉜他の利用者の個人情報を収集、蓄積する行為、又はこれらの準備行為',
        '㉝本人、第三者の如何を問わず、個人のメールアドレス、電話番号、住所、金融機関口座番号など、個人を特定しうる情報（他の情報と照合することにより個人を特定しうる情報を含みます。）の掲載行為',
        '㉞当社が許可した場合を除く、本サービス上において他会員に自己の連絡先や他サービスのID等を連絡・共有する行為',
        '㉟虚偽又は他人の誤解を招くような内容を含む情報等を掲載、登録する行為',
        '㊱他の利用者に対する、本サービスの利用を妨害する行為',
        '㊲本サービスの運営を妨げる行為',
        '㊳本サービスの利用にあたり静止画や動画を撮影する行為、及び、当該静止画や動画をSNSを含むインターネット上にアップロードする行為',
        '㊴その他当社が不適切であると判断する行為',
        '2. 利用者が前項の禁止行為を行った、又は行う恐れがあると当社が判断した場合、利用者に通知することなく、当社は該当する内容のデータの削除、当該利用者に対して注意を促す表示を行う、又は利用制限もしくは強制退会させることができるものとします。ただし、当社は、当該データ等を掲載停止又は削除する義務を負うものではなく、データの削除及び利用制限等の処分につきまして当社は説明の義務を負わないものとします。',
        '3. 当社は、本条に基づき当社が行った措置に基づき利用者に生じた損害について一切の責任を負いません。',
      ],
    },
    {
      title: '第１０条（情報の目的外利用の禁止）',
      contents: [
        '1. 利用者が、本サービスから得た情報を、宣伝、勧誘、嫌がらせや罵倒、危害を加える目的で使用し、又は、本人から同意を得ずに、他の会員を含む第三者に、情報を公開、漏洩、伝達等することは禁止します。',
        '2. 上記のような宣伝や勧誘から当社の会員を守るために、利用者が他の会員に２４時間以内に送ることができるメールの数を、当社の妥当な判断で適切な数に制限することがあり、利用者はこれに対する異議を述べることはできないものとします。',
      ],
    },
    {
      title: '第１１条（契約期間及び契約の終了）',
      contents: [
        '1. 利用者が本サービスの会員である限り、当社と利用者間の本規約に基づく契約は有効であるものとします。',
        '2. 利用者は本サービスの退会申請フォームから契約終了の通知を当社にお送りいただくことで、会員資格を終了させることができます。',
        '3. 利用者が本契約の一つ以上の条項に違反した場合、また、その恐れがあると当社が判断した場合、当社はいつでも利用者の会員資格を即座に終了させ、利用者のコンテンツを削除し、本サービスの利用を終了させることができます。さらに、利用者が本サービスの全部又は一部にアクセスすることを、恒久的又は一時的に当社は禁止することができます。',
        '4. 前項の場合、有料サービスについて利用者が購入された利用期間が未経過であったとしても、一切、当社に返金を求めることは出来ません。',
        '5. 利用者の有料サービスについて利用期間が未経過である状況で、本サービスへの登録を終了させた場合でも、日割りでの返金を求めることは出来ません。',
        '6. 当社は、（本サービスに最後に接続した日から数えて。）１８０日以上本サービスを利用しなかった会員のアカウントを、無効にし、又は削除することができます。これにより利用者に損害が生じても、当社に対して損害賠償を求めることは出来ません。',
      ],
    },
    {
      title: '第１２条（再利用の禁止）',
      contents: [
        '利用者が、当社のサービスやそれらを構成するデータを、本サービスを利用する目的を超えて利用した場合、当社は、それらの行為を差し止め、又はそれらの行為によって利用者が得た利益相当額を当社が受けた損害とみなし、利用者に請求する権利を有します。',
      ],
    },
    {
      title: '第１３条（利用料金）',
      contents: [
        '1. 本サービスは、無料でご利用いただけるサービスと有料でご利用いただけるサービスがあります。追加機能を利用するには、本サービスの有料会員になる必要があります。',
        '2. 有料会員へのお申し込み後の変更・キャンセルは出来ません。',
        '3. 利用者が申し込まれた有料サービスを利用期間の途中で利用休止又はご解約された場合も、返金や未利用期間の日割り計算による精算は一切行なっておりません。',
      ],
    },
    {
      title: '第１４条（GBCの取り扱い）',
      contents: [
        '1. 会員は、クレジットカード決済その他当社の定める方法によりガールズビズコイン（以下「ＧBＣ」という。）を購入することができます。ＧBＣの内容及び利用条件については、当社が別途定め、本サービスにおいて表示するところに従うものとします。',
        '2. 会員は、購入したＧBＣについて、当社所定の条件及び方法に従い、本サービスにおける商品又はサービスなどとの交換に利用することができます。',
        '3. 利用者は、理由のいかんを問わず、ＧBＣを換金することはできず、当社はＧBＣの払い戻しをいたしません。また、ＧBＣを第三者に貸与、譲渡、売買、質入れ等をすることもできず、ＧBＣを交換することもできません。',
        '4. 当社は、当社所定の方法により、会員が獲得したＧBＣの残高を、会員に告知します。',
        '5. 会員は、ＧBＣの発行を受けた日から１８０日間のみ利用することができます。有効期限を過ぎた未使用のＧBＣは消滅し、その後利用することはできません。また、ＧBＣの有効期限の起算点、キャンセル等により返還された場合等を含めて、いずれの場合も当初取得した日とします。',
        '6. ＧBＣの使用は、会員本人が行うものとし、当該会員本人以外の第三者が行うことはできません。第三者による不正使用であった場合でも、当社は、使用されたＧBＣを返還する義務を負わず、会員に生じた損害について一切責任を負いません。',
        '7. 理由のいかんを問わず、会員が退会した場合又は会員資格が消滅した場合には、当該会員が保有するＧBＣは全て失効し、以後利用することはできないものとし、利用者はこれによる損害を当社に対して請求できません。',
      ],
    },
    {
      title: '第１５条（GirlsPromotion契約について）',
      contents: [
        '1. 本サービスの利用者は、当社が定める条件に従い、会員が広告主としてガールズへ宣伝等の依頼を行うことができるGirlsPromotionサービス（以下、「ガールズプロモーション」という。）を利用することができます。',
        '2. 会員は、当社指定の条件に従い、自らガールズプロモーションを依頼する条件を設定し、本サービス内のGBCを消費し、本サービス上にて登録します。ガールズプロモーションを希望するガールズは、当社の定めに従い、会員が登録したガールズプロモーション（以下、「案件」という。）に対して、ガールズプロモーションの応募をするものとし、当該会員が当該応募に対して依頼を行った場合、当該利用者の間で、ガールズプロモーション契約が成立したものと見做します。',
        '3. ガールズプロモーション契約が成立した場合、利用者はキャンセルすることができず、当社は、当該利用者に対し、消費したＧBＣの返還をしないものとします。但し、案件を登録時の件数に対して依頼件数が下回った場合に限り、その差分のGBCを返還するものとする。',
        '4. ガールズプロモーションの過程でいずれかの利用者に損害が生じたとしても、当該損害が当社の故意又は重過失により生じたものでない限り、当社は一切の責任を負いません。',
      ],
    },
    {
      title: '第１６条（分配額の支払）',
      contents: [
        '1. 当社は、前条に基づきガールズが取引を行ったガールズプロモーションの分配額について、当該取引のために消費されたＧBＣの数量、当該ガールズの取引の実績等にもとづき、当社が独自に定める方法により算定するものとし、かつ、その算定方法は当社が自由に変更できるものとします。',
        '2. 当社は、前項の支払いを、前条に規定するガールズプロモーション契約成立時の翌々月15日迄に、ガールズが申し出た金融機関の口座に振り込む方法により行うものとします。但し、分配額が5000円未満の場合には、振込みは行われず、当該金額が次月分に繰り越されるものとする。なお、支払いに関し発生する振込手数料等は、当該ガールズの負担とします。',
        '3. 前項に基づき、当社が振込手続を行ったにもかかわらず、当社の責めに帰すべき事由なく振り込みが正常に完了しない場合には、当社は、当該ガールズが、当該分配額の支払請求権を放棄したとみなすことができるものとします。',
        '4. 未払の分配金を残した状態でガールズが本サービスを退会した場合、当社の当該ガールズに対する当該分配金の支払義務は消滅するものとする。',
      ],
    },
  ];

  const router = useRouter();
  const [agree, setAgree] = useState(true);

  const changeBottomPostion = useCallback(() => {
    const bottomPosition =
      document.body.offsetHeight - (window.scrollY + window.innerHeight);
    if (bottomPosition <= 0) {
      setAgree(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeBottomPostion);
    return () => window.removeEventListener('scroll', changeBottomPostion);
  }, []);

  return (
    <>
      <Head />
      <Box className={styles.terms}>
        <Header />
        <Box className={styles.terms_container}>
          <h2 className={styles.terms_title}>利用規約</h2>
          {terms.map((item, index) => {
            return (
              <Box className={styles.terms_item} key={index}>
                {item.title !== '' && (
                  <p className={styles.terms_itemTitle}>{item.title}</p>
                )}
                <Box>
                  {item.contents.map((content, contentIndex) => {
                    return (
                      <p className={styles.terms_itemText} key={contentIndex}>
                        {content}
                      </p>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box className={styles.terms_agree}>
          <Button
            className={styles.terms_agreeButton}
            variant="contained"
            disabled={agree}
            onClick={() => router.push('/signup')}
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
    </>
  );
}
