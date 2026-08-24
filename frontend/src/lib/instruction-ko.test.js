import { describe, expect, it } from 'vitest'
import { polishKoreanInstruction } from './instruction-ko.js'

describe('Korean instruction wording', () => {
  it('cleans up common machine-translated anatomy and posture terms', () => {
    expect(polishKoreanInstruction('등을 바닥에 대고 누워 코어를 활성화하고 어깨날을 조입니다.'))
      .toBe('바닥에 등을 대고 누워 코어에 힘을 주고 견갑골을 조입니다.')
  })

  it('fixes known malformed generated wording', () => {
    expect(polishKoreanInstruction('발을 어깨너비로 벌리고 선다합니다.'))
      .toBe('발을 어깨너비로 벌리고 섭니다.')
  })
})

