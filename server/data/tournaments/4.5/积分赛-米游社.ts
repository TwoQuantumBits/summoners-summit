import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "「燃斗无双」米游社",
  type: "全民积分赛",
  gameVersion: "4.5",
  stages: [
    {
      name: "8进4",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-04-04",
          matches: [
            {
              playerA: "LL起翼夜鹰",
              playerB: "物语",
              video: "https://www.bilibili.com/video/BV1Mp42127pa",
              banned: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 1,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                    "兽肉薄荷卷": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 1,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 1,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "重云", "琳妮特"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 1,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "和大名",
              playerB: "东风夜放花千树",
              video: "https://www.bilibili.com/video/BV1Mp42127pa",
              banned: [
                {
                  playerACharacters: ["莫娜", "「女士」", "雷音权现"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["重云", "行秋", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "大叔ky",
              playerB: "Lava没睡醒",
              video: "https://www.bilibili.com/video/BV1Ym411r7Qt",
              banned: [
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["优菈", "莫娜", "流浪者"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "教官的帽子": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "裁定之时": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["莫娜", "流浪者", "优菈"],
                  playerBActions: defineActions({
                    "千夜浮梦": 1,
                    "盈满之实": 1,
                    "狼的末路": 1,
                    "赌徒的耳环": 2,
                    "教官的帽子": 2,
                    "饰金之梦": 2,
                    "欧庇克莱歌剧院": 2,
                    "派蒙": 1,
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
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["优菈", "莫娜", "流浪者"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "教官的帽子": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "裁定之时": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 1,
                    "磐岩盟契": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["重云", "行秋", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 1,
                    "裁定之时": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 1,
                    "磐岩盟契": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "光",
              playerB: "霁纪",
              video: "https://www.bilibili.com/video/BV1Ym411r7Qt",
              banned: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纳西妲", "菲谢尔", "林尼"],
                  playerAActions: defineActions({
                    "心识蕴藏之种": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "欧庇克莱歌剧院": 2,
                    "凯瑟琳": 1,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBActions: defineActions({
                    "严霜棱晶": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["千年珍珠骏麟", "若陀龙王", "班尼特"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "愉舞欢游": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBActions: defineActions({
                    "严霜棱晶": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["千年珍珠骏麟", "若陀龙王", "班尼特"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "愉舞欢游": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["莫娜", "枫原万叶", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
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
    {
      name: "半决赛",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-04-05",
          matches: [
            {
              playerA: "大树ky",
              playerB: "和大名",
              banned: [
                {
                  playerACharacters: ["雷泽", "行秋", "重云"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["优菈", "莫娜", "流浪者"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "教官的帽子": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "裁定之时": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["优菈", "莫娜", "流浪者"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "教官的帽子": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "裁定之时": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["雷泽", "行秋", "重云"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "光",
              playerB: "物语",
              banned: [
                {
                  playerACharacters: ["千年珍珠骏麟", "若陀龙王", "班尼特"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纳西妲", "菲谢尔", "林尼"],
                  playerAActions: defineActions({
                    "心识蕴藏之种": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "欧庇克莱歌剧院": 2,
                    "凯瑟琳": 1,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                    "兽肉薄荷卷": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "悲号回唱": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "桓那兰那": 1,
                    "欧庇克莱歌剧院": 2,
                    "派蒙": 1,
                    "立本": 1,
                    "弥生七月": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                    "兽肉薄荷卷": 1,
                  }),
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
