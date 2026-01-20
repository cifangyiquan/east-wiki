import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IMAGES } from "@/assets/images";
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Palette, Mountain, Flower } from "lucide-react";

const Index = () => {
  const culturalRegions = [
    {
      title: "中华文化",
      description: "五千年文明的深厚底蕴，书法、茶道、哲学思想的精髓",
      image: IMAGES.CHINESE_ARCHITECTURE_10,
      path: "/chinese",
      color: "bg-zen-red",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "日本文化",
      description: "禅宗美学与武士精神，茶道、花道的极致追求",
      image: IMAGES.ZEN_TEMPLE_7,
      path: "/japanese",
      color: "bg-zen-blue",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      title: "韩国文化",
      description: "韩屋建筑与传统服饰，儒家文化的现代传承",
      image: IMAGES.HANBOK_5,
      path: "/korean",
      color: "bg-zen-green",
      icon: <Flower className="w-6 h-6" />
    },
    {
      title: "东南亚文化",
      description: "佛教传统与多元融合，热带风情的文化盛宴",
      image: IMAGES.BAMBOO_FOREST_4,
      path: "/southeast",
      color: "bg-zen-gold",
      icon: <Palette className="w-6 h-6" />
    }
  ];

  const featuredContent = [
    {
      title: "茶道艺术",
      description: "探索东方茶文化的精神内核",
      image: IMAGES.TEA_CEREMONY_3,
      tags: ["茶道", "禅宗", "美学"]
    },
    {
      title: "书法之美",
      description: "笔墨间的东方哲学智慧",
      image: IMAGES.CALLIGRAPHY_1,
      tags: ["书法", "文字", "艺术"]
    },
    {
      title: "禅意建筑",
      description: "天人合一的建筑美学",
      image: IMAGES.ZEN_TEMPLE_8,
      tags: ["建筑", "禅宗", "园林"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zen-light via-white to-zen-light">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b zen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-zen-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">东</span>
              </div>
              <h1 className="text-xl font-bold text-zen-dark">东方文化Wiki</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/culture" className="text-zen-dark hover:text-zen-red transition-colors">
                文化概览
              </Link>
              <Link to="/chinese" className="text-zen-dark hover:text-zen-red transition-colors">
                中华文化
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

      {/* 英雄区域 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-zen-dark mb-6">
              东方文化
              <span className="block text-zen-red">智慧宝库</span>
            </h1>
            <p className="text-xl md:text-2xl text-zen-gray max-w-3xl mx-auto leading-relaxed">
              探索亚洲文明的深厚底蕴，感受千年传承的文化精髓。
              从中华文化的博大精深，到日本文化的精致禅意，
              再到韩国文化的优雅传统和东南亚文化的多元融合。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zen-red hover:bg-zen-red/90">
                <Link to="/culture">
                  开始探索 <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="zen-border">
                <Link to="#featured">
                  精选内容
                </Link>
              </Button>
            </div>
          </div>

          {/* 文化区域卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {culturalRegions.map((region, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 zen-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={region.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 ${region.color} text-white p-2 rounded-full`}>
                    {region.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-zen-dark">{region.title}</CardTitle>
                  <CardDescription className="text-zen-gray">
                    {region.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-zen-light">
                    <Link to={region.path}>
                      了解更多 <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 精选内容 */}
      <section id="featured" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zen-dark mb-4">精选内容</h2>
            <p className="text-xl text-zen-gray">深入了解东方文化的核心元素</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 zen-shadow overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={content.image} 
                    alt={content.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-zen-dark">{content.title}</CardTitle>
                  <CardDescription className="text-zen-gray">
                    {content.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {content.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-zen-light text-zen-dark">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
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

export default Index;
