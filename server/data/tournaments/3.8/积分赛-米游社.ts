import { AratakiItto, Barbara, Bennett, Chongyun, Cyno, ElectroHypostasis, FatuiPyroAgent, Fischl, Keqing, Klee, Mona, Nahida, Ningguang, Noelle, RaidenShogun, RhodeiaOfLoch, SangonomiyaKokomi, Shenhe, YaeMiko, Yoimiya, Zhongli, defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "「燃斗无双」米游社",
  type: "全民积分赛",
  gameVersion: "3.8",
  stages: [
    {
      name: "8进4淘汰赛",
      rules: [
        "BO3",
        "征服",
        ["禁用阵容", "对阵双方各准备3套阵容，禁用对手一套阵容"],
        ["可重复角色", "每名选手的3套阵容至少包含7张不同角色牌"],
      ],
      parts: [
        {
          name: "DAY1",
          date: "2023-08-10",
          matches: [
            {
              playerA: "自信的菠萝蜜",
              playerB: "阿源",
              video: "https://www.bilibili.com/video/BV1cz4y1W7TV",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 1,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  playerBActions: defineActions({
                    "神篱之御荫": 1,
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "须弥城": 2,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "最好的伙伴！": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "白垩之术": 2,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerAActions: defineActions({
                    "悉数讨回": 2,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "鸣神大社": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "仙跳墙": 2,
                    "莲花酥": 1,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  playerBActions: defineActions({
                    "神篱之御荫": 1,
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "须弥城": 2,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "最好的伙伴！": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "白垩之术": 2,
                    "送你一程": 1,
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
            {
              playerA: "皮皮猪",
              playerB: "晚风",
              video: "https://www.bilibili.com/video/BV1cz4y1W7TV",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: [Bennett, Klee, Keqing],
                  playerBActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "璃月港口": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "风与自由": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
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
                  playerBCharacters: [Bennett, Klee, Keqing],
                  playerBActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "璃月港口": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "风与自由": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-08-11",
          matches: [
            {
              playerA: "剑舞",
              playerB: "Sept",
              video: "https://www.miyoushe.com/ys/article/42297129",
              games: [
                {
                  playerACharacters: [Bennett, ElectroHypostasis, Yoimiya],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "派蒙": 1,
                    "提米": 2,
                    "立本": 2,
                    "参量质变仪": 1,
                    "寻宝仙灵": 2,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "换班时间": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "温妮莎传奇": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, YaeMiko],
                  playerBActions: defineActions({
                    "悉数讨回": 2,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Klee, Nahida],
                  playerAActions: defineActions({
                    "心识蕴藏之种": 1,
                    "赌徒的耳环": 2,
                    "刘苏": 2,
                    "拉娜": 2,
                    "磐岩盟契": 1,
                    "风与自由": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 1,
                    "蒙德土豆饼": 1,
                    "唐杜尔烤鸡": 2,
                  }),
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, YaeMiko],
                  playerBActions: defineActions({
                    "悉数讨回": 2,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "多肉",
              playerB: "诛仙还怡文",
              video: "https://www.miyoushe.com/ys/article/42297129",
              games: [
                {
                  playerACharacters: [Zhongli, RaidenShogun, Ningguang],
                  playerAActions: defineActions({
                    "贯虹之槊": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "旧时庭园": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "送你一程": 1,
                    "护法之誓": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "提米": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [SangonomiyaKokomi, AratakiItto, Noelle],
                  playerAActions: defineActions({
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "旧时庭园": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "送你一程": 1,
                    "护法之誓": 2,
                    "重攻击": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "提米": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
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
      rules: [
        "BO3",
        "征服",
        ["禁用阵容", "对阵双方各准备3套阵容，禁用对手一套阵容"],
        ["可重复角色", "每名选手的3套阵容至少包含7张不同角色牌"],
      ],
      parts: [
        {
          name: "",
          date: "2023-08-12",
          matches: [
            {
              playerA: "自信的菠萝蜜",
              playerB: "皮皮猪",
              video: "https://www.miyoushe.com/ys/article/42324523",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "旧时庭园": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "风与自由": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "剑舞",
              playerB: "多肉",
              video: "https://www.miyoushe.com/ys/article/42324523",
              games: [
                {
                  playerACharacters: [Bennett, Klee, Cyno],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "赌徒的耳环": 2,
                    "璃月港口": 1,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "风与自由": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "兽肉薄荷卷": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: [SangonomiyaKokomi, Barbara, Ningguang],
                  playerBActions: defineActions({
                    "祭礼残章": 2,
                    "将帅兜鍪": 1,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "望舒客栈": 1,
                    "西风大教堂": 2,
                    "天守阁": 2,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "旧时庭园": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "莲花酥": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Nahida, Klee],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "刘苏": 2,
                    "拉娜": 2,
                    "磐岩盟契": 1,
                    "风与自由": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 1,
                    "蒙德土豆饼": 2,
                    "唐杜尔烤鸡": 2,
                  }),
                  playerBCharacters: [SangonomiyaKokomi, Barbara, Ningguang],
                  playerBActions: defineActions({
                    "祭礼残章": 2,
                    "将帅兜鍪": 1,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "望舒客栈": 1,
                    "西风大教堂": 2,
                    "天守阁": 2,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "旧时庭园": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "莲花酥": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, Nahida, Klee],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "刘苏": 2,
                    "拉娜": 2,
                    "磐岩盟契": 1,
                    "风与自由": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 1,
                    "蒙德土豆饼": 2,
                    "唐杜尔烤鸡": 2,
                  }),
                  playerBCharacters: [SangonomiyaKokomi, Barbara, Noelle],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "将帅兜鍪": 1,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "望舒客栈": 1,
                    "西风大教堂": 2,
                    "天守阁": 2,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "旧时庭园": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "莲花酥": 2,
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
    {
      name: "决赛",
      rules: [
        "BO5",
        "征服",
        ["禁用阵容", "对阵双方各准备4套阵容，禁用对手一套阵容"],
        ["可重复角色", "每名选手的4套阵容至少包含9张不同角色牌"],
      ],
      parts: [
        {
          name: "",
          date: "2023-08-13",
          matches: [
            {
              playerA: "剑舞",
              playerB: "皮皮猪",
              video: "https://www.miyoushe.com/ys/article/42359497",
              games: [
                {
                  playerACharacters: [Bennett, ElectroHypostasis, Yoimiya],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "派蒙": 1,
                    "提米": 2,
                    "立本": 2,
                    "参量质变仪": 1,
                    "寻宝仙灵": 2,
                    "元素共鸣：交织之冰": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "换班时间": 2,
                    "一掷乾坤": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "温妮莎传奇": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  playerBCharacters: [Fischl, Mona, Nahida],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "提米": 2,
                    "拉娜": 2,
                    "磐岩盟契": 1,
                    "风与自由": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "白垩之术": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerAActions: defineActions({
                    "悉数讨回": 2,
                    "幸运儿银冠": 1,
                    "赌徒的耳环": 1,
                    "璃月港口": 2,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: [Fischl, Mona, Nahida],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "提米": 2,
                    "拉娜": 2,
                    "磐岩盟契": 1,
                    "风与自由": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "白垩之术": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  playerAActions: defineActions({
                    "神篱之御荫": 1,
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "赌徒的耳环": 1,
                    "璃月港口": 2,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: [Fischl, Mona, Nahida],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "提米": 2,
                    "拉娜": 2,
                    "磐岩盟契": 1,
                    "风与自由": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "白垩之术": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  playerAActions: defineActions({
                    "神篱之御荫": 1,
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "赌徒的耳环": 1,
                    "璃月港口": 2,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "鸣神大社": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
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
              ],
            },
          ],
        },
      ],
    },
  ],
});
