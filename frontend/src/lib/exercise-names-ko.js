// Korean gym terminology for catalogue exercise names.
//
// The upstream exercise dataset only localises instructions, not exercise names.  Exact
// names cover the starter plan and the movements Korean lifters search for most often;
// the ordered phrase table gives the rest of the catalogue a readable Korean display name
// while keeping uncommon proper names (Arnold, Jefferson, Zottman, etc.) recognisable.

const EXACT = {
  '3/4 sit-up': '3/4 싯업',
  '45° side bend': '45도 사이드 벤드',
  'air bike': '에어 바이시클 크런치',
  'barbell bench press': '바벨 벤치프레스',
  'barbell bent over row': '바벨 벤트오버 로우',
  'barbell curl': '바벨 컬',
  'barbell full squat': '바벨 풀 스쿼트',
  'barbell incline bench press': '바벨 인클라인 벤치프레스',
  'barbell romanian deadlift': '바벨 루마니안 데드리프트',
  'cable lat pulldown full range of motion': '케이블 랫풀다운(풀 가동범위)',
  'cable rope seated row': '케이블 로프 시티드 로우',
  'cable triceps pushdown (v-bar)': '케이블 트라이셉스 푸시다운(V바)',
  'chest dip': '체스트 딥스',
  'dumbbell hammer curl': '덤벨 해머 컬',
  'dumbbell lateral raise': '덤벨 레터럴 레이즈',
  'dumbbell standing overhead press': '덤벨 스탠딩 오버헤드 프레스',
  'lever leg extension': '레그 익스텐션 머신',
  'lever lying leg curl': '라잉 레그 컬 머신',
  'lever standing calf raise': '스탠딩 카프 레이즈 머신',
  'sled 45в° leg press': '45도 레그프레스',
  'assisted pull-up': '어시스트 풀업',
  'barbell deadlift': '바벨 데드리프트',
  'barbell front squat': '바벨 프론트 스쿼트',
  'barbell hip thrust': '바벨 힙 쓰러스트',
  'barbell overhead press': '바벨 오버헤드 프레스',
  'cable seated row': '케이블 시티드 로우',
  'dumbbell bench press': '덤벨 벤치프레스',
  'dumbbell bent over row': '덤벨 벤트오버 로우',
  'dumbbell biceps curl': '덤벨 바이셉스 컬',
  'dumbbell fly': '덤벨 플라이',
  'dumbbell incline bench press': '덤벨 인클라인 벤치프레스',
  'dumbbell lunge': '덤벨 런지',
  'dumbbell romanian deadlift': '덤벨 루마니안 데드리프트',
  'dumbbell shoulder press': '덤벨 숄더 프레스',
  'front plank': '프론트 플랭크',
  'hanging leg raise': '행잉 레그 레이즈',
  'push-up': '푸시업',
  'pull-up': '풀업',
  'chin-up': '친업',
  'bodyweight squat': '맨몸 스쿼트',
}

