import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IMAGES } from "@/assets/images";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Palette, Users, Calendar, Mountain, Scroll, Coffee } from "lucide-react";

const Chinese = () => {
  const dynasties = [
    {
      name: "先秦时期",
      period: "公元前2070年-公元前221年",
      description: "诸子百家争鸣，奠定中华文化基础",
      achievements: ["儒家思想", "道家哲学", "法家理论", "墨家学说"],
      image: IMAGES.CALLIGRAPHY_8
    },
    {
      name: "秦汉时期", 
      period: "公元前221年-公元220年",
      description: "大一统帝国建立，文化制度化",
      achievements: ["统一文字", "丝绸之路", "史记编撰", "汉赋兴起"],
      image: IMAGES.CHINESE_ARCHITECTURE_4
    },
    {
      name: "魏晋南北朝",
      period: "公元220年-公元589年", 
      description: "文化多元发展，佛教传入",
      achievements: ["玄学兴起", "佛教融合", "书法艺术", "诗歌发展"],
      image: IMAGES.CALLIGRAPHY_1
    },
    {
      name: "隋唐时期",
      period: "公元581年-公元907年",
      description: "文化鼎盛，开放包容",
      achievements: ["唐诗繁荣", "科举制度", "佛教兴盛", "国际交流"],
      image: IMAGES.CHINESE_ARCHITECTURE_10
    }
  ];

  const philosophies = [
    {
      school: "儒家思想",
      founder: "孔子",
      core: "仁义礼智信",
      description: "强调道德修养、社会秩序和人际和谐，主张以德治国，重视教育和文化传承。",
      concepts: ["仁爱", "礼制", "中庸", "大同"],
      image: IMAGES.CALLIGRAPHY_9,
      color: "bg-zen-red"
    },
    {
      school: "道家哲学", 
      founder: "老子",
      core: "道法自然",
      description: "追求自然无为，强调顺应天道，主张简朴生活和精神自由。",
      concepts: ["无为", "自然", "阴阳", "太极"],
      image: IMAGES.ZEN_TEMPLE_8,
      color: "bg-zen-blue"
    },
    {
      school: "佛教思想",
      founder: "释迦牟尼",
      core: "慈悲智慧",
      description: "追求解脱烦恼，强调慈悲为怀，主张众生平等和因果报应。",
      concepts: ["慈悲", "智慧", "因果", "涅槃"],
      image: IMAGES.ZEN_TEMPLE_3,
      color: "bg-zen-gold"
    }
  ];

  const arts = [
    {
      category: "书法艺术",
      description: "汉字书写的艺术形式，体现中华文化的精神内涵",
      styles: ["篆书", "隶书", "楷书", "行书", "草书"],
      masters: ["王羲之", "颜真卿", "柳公权", "苏轼"],
      image: IMAGES.CALLIGRAPHY_3,
      significance: "书法被誉为'无言的诗，无行的舞，无图的画，无声的乐'"
    },
    {
      category: "绘画艺术", 
      description: "以笔墨表现意境，追求神韵和意境的视觉艺术",
      styles: ["山水画", "花鸟画", "人物画", "工笔画"],
      masters: ["顾恺之", "吴道子", "李思训", "范宽"],
      image: IMAGES.CALLIGRAPHY_7,
      significance: "中国画讲究'意在笔先'，追求'形神兼备'"
    },
    {
      category: "茶文化",
      description: "以茶为媒介的生活艺术和精神修养",
      styles: ["绿茶", "红茶", "乌龙茶", "普洱茶"],
      masters: ["陆羽", "蔡襄", "朱权", "许次纾"],
      image: IMAGES.TEA_CEREMONY_2,
      significance: "茶道体现了'和、敬、清、寂'的精神境界"
    }
  ];

  const festivals = [
    {
      name: "春节",
      date: "农历正月初一",
      description: "中华民族最重要的传统节日，象征新年新气象",
      customs: ["贴春联", "放鞭炮", "吃年夜饭", "拜年"],
      significance: "家庭团聚，辞旧迎新"
    },
    {
      name: "清明节",
      date: "公历4月4-6日",
      description: "祭祖扫墓的传统节日，体现慎终追远的文化传统",
      customs: ["扫墓祭祖", "踏青游春", "插柳戴柳", "放风筝"],
      significance: "缅怀先人，珍惜生命"
    },
    {
      name: "端午节",
      date: "农历五月初五",
      description: "纪念屈原的传统节日，弘扬爱国主义精神",
      customs: ["吃粽子", "赛龙舟", "挂艾草", "佩香囊"],
      significance: "爱国情怀，驱邪避疫"
    },
    {
      name: "中秋节",
      date: "农历八月十五",
      description: "月圆人团圆的传统节日，寄托思乡之情",
      customs: ["赏月", "吃月饼", "团圆饭", "猜灯谜"],
      significance: "家庭和睦，思乡怀远"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zen-light via-white to-zen-light">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b zen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回首页
                </Link>
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-xl font-bold text-zen-dark">中华文化</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/culture" className="text-zen-dark hover:text-zen-red transition-colors">
                文化概览
              </Link>
              <Link to="/japanese" className="text-zen-dark hover:text-zen-red transition-colors">
                日本文化
              </Link>
              <Link to="/korean" className="text-zen-dark hover:text-zen-red transition-colors">
                韩国文化
              </Link>
              <Link to="/southeast" className="text-zen-dark hover:text-zen-red transition-colors">
                东南亚文化
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 标题区域 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-zen-dark mb-6">
              中华文化
              <span className="block text-zen-red">五千年文明</span>
            </h1>
            <p className="text-xl md:text-2xl text-zen-gray max-w-4xl mx-auto leading-relaxed">
              中华文化源远流长，博大精深。从先秦诸子百家的思想争鸣，到汉唐盛世的文化繁荣，
              再到宋明理学的哲学高峰，中华文化以其独特的魅力和深邃的智慧，
              成为世界文明史上的璀璨明珠。
            </p>
          </div>

          {/* 英雄图片 */}
          <div className="relative h-96 rounded-lg overflow-hidden zen-shadow mb-16">
            <img 
              src={IMAGES.CHINESE_ARCHITECTURE_1} 
              alt="中华文化"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">传承千年的文化瑰宝</h2>
                <p className="text-xl">探索中华文明的深厚底蕴</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="history" className="flex items-center gap-2">
                <Scroll className="w-4 h-4" />
                历史发展
              </TabsTrigger>
              <TabsTrigger value="philosophy" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                哲学思想
              </TabsTrigger>
              <TabsTrigger value="arts" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                艺术形式
              </TabsTrigger>
              <TabsTrigger value="festivals" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                传统节日
              </TabsTrigger>
            </TabsList>

            {/* 历史发展 */}
            <TabsContent value="history" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">历史发展脉络</h2>
                <p className="text-lg text-zen-gray">中华文化的历史演进与重要节点</p>
              </div>

              <div className="space-y-8">
                {dynasties.map((dynasty, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6`}>
                      <div className="lg:w-1/3">
                        <img 
                          src={dynasty.image} 
                          alt={dynasty.name}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div className="lg:w-2/3 p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-zen-dark">{dynasty.name}</h3>
                          <Badge variant="outline" className="zen-border">
                            {dynasty.period}
                          </Badge>
                        </div>
                        <p className="text-zen-gray mb-4">{dynasty.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {dynasty.achievements.map((achievement, achIndex) => (
                            <Badge key={achIndex} className="bg-zen-light text-zen-dark">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 哲学思想 */}
            <TabsContent value="philosophy" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">哲学思想体系</h2>
                <p className="text-lg text-zen-gray">中华文化的思想精髓与智慧结晶</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {philosophies.map((philosophy, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={philosophy.image} 
                        alt={philosophy.school}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute top-4 left-4 ${philosophy.color} text-white px-3 py-1 rounded-full`}>
                        <span className="font-semibold">{philosophy.core}</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-zen-dark">{philosophy.school}</CardTitle>
                      <CardDescription className="text-zen-gray">
                        创始人：{philosophy.founder}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zen-gray mb-4">{philosophy.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-zen-dark">核心概念：</h4>
                        <div className="flex flex-wrap gap-2">
                          {philosophy.concepts.map((concept, conceptIndex) => (
                            <Badge key={conceptIndex} variant="secondary" className="bg-zen-light text-zen-dark">
                              {concept}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 艺术形式 */}
            <TabsContent value="arts" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">艺术形式</h2>
                <p className="text-lg text-zen-gray">中华文化的艺术表达与美学追求</p>
              </div>

              <div className="space-y-12">
                {arts.map((art, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                      <div className="lg:w-1/2">
                        <img 
                          src={art.image} 
                          alt={art.category}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                      <div className="lg:w-1/2 p-8">
                        <h3 className="text-3xl font-bold text-zen-dark mb-4">{art.category}</h3>
                        <p className="text-zen-gray mb-6">{art.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">主要流派：</h4>
                            <div className="flex flex-wrap gap-2">
                              {art.styles.map((style, styleIndex) => (
                                <Badge key={styleIndex} className="bg-zen-red text-white">
                                  {style}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">代表人物：</h4>
                            <div className="flex flex-wrap gap-2">
                              {art.masters.map((master, masterIndex) => (
                                <Badge key={masterIndex} variant="outline" className="zen-border">
                                  {master}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-zen-light p-4 rounded-lg">
                            <p className="text-zen-dark italic">"{art.significance}"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 传统节日 */}
            <TabsContent value="festivals" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">传统节日</h2>
                <p className="text-lg text-zen-gray">承载文化记忆的时间节点</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {festivals.map((festival, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-zen-dark">{festival.name}</CardTitle>
                        <Badge className="bg-zen-gold text-white">
                          {festival.date}
                        </Badge>
                      </div>
                      <CardDescription className="text-zen-gray">
                        {festival.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-zen-dark mb-2">传统习俗：</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {festival.customs.map((custom, customIndex) => (
                              <Badge key={customIndex} variant="secondary" className="bg-zen-light text-zen-dark">
                                {custom}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-zen-red/10 p-3 rounded-lg">
                          <h4 className="font-semibold text-zen-red mb-1">文化意义：</h4>
                          <p className="text-zen-dark text-sm">{festival.significance}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 底部 */}
      <footer className="bg-zen-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-zen-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">东</span>
              </div>
              <h3 className="text-xl font-bold">东方文化Wiki</h3>
            </div>
            <p className="text-gray-300 mb-6">传承东方智慧，弘扬文化精神</p>
            <Separator className="bg-gray-600 mb-6" />
            <p className="text-sm text-gray-400">
              © 2024 东方文化Wiki. 致力于传播和保护亚洲文化遗产.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Chinese;