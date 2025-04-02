import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] min-h-[400px] bg-garnier-green">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center z-10 px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">KERATINA VEGETAL</h1>
              <p className="text-xl md:text-2xl mb-8">NUTRISSE OLEOS</p>
              <Button className="bg-white text-garnier-green hover:bg-gray-100 rounded-none">
                Conoce toda la gama
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16 bg-white">
        <div className="container-garnier">
          <h2 className="text-2xl font-bold text-center mb-4">COMPRA AHORA LO QUE ESTÁ EN TENDENCIA</h2>
          <p className="text-center mb-10 text-sm text-garnier-green">
            DESCUBRE LOS PRODUCTOS FAVORITOS DE TUS INFLUENCERS, CONSÍGUELOS EN LÍNEA FÁCIL Y RÁPIDO.
          </p>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-8">¡TE VAN A ENCANTAR!</h3>
            <p className="text-center mb-10 text-sm text-garnier-green">
              NUESTROS PRODUCTOS QUE ESTÁN EN TENDENCIA PARA EL CUIDADO DE LA PIEL Y EL CABELLO.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProductCard
                image="https://ext.same-assets.com/2552496294/3058427937.png"
                name="Fructis Hair Food Coco 350ml"
                href="/sobre-nuestras-marcas/fructis/hair-food-coco-350ml"
              />
              <ProductCard
                image="https://ext.same-assets.com/2552496294/1423290080.jpeg"
                name="Garnier Express Aclara Serum Anti Manchas con Vitamina C"
                href="/skin-active/express-aclara/booster-serum-anti-manchas"
                rating={5}
              />
              <ProductCard
                image="https://ext.same-assets.com/2552496294/1423290080.jpeg"
                name="Garnier Skin Active Serum Noche Antimanchas con 10% Vitamina C Pura"
                href="/skin-active/express-aclara/serum-de-noche"
              />
              <ProductCard
                image="https://ext.same-assets.com/2552496294/1423290080.jpeg"
                name="GARNIER EXPRESS ACLARA Crema de Ojos Anti-ojeras"
                href="/skin-active/express-aclara/crema-de-ojos-anti-ojeras"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Routine Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-garnier">
          <h2 className="text-2xl font-bold text-center mb-10">ENCUENTRA LA RUTINA PERFECTA PARA TI</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <RoutineCard
              image="https://ext.same-assets.com/2552496294/2373786225.jpeg"
              title="EXPRESS ACLARA"
              href="/sobre-nuestras-marcas/express-aclara"
            />
            <RoutineCard
              image="https://ext.same-assets.com/2552496294/3058427937.png"
              title="HAIR FOOD"
              href="/sobre-nuestras-marcas/fructis/hair-food"
            />
            <RoutineCard
              image="https://ext.same-assets.com/2552496294/2373786225.jpeg"
              title="AGUA MICELAR"
              href="/productos/agua-micelar"
            />
            <RoutineCard
              image="https://ext.same-assets.com/2552496294/1878452148.png"
              title="NUTRISSE"
              href="/sobre-nuestras-marcas/nutrisse"
            />
          </div>
        </div>
      </section>

      {/* Latest Releases Section */}
      <section className="py-16 bg-white">
        <div className="container-garnier">
          <h2 className="text-2xl font-bold text-center mb-4">ÚLTIMOS LANZAMIENTOS</h2>
          <p className="text-center mb-12 text-sm text-garnier-green max-w-3xl mx-auto">
            DESCUBRE LOS ÚLTIMOS PRODUCTOS DE BELLEZA LIBRES DE CRUELDAD DE GARNIER Y LAS INNOVACIONES,
            TODOS OFICIALMENTE APROBADOS POR CRUELTY FREE INTERNATIONAL BAJO EL PROGRAMA LEAPING BUNNY.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FeaturedProduct
              title="CREMA DE OJOS ANTI-OJERAS EXPRESS ACLARA"
              features={[
                "Vitamina C: Ayuda a dar luminosidad a la piel y a mejorar la tez.",
                "Niacinamida: Conocida por sus propiedades unificadoras.",
                "Cafeína: Aliado Anti-Ojeras, ayuda a reducir ojeras y bolsas del contorno de los ojos.",
                "Polvo de plátano: Extracto de origen natural conocido por ayudar a mejorar el tono con el tiempo."
              ]}
              image="https://ext.same-assets.com/2552496294/1423290080.jpeg"
              href="/skin-active/express-aclara/crema-de-ojos-anti-ojeras"
              buttonText="CONOCE MÁS"
            />

            <div className="bg-green-50 p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold mb-4">SKIN COACH AI</h3>
              <p className="mb-6 text-sm">
                Tómate una selfie para escanear tu rostro y obtén una rutina personalizada para tu tipo de piel y tus necesidades
              </p>
              <Button className="bg-garnier-green hover:bg-garnier-green/90 text-white">
                PROBAR AHORA
              </Button>
            </div>
          </div>

          <div className="mt-12">
            <FeaturedProduct
              title="SÉRUM NOCHE EXPRESS ACLARA ANTI MANCHAS"
              features={[
                "Vitamina C pura al 10%: Reduce manchas y unifica el tono mientras duermes.",
                "Piel radiante al despertar: Piel visiblemente más suavle, luminosa y revitalizada cada mañana.",
                "Acción nocturna: Formulado para actuar durante la noche, cuando la piel se regenera mejor.",
                "Vegano y Cruelty Free: Fórmula vegana, no testada en animales, certificada por Cruelty Free International."
              ]}
              image="https://ext.same-assets.com/2552496294/1423290080.jpeg"
              href="/skin-active/express-aclara/serum-de-noche"
              buttonText="ENTÉRATE MÁS"
              reverse
            />
          </div>
        </div>
      </section>

      {/* Discover Garnier Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-garnier">
          <h2 className="text-2xl font-bold text-center mb-10">DESCUBRE GARNIER</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <DiscoverCard
              image="https://ext.same-assets.com/2552496294/2373786225.jpeg"
              href="/productos/brands/garnier-skin-active"
            />
            <DiscoverCard
              image="https://ext.same-assets.com/2552496294/3058427937.png"
              href="/productos/capilar-styling/shampoo"
            />
            <DiscoverCard
              image="https://ext.same-assets.com/2552496294/1878452148.png"
              href="/productos/brands/nutrisse"
            />
            <DiscoverCard
              image="https://ext.same-assets.com/2552496294/2373786225.jpeg"
              href="/sobre-nuestras-marcas/obao"
            />
          </div>
        </div>
      </section>

      {/* Virtual Tools Section */}
      <section className="py-16 bg-white">
        <div className="container-garnier">
          <h2 className="text-2xl font-bold text-center mb-10">PRUEBA NUESTRAS HERRAMIENTAS VIRTUALES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VirtualToolCard
              title="Tu diagnóstico de piel con una selfie"
              image="https://ext.same-assets.com/2552496294/2472373664.mp4"
              href="/skin-coach"
            />
            <VirtualToolCard
              title="Prueba el tono ideal para tu pelo"
              image="https://ext.same-assets.com/2552496294/3029731383.mp4"
              href="/coloracion/herramienta-de-seleccin-de-tono"
            />
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-garnier">
          <h2 className="text-2xl font-bold text-center mb-10">LOS INGREDIENTES FAVORITOS</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            <IngredientCard
              name="Vitamina C"
              href="/nuestros-ingredientes/vitamina-c"
            />
            <IngredientCard
              name="Ácido Salicílico"
              href="/nuestros-ingredientes/acido-salicilico"
            />
            <IngredientCard
              name="Niacinamida"
              href="/nuestros-ingredientes/niacinamida"
            />
            <IngredientCard
              name="Micelar"
              href="/nuestros-ingredientes/micelar"
            />
            <IngredientCard
              name="Coco"
              href="/ingredientes/coco"
            />
            <IngredientCard
              name="Aguacate"
              href="/nuestros-ingredientes/aguacate"
            />
            <IngredientCard
              name="Aloe"
              href="/nuestros-ingredientes/aloe"
            />
            <IngredientCard
              name="Cacao"
              href="/nuestros-ingredientes/cacao"
            />
          </div>

          <div className="text-center mt-8">
            <Button className="bg-garnier-green hover:bg-garnier-green/90 text-white">
              TODOS LOS INGREDIENTES
            </Button>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container-garnier">
          <h2 className="text-2xl font-bold text-center mb-10">TIPS, CONSEJOS Y TRUCOS PARA TU CUIDADO</h2>

          <div>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <TipCard
                    number="01"
                    title="Agua Micelar: el desmaquillante ideal para un rostro radiante"
                    description="El agua micelar es un limpiador facial compuesto por activos llamados micelas, que son partículas minúsculas que actúan como imanes para aislar la suciedad y eliminarla de la piel."
                    image="https://ext.same-assets.com/2552496294/2373786225.jpeg"
                    productName="GARNIER AGUA MICELAR Agua Micelar Todo en 1"
                    productImage="https://ext.same-assets.com/2552496294/2373786225.jpeg"
                    productLink="/skin-active/agua-micelar/agua-micelar-todo-en-1"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <TipCard
                    number="02"
                    title="Ácido Salicílico y Vitamina C para el rostro: beneficios y usos"
                    description="Conoce los beneficios y usos del ácido salicílico y vitamina C en el rostro junto a la guía de Garnier. ¡Disfruta una rutina facial más profunda!"
                    image="https://ext.same-assets.com/2552496294/1551798603.jpeg"
                    productName="Garnier Express Aclara Gel Limpiador Facial Tono Uniforme con Vitamina C"
                    productImage="https://ext.same-assets.com/2552496294/1423290080.jpeg"
                    productLink="/skin-active/express-aclara/limpiador-facial"
                    articleLink="/tips/para-que-sirve-la-vitamina-c"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <TipCard
                    number="03"
                    title="Cómo usar las mascarillas Fructis Hair Food?"
                    description="¡Dale a tu cabello un cuidado completo con mascarillas para el pelo HairFood!"
                    image="https://ext.same-assets.com/2552496294/3602341009.jpeg"
                    productName="Fructis Hair Food Coco 350ml"
                    productImage="https://ext.same-assets.com/2552496294/3058427937.png"
                    productLink="/sobre-nuestras-marcas/fructis/hair-food-coco-350ml"
                    articleLink="/tips/como-usar-las-mascarillas-fructis-hair-food"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <TipCard
                    number="04"
                    title="Tinturas rubias: un favorito que no pasa de moda"
                    description="El pelo rubio es un clásico que jamás pasa de moda, cada vez más mujeres se animan a llevarlo y jugar con las gamas de tintura rubia."
                    image="https://ext.same-assets.com/2552496294/586616259.jpeg"
                    productName="Cor Intensa 7.0 Rubio"
                    productImage="https://ext.same-assets.com/2552496294/1878452148.png"
                    productLink="/sobre-nuestras-marcas/cor-intensa/rubio-7_0"
                    articleLink="/tips/tinturas-rubias-un-favorito-que-no-pasa-de-moda"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Green Beauty Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-garnier">
          <h2 className="text-2xl font-bold text-center mb-10">GARNIER COMPROMETIDA CON LA GREEN BEAUTY</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GreenBeautyCard
              title="Aprobada por Cruelty Free International"
              description="Todos los productos Garnier han sido aprobados oficialmente por Cruelty Free International en el marco del programa Leaping Bunny."
              image="https://ext.same-assets.com/2552496294/2717584178.mp4"
              href="/about-garnier/greener-beauty"
            />
            <GreenBeautyCard
              title="Sin ingredientes de origen animal"
              description="El 99% de los ingredientes utilizados en los productos de Garnier son veganos."
              image="https://ext.same-assets.com/2552496294/2580004818.jpeg"
              href="/about-garnier/greener-beauty"
            />
            <GreenBeautyCard
              title="Sin plástico cero"
              description="El 99% de los ingredientes utilizados en los productos de Garnier son veganos."
              image="https://ext.same-assets.com/2552496294/2580004818.jpeg"
              href="/about-garnier/greener-beauty"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ image, name, href, rating }: {
  image: string;
  name: string;
  href: string;
  rating?: number;
}) {
  return (
    <Link href={href} className="block group">
      <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-sm text-garnier-green group-hover:text-garnier-green-light transition-colors">
              {name}
            </h3>
            {rating && (
              <div className="flex mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-sm ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function RoutineCard({ image, title, href }: { image: string; title: string; href: string }) {
  return (
    <Link href={href} className="block">
      <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function DiscoverCard({ image, href }: { image: string; href: string }) {
  return (
    <Link href={href} className="block">
      <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={image}
              alt="Descubre Garnier"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function FeaturedProduct({
  title,
  features,
  image,
  href,
  buttonText,
  reverse = false
}: {
  title: string;
  features: string[];
  image: string;
  href: string;
  buttonText: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex flex-col justify-center space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="text-sm flex">
              <span className="font-bold">•</span>
              <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="pt-4">
          <Button asChild className="bg-garnier-green hover:bg-garnier-green/90 text-white">
            <Link href={href}>{buttonText}</Link>
          </Button>
        </div>
      </div>
      <div className="relative aspect-square md:aspect-auto">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

function VirtualToolCard({ title, image, href }: { title: string; image: string; href: string }) {
  return (
    <Link href={href} className="block">
      <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group">
        <CardContent className="p-0 relative">
          <div className="aspect-video relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={image} type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-xl font-bold text-white text-center px-4">
              {title}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function IngredientCard({ name, href }: { name: string; href: string }) {
  return (
    <Link href={href} className="block">
      <Card className="overflow-hidden border-none hover:shadow-sm transition-shadow group">
        <CardContent className="p-4 text-center">
          <h3 className="text-sm font-medium text-garnier-green group-hover:text-garnier-green-light transition-colors">
            {name}
          </h3>
        </CardContent>
      </Card>
    </Link>
  )
}

function TipCard({
  number,
  title,
  description,
  image,
  productName,
  productImage,
  productLink,
  articleLink
}: {
  number: string;
  title: string;
  description: string;
  image: string;
  productName: string;
  productImage: string;
  productLink: string;
  articleLink?: string;
}) {
  return (
    <Card className="overflow-hidden border-none shadow-sm h-full">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex-grow">
            <div className="text-3xl font-bold text-garnier-green mb-2">{number}</div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">{description}</p>

            {articleLink && (
              <Link href={articleLink} className="inline-flex items-center text-garnier-green hover:text-garnier-green-light text-sm font-medium mb-4">
                Leer Artículo
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            )}
          </div>

          <div className="mt-4 pt-4 border-t">
            <Link href={productLink} className="flex items-center group">
              <div className="mr-3 relative w-12 h-12 flex-shrink-0">
                <Image
                  src={productImage}
                  alt={productName}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-sm font-medium text-garnier-green group-hover:text-garnier-green-light transition-colors">
                {productName}
              </div>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function GreenBeautyCard({ title, description, image, href }: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  const isVideo = image.endsWith('.mp4')

  return (
    <Link href={href} className="block group">
      <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow h-full">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative aspect-video">
            {isVideo ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={image} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="p-6 flex flex-col flex-grow bg-green-50">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
