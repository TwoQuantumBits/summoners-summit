import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "共鸣杯",
  type: "全民积分赛",
  gameVersion: "4.3",
  stages: [
    {
      name: "16进8",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2024-01-07",
          matches: [
            {
              playerA: "fc",
              playerB: "昨夜风",
              video: "https://www.bilibili.com/video/BV1Ge411e7xG?p=1",
              banned: [
                {
                  playerACharacters: ["莫娜", "优菈", "流浪者"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["莫娜", "优菈", "流浪者"],
                  starter: "B",
                  winner: "B",
                  video: "https://www.bilibili.com/video/BV1Ge411e7xG?p=1",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "B",
                  video: "https://www.bilibili.com/video/BV1Ge411e7xG?p=2",
                },
              ],
            },
            {
              playerA: "大呆瓜",
              playerB: "Sept",
              video: "https://www.bilibili.com/video/BV13W4y1N7e4?p=1",
              banned: [
                {
                  playerACharacters: ["「女士」", "雷音权现", "若陀龙王"],
                  playerBCharacters: ["「女士」", "雷音权现", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerBCharacters: ["琴", "琳妮特", "迪希雅"],
                  starter: "B",
                  winner: "B",
                  video: "https://www.bilibili.com/video/BV13W4y1N7e4?p=1",
                },
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerBCharacters: ["林尼", "菲谢尔", "纳西妲"],
                  starter: "A",
                  winner: "B",
                  video: "https://www.bilibili.com/video/BV13W4y1N7e4?p=2",
                },
              ],
            },
            {
              playerA: "小七",
              playerB: "长安大魔王",
              video: "https://www.bilibili.com/video/BV1UK4y167TF?p=1",
              banned: [
                {
                  playerACharacters: ["夜兰", "「女士」", "雷音权现"],
                  playerBCharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "A",
                  winner: "B",
                  video: "https://www.bilibili.com/video/BV1UK4y167TF?p=1",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["班尼特", "可莉", "刻晴"],
                  starter: "B",
                  winner: "B",
                  video: "https://www.bilibili.com/video/BV1UK4y167TF?p=2",
                },
              ],
            },
            {
              playerA: "木秀",
              playerB: "今天不想吃苹果",
              video: "https://www.bilibili.com/video/BV1Ka4y1m7Fs?p=1",
              banned: [
                {
                  playerACharacters: ["夜兰", "「女士」", "雷音权现"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "若陀龙王", "无相之雷"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "A",
                  video: "https://www.bilibili.com/video/BV1Ka4y1m7Fs?p=1",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "A",
                  winner: "A",
                  video: "https://www.bilibili.com/video/BV1Ka4y1m7Fs?p=2",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2024-01-08",
          matches: [
            {
              playerA: "xxxxxhope",
              playerB: "从不打低端局",
              video: "https://www.bilibili.com/video/BV1xT4y1n7fG",
              banned: [
                {
                  playerACharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "林尼", "纳西妲"],
                  playerBCharacters: ["菲谢尔", "林尼", "纳西妲"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "林尼", "纳西妲"],
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "唐傀",
              playerB: "周正福",
              video: "https://www.bilibili.com/video/BV15g4y1S7Qa",
              banned: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["菲谢尔", "林尼", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "刻晴", "若陀龙王"],
                  playerBCharacters: ["琳妮特", "琴", "迪希雅"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "刻晴", "若陀龙王"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "税慕",
              playerB: "柠柠七喵",
              video: "https://www.bilibili.com/video/BV1Le41127UC",
              banned: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["班尼特", "可莉", "雷音权现"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "林尼", "纳西妲"],
                  playerBCharacters: ["菲谢尔", "林尼", "纳西妲"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["班尼特", "刻晴", "若陀龙王"],
                  playerBCharacters: ["菲谢尔", "林尼", "纳西妲"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "Amadeus",
              playerB: "真实王枝明",
              video: "https://www.bilibili.com/video/BV1Gt4y1o7RY",
              banned: [
                {
                  playerACharacters: ["夜兰", "「女士」", "雷音权现"],
                  playerBCharacters: ["夜兰", "「女士」", "雷音权现"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "林尼", "纳西妲"],
                  playerBCharacters: ["菲谢尔", "林尼", "纳西妲"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["琳妮特", "迪希雅", "琴"],
                  playerBCharacters: ["菲谢尔", "林尼", "纳西妲"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["琳妮特", "迪希雅", "琴"],
                  playerBCharacters: ["流浪者", "莫娜", "优菈"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
