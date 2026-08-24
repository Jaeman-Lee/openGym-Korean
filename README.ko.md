# openGym 한국어판

openGym 한국어판은 [DuarteSantos8/openGym](https://gitlab.com/DuarteSantos8/opengym)을 바탕으로 만든 비공식 한국어 현지화 버전입니다. 원작의 GNU AGPL v3 라이선스와 저작권 고지를 그대로 유지합니다.

## Android 설치

최신 APK는 이 저장소의 [Releases](../../releases/latest)에서 내려받을 수 있습니다.

1. 최신 릴리스의 `openGym-ko-*.apk`를 휴대폰에 다운로드합니다.
2. 다운로드한 APK를 열고, Android가 요청하면 해당 브라우저 또는 파일 앱에 한해 `출처를 알 수 없는 앱 설치`를 허용합니다.
3. 설치가 끝나면 허용했던 설치 권한을 다시 끕니다.

앱의 패키지명은 `ch.duartesantos.opengym.ko`이므로 원본 openGym과 나란히 설치할 수 있습니다. 최소 지원 버전은 Android 6.0입니다.

## 한국어 현지화 범위

- 메뉴, 온보딩, 설정, 루틴, 운동 기록 등 전체 UI 문구
- 국내 헬스장에서 사용하는 운동명과 용어
- 한국어 운동명 검색
- 기본 밀기·당기기·하체 루틴의 한국어 이름
- 기계 번역에서 자주 발생하는 운동 설명 오류 보정

오역 가능성이 높은 희귀 운동명은 무리하게 번역하지 않고 원문을 유지합니다.

## 안전성과 검증

- APK는 전용 Android 릴리스 키로 서명합니다.
- 모든 릴리스에는 SHA-256 체크섬 파일을 함께 제공합니다.
- GitHub Actions가 테스트, 의존성 감사, Android 빌드와 APK 서명 검증을 수행합니다.
- 공개 릴리스에는 GitHub 빌드 출처 증명(attestation)을 생성합니다.
- 앱은 카메라, 마이크, 위치, 연락처 권한을 요청하지 않습니다.

다운로드한 파일의 체크섬은 다음처럼 확인할 수 있습니다.

```bash
sha256sum -c openGym-ko-v1.2.9-ko.1.apk.sha256
```

## 데이터

독립 실행형 Android 앱의 운동 기록과 체중 데이터는 휴대폰에 저장됩니다. 앱 삭제 전에는 설정에서 JSON 백업을 내보내는 것이 좋습니다.

## 라이선스와 원작

- 원작: [openGym on GitLab](https://gitlab.com/DuarteSantos8/opengym)
- 원작자: Duarte Santos 및 openGym 기여자
- 라이선스: [GNU AGPL v3](LICENSE)
- 운동 미디어 관련 고지: [NOTICE.md](NOTICE.md)

이 저장소는 원작자의 공식 한국어 배포판이 아닙니다. 문제 제보는 이 저장소의 Issues를 이용해 주세요.
