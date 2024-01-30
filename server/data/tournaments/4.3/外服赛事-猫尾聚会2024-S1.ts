import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "Cat's Tail Gathering 2024 S1 ",
  gameVersion: "4.3",
  stages: [
    {
      name: "亚服 Asia",
      rules: {
        numDecks: 3,
        numGames: 3,
        mode: "Duel",
      },
      parts: [
        {
          name: "季军赛 The Third Place Round",
          date: "2024-01-28",
          matches: [
            {
              playerA: "icedtea",
              playerB: "Lp|Dio",
              video: "https://www.youtube.com/watch?v=SmNMVo06goI",
              games: [
                {
                  playerACharacters: ["莫娜", "「女士」", "雷音权现"],
                  playerAActions: defineActions({
                    "悲号回唱": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  playerBActions: defineActions({
                    "光辉的季节": 1,
                    "祭礼残章": 2,
                    "千岩牢固": 2,
                    "花海甘露之光": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "送你一程": 1,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "B",
                  video: "https://www.youtube.com/watch?v=SmNMVo06goI",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=SmNMVo06goI",
                },
                {
                  playerACharacters: ["芭芭拉", "珊瑚宫心海", "凝光"],
                  playerAActions: defineActions({
                    "光辉的季节": 1,
                    "祭礼残章": 1,
                    "将帅兜鍪": 2,
                    "千岩牢固": 2,
                    "花海甘露之光": 2,
                    "天守阁": 2,
                    "桓纳兰那": 1,
                    "蒂玛乌斯": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["「女士」", "雷音权现", "若陀龙王"],
                  playerBActions: defineActions({
                    "悲号回唱": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "化种匣": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=SmNMVo06goI",
                },
              ],
            },
          ],
        },
        {
          name: "决赛 The Final Round",
          date: "2024-01-28",
          matches: [
            {
              playerA: "Komorebi",
              playerB: "meaningless",
              video: "https://www.youtube.com/watch?v=SmNMVo06goI",
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 1,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 1,
                    "卯师傅": 2,
                    "迪娜泽黛": 1,
                    "弥生七月": 2,
                    "化种匣": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "B",
                  video: "https://www.youtube.com/watch?v=SmNMVo06goI",
                },
                {
                  playerACharacters: ["莫娜", "优菈", "流浪者"],
                  playerAActions: defineActions({
                    "千夜浮梦": 1,
                    "盈满之实": 1,
                    "狼的末路": 1,
                    "赌徒的耳环": 2,
                    "教官的帽子": 2,
                    "饰金之梦": 2,
                    "欧庇克莱歌剧院": 2,
                    "蒂玛乌斯": 2,
                    "瓦格纳": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["迪希雅", "琴", "琳妮特"],
                  playerBActions: defineActions({
                    "如影流露的冷刃": 1,
                    "祭礼剑": 1,
                    "风鹰剑": 1,
                    "裁叶萃光": 1,
                    "千岩牢固": 2,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 2,
                    "派蒙": 1,
                    "瓦格纳": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=SmNMVo06goI",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "悲号回唱": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["「女士」", "雷音权现", "莫娜"],
                  playerBActions: defineActions({
                    "悲号回唱": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "卯师傅": 1,
                    "立本": 2,
                    "迪娜泽黛": 1,
                    "弥生七月": 2,
                    "化种匣": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=SmNMVo06goI",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "欧服 Europe",
      rules: {
        numDecks: 3,
        numGames: 3,
        mode: "Duel",
      },
      parts: [
        {
          name: "季军赛 The Third Place Round",
          date: "2024-01-29",
          matches: [
            {
              playerA: "Sherry",
              playerB: "Sumi",
              video: "https://www.youtube.com/watch?v=8g00B_kmI5Y&t=2802s",
              games: [
                {
                  playerACharacters: ["班尼特", "雷音权现", "若陀龙王"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "悲号回唱": 1,
                    "晦朔千引": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 2,
                    "风龙废墟": 2,
                    "欧庇克莱歌剧院": 1,
                    "弥生七月": 2,
                    "化种匣": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["林尼", "菲谢尔", "纳西妲"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 1,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "A",
                  video: "https://www.twitch.tv/videos/2046325415",
                },
                {
                  playerACharacters: ["芭芭拉", "珊瑚宫心海", "凝光"],
                  playerAActions: defineActions({
                    "光辉的季节": 1,
                    "祭礼残章": 2,
                    "千岩牢固": 2,
                    "花海甘露之光": 2,
                    "璃月港口": 2,
                    "天守阁": 1,
                    "珊瑚宫": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "万家灶火": 1,
                    "裁定之时": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                  playerBActions: defineActions({
                    "千夜浮梦": 1,
                    "图莱杜拉的回忆": 1,
                    "狼的末路": 1,
                    "赌徒的耳环": 2,
                    "教官的帽子": 2,
                    "饰金之梦": 2,
                    "欧庇克莱歌剧院": 2,
                    "蒂玛乌斯": 2,
                    "瓦格纳": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                  video: "https://www.youtube.com/watch?v=8g00B_kmI5Y&t=2802s",
                },
                {
                  playerACharacters: ["迪希雅", "琴", "琳妮特"],
                  playerAActions: defineActions({
                    "如影流露的冷刃": 1,
                    "祭礼剑": 1,
                    "风鹰剑": 1,
                    "裁叶萃光": 1,
                    "千岩牢固": 2,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 1,
                    "派蒙": 2,
                    "瓦格纳": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["夜兰", "「女士」", "雷音权现"],
                  playerBActions: defineActions({
                    "悲号回唱": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=8g00B_kmI5Y&t=2802s",
                },
              ],
            },
          ],
        },
        {
          name: "决赛 The Final Round",
          date: "2024-01-29",
          matches: [
            {
              playerA: "莉莉芭",
              playerB: "Hattie",
              video: "https://www.youtube.com/watch?v=8g00B_kmI5Y&t=2802s",
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "化种匣": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=8g00B_kmI5Y&t=2802s",
                },
                {
                  playerACharacters: ["雷音权现", "莫娜", "「女士」"],
                  playerAActions: defineActions({
                    "悲号回唱": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "卯师傅": 2,
                    "立本": 1,
                    "弥生七月": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["达达利亚", "「女士」", "雷音权现"],
                  playerBActions: defineActions({
                    "悲号回唱": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "自由的新风": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "愚人众的阴谋": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=8g00B_kmI5Y&t=2802s",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "美服 America",
      rules: {
        numDecks: 3,
        numGames: 3,
        mode: "Duel",
      },
      parts: [
        {
          name: "季军赛 The Third Place Round",
          date: "2024-01-29",
          matches: [
            {
              playerA: "長野原花火",
              playerB: "Pilot",
              video: "https://www.youtube.com/watch?v=96KiWW6bmcA",
              games: [
                {
                  playerACharacters: ["莫娜", "流浪者", "优菈"],
                  playerAActions: defineActions({
                    "千夜浮梦": 1,
                    "图莱杜拉的回忆": 1,
                    "狼的末路": 1,
                    "赌徒的耳环": 2,
                    "教官的帽子": 2,
                    "饰金之梦": 2,
                    "欧庇克莱歌剧院": 2,
                    "派蒙": 2,
                    "蒂玛乌斯": 1,
                    "瓦格纳": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                  }),
                  playerBCharacters: ["莱依拉", "达达利亚", "芭芭拉"],
                  playerBActions: defineActions({
                    "光辉的季节": 1,
                    "阿莫斯之弓": 1,
                    "将帅兜鍪": 2,
                    "千岩牢固": 2,
                    "花海甘露之光": 2,
                    "天守阁": 2,
                    "蒂玛乌斯": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之水": 1,
                    "元素共鸣：愈疗之水": 1,
                    "交给我吧！": 1,
                    "白垩之术": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=96KiWW6bmcA",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "沙王的投影": 2,
                    "饰金之梦": 2,
                    "花海甘露之光": 1,
                    "欧庇克莱歌剧院": 2,
                    "凯瑟琳": 1,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["琳妮特", "雷电将军", "琴"],
                  playerBActions: defineActions({
                    "万千的愿望": 1,
                    "如影流露的冷刃": 1,
                    "祭礼剑": 2,
                    "绝缘之旗印": 1,
                    "将帅兜鍪": 1,
                    "千岩牢固": 2,
                    "花海甘露之光": 2,
                    "派蒙": 2,
                    "蒂玛乌斯": 1,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "白垩之术": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=96KiWW6bmcA",
                },
              ],
            },
          ],
        },
        {
          name: "决赛 The Final Round",
          date: "2024-01-29",
          matches: [
            {
              playerA: "Nyahida",
              playerB: "Syou",
              video: "https://www.youtube.com/watch?v=96KiWW6bmcA",
              games: [
                {
                  playerACharacters: ["芭芭拉", "珊瑚宫心海", "凝光"],
                  playerAActions: defineActions({
                    "光辉的季节": 1,
                    "祭礼残章": 1,
                    "将帅兜鍪": 2,
                    "千岩牢固": 2,
                    "花海甘露之光": 2,
                    "天守阁": 2,
                    "须弥城": 1,
                    "桓纳兰那": 1,
                    "蒂玛乌斯": 2,
                    "立本": 2,
                    "迪娜泽黛": 1,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "化种匣": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=96KiWW6bmcA",
                },
                {
                  playerACharacters: ["林尼", "菲谢尔", "纳西妲"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 1,
                    "卯师傅": 2,
                    "迪娜泽黛": 1,
                    "弥生七月": 2,
                    "化种匣": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["莫娜", "优菈", "流浪者"],
                  playerBActions: defineActions({
                    "千夜浮梦": 1,
                    "图莱杜拉的回忆": 1,
                    "狼的末路": 1,
                    "赌徒的耳环": 2,
                    "教官的帽子": 2,
                    "饰金之梦": 2,
                    "蒂玛乌斯": 2,
                    "瓦格纳": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=96KiWW6bmcA",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
