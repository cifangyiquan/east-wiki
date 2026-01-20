import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IMAGES } from "@/assets/images";
import { Link } from "react-router-dom";
import { ArrowLeft, Mountain, Flower2, Sword, Coffee, Palette, Calendar } from "lucide-react";

const Japanese = () => {
  const periods = [
    {
      name: "飞鸟时代",
      period: "593年-710年",
      description: "佛教传入，文化基础奠定",
      achievements: ["佛教传播", "汉字引入", "法隆寺建立", "圣德太子改革"],
      image: IMAGES.ZEN_TEMPLE_2
    },
    {
      name: "平安时代",
      period: "794年-1185年",
      description: "贵族文化繁荣，日本文化独立发展",
      achievements: ["假名文字", "源氏物语", "和歌兴盛", "宫廷文化"],
      image: IMAGES.ZEN_TEMPLE_9
    },
    {
      name: "镰仓时代",
      period: "1185年-1333年",
      description: "武士政权建立，禅宗传入",
      achievements: ["武士道形成", "禅宗兴起", "茶道萌芽", "武家文化"],
      image: IMAGES.ZEN_TEMPLE_5
    },
    {
      name: "江户时代",
      period: "1603年-1868年",
      description: "锁国政策下的文化内向发展",
      achievements: ["浮世绘艺术", "歌舞伎发展", "俳句成熟", "町人文化"],
      image: IMAGES.ZEN_TEMPLE_7
    }
  ];

  const zenConcepts = [
    {
      concept: "侘寂 (Wabi-Sabi)",
      description: "在不完美中发现美，接受生命的无常与不完整",
      principles: ["简朴", "自然", "不完美", "无常"],
      image: IMAGES.ZEN_TEMPLE_8,
      color: "bg-zen-blue"
    },
    {
      concept: "间 (Ma)",
      description: "空间与时间的留白艺术，强调静默与空虚的美学价值",
      principles: ["留白", "静默", "空间", "节奏"],
      image: IMAGES.ZEN_TEMPLE_4,
      color: "bg-zen-green"
    },
    {
      concept: "物哀 (Mono no Aware)",
      description: "对事物无常的感伤之美，体现日本人的审美情感",
      principles: ["无常", "感伤", "美感", "情怀"],
      image: IMAGES.ZEN_TEMPLE_6,
      color: "bg-zen-gold"
    }
  ];

  const traditionalArts = [
    {
      category: "茶道 (Sadō)",
      description: "通过茶的仪式追求精神修养和美学体验",
      principles: ["和", "敬", "清", "寂"],
      schools: ["表千家", "里千家", "武者小路千家"],
      image: IMAGES.TEA_CEREMONY_3,
      significance: "茶道体现了日本文化中对细节的极致追求和精神修养"
    },
    {
      category: "花道 (Ikebana)",
      description: "插花艺术，追求自然与人工的和谐统一",
      principles: ["天", "地", "人"],
      schools: ["池坊", "小原流", "草月流"],
      image: IMAGES.BAMBOO_FOREST_3,
      significance: "花道通过植物的生命力表达季节感和自然美"
    },
    {
      category: "书道 (Shodō)",
      description: "汉字书法的日本化发展，融入假名文字",
      principles: ["筆意", "墨韵", "紙性", "字形"],
      schools: ["和様", "唐様", "假名"],
      image: IMAGES.CALLIGRAPHY_1,
      significance: "书道将中国书法与日本美学相结合，形成独特风格"
    },
    {
      category: "武道 (Budō)",
      description: "武士精神的现代传承，强调精神修养",
      principles: ["礼", "勇", "仁", "诚"],
      schools: ["剑道", "柔道", "弓道", "合气道"],
      image: IMAGES.BAMBOO_FOREST_7,
      significance: "武道将武术技能与精神修养相结合"
    }
  ];

  const festivals = [
    {
      name: "正月 (Shōgatsu)",
      date: "1月1日-3日",
      description: "日本最重要的传统节日，新年庆祝",
      customs: ["初诣", "年贺状", "御节料理", "门松装饰"],
      significance: "祈求新年平安和好运"
    },
    {
      name: "樱花祭 (Hanami)",
      date: "3月-5月",
      description: "赏樱花的传统活动，体现物哀美学",
      customs: ["花见", "野餐", "赏夜樱", "樱花预报"],
      significance: "感受生命的短暂与美好"
    },
    {
      name: "盂兰盆节 (Obon)",
      date: "8月13日-16日",
      description: "祭祖节日，迎接祖先灵魂回家",
      customs: ["迎火", "送火", "盆踊り", "精灵马"],
      significance: "缅怀祖先，家族团聚"
    },
    {
      name: "七五三 (Shichi-Go-San)",
      date: "11月15日",
      description: "儿童成长庆祝节日",
      customs: ["神社参拜", "传统服装", "千岁糖", "摄影纪念"],
      significance: "祈求儿童健康成长"
    }
  ];

  const architecture = [
    {
      type: "神社建筑",
      features: ["鸟居", "拜殿", "本殿", "注连绳"],
      materials: ["木材", "茅草", "瓦片"],
      examples: ["伊势神宫", "明治神宫", "严岛神社"],
      image: IMAGES.ZEN_TEMPLE_2
    },
    {
      type: "寺院建筑", 
      features: ["山门", "本堂", "塔", "庭园"],
      materials: ["木材", "瓦片", "石材"],
      examples: ["清水寺", "金阁寺", "东大寺"],
      image: IMAGES.ZEN_TEMPLE_9
    },
    {
      type: "民居建筑",
      features: ["榻榻米", "拉门", "天井", "缘侧"],
      materials: ["木材", "纸", "竹子"],
      examples: ["京町家", "合掌造", "武家屋敷"],
      image: IMAGES.ZEN_TEMPLE_7
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
              <h1 className="text-xl font-bold text-zen-dark">日本文化</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/culture" className="text-zen-dark hover:text-zen-blue transition-colors">
                文化概览
              </Link>
              <Link to="/chinese" className="text-zen-dark hover:text-zen-blue transition-colors">
                中华文化
              </Link>
              <Link to="/korean" className="text-zen-dark hover:text-zen-blue transition-colors">
                韩国文化
              </Link>
              <Link to="/southeast" className="text-zen-dark hover:text-zen-blue transition-colors">
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
              日本文化
              <span className="block text-zen-blue">禅意与美学</span>
            </h1>
            <p className="text-xl md:text-2xl text-zen-gray max-w-4xl mx-auto leading-relaxed">
              日本文化以其独特的美学追求和精神修养闻名于世。从古代的神道信仰到佛教禅宗的融入，
              从武士道精神到茶道花道的精致，日本文化在传承中华文明的同时，
              发展出了具有鲜明民族特色的文化体系。
            </p>
          </div>

          {/* 英雄图片 */}
          <div className="relative h-96 rounded-lg overflow-hidden zen-shadow mb-16">
            <img 
              src={IMAGES.ZEN_TEMPLE_7} 
              alt="日本文化"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">和の心 - 和谐之心</h2>
                <p className="text-xl">体验日本文化的精致与深邃</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="history" className="flex items-center gap-2">
                <Mountain className="w-4 h-4" />
                历史发展
              </TabsTrigger>
              <TabsTrigger value="zen" className="flex items-center gap-2">
                <Flower2 className="w-4 h-4" />
                禅宗美学
              </TabsTrigger>
              <TabsTrigger value="arts" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                传统艺术
              </TabsTrigger>
              <TabsTrigger value="architecture" className="flex items-center gap-2">
                <Sword className="w-4 h-4" />
                建筑艺术
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
                <p className="text-lg text-zen-gray">日本文化的形成与演进历程</p>
              </div>

              <div className="space-y-8">
                {periods.map((period, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6`}>
                      <div className="lg:w-1/3">
                        <img 
                          src={period.image} 
                          alt={period.name}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div className="lg:w-2/3 p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-zen-dark">{period.name}</h3>
                          <Badge variant="outline" className="zen-border">
                            {period.period}
                          </Badge>
                        </div>
                        <p className="text-zen-gray mb-4">{period.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {period.achievements.map((achievement, achIndex) => (
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

            {/* 禅宗美学 */}
            <TabsContent value="zen" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">禅宗美学</h2>
                <p className="text-lg text-zen-gray">日本文化的精神内核与美学追求</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {zenConcepts.map((zen, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={zen.image} 
                        alt={zen.concept}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute top-4 left-4 ${zen.color} text-white px-3 py-1 rounded-full`}>
                        <span className="font-semibold">美学</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-zen-dark">{zen.concept}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zen-gray mb-4">{zen.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-zen-dark">核心要素：</h4>
                        <div className="flex flex-wrap gap-2">
                          {zen.principles.map((principle, principleIndex) => (
                            <Badge key={principleIndex} variant="secondary" className="bg-zen-light text-zen-dark">
                              {principle}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 传统艺术 */}
            <TabsContent value="arts" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">传统艺术</h2>
                <p className="text-lg text-zen-gray">日本文化的艺术表达与精神修养</p>
              </div>

              <div className="space-y-12">
                {traditionalArts.map((art, index) => (
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
                            <h4 className="font-semibold text-zen-dark mb-2">核心原则：</h4>
                            <div className="flex flex-wrap gap-2">
                              {art.principles.map((principle, principleIndex) => (
                                <Badge key={principleIndex} className="bg-zen-blue text-white">
                                  {principle}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">主要流派：</h4>
                            <div className="flex flex-wrap gap-2">
                              {art.schools.map((school, schoolIndex) => (
                                <Badge key={schoolIndex} variant="outline" className="zen-border">
                                  {school}
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

            {/* 建筑艺术 */}
            <TabsContent value="architecture" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">建筑艺术</h2>
                <p className="text-lg text-zen-gray">日本传统建筑的美学与工艺</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {architecture.map((arch, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={arch.image} 
                        alt={arch.type}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-zen-dark">{arch.type}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-zen-dark mb-2">建筑特征：</h4>
                          <div className="flex flex-wrap gap-2">
                            {arch.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} className="bg-zen-blue text-white">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-zen-dark mb-2">主要材料：</h4>
                          <div className="flex flex-wrap gap-2">
                            {arch.materials.map((material, materialIndex) => (
                              <Badge key={materialIndex} variant="secondary" className="bg-zen-light text-zen-dark">
                                {material}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-zen-dark mb-2">代表建筑：</h4>
                          <div className="space-y-1">
                            {arch.examples.map((example, exampleIndex) => (
                              <p key={exampleIndex} className="text-sm text-zen-gray">• {example}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 传统节日 */}
            <TabsContent value="festivals" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">传统节日</h2>
                <p className="text-lg text-zen-gray">承载文化记忆的重要时刻</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {festivals.map((festival, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-zen-dark">{festival.name}</CardTitle>
                        <Badge className="bg-zen-blue text-white">
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
                        
                        <div className="bg-zen-blue/10 p-3 rounded-lg">
                          <h4 className="font-semibold text-zen-blue mb-1">文化意义：</h4>
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

export default Japanese;
