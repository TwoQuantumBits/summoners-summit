import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "寒天之钉杯",
  type: "全民积分赛",
  gameVersion: "4.2",
  stages: [
    {
      name: "16进8",
      rules: [
        "BO3",
        "征服",
        ["禁用阵容", "对阵双方各准备3套阵容，禁用对手一套阵容"],
        ["可重复角色", "每名选手的3套阵容至少包含8张不同角色牌"],
      ],
      parts: [
        {
          name: "DAY1下午场",
          date: "2023-11-26",
          matches: [
            {
              playerA: "霓特",
              playerB: "pupa",
              video: "https://www.bilibili.com/video/BV1SN4y117sP",
              banned: [
                {
                  playerACharacters: ["班尼特", "愚人众·火之债务处理人", "无相之雷"],
                  playerBCharacters: ["愚人众·火之债务处理人", "班尼特", "无相之雷"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "酒渍船帽": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
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
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  playerBCharacters: ["神里绫华", "宵宫", "申鹤"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 1,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "雷与永恒": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "温妮莎传奇": 2,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "螳螂虾",
              playerB: "majikohanatan",
              video: "https://www.bilibili.com/video/BV1A64y17764",
              banned: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["莫娜", "纳西妲", "妮露"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "流浪者", "莫娜"],
                  playerAActions: defineActions({
                    "千夜浮梦": 2,
                    "狼的末路": 1,
                    "赌徒的耳环": 1,
                    "教官的帽子": 2,
                    "派蒙": 2,
                    "卯师傅": 1,
                    "立本": 2,
                    "刘苏": 1,
                    "迪娜泽黛": 2,
                    "寻宝仙灵": 1,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "大梦的曲调": 2,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "蒙德土豆饼": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["可莉", "刻晴", "班尼特"],
                  playerBActions: defineActions({
                    "冒险憧憬": 1,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "炽烈的炎之魔女": 2,
                    "璃月港口": 2,
                    "须弥城": 2,
                    "风龙废墟": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["重云", "雷泽", "北斗"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "愉舞欢游": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "重攻击": 2,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "蒙德土豆饼": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["可莉", "刻晴", "班尼特"],
                  playerBActions: defineActions({
                    "冒险憧憬": 1,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "炽烈的炎之魔女": 2,
                    "璃月港口": 2,
                    "须弥城": 2,
                    "风龙废墟": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["重云", "雷泽", "北斗"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "愉舞欢游": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "重攻击": 2,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "蒙德土豆饼": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "酒渍船帽": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "DAY1晚间场",
          date: "2023-11-26",
          matches: [
            {
              playerA: "雪国Ink",
              playerB: "Tonbo",
              video: "https://www.bilibili.com/video/BV1ob4y1T7zH",
              banned: [
                {
                  playerACharacters: ["迪希雅", "诺艾尔", "荒泷一斗"],
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "可莉", "刻晴"],
                  playerAActions: defineActions({
                    "冒险憧憬": 1,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "炽烈的炎之魔女": 2,
                    "璃月港口": 2,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "风龙废墟": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBActions: defineActions({
                    "光辉的季节": 1,
                    "祭礼残章": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "天守阁": 2,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：疗愈之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBActions: defineActions({
                    "光辉的季节": 1,
                    "祭礼残章": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "天守阁": 2,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：疗愈之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["行秋", "芭芭拉", "诺艾尔"],
                  playerBActions: defineActions({
                    "光辉的季节": 1,
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "天守阁": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "风龙废墟": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：疗愈之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "莫莉安",
              playerB: "星凌尘",
              video: "https://www.bilibili.com/video/BV1H34y1F7NY",
              banned: [
                {
                  playerACharacters: ["优菈", "莫娜", "流浪者"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "幸运儿银冠": 1,
                    "绝缘之旗印": 1,
                    "海染砗磲": 1,
                    "酒渍船帽": 1,
                    "沉沦之心": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "琴音之诗": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "无常之面": 1,
                    "海染砗磲": 2,
                    "酒渍船帽": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "幸运儿银冠": 1,
                    "绝缘之旗印": 1,
                    "海染砗磲": 1,
                    "酒渍船帽": 1,
                    "沉沦之心": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "琴音之诗": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBActions: defineActions({
                    "星天的花雨": 2,
                    "赌徒的耳环": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：疗愈之水": 2,
                    "草与智慧": 2,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "快快缝补术": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-11-27",
          matches: [
            {
              playerA: "空门天",
              playerB: "止",
              video: "https://www.bilibili.com/video/BV1494y1n7Xx",
              banned: [
                {
                  playerACharacters: ["赛诺", "多莉", "白术"],
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                },
              ],
              games: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "参量质变仪": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 2,
                    "温妮莎传奇": 2,
                    "拳力斗技！": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "海染砗磲": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "沉沦之心": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "海染砗磲": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "饭团Finc",
              playerB: "葬送の鏡蓮華で",
              video: "https://www.bilibili.com/video/BV1464y177g9",
              banned: [
                {
                  playerACharacters: ["莫娜", "流浪者", "优菈"],
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                },
              ],
              games: [
                {
                  playerACharacters: ["无相之雷", "班尼特", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "风龙废墟": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "参量质变仪": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "换班时间": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "菲谢尔"],
                  playerBActions: defineActions({
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "沙王的投影": 1,
                    "酒渍船帽": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "酒渍船帽": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "菲谢尔"],
                  playerBActions: defineActions({
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "沙王的投影": 1,
                    "酒渍船帽": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "A",
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
