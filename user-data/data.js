export const bio = [
  "Java/Kotlin을 사용하여 백엔드 서버를 개발하고 있습니다.",
  "개발에 대한 내용뿐만 아니라 사용자에게 어떠한 경험을 줄 수 있는지 생각하고 토론하는 것을 좋아하며 다같이 만들어 나가는 <b>\"메이커스\"</b>라는 말을 좋아합니다.",
  "항상 컴퓨터 리소스 사용에 대해 생각하며, 가독성과 성능이 상충될 경우 해당 기능이 어떠한 문제를 해결하기 위한 것인지 판단하여 경중을 정해 개발을 하려고 합니다.",
];

export const skills = [
  "Java, Kotlin, SQL",
  "Spring Boot",
  "MySQL, MariaDB",
  "RESTFul API, GraqhQL",
];

export const experience = [
  {
    title: "제네시스랩",
    duration: "2023/03 - 2024/11",
    subtitle: "Backend Engineer",
    projects: [
      {
        name: "정신건강 앱 서버 개발",
        details: [
          '사용자 답변에 따른 정신건강 분석 기능 개선',
          '- DeadLock이 발생하여 트랜잭션 분리 및 재시도 로직 추가',
          '정신건강 분석 모듈 데이터 정합성 검증 기능 개발',
          '- SQL로 모듈내 데이터를 추가 하고 있어 휴먼에러가 발생할 가능성이 존재하여 데이터 검증이 필요.',
          '- Validator를 추상화/다형성을 이용하여 역할과 책임 분리을 하며, 복잡한 검증 로직에 대한 개별 테스트 코드를 작성하기 편하도록 개발.',
          
          '기록하기 기능 개편',
          '- 단순 저장/조회 프로토콜에서 클라이언트 Realm과의 데이터 동기화 방식으로 API 프로토콜 수정',

          '복약알림 기능 및 인앱 결제(애플/구글) 모듈 개발',
        ],
        tags: ["Spring boot", "Kotlin", "MariaDB", "GraphQL"],
      },
      {
        name: "내부 어드민 콘솔 서버 개발",
        details: [
          '응시자 질문 할당 로직 개선',
          '- 불필요한 데이터 조회 제외',
          '- 질문 타입별 Allocator Class 분리',
          '- Allocator 단위 테스트 추가 ',
          '- 약 44만개 데이터 생성/저장 기준 기존  30분 -> 1분'
        ],
        tags: ["Spring boot", "Java", "MariaDB"],
      },
      {
        name: "AI 면접용 OpenAPI 서버 개발",
        details: [
          '외부 서비스와의 연동을 위한 AI면접 API 서버',
          '시도-응답 방식을 이용한 권한 인증',
        ],
        tags: ["Spring boot", "Java", "MariaDB"],
      }
    ],
    icon: "group",
  },
  {
    title: "자이냅스",
    duration: "2022/04 - 2023/02",
    subtitle: "Backend Engineer",
    projects: [
      {
        name: "화차 프로젝트",
        details: [
          '화주사, 주선사, 어드민, 기사앱 CRUD 기능.',
          '각 도메인간의 매칭 기능 개발.',
          'WebFlux, MongoDB를 통한 주문 상태에 따른 웹, 기사앱 SSE Streaming 기능 개발.',
          'Spring Batch, PostgresQL를 이용해 현재 주문들의 현황경고 기능 개발.'
        ],
        tags: ["Spring boot", "Java", "WebFlux", "PostgresQL", "MongoDB"],
      },
      {
        name: "플랫폼 푸시 서버",
        details: [
          '각 서비스에서 발생한 알림 사항들을 사용자에게 실시간 전송 및 로그 저장 서버 개발',
          'SSE를 통한 알림푸시 기능 개발.',
          '각 서비스에서 발생하는 알림을 Java Reflection, AOP로 유연성있는 코드 개발',
        ],
        tags: ["Spring boot", "Java", "RabbitMQ"],
      }
    ],
    icon: "group",
  },
];
