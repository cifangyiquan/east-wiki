import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IMAGES } from "@/assets/images";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Waves, Sun, Calendar, Palette, Users } from "lucide-react";

const Southeast = () => {
  const countries = [
    {
      name: "泰国",
      description: "佛教文化与王室传统的完美结合",
      highlights: ["上座部佛教", "泰式建筑", "传统舞蹈", "泼水节"],
      image: IMAGES.BAMBOO_FOREST_4,
      color: "bg-zen-gold"
    },
    {
      name: "印度尼西亚",
      description: "世界最大的群岛国家，文化多元融合",
      highlights: ["婆罗浮屠", "巴厘岛文化", "传统蜡染", "加美兰音乐"],
      image: IMAGES.BAMBOO_FOREST_6,
      color: "bg-zen-red"
    },
    {
      name: "越南",
      description: "深受中华文化影响的东南亚文明",
      highlights: ["水上木偶", "奥黛服饰", "河内古街", "下龙湾"],
      image: IMAGES.BAMBOO_FOREST_2,
      color: "bg-zen-green"
    },
    {
      name: "缅甸",
      description: "千塔之国，佛教文化的重要中心",
      highlights: ["蒲甘古城", "仰光大金塔", "传统木雕", "僧侣文化"],
      image: IMAGES.BAMBOO_FOREST_8,
      color: "bg-zen-blue"
    }
  ];

  const buddhismTraditions = [
    {
      tradition: "上座部佛教",
      countries: ["泰国", "缅甸", "老挝", "柬埔寨", "斯里兰卡"],
      characteristics: ["巴利文经典", "僧伽制度", "禅修传统", "功德观念"],
      practices: ["晨课诵经", "托钵化缘", "禅修静坐", "布施功德"],
      image: IMAGES.ZEN_TEMPLE_5,
      description: "强调个人解脱和戒律修行的佛教传统"
    },
    {
      tradition: "大乘佛教",
      countries: ["越南", "新加坡", "马来西亚"],
      characteristics: ["汉传佛教", "菩萨道", "慈悲救世", "禅宗影响"],
      practices: ["念佛修行", "菩萨戒", "放生护生", "慈善事业"],
      image: IMAGES.ZEN_TEMPLE_3,
      description: "注重普度众生和社会参与的佛教传统"
    },
    {
      tradition: "密宗佛教",
      countries: ["印度尼西亚", "马来西亚"],
      characteristics: ["金刚乘", "密咒修行", "坛城艺术", "上师传承"],
      practices: ["咒语持诵", "观想修法", "灌顶仪式", "护法供养"],
      image: IMAGES.ZEN_TEMPLE_6,
      description: "融合本土信仰的密教修行传统"
    }
  ];

  const festivals = [
    {
      name: "泼水节 (Songkran)",
      countries: ["泰国", "老挝", "缅甸", "柬埔寨"],
      date: "4月13-15日",
      description: "东南亚最重要的传统节日，庆祝新年到来",
      customs: ["泼水祈福", "浴佛仪式", "堆沙塔", "放生鱼鸟"],
      significance: "洗去旧年晦气，迎接新年好运",
      image: IMAGES.BAMBOO_FOREST_4
    },
    {
      name: "卫塞节 (Vesak)",
      countries: ["泰国", "缅甸", "斯里兰卡", "马来西亚"],
      date: "农历四月十五",
      description: "纪念佛陀诞生、成道、涅槃的重要节日",
      customs: ["点灯供佛", "诵经祈福", "布施行善", "放生护生"],
      significance: "纪念佛陀三大事迹，弘扬佛法精神",
      image: IMAGES.ZEN_TEMPLE_2
    },
    {
      name: "中元节",
      countries: ["新加坡", "马来西亚", "越南"],
      date: "农历七月十五",
      description: "华人社区的重要传统节日",
      customs: ["祭祖扫墓", "烧纸钱", "普度众生", "戏曲表演"],
      significance: "缅怀祖先，超度亡灵",
      image: IMAGES.CALLIGRAPHY_8
    },
    {
      name: "开斋节 (Eid)",
      countries: ["印度尼西亚", "马来西亚", "文莱"],
      date: "伊斯兰历10月1日",
      description: "穆斯林社区的重要宗教节日",
      customs: ["集体礼拜", "家庭聚餐", "慈善捐赠", "互赠礼品"],
      significance: "庆祝斋月结束，感恩真主恩典",
      image: IMAGES.BAMBOO_FOREST_9
    }
  ];

  const traditionalArts = [
    {
      category: "建筑艺术",
      description: "融合宗教信仰与本土特色的建筑风格",
      examples: [
        { name: "吴哥窟", country: "柬埔寨", style: "高棉建筑" },
        { name: "婆罗浮屠", country: "印度尼西亚", style: "爪哇佛教建筑" },
        { name: "蒲甘佛塔", country: "缅甸", style: "缅式佛塔" },
        { name: "泰式寺庙", country: "泰国", style: "兰纳建筑" }
      ],
      image: IMAGES.ZEN_TEMPLE_9,
      features: ["尖塔造型", "精美雕刻", "宗教壁画", "黄金装饰"]
    },
    {
      category: "纺织艺术",
      description: "色彩丰富、图案精美的传统纺织工艺",
      examples: [
        { name: "蜡染", country: "印度尼西亚", style: "巴蒂克工艺" },
        { name: "丝绸", country: "泰国", style: "泰丝织造" },
        { name: "织锦", country: "越南", style: "传统织锦" },
        { name: "纱笼", country: "缅甸", style: "传统服饰" }
      ],
      image: IMAGES.CALLIGRAPHY_7,
      features: ["天然染料", "手工织造", "宗教图案", "民族特色"]
    },
    {
      category: "表演艺术",
      description: "结合音乐、舞蹈、戏剧的综合艺术形式",
      examples: [
        { name: "皮影戏", country: "印度尼西亚", style: "哇扬戏" },
        { name: "古典舞", country: "泰国", style: "拉玛坚舞" },
        { name: "水上木偶", country: "越南", style: "传统木偶戏" },
        { name: "宫廷舞", country: "柬埔寨", style: "阿普萨拉舞" }
      ],
      image: IMAGES.TEA_CEREMONY_8,
      features: ["宗教主题", "宫廷传统", "民间故事", "音乐伴奏"]
    }
  ];

  const culturalInfluences = [
    {
      influence: "印度文化",
      aspects: ["印度教", "佛教", "梵文", "史诗文学"],
      impact: "宗教信仰、建筑艺术、文学传统的重要源泉",
      examples: ["吴哥窟", "婆罗浮屠", "拉玛坚史诗", "印度教神庙"],
      period: "公元1-15世纪"
    },
    {
      influence: "中华文化",
      aspects: ["儒家思想", "汉字文化", "中医药", "传统节日"],
      impact: "政治制度、教育体系、医学知识的重要影响",
      examples: ["科举制度", "汉字使用", "中医传播", "春节庆祝"],
      period: "公元前2世纪至今"
    },
    {
      influence: "伊斯兰文化",
      aspects: ["伊斯兰教", "阿拉伯文", "商业贸易", "建筑风格"],
      impact: "宗教信仰、商业网络、建筑艺术的重要塑造",
      examples: ["清真寺", "伊斯兰教育", "香料贸易", "阿拉伯文字"],
      period: "公元13-16世纪"
    },
    {
      influence: "欧洲文化",
      aspects: ["基督教", "现代教育", "政治制度", "科学技术"],
      impact: "现代化进程、教育体系、政治制度的重要推动",
      examples: ["殖民建筑", "现代学校", "民主制度", "科学技术"],
      period: "公元16-20世纪"
    }
  ];

  const modernDevelopment = [
    {
      aspect: "经济发展",
      description: "从农业社会向现代化经济的转型",
      achievements: ["制造业发展", "服务业兴起", "旅游业繁荣", "数字经济"],
      challenges: ["贫富差距", "环境保护", "可持续发展", "全球竞争"]
    },
    {
      aspect: "文化保护",
      description: "在现代化进程中保护传统文化",
      achievements: ["文化遗产保护", "传统艺术传承", "文化教育推广", "国际交流"],
      challenges: ["文化流失", "商业化冲击", "年轻人疏离", "全球化影响"]
    },
    {
      aspect: "社会变迁",
      description: "传统社会向现代社会的转变",
      achievements: ["教育普及", "医疗改善", "基础设施建设", "社会保障"],
      challenges: ["城乡差距", "人口老龄化", "社会流动", "价值观冲突"]
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
              <h1 className="text-xl font-bold text-zen-dark">东南亚文化</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/culture" className="text-zen-dark hover:text-zen-gold transition-colors">
                文化概览
              </Link>
              <Link to="/chinese" className="text-zen-dark hover:text-zen-gold transition-colors">
                中华文化
              </Link>
              <Link to="/japanese" className="text-zen-dark hover:text-zen-gold transition-colors">
                日本文化
              </Link>
              <Link to="/korean" className="text-zen-dark hover:text-zen-gold transition-colors">
                韩国文化
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
              东南亚文化
              <span className="block text-zen-gold">多元融合</span>
            </h1>
            <p className="text-xl md:text-2xl text-zen-gray max-w-4xl mx-auto leading-relaxed">
              东南亚文化是世界文明的重要组成部分，这里汇聚了印度文化、中华文化、
              伊斯兰文化和本土文化的精华。从古老的吴哥窟到现代的新加坡，
              从神秘的佛教传统到热情的民族风情，东南亚展现了文化多元融合的独特魅力。
            </p>
          </div>

          {/* 英雄图片 */}
          <div className="relative h-96 rounded-lg overflow-hidden zen-shadow mb-16">
            <img 
              src={IMAGES.BAMBOO_FOREST_4} 
              alt="东南亚文化"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">多元文化的交融之地</h2>
                <p className="text-xl">探索东南亚文化的丰富内涵</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="countries" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="countries" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                国家文化
              </TabsTrigger>
              <TabsTrigger value="buddhism" className="flex items-center gap-2">
                <Sun className="w-4 h-4" />
                佛教传统
              </TabsTrigger>
              <TabsTrigger value="festivals" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                传统节日
              </TabsTrigger>
              <TabsTrigger value="arts" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                传统艺术
              </TabsTrigger>
              <TabsTrigger value="influences" className="flex items-center gap-2">
                <Waves className="w-4 h-4" />
                文化影响
              </TabsTrigger>
            </TabsList>

            {/* 国家文化 */}
            <TabsContent value="countries" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">主要国家文化</h2>
                <p className="text-lg text-zen-gray">东南亚各国的文化特色与传统</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {countries.map((country, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={country.image} 
                        alt={country.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute top-4 left-4 ${country.color} text-white px-3 py-1 rounded-full`}>
                        <span className="font-semibold">{country.name}</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-zen-dark">{country.name}</CardTitle>
                      <CardDescription className="text-zen-gray">
                        {country.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="font-semibold text-zen-dark mb-2">文化亮点：</h4>
                        <div className="flex flex-wrap gap-2">
                          {country.highlights.map((highlight, highlightIndex) => (
                            <Badge key={highlightIndex} variant="secondary" className="bg-zen-light text-zen-dark">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 佛教传统 */}
            <TabsContent value="buddhism" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">佛教传统</h2>
                <p className="text-lg text-zen-gray">东南亚佛教文化的多样性与特色</p>
              </div>

              <div className="space-y-12">
                {buddhismTraditions.map((tradition, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                      <div className="lg:w-1/2">
                        <img 
                          src={tradition.image} 
                          alt={tradition.tradition}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                      <div className="lg:w-1/2 p-8">
                        <h3 className="text-3xl font-bold text-zen-dark mb-4">{tradition.tradition}</h3>
                        <p className="text-zen-gray mb-6">{tradition.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">主要国家：</h4>
                            <div className="flex flex-wrap gap-2">
                              {tradition.countries.map((country, countryIndex) => (
                                <Badge key={countryIndex} className="bg-zen-gold text-white">
                                  {country}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">主要特征：</h4>
                            <div className="flex flex-wrap gap-2">
                              {tradition.characteristics.map((char, charIndex) => (
                                <Badge key={charIndex} variant="outline" className="zen-border">
                                  {char}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">修行实践：</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {tradition.practices.map((practice, practiceIndex) => (
                                <Badge key={practiceIndex} variant="secondary" className="bg-zen-light text-zen-dark">
                                  {practice}
                                </Badge>
                              ))}
                            </div>
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
                <p className="text-lg text-zen-gray">东南亚地区的重要节庆活动</p>
              </div>

              <div className="space-y-8">
                {festivals.map((festival, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6`}>
                      <div className="lg:w-1/3">
                        <img 
                          src={festival.image} 
                          alt={festival.name}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div className="lg:w-2/3 p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-zen-dark">{festival.name}</h3>
                          <Badge className="bg-zen-gold text-white">
                            {festival.date}
                          </Badge>
                        </div>
                        <p className="text-zen-gray mb-4">{festival.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">庆祝国家：</h4>
                            <div className="flex flex-wrap gap-2">
                              {festival.countries.map((country, countryIndex) => (
                                <Badge key={countryIndex} variant="outline" className="zen-border">
                                  {country}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
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
                          
                          <div className="bg-zen-gold/10 p-3 rounded-lg">
                            <h4 className="font-semibold text-zen-gold mb-1">文化意义：</h4>
                            <p className="text-zen-dark text-sm">{festival.significance}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 传统艺术 */}
            <TabsContent value="arts" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">传统艺术</h2>
                <p className="text-lg text-zen-gray">东南亚地区的艺术形式与文化表达</p>
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
                            <h4 className="font-semibold text-zen-dark mb-2">艺术特征：</h4>
                            <div className="flex flex-wrap gap-2">
                              {art.features.map((feature, featureIndex) => (
                                <Badge key={featureIndex} className="bg-zen-gold text-white">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">代表作品：</h4>
                            <div className="space-y-2">
                              {art.examples.map((example, exampleIndex) => (
                                <div key={exampleIndex} className="flex items-center justify-between p-2 bg-zen-light rounded">
                                  <span className="font-medium text-zen-dark">{example.name}</span>
                                  <div className="flex gap-2">
                                    <Badge variant="outline" className="zen-border text-xs">
                                      {example.country}
                                    </Badge>
                                    <Badge variant="secondary" className="bg-zen-gold/20 text-zen-dark text-xs">
                                      {example.style}
                                    </Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 文化影响 */}
            <TabsContent value="influences" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">文化影响与交流</h2>
                <p className="text-lg text-zen-gray">塑造东南亚文化的重要外来影响</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {culturalInfluences.map((influence, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-zen-dark">{influence.influence}</CardTitle>
                      <CardDescription className="text-zen-gray">
                        影响时期：{influence.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zen-gray mb-4">{influence.impact}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-zen-dark mb-2">主要方面：</h4>
                          <div className="flex flex-wrap gap-2">
                            {influence.aspects.map((aspect, aspectIndex) => (
                              <Badge key={aspectIndex} className="bg-zen-gold text-white">
                                {aspect}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-zen-dark mb-2">典型例子：</h4>
                          <div className="space-y-1">
                            {influence.examples.map((example, exampleIndex) => (
                              <p key={exampleIndex} className="text-sm text-zen-gray">• {example}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* 现代发展 */}
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zen-dark mb-4">现代发展与挑战</h3>
                  <p className="text-lg text-zen-gray">东南亚文化在现代化进程中的变迁</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {modernDevelopment.map((development, index) => (
                    <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-zen-dark">{development.aspect}</CardTitle>
                        <CardDescription className="text-zen-gray">
                          {development.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">主要成就：</h4>
                            <div className="space-y-1">
                              {development.achievements.map((achievement, achIndex) => (
                                <p key={achIndex} className="text-sm text-zen-gray">• {achievement}</p>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">面临挑战：</h4>
                            <div className="space-y-1">
                              {development.challenges.map((challenge, chalIndex) => (
                                <p key={chalIndex} className="text-sm text-zen-gray">• {challenge}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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

export default Southeast;