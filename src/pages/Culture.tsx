import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IMAGES } from "@/assets/images";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Palette, Mountain, Flower, Heart, Lightbulb, Users, Globe } from "lucide-react";

const Culture = () => {
  const coreValues = [
    {
      title: "天人合一",
      description: "人与自然和谐共生的哲学理念，体现在建筑、园林、艺术等各个方面",
      icon: <Mountain className="w-8 h-8" />,
      color: "bg-zen-blue"
    },
    {
      title: "中庸之道",
      description: "追求平衡与和谐，避免极端，在变化中寻求稳定",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-zen-green"
    },
    {
      title: "礼仪文化",
      description: "重视人际关系和社会秩序，通过礼仪规范维护社会和谐",
      icon: <Users className="w-8 h-8" />,
      color: "bg-zen-red"
    },
    {
      title: "智慧传承",
      description: "重视教育和知识传承，通过文字、艺术、仪式传播文化",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "bg-zen-gold"
    }
  ];

  const culturalElements = [
    {
      category: "哲学思想",
      items: [
        { name: "儒家思想", description: "仁义礼智信的道德体系" },
        { name: "道家哲学", description: "无为而治，顺应自然" },
        { name: "佛教智慧", description: "慈悲为怀，众生平等" },
        { name: "禅宗美学", description: "简约空灵，直指人心" }
      ],
      image: IMAGES.ZEN_TEMPLE_3
    },
    {
      category: "艺术形式",
      items: [
        { name: "书法艺术", description: "笔墨间的精神表达" },
        { name: "绘画艺术", description: "意境深远的视觉语言" },
        { name: "音乐舞蹈", description: "韵律中的情感流淌" },
        { name: "戏曲表演", description: "综合性的舞台艺术" }
      ],
      image: IMAGES.CALLIGRAPHY_7
    },
    {
      category: "生活方式",
      items: [
        { name: "茶道文化", description: "品茗中的人生哲学" },
        { name: "园林艺术", description: "微缩的自然世界" },
        { name: "建筑美学", description: "空间中的文化符号" },
        { name: "节庆仪式", description: "时间中的文化记忆" }
      ],
      image: IMAGES.TEA_CEREMONY_10
    },
    {
      category: "精神追求",
      items: [
        { name: "修身养性", description: "内在品格的培养" },
        { name: "和谐共生", description: "人际关系的理想" },
        { name: "天下大同", description: "社会理想的追求" },
        { name: "文化传承", description: "历史责任的承担" }
      ],
      image: IMAGES.BAMBOO_FOREST_6
    }
  ];

  const regions = [
    {
      name: "中华文化圈",
      description: "以汉文化为核心，包括中国大陆、台湾、香港、澳门等地区",
      characteristics: ["汉字文化", "儒家思想", "中医药", "传统节日"],
      image: IMAGES.CHINESE_ARCHITECTURE_1
    },
    {
      name: "日本文化圈",
      description: "融合本土神道与外来佛教、儒学，形成独特的和文化",
      characteristics: ["禅宗美学", "武士道", "茶道花道", "匠人精神"],
      image: IMAGES.ZEN_TEMPLE_9
    },
    {
      name: "朝鲜文化圈",
      description: "深受中华文化影响，同时保持鲜明的民族特色",
      characteristics: ["韩屋建筑", "传统服饰", "礼仪文化", "音乐舞蹈"],
      image: IMAGES.HANBOK_1
    },
    {
      name: "东南亚文化圈",
      description: "多元文化交融，佛教、印度教、伊斯兰教并存",
      characteristics: ["佛教传统", "热带风情", "多元宗教", "贸易文化"],
      image: IMAGES.BAMBOO_FOREST_4
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
              <h1 className="text-xl font-bold text-zen-dark">文化概览</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* 标题区域 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-zen-dark mb-6">
            东方文化
            <span className="block text-zen-red">核心理念</span>
          </h1>
          <p className="text-xl md:text-2xl text-zen-gray max-w-4xl mx-auto leading-relaxed">
            东方文化以其深邃的哲学思想、精美的艺术形式、独特的生活方式和崇高的精神追求，
            构成了人类文明的重要组成部分。它强调和谐、平衡、内省与超越，
            为现代世界提供了宝贵的智慧财富。
          </p>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zen-dark mb-4">核心价值观</h2>
            <p className="text-xl text-zen-gray">东方文化的精神内核</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center zen-shadow hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className={`${value.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {value.icon}
                  </div>
                  <CardTitle className="text-zen-dark">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zen-gray">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 文化要素 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zen-dark mb-4">文化要素</h2>
            <p className="text-xl text-zen-gray">东方文化的丰富内涵</p>
          </div>

          <div className="space-y-12">
            {culturalElements.map((element, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <img 
                    src={element.image} 
                    alt={element.category}
                    className="w-full h-80 object-cover rounded-lg zen-shadow"
                  />
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-zen-dark">{element.category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {element.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="zen-border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-zen-dark">{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-zen-gray">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 文化圈分布 */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zen-dark mb-4">文化圈分布</h2>
            <p className="text-xl text-zen-gray">东方文化的地域特色</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <Card key={index} className="zen-shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={region.image} 
                    alt={region.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{region.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-zen-gray mb-4">{region.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.characteristics.map((char, charIndex) => (
                      <Badge key={charIndex} variant="secondary" className="bg-zen-light text-zen-dark">
                        {char}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 探索更多 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-zen-dark mb-6">深入探索</h2>
          <p className="text-xl text-zen-gray mb-8">选择您感兴趣的文化领域，开始深度学习之旅</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild size="lg" className="bg-zen-red hover:bg-zen-red/90">
              <Link to="/chinese">
                <BookOpen className="mr-2 w-5 h-5" />
                中华文化
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-zen-blue hover:bg-zen-blue/90">
              <Link to="/japanese">
                <Mountain className="mr-2 w-5 h-5" />
                日本文化
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-zen-green hover:bg-zen-green/90">
              <Link to="/korean">
                <Flower className="mr-2 w-5 h-5" />
                韩国文化
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-zen-gold hover:bg-zen-gold/90">
              <Link to="/southeast">
                <Globe className="mr-2 w-5 h-5" />
                东南亚文化
              </Link>
            </Button>
          </div>
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

export default Culture;