// Long phrases must come first so, for example, "romanian deadlift" is handled before
// "deadlift" and "close grip" before "grip".
const PHRASES = [
  ['all fours', '네발기기'], ['full squat', '풀 스쿼트'], ['heel touchers', '힐 터치'],
  ['arms apart', '양팔 벌려'], ['arms overhead', '양팔 오버헤드'],
  ['throw down', '스로다운'], ['on stability ball', '짐볼'], ['on exercise ball', '짐볼'],
  ['on a bench', '벤치에서'], ['on bench', '벤치에서'], ['on floor', '바닥에서'],
  ['palms down', '오버그립'], ['palms up', '언더그립'], ['underhand', '언더그립'],
  ['overhand', '오버그립'], ['neutral grip', '뉴트럴그립'],
  ['high pulley', '하이 풀리'], ['low pulley', '로우 풀리'],
  ['internal rotation', '내회전'], ['external rotation', '외회전'],
  ['toe touch', '토 터치'], ['heel touch', '힐 터치'], ['jack knife', '잭나이프'],
  ['wheel rollout', 'AB휠 롤아웃'], ['wheel rollerout', 'AB휠 롤아웃'],
  ['rollerout', '롤아웃'], ['rollout', '롤아웃'], ['v-up', 'V업'], ['y-raise', 'Y레이즈'],
  ['straight leg', '스트레이트 레그'], ['bent knee', '벤트 니'], ['bent arm', '벤트 암'],
  ['single leg', '싱글 레그'], ['two legs', '양다리'], ['both legs', '양다리'],
  ['narrow stance', '내로우 스탠스'], ['wide stance', '와이드 스탠스'],
  ['high bar', '하이바'], ['low bar', '로우바'], ['floor press', '플로어 프레스'],
  ['rack pull', '랙 풀'], ['sumo deadlift', '스모 데드리프트'], ['zercher squat', '저처 스쿼트'],
  ['guillotine bench press', '길로틴 벤치프레스'], ['guillotine press', '길로틴 프레스'],
  ['clean and press', '클린 앤 프레스'], ['clean grip', '클린그립'],
  ['bradford press', '브래드포드 프레스'], ['jm bench press', 'JM 벤치프레스'],
  ['pin presses', '핀 프레스'], ['pin press', '핀 프레스'], ['drag curl', '드래그 컬'],
  ['pallof press', '팔로프 프레스'], ['kickback', '킥백'], ['cross-over', '크로스오버'],
  ['cross over', '크로스오버'], ['pull through', '풀스루'], ['pullover', '풀오버'],
  ['skullcrusher', '스컬 크러셔'], ['skull press', '스컬 프레스'],
  ['reverse fly', '리버스 플라이'], ['pec deck', '펙덱'], ['chest fly', '체스트 플라이'],
  ['box jump', '박스 점프'], ['bear crawl', '베어 크롤'], ['butt-ups', '버트업'],
  ['burpee', '버피'], ['battling ropes', '배틀 로프'], ['jump rope', '줄넘기'],
  ['stationary bike', '실내 자전거'], ['elliptical machine', '일립티컬'],
  ['upper body ergometer', '상체 에르고미터'], ['skierg machine', '스키에르그'],
  ['stepmill machine', '스텝밀'], ['sled machine', '슬레드 머신'],
  ['rectus femoris', '대퇴직근'], ['pectoralis major', '대흉근'], ['piriformis', '이상근'],
  ['hip flexor', '고관절 굴곡근'], ['adductor', '내전근'], ['abductor', '외전근'],
  ['rotator cuff', '회전근개'], ['achilles tendon', '아킬레스건'],
  ['full range of motion', '풀 가동범위'],
  ['single arm', '원암'], ['one arm', '원암'], ['one hand', '원핸드'], ['one leg', '원레그'],
  ['close-grip', '클로즈그립'], ['wide-grip', '와이드그립'], ['reverse-grip', '리버스그립'],
  ['clean-grip', '클린그립'], ['close grip', '클로즈그립'], ['wide grip', '와이드그립'], ['reverse grip', '리버스그립'],
  ['behind the neck', '비하인드 넥'], ['behind head', '비하인드 헤드'], ['over head', '오버헤드'],
  ['romanian deadlift', '루마니안 데드리프트'], ['stiff leg deadlift', '스티프 레그 데드리프트'],
  ['bench press', '벤치프레스'], ['chest press', '체스트 프레스'], ['leg press', '레그프레스'],
  ['shoulder press', '숄더 프레스'], ['military press', '밀리터리 프레스'],
  ['overhead press', '오버헤드 프레스'], ['push press', '푸시 프레스'],
  ['lat pulldown', '랫풀다운'], ['straight arm pulldown', '스트레이트 암 풀다운'],
  ['triceps pushdown', '트라이셉스 푸시다운'], ['leg extension', '레그 익스텐션'],
  ['leg curl', '레그 컬'], ['calf raise', '카프 레이즈'], ['lateral raise', '레터럴 레이즈'],
  ['front raise', '프론트 레이즈'], ['rear delt', '리어 델트'], ['face pull', '페이스 풀'],
  ['hip thrust', '힙 쓰러스트'], ['glute bridge', '글루트 브리지'],
  ['good morning', '굿모닝'], ['split squat', '스플릿 스쿼트'], ['sissy squat', '시시 스쿼트'],
  ['goblet squat', '고블릿 스쿼트'], ['hack squat', '핵 스쿼트'],
  ['bent over', '벤트오버'], ['upright row', '업라이트 로우'], ['seated row', '시티드 로우'],
  ['t-bar row', '티바 로우'], ['pendlay row', '펜들레이 로우'],
  ['hammer curl', '해머 컬'], ['preacher curl', '프리처 컬'], ['spider curl', '스파이더 컬'],
  ['concentration curl', '컨센트레이션 컬'], ['wrist curl', '리스트 컬'],
  ['skull crusher', '스컬 크러셔'], ['triceps extension', '트라이셉스 익스텐션'],
  ['russian twist', '러시안 트위스트'], ['mountain climber', '마운틴 클라이머'],
  ['jumping jack', '점핑 잭'], ['high knee', '하이 니'], ['battle rope', '배틀 로프'],
  ['sit-up', '싯업'], ['sit up', '싯업'], ['push-up', '푸시업'], ['push up', '푸시업'],
  ['pull-up', '풀업'], ['pull up', '풀업'], ['chin-up', '친업'], ['chin up', '친업'],
  ['muscle up', '머슬업'], ['side bend', '사이드 벤드'], ['leg raise', '레그 레이즈'],
  ['knee raise', '니 레이즈'], ['ab rollout', 'AB 롤아웃'],
  ['barbell', '바벨'], ['dumbbell', '덤벨'], ['kettlebell', '케틀벨'],
  ['smith machine', '스미스 머신'], ['cable', '케이블'], ['resistance band', '밴드'],
  ['band', '밴드'], ['medicine ball', '메디신볼'], ['exercise ball', '짐볼'], ['stability ball', '짐볼'],
  ['bosu ball', '보수볼'], ['ez barbell', 'EZ바'], ['olympic barbell', '올림픽 바벨'],
  ['trap bar', '트랩바'], ['leverage machine', '머신'], ['lever', '머신'], ['machine', '머신'],
  ['body weight', '맨몸'], ['bodyweight', '맨몸'], ['weighted', '중량'], ['assisted', '어시스트'],
  ['incline', '인클라인'], ['decline', '디클라인'], ['standing', '스탠딩'],
  ['seated', '시티드'], ['lying', '라잉'], ['hanging', '행잉'], ['kneeling', '니링'],
  ['prone', '프론'], ['supine', '수파인'], ['alternating', '얼터네이팅'], ['alternate', '얼터네이트'],
  ['backward', '백워드'], ['forward', '포워드'], ['reverse', '리버스'], ['lateral', '레터럴'], ['front', '프론트'], ['rear', '리어'],
  ['overhead', '오버헤드'], ['straight', '스트레이트'], ['cross body', '크로스 바디'],
  ['deadlift', '데드리프트'], ['squat', '스쿼트'], ['lunge', '런지'], ['step-up', '스텝업'],
  ['step up', '스텝업'], ['row', '로우'], ['pulldown', '풀다운'], ['pull down', '풀다운'],
  ['press', '프레스'], ['fly', '플라이'], ['raise', '레이즈'], ['curl', '컬'],
  ['extension', '익스텐션'], ['flexion', '플렉션'], ['adduction', '어덕션'], ['abduction', '어브덕션'],
  ['crunch', '크런치'], ['plank', '플랭크'], ['dip', '딥스'], ['shrug', '슈러그'],
  ['rotation', '로테이션'], ['twist', '트위스트'], ['stretch', '스트레칭'],
  ['walk', '워크'], ['run', '러닝'], ['jumps', '점프'], ['jump', '점프'], ['sprint', '스프린트'],
  ['chest', '체스트'], ['shoulder', '숄더'], ['biceps', '바이셉스'], ['bicep', '바이셉스'],
  ['triceps', '트라이셉스'], ['tricep', '트라이셉스'], ['wrist', '리스트'],
  ['forearm', '포어암'], ['back', '백'], ['lat', '랫'], ['leg', '레그'], ['calves', '카프'],
  ['calf', '카프'], ['hamstring', '햄스트링'], ['quadriceps', '쿼드'], ['quad', '쿼드'],
  ['gluteus', '둔근'], ['glutes', '둔근'], ['glute', '글루트'], ['hips', '힙'], ['hip', '힙'],
  ['knees', '무릎'], ['knee', '니'], ['ankles', '발목'], ['ankle', '앵클'], ['neck', '넥'],
  ['arms', '양팔'], ['arm', '암'], ['hands', '양손'], ['hand', '핸드'], ['legs', '다리'],
  ['rope', '로프'], ['towel', '수건'], ['v-bar', 'V바'], ['bar', '바'], ['bench', '벤치'],
  ['floor', '플로어'], ['rack', '랙'], ['step', '스텝'], ['heel', '힐'], ['toe', '토'],
  ['high', '하이'], ['low', '로우'], ['narrow', '내로우'], ['wide', '와이드'],
  ['single', '싱글'], ['double', '더블'], ['two', '투'], ['both', '양쪽'],
  ['horizontal', '수평'], ['vertical', '수직'], ['circular', '서클'], ['twisting', '트위스팅'],
  ['fixed', '고정'], ['motion', '모션'], ['balance', '밸런스'], ['board', '보드'],
  ['male', '남성'], ['female', '여성'], ['version', '버전'],
  ['clean', '클린'], ['snatch', '스내치'], ['thruster', '스러스터'], ['skier', '스키어'],
  ['zercher', '저처'], ['jefferson', '제퍼슨'], ['bradford', '브래드포드'],
  ['guillotine', '길로틴'], ['arnold', '아놀드'], ['zottman', '조트만'],
  ['smith', '스미스'], ['hammer', '해머'], ['grip', '그립'], ['sled', '슬레드'],
  ['wall', '벽'], ['parallel', '패러럴'], ['pushdown', '푸시다운'], ['push', '푸시'],
  ['dips', '딥스'], ['bridge', '브리지'], ['inverse', '인버스'], ['attachment', '어태치먼트'],
  ['support', '서포트'], ['lower', '로워'], ['upper', '어퍼'], ['lift', '리프트'],
  ['blaster', '블라스터'], ['planche', '플란체'], ['inverted', '인버티드'],
  ['suspended', '서스펜디드'], ['bent-over', '벤트오버'], ['bent', '벤트'],
  ['behind', '비하인드'], ['palm', '팜'], ['tap', '탭'], ['cross', '크로스'],
  ['donkey', '동키'], ['curls', '컬'], ['elbow', '엘보'], ['neutral', '뉴트럴'],
  ['kick', '킥'], ['hyperextension', '하이퍼익스텐션'], ['hang', '행'], ['jerk', '저크'],
  ['swing', '스윙'], ['bars', '바'], ['walking', '워킹'], ['circles', '서클'],
  ['archer', '아처'], ['quads', '쿼드'], ['head', '헤드'], ['drop', '드롭'],
  ['squatting', '스쿼팅'], ['pose', '포즈'], ['chair', '체어'], ['extended', '익스텐디드'],
  ['raised', '레이즈드'], ['stance', '스탠스'], ['twisted', '트위스티드'],
  ['french', '프렌치'], ['plyo', '플라이오'], ['frog', '프로그'], ['chin', '친'],
  ['half', '하프'], ['oblique', '오블리크'], ['scapula', '견갑골'], ['windmill', '윈드밀'],
  ['flat', '플랫'], ['pelvic', '펠빅'], ['tilt', '틸트'], ['reach', '리치'],
  ['self', '셀프'], ['raises', '레이즈'], ['basic', '베이직'], ['bicycle', '바이시클'],
  ['side', '사이드'], ['inner', '이너'], ['speed', '스피드'], ['stiff', '스티프'],
  ['rocking', '로킹'], ['squeeze', '스퀴즈'], ['isometric', '아이소메트릭'],
  ['handstand', '핸드스탠드'], ['inchworm', '인치웜'], ['pistol', '피스톨'],
  ['landmine', '랜드마인'], ['slam', '슬램'], ['power', '파워'], ['olympic', '올림픽'],
]

