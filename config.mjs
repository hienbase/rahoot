export const WEBSOCKET_PUBLIC_URL = "https://rahoot.vietcombit.vn"
export const WEBSOCKET_SERVER_PORT = 5551

const QUIZZ_CONFIG = {
  password: "Brokervang*0",
  subject: "Bộ câu hỏi về kỹ năng mềm",
  questions: [
    {
      question: "Kỹ năng mềm là gì?",
      answers: [
        "Những kỹ năng về máy tính.",
        "Những kỹ năng giao tiếp, làm việc nhóm và quản lý thời gian.",
        "Kỹ năng liên quan đến phần mềm máy tính.",
        "Các kỹ năng giải quyết bài tập toán học.",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "Điều nào dưới đây là ví dụ của kỹ năng giao tiếp hiệu quả?",
      answers: [
        "Nói thật nhanh để người khác không kịp phản bác.", 
        "Lắng nghe người khác và phản hồi phù hợp.", 
        "Nói to để người khác không ngắt lời bạn.", 
        "Chỉ nói những gì bạn thích, không cần quan tâm ý kiến người khác."],
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=500&auto=webp",
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "Kỹ năng quản lý thời gian tốt giúp bạn đạt được điều gì?",
      answers: ["Tăng hiệu quả công việc và giảm căng thẳng.", 
        "Làm được nhiều việc cùng lúc mà không cần nghỉ ngơi.", 
        "Luôn hoàn thành công việc trước hạn.", "Không bao giờ cần làm việc nhóm."],
      solution: 0,
      cooldown: 5,
      time: 15,
    },
    {
      question: "Điều nào không phải là lợi ích của làm việc nhóm?",
      answers: [
        "Cải thiện khả năng giao tiếp.",
        "Giảm áp lực công việc cá nhân.",
        "Dễ dàng đổ lỗi cho người khác khi thất bại.",
        "Tăng cường sự sáng tạo thông qua trao đổi ý tưởng.",
      ],
      solution: 2,
      cooldown: 5,
      time: 15,
    },
    {
      question: "Đâu là cách tốt nhất để giải quyết xung đột trong nhóm?",
      answers: [
        "Né tránh xung đột để mọi thứ tự ổn định.",
        "Thảo luận và lắng nghe ý kiến của tất cả các thành viên.",
        "Đưa ra quyết định mà không cần hỏi ý kiến nhóm.",
        "Chọn cách giải quyết nhanh nhất, dù có ai đó không đồng ý.",
      ],
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=500&auto=webp",
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "Kỹ năng nào giúp bạn tăng khả năng thích nghi trong công việc?",
      answers: [
        "Suy nghĩ tiêu cực khi gặp thử thách.",
        "Linh hoạt trong tư duy và cách làm việc.",
        "Từ chối mọi thay đổi trong quy trình làm việc.",
        "Chỉ làm theo cách cũ dù có vấn đề.",
      ],
      image:
        "https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?q=80&w=500&auto=webp",
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "Đâu là yếu tố quan trọng khi thuyết trình trước đám đông?",
      answers: [
        "Tránh giao tiếp bằng mắt với khán giả.",
        "Sử dụng ngôn ngữ cơ thể để truyền tải thông điệp.",
        "Đọc chính xác từ kịch bản mà không thay đổi.",
        "Nói càng nhanh càng tốt để tiết kiệm thời gian.",
      ],
      image:
        "https://images.unsplash.com/photo-1582736317407-371893d9e146?q=80&w=500&auto=webp",
      solution: 1,
      cooldown: 5,
      time: 15,
    },
  ],
}

// DONT CHANGE
export const GAME_STATE_INIT = {
  started: false,
  players: [],
  playersAnswer: [],
  manager: null,
  room: null,
  currentQuestion: 0,
  roundStartTime: 0,
  ...QUIZZ_CONFIG,
}
