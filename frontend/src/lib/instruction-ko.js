// Conservative wording cleanup for the generated Korean exercise-instruction pack.
// The source pack is regenerated from the upstream dataset, so corrections live here instead
// of being overwritten on the next dataset refresh.  These substitutions only target wording
// that is unambiguously mistranslated or unnatural in Korean exercise guidance.

const REPLACEMENTS = [
  ['등을 바닥에 누워', '바닥에 등을 대고 누워'],
  ['등을 땅에 대고', '바닥에 등을 대고'],
  ['등을 바닥에 대고', '바닥에 등을 대고'],
  ['선다합니다', '섭니다'],
  ['마주봅시다', '마주 보고 앉습니다'],
  ['어깨날', '견갑골'],
  ['어깨 뼈', '견갑골'],
  ['광등근', '광배근'],
  ['넓적다리', '허벅지'],
  ['발꿈치', '뒤꿈치'],
  ['역손 그립', '언더그립'],
  ['가중치', '중량'],
  ['지면', '바닥'],
  ['땅에 평평하게', '바닥에'],
  ['땅에 붙', '바닥에 붙'],
  ['땅에서', '바닥에서'],
  ['땅으로', '바닥으로'],
  ['땅 쪽', '바닥 쪽'],
  ['땅 방향', '바닥 방향'],
  ['땅과 평행', '바닥과 평행'],
  ['복부를 활성화하고', '복부에 힘을 주고'],
  ['복근을 활성화하고', '복근에 힘을 주고'],
  ['코어를 활성화하고', '코어에 힘을 주고'],
  ['코어를 활성화한', '코어에 힘을 준'],
  ['코어를 활성화하여', '코어에 힘을 주고'],
  ['햄스트링을 활성화하여', '햄스트링에 힘을 주어'],
  ['둔근을 활성화하여', '엉덩이에 힘을 주어'],
  ['전완근을 활성화하면서', '전완근에 힘을 주면서'],
  ['근육을 작동시키기 위해', '근육에 힘을 주기 위해'],
  ['맨 위에서', '동작의 최고 지점에서'],
  ['최상단에서', '동작의 최고 지점에서'],
  ['최하단에서', '동작의 최저 지점에서'],
  ['꼭짓점에서', '동작의 최고 지점에서'],
  ['시작 위치', '시작 자세'],
  ['원래 위치', '시작 자세'],
  ['처음 위치', '시작 자세'],
]

export function polishKoreanInstruction(step) {
  let value = String(step || '')
  for (const [from, to] of REPLACEMENTS) value = value.replaceAll(from, to)
  return value.replace(/\s{2,}/g, ' ').trim()
}