const escaped = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export function koreanExerciseName(name) {
  if (!name) return ''
  const source = String(name).trim()
  const exact = EXACT[source.toLowerCase()]
  if (exact) return exact

  let translated = source.toLowerCase().replaceAll('в°', '°')
  for (const [english, korean] of PHRASES) {
    translated = translated.replace(new RegExp(`\\b${escaped(english)}\\b`, 'g'), korean)
  }
  const cleaned = translated
    .replace(/\(with ([^)]+)\)/g, '($1 사용)')
    .replace(/\bwith\s+/g, '· ')
    .replace(/\bon\s+/g, '· ')
    .replace(/\band\b/g, '앤')
    .replace(/\bto\b/g, '→')
    .replace(/\bfrom\b/g, '')
    .replace(/\b(?:the|a|of)\b/g, '')
    .replace(/\bv\.\s*(\d+)\b/g, '버전 $1')
    .replace(/\s+/g, ' ')
    .replace(/\s+([),])/g, '$1')
    .replace(/\(\s+/g, '(')
    .trim()

  // A half-translated title is harder to understand than the canonical English name.
  // Keep rare eponyms and unusual dataset labels intact until they receive an exact Korean
  // term above; common catalogue names still resolve fully to Korean.
  return /[a-z]{2,}/i.test(cleaned.replace(/\b(?:AB|EZ|JM|RDL|TRX)\b/gi, '')) ? source : cleaned
}
