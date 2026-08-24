import { describe, expect, it } from 'vitest'
import { koreanExerciseName } from './exercise-names-ko.js'

describe('Korean exercise names', () => {
  it('uses familiar Korean gym terminology for the starter plan', () => {
    expect(koreanExerciseName('barbell bench press')).toBe('바벨 벤치프레스')
    expect(koreanExerciseName('dumbbell standing overhead press')).toBe('덤벨 스탠딩 오버헤드 프레스')
    expect(koreanExerciseName('sled 45в° leg press')).toBe('45도 레그프레스')
  })

  it('keeps a rare source name intact instead of showing a half-translated title', () => {
    expect(koreanExerciseName('cable thibaudeau kayak row')).toBe('cable thibaudeau kayak row')
  })
})

