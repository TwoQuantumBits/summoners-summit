import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "寒天之钉杯",
  type: "全民积分赛",
  gameVersion: "4.1",
  stages: [
    {
      name: "16进8",
      rules: [
        "BO3",
        "征服",
        ["禁用阵容", "对阵双方各准备3套阵容，禁用对手一套阵容"],
      ],
      parts: [
        {
          name: "DAY1",
          date: "2023-10-15",
          matches: [
            {
              playerA: "越过寒冷",
              playerB: "胡桃桃大魔王",
              video: "https://www.bilibili.com/video/BV1TG41127C9",
              banned: [
                {
                  playerACharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBCharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                },
              ],
              games: [
                {
                  playerACharacters: ["申鹤", "雷电将军", "重云"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 1,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "天守阁": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 1,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "天守阁": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "赌徒的耳环": 1,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "zhxx",
              playerB: "叶叁伍",
              video: "https://www.bilibili.com/video/BV1ej411x7rG",
              banned: [
                {
                  playerACharacters: ["迪希雅", "诺艾尔", "荒泷一斗"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "提米": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "提米": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-10-16",
          matches: [
            {
              playerA: "桔梗",
              playerB: "铃紫",
              video: "https://www.bilibili.com/video/BV1Ch4y1q7hV",
              banned: [
                {
                  playerACharacters: ["迪希雅", "诺艾尔", "荒泷一斗"],
                  playerBCharacters: ["诺艾尔", "荒泷一斗", "迪希雅"],
                },
              ],
              games: [
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "酒渍船帽": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["雷电将军", "重云", "申鹤"],
                  playerBActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "重云"],
                  playerAActions: defineActions({
                    "贯月矢": 1,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["雷电将军", "重云", "申鹤"],
                  playerBActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "重云"],
                  playerAActions: defineActions({
                    "贯月矢": 1,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["菲谢尔", "愚人众·火之债务处理人", "纯水精灵·洛蒂娅"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "绝云锅巴": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "一不小欣z",
              playerB: "Elaina",
              video: "https://www.bilibili.com/video/BV1Yp4y1T7i9",
              banned: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "绝缘之旗印": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "便携营养袋": 1,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "菲谢尔"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "鸣神大社": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "重云"],
                  playerAActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "星天之兆": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "自由的新风": 1,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY3",
          date: "2023-10-17",
          matches: [
            {
              playerA: "唐傀",
              playerB: "萌萌哒的梦酱",
              video: "https://www.bilibili.com/video/BV1Yw4116774",
              banned: [
                {
                  playerACharacters: ["诺艾尔", "芭芭拉", "荒泷一斗"],
                  playerBCharacters: ["珊瑚宫心海", "荒泷一斗", "诺艾尔"],
                },
              ],
              games: [
                {
                  playerACharacters: ["凝光", "迪希雅", "荒泷一斗"],
                  playerAActions: defineActions({
                    "狼的末路": 1,
                    "钟剑": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["雷电将军", "申鹤", "迪奥娜"],
                  playerBActions: defineActions({
                    "猫爪冰摇": 1,
                    "王下近侍": 2,
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "须弥城": 2,
                    "黄金屋": 2,
                    "立本": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "藏锋何处": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["岩盔丘丘王", "纯水精灵·洛蒂娅", "荒泷一斗"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "赌徒的耳环": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "深渊的呼唤": 2,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["雷电将军", "申鹤", "迪奥娜"],
                  playerBActions: defineActions({
                    "猫爪冰摇": 1,
                    "王下近侍": 2,
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "须弥城": 2,
                    "黄金屋": 2,
                    "立本": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "藏锋何处": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "明暗螺旋",
              playerB: "Glyou_HZ",
              video: "https://www.bilibili.com/video/BV1gB4y1o7nE",
              banned: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["重云", "雷泽", "北斗"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "珊瑚宫": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "珊瑚宫": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "护法之誓": 1,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "珊瑚宫": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "护法之誓": 1,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["申鹤", "雷电将军", "重云"],
                  playerBActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY4",
          date: "2023-10-18",
          matches: [
            {
              playerA: "Aurora",
              playerB: "可可酱",
              video: "https://www.bilibili.com/video/BV1bM41197iw",
              banned: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "绝缘之旗印": 1,
                    "酒渍船帽": 2,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "须弥城": 2,
                    "派蒙": 1,
                    "阿圆": 1,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "绝云锅巴": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "绝缘之旗印": 1,
                    "酒渍船帽": 2,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "须弥城": 2,
                    "派蒙": 1,
                    "阿圆": 1,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "赌徒的耳环": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "鸣神大社": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "纳西妲"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 2,
                    "一掷乾坤": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "赌徒的耳环": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "鸣神大社": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "夜鹰",
              playerB: "蛋黄汐夕",
              video: "https://www.bilibili.com/video/BV1Ah4y1B7HQ",
              banned: [
                {
                  playerACharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "绝缘之旗印": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["神里绫华", "宵宫", "申鹤"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "常九爷": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "雷与永恒": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "温妮莎传奇": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "蒙德土豆饼": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "绝缘之旗印": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["珊瑚宫心海", "荒泷一斗", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "雷与永恒": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "护法之誓": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
