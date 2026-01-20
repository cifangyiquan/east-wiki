import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IMAGES } from "@/assets/images";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Users, Music, Calendar, Palette, Heart } from "lucide-react";

const Korean = () => {
  const periods = [
    {
      name: "三国时代",
      period: "57年-668年",
      description: "高句丽、百济、新罗三国鼎立，文化多元发展",
      achievements: ["佛教传入", "汉字使用", "古墓壁画", "金属工艺"],
      image: IMAGES.HANBOK_6
    },
    {
      name: "统一新罗",
      period: "668年-935年",
      description: "朝鲜半岛统一，文化艺术繁荣",
      achievements: ["佛国寺建立", "石窟庵雕刻", "新罗金冠", "陶瓷工艺"],
      image: IMAGES.HANBOK_1
    },
    {
      name: "高丽王朝",
      period: "918年-1392年",
      description: "高丽青瓷达到顶峰，文化艺术发达",
      achievements: ["高丽青瓷", "金属活字", "高丽大藏经", "宫廷音乐"],
      image: IMAGES.HANBOK_2
    },
    {
      name: "朝鲜王朝",
      period: "1392年-1910年",
      description: "儒家文化兴盛，韩文字创制",
      achievements: ["训民正音", "儒学发展", "白瓷工艺", "宫廷文化"],
      image: IMAGES.HANBOK_5
    }
  ];

  const hanbok = [
    {
      type: "女性韩服",
      components: ["저고리 (上衣)", "치마 (裙子)", "속치마 (内裙)", "버선 (袜子)"],
      colors: ["明亮色彩", "对比搭配", "季节变化"],
      occasions: ["婚礼", "节日", "成人礼", "祭祀"],
      image: IMAGES.HANBOK_5,
      description: "女性韩服以优雅的曲线和鲜艳的色彩为特色"
    },
    {
      type: "男性韩服",
      components: ["저고리 (上衣)", "바지 (裤子)", "조끼 (马甲)", "갓 (帽子)"],
      colors: ["素雅色调", "庄重配色", "身份象征"],
      occasions: ["正式场合", "传统仪式", "学者装束"],
      image: IMAGES.HANBOK_1,
      description: "男性韩服体现了儒家文化中的庄重与威严"
    },
    {
      type: "儿童韩服",
      components: ["색동저고리 (彩色上衣)", "치마/바지", "조끼", "복건 (帽子)"],
      colors: ["彩虹色彩", "活泼明快", "吉祥寓意"],
      occasions: ["돌잔치 (周岁宴)", "节日庆典", "家庭聚会"],
      image: IMAGES.HANBOK_3,
      description: "儿童韩服色彩丰富，寓意健康成长和幸福"
    }
  ];

  const hanokArchitecture = [
    {
      type: "宫殿建筑",
      features: ["다포계 (多包系)", "단청 (丹青)", "기와지붕 (瓦屋顶)", "월대 (月台)"],
      examples: ["景福宫", "昌德宫", "德寿宫", "昌庆宫"],
      image: IMAGES.HANBOK_6,
      description: "宫殿建筑体现了朝鲜王朝的威严与华丽"
    },
    {
      type: "民居建筑",
      features: ["온돌 (温突)", "마루 (木地板)", "처마 (屋檐)", "담장 (围墙)"],
      examples: ["북촌한옥마을", "서촌한옥", "전주한옥마을"],
      image: IMAGES.HANBOK_9,
      description: "民居韩屋注重实用性和与自然的和谐"
    },
    {
      type: "寺庙建筑",
      features: ["불전 (佛殿)", "탑 (塔)", "종루 (钟楼)", "산문 (山门)"],
      examples: ["佛国寺", "海印寺", "松广寺", "通度寺"],
      image: IMAGES.HANBOK_2,
      description: "寺庙建筑融合了佛教文化与韩国传统建筑风格"
    }
  ];

  const traditionalArts = [
    {
      category: "음악 (音乐)",
      description: "韩国传统音乐，分为宫廷音乐和民间音乐",
      types: ["정악 (正乐)", "민속악 (民俗乐)", "종교음악 (宗教音乐)"],
      instruments: ["가야금", "거문고", "대금", "장구"],
      image: IMAGES.HANBOK_4,
      significance: "传统音乐体现了韩国人的情感表达和审美追求"
    },
    {
      category: "무용 (舞蹈)",
      description: "优雅的传统舞蹈艺术，表达内在情感",
      types: ["궁중무용 (宫廷舞蹈)", "민속무용 (民俗舞蹈)", "종교무용 (宗教舞蹈)"],
      instruments: ["부채춤", "검무", "승무", "탈춤"],
      image: IMAGES.HANBOK_7,
      significance: "舞蹈通过优美的动作表达韩国文化的内敛与深沉"
    },
    {
      category: "도자기 (陶瓷)",
      description: "韩国陶瓷艺术，以青瓷和白瓷闻名",
      types: ["청자 (青瓷)", "백자 (白瓷)", "분청사기 (粉青沙器)"],
      instruments: ["상감기법", "철화기법", "백토분장"],
      image: IMAGES.HANBOK_8,
      significance: "陶瓷艺术体现了韩国人对美的独特理解"
    }
  ];

  const festivals = [
    {
      name: "설날 (春节)",
      date: "农历正月初一",
      description: "韩国最重要的传统节日，家族团聚的日子",
      customs: ["세배 (拜年)", "떡국 (年糕汤)", "윷놀이 (掷柶游戏)", "한복 (穿韩服)"],
      significance: "祈求新年平安，维系家族情感"
    },
    {
      name: "추석 (中秋节)",
      date: "农历八月十五",
      description: "感谢丰收的传统节日，又称韩国感恩节",
      customs: ["성묘 (扫墓)", "송편 (松饼)", "강강술래 (康康水越来)", "차례 (祭祀)"],
      significance: "感恩祖先，庆祝丰收"
    },
    {
      name: "단오 (端午节)",
      date: "农历五月初五",
      description: "祈求健康和驱邪的传统节日",
      customs: ["그네뛰기 (荡秋千)", "씨름 (摔跤)", "창포물 (菖蒲水)", "수리취떡 (艾草糕)"],
      significance: "祈求健康，驱除邪气"
    },
    {
      name: "대보름 (正月十五)",
      date: "农历正月十五",
      description: "祈求一年平安的传统节日",
      customs: ["달집태우기 (烧月屋)", "오곡밥 (五谷饭)", "부럼깨기 (咬坚果)", "연날리기 (放风筝)"],
      significance: "祈求丰收，驱除灾难"
    }
  ];

  const confucianCulture = [
    {
      aspect: "교육 (教育)",
      description: "重视教育和学问，培养君子品格",
      values: ["학문 (学问)", "예의 (礼仪)", "효도 (孝道)", "충성 (忠诚)"],
      institutions: ["성균관", "향교", "서원", "서당"]
    },
    {
      aspect: "가족 (家族)",
      description: "以家族为中心的社会结构和价值观",
      values: ["효 (孝)", "제 (悌)", "화목 (和睦)", "전통 (传统)"],
      institutions: ["종가", "문중", "족보", "제사"]
    },
    {
      aspect: "사회 (社会)",
      description: "等级分明的社会秩序和道德规范",
      values: ["예 (礼)", "의 (义)", "염치 (廉耻)", "신 (信)"],
      institutions: ["양반", "중인", "평민", "천민"]
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
              <h1 className="text-xl font-bold text-zen-dark">韩国文化</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/culture" className="text-zen-dark hover:text-zen-green transition-colors">
                文化概览
              </Link>
              <Link to="/chinese" className="text-zen-dark hover:text-zen-green transition-colors">
                中华文化
              </Link>
              <Link to="/japanese" className="text-zen-dark hover:text-zen-green transition-colors">
                日本文化
              </Link>
              <Link to="/southeast" className="text-zen-dark hover:text-zen-green transition-colors">
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
              韩国文化
              <span className="block text-zen-green">优雅传统</span>
            </h1>
            <p className="text-xl md:text-2xl text-zen-gray max-w-4xl mx-auto leading-relaxed">
              韩国文化在传承中华文明的基础上，发展出了独具特色的文化体系。
              从优雅的韩服到精美的韩屋，从深厚的儒家文化到丰富的民俗传统，
              韩国文化以其独特的魅力展现了朝鲜民族的智慧与创造力。
            </p>
          </div>

          {/* 英雄图片 */}
          <div className="relative h-96 rounded-lg overflow-hidden zen-shadow mb-16">
            <img 
              src={IMAGES.HANBOK_5} 
              alt="韩国文化"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">한국의 아름다움 - 韩国之美</h2>
                <p className="text-xl">感受韩国文化的优雅与深邃</p>
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
                <Users className="w-4 h-4" />
                历史发展
              </TabsTrigger>
              <TabsTrigger value="hanbok" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                传统服饰
              </TabsTrigger>
              <TabsTrigger value="hanok" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                韩屋建筑
              </TabsTrigger>
              <TabsTrigger value="arts" className="flex items-center gap-2">
                <Music className="w-4 h-4" />
                传统艺术
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
                <p className="text-lg text-zen-gray">韩国文化的形成与演进历程</p>
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

            {/* 传统服饰 */}
            <TabsContent value="hanbok" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">한복 - 韩服文化</h2>
                <p className="text-lg text-zen-gray">韩国传统服饰的优雅与美学</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {hanbok.map((item, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-64">
                      <img 
                        src={item.image} 
                        alt={item.type}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-zen-dark">{item.type}</CardTitle>
                      <CardDescription className="text-zen-gray">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-zen-dark mb-2">服装组成：</h4>
                          <div className="space-y-1">
                            {item.components.map((component, compIndex) => (
                              <p key={compIndex} className="text-sm text-zen-gray">• {component}</p>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-zen-dark mb-2">色彩特点：</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.colors.map((color, colorIndex) => (
                              <Badge key={colorIndex} className="bg-zen-green text-white">
                                {color}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-zen-dark mb-2">穿着场合：</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.occasions.map((occasion, occIndex) => (
                              <Badge key={occIndex} variant="outline" className="zen-border">
                                {occasion}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 韩屋建筑 */}
            <TabsContent value="hanok" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">한옥 - 韩屋建筑</h2>
                <p className="text-lg text-zen-gray">韩国传统建筑的智慧与美学</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {hanokArchitecture.map((hanok, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={hanok.image} 
                        alt={hanok.type}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-zen-dark">{hanok.type}</CardTitle>
                      <CardDescription className="text-zen-gray">
                        {hanok.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-zen-dark mb-2">建筑特征：</h4>
                          <div className="flex flex-wrap gap-2">
                            {hanok.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} className="bg-zen-green text-white">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-zen-dark mb-2">代表建筑：</h4>
                          <div className="space-y-1">
                            {hanok.examples.map((example, exampleIndex) => (
                              <p key={exampleIndex} className="text-sm text-zen-gray">• {example}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* 儒家文化影响 */}
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zen-dark mb-4">유교 문화 - 儒家文化影响</h3>
                  <p className="text-lg text-zen-gray">儒家思想在韩国社会的深远影响</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {confucianCulture.map((culture, index) => (
                    <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-zen-dark">{culture.aspect}</CardTitle>
                        <CardDescription className="text-zen-gray">
                          {culture.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">核心价值：</h4>
                            <div className="flex flex-wrap gap-2">
                              {culture.values.map((value, valueIndex) => (
                                <Badge key={valueIndex} className="bg-zen-red text-white">
                                  {value}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">相关制度：</h4>
                            <div className="flex flex-wrap gap-2">
                              {culture.institutions.map((institution, instIndex) => (
                                <Badge key={instIndex} variant="outline" className="zen-border">
                                  {institution}
                                </Badge>
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

            {/* 传统艺术 */}
            <TabsContent value="arts" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zen-dark mb-4">전통 예술 - 传统艺术</h2>
                <p className="text-lg text-zen-gray">韩国传统艺术的精髓与表达</p>
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
                            <h4 className="font-semibold text-zen-dark mb-2">主要类型：</h4>
                            <div className="flex flex-wrap gap-2">
                              {art.types.map((type, typeIndex) => (
                                <Badge key={typeIndex} className="bg-zen-green text-white">
                                  {type}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-zen-dark mb-2">代表形式：</h4>
                            <div className="flex flex-wrap gap-2">
                              {art.instruments.map((instrument, instIndex) => (
                                <Badge key={instIndex} variant="outline" className="zen-border">
                                  {instrument}
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
                <h2 className="text-3xl font-bold text-zen-dark mb-4">전통 명절 - 传统节日</h2>
                <p className="text-lg text-zen-gray">承载文化记忆的重要时刻</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {festivals.map((festival, index) => (
                  <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-zen-dark">{festival.name}</CardTitle>
                        <Badge className="bg-zen-green text-white">
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
                        
                        <div className="bg-zen-green/10 p-3 rounded-lg">
                          <h4 className="font-semibold text-zen-green mb-1">文化意义：</h4>
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

export default Korean;
