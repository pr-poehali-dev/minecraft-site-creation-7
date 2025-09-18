import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Index = () => {
  const storeItems = [
    {
      id: 1,
      name: "Алмазный Меч",
      price: 299,
      image: "/img/f776fedf-87b8-47ab-9c6d-8189c7f12688.jpg",
      description: "Легендарное оружие с невероятной прочностью",
      rarity: "Легендарный"
    },
    {
      id: 2,
      name: "Изумрудная Руда",
      price: 150,
      image: "/img/e34407e1-1ee0-4eac-b267-46001adef76f.jpg",
      description: "Редкий ресурс для крафта мощных предметов",
      rarity: "Редкий"
    },
    {
      id: 3,
      name: "Золотая Корона",
      price: 500,
      image: "/img/a01b78b4-8832-48b5-a30e-3ee8f3675ad0.jpg",
      description: "Символ власти и престижа на сервере",
      rarity: "Мифический"
    }
  ]

  const donationPackages = [
    {
      name: "VIP",
      price: 20,
      features: ["Цветной ник", "5 домов", "Приватные сундуки", "Базовые команды"],
      popular: false,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "VIP",
      price: 299,
      features: ["Все из ИГРОК", "Полет", "15 домов", "VIP чат", "Кит каждый день"],
      popular: true,
      color: "from-green-600 to-green-800"
    },
    {
      name: "PREMIUM",
      price: 599,
      features: ["Все из VIP", "Креатив мод", "50 домов", "Админ команды", "Эксклюзивный контент"],
      popular: false,
      color: "from-blue-600 to-blue-800"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      {/* Navigation */}
      <nav className="bg-card/95 backdrop-blur border-b border-border/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-primary">MINECRAFT</div>
            <div className="text-xl font-semibold text-foreground">STORE</div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#store" className="text-foreground hover:text-primary transition-colors">Магазин</a>
            <a href="#donate" className="text-foreground hover:text-primary transition-colors">Донат</a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">Сообщество</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="LogIn" size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-6 animate-float">
              MINECRAFT
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-8">
              ИГРОВОЙ МАГАЗИН
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Лучший сервер с уникальными предметами, привилегиями и незабываемыми приключениями!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl px-8 py-4 animate-glow">
                <Icon name="Play" size={20} className="mr-2" />
                Играть сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-8 py-4">
                <Icon name="Users" size={20} className="mr-2" />
                Сообщество
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            <Icon name="ShoppingCart" size={40} className="inline mr-4" />
            ИГРОВОЙ МАГАЗИН
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storeItems.map((item, index) => (
              <Card key={item.id} className="bg-card border-border/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                  </div>
                  <Badge className={`mb-2 ${item.rarity === 'Мифический' ? 'bg-yellow-600' : item.rarity === 'Легендарный' ? 'bg-purple-600' : 'bg-blue-600'}`}>
                    {item.rarity}
                  </Badge>
                  <CardTitle className="text-foreground">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="text-2xl font-bold text-primary mb-4">{item.price} ₽</div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingBag" size={16} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            <Icon name="Crown" size={40} className="inline mr-4" />
            ПРИВИЛЕГИИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationPackages.map((pkg, index) => (
              <Card key={pkg.name} className={`relative bg-gradient-to-br ${pkg.color} border-0 text-white hover:scale-105 transition-all duration-300 animate-fade-in ${pkg.popular ? 'ring-4 ring-primary' : ''}`} style={{animationDelay: `${index * 0.2}s`}}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold mt-4">{pkg.price} ₽</div>
                  <div className="text-sm opacity-80">навсегда</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Icon name="Check" size={16} className="mr-3 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-white text-gray-900 hover:bg-gray-100">
                    <Icon name="Zap" size={16} className="mr-2" />
                    Купить привилегию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold text-primary mb-4 md:mb-0">MINECRAFT STORE</div>
            <div className="flex gap-4">
              <Button size="sm" variant="ghost">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Discord
              </Button>
              <Button size="sm" variant="ghost">
                <Icon name="Users" size={16} className="mr-2" />
                Сообщество
              </Button>
              <Button size="sm" variant="ghost">
                <Icon name="HelpCircle" size={16} className="mr-2" />
                Поддержка
              </Button>
            </div>
          </div>
          <div className="mt-4 text-muted-foreground">
            © 2024 Minecraft Store. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index