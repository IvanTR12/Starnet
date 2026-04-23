// App.tsx
import { useState } from 'react';

// --- Assets ---
const imgAsset11 = "/assets/logo.png";
const imgHeroImage = "/assets/hero-image.jpg";
const imgStarlinkMiniKit = "/assets/starlink-mini.png";
const img533411 = "/assets/starlink-v4.png";
const imgImgS1 = "/assets/river2.png";
const imgRiver2Pro = "/assets/river2pro.png";
const imgDelta3Classic = "/assets/portable-power-station-ecoflow-delta-3-classic_02 1.png";
const imgEcoflow360011 = "/assets/ecoflow360011.png";
const imgImage = "/assets/image.jpg";
const imgImage1 = "/assets/image1.jpg";
const imgImage2 = "/assets/image2.jpg";

// SVGs
const imgArrow = "/assets/arrow.svg";
const imgVector = "/assets/vector.svg";
const imgVector1 = "/assets/vector1.svg";
const imgVector2 = "/assets/vector2.svg";
const imgVector3 = "/assets/vector3.svg";
const imgMenuIcon = "/assets/menu-icon.svg";

// Desktop specifics
const imgInnerScreenDesktop = "/assets/inner-screen-desktop.png";

// Mobile specifics
const imgUiElementsMobile = "/assets/ui-elements-mobile.svg";
const imgInnerScreenMobile = "/assets/inner-screen-mobile.jpg";
const imgInnerScreenMobile1 = "/assets/inner-screen-mobile1.png";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[20px] md:px-[40px] relative size-full font-source">

      {/* ========================================= */}
      {/* NAVIGATION                                */}
      {/* ========================================= */}

      {/* MOBILE NAVIGATION */}
      <nav className={`md:hidden absolute content-stretch flex flex-col items-start left-0 overflow-clip right-0 rounded-bl-[20px] rounded-br-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] top-0 z-50 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'h-auto' : 'h-[78px]'}`}>
        <div className="bg-white content-stretch flex items-start justify-between pb-[50px] pt-[20px] px-[20px] relative shrink-0 w-full">
          <div className="h-[36px] relative shrink-0 w-[91px]">
            <img alt="Logo Starnet" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset11} />
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="block cursor-pointer relative shrink-0 size-[24px]">
            <img alt="Open mobile menu" className="absolute block inset-0 max-w-none size-full" src={imgMenuIcon} />
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="content-stretch flex flex-col gap-[50px] items-start justify-center pb-[32px] pt-[8px] px-[20px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <a href="#beneficios" onClick={() => setIsMobileMenuOpen(false)} className="border-[#e9e9e9] border-solid border-t content-stretch flex items-center py-[30px] relative shrink-0 w-full">
                <p className="font-bold leading-[1.4] relative shrink-0 text-[#252d44] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">
                  Beneficios
                </p>
              </a>
              <a href="#equipos" onClick={() => setIsMobileMenuOpen(false)} className="border-[#e9e9e9] border-solid border-t content-stretch flex items-center py-[30px] relative shrink-0 w-full">
                <p className="font-bold leading-[1.4] relative shrink-0 text-[#252d44] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">
                  Equipos
                </p>
              </a>
              <a href="#how-to" onClick={() => setIsMobileMenuOpen(false)} className="border-[#e9e9e9] border-solid border-t content-stretch flex items-center py-[30px] relative shrink-0 w-full">
                <p className="font-bold leading-[1.4] relative shrink-0 text-[#252d44] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">
                  How-to
                </p>
              </a>
              <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="border-[#e9e9e9] border-solid border-t content-stretch flex items-center py-[30px] relative shrink-0 w-full">
                <p className="font-bold leading-[1.4] relative shrink-0 text-[#252d44] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">
                  Contacto
                </p>
              </a>
            </div>
            <a className="bg-[#203e99] content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0 w-full" href="https://wa.me/584144148087?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Starnet" target="_blank" rel="noreferrer">
              <p className="font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px] whitespace-nowrap">
                Learn More
              </p>
              <div className="flex flex-row items-center self-stretch ml-1">
                <div className="content-stretch flex h-full items-center relative shrink-0 w-[7px]">
                  <img alt="Arrow" className="absolute block max-w-none size-full" src={imgArrow} />
                </div>
              </div>
            </a>
          </div>
        )}
      </nav>

      {/* DESKTOP NAVIGATION */}
      <div className="hidden md:flex fixed top-[16px] left-1/2 -translate-x-1/2 z-50 backdrop-blur-[15px] bg-[rgba(255,255,255,0.4)] content-stretch cursor-pointer font-bold gap-[27px] items-center leading-[0] overflow-clip px-[24px] py-[20px] rounded-[100px] text-[#252d44] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">
        <a href="#beneficios" className="block relative shrink-0 leading-[1.4] hover:text-[#203e99]">Beneficios</a>
        <a href="#equipos" className="block relative shrink-0 leading-[1.4] hover:text-[#203e99]">Equipos</a>
        <a href="#how-to" className="block relative shrink-0 leading-[1.4] hover:text-[#203e99]">How-to</a>
        <a href="#contacto" className="block relative shrink-0 leading-[1.4] hover:text-[#203e99]">Contacto</a>
      </div>

      <nav className="hidden md:flex content-stretch flex-col items-center relative shrink-0 w-full z-40">
        <div className="content-stretch flex h-[148px] items-center justify-between max-w-[1500px] pb-[80px] pt-[20px] relative shrink-0 w-full">
          <div className="h-[59px] relative shrink-0 w-[150px]">
            <img alt="Logo de Starnet" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset11} />
          </div>
          <a className="bg-[#203e99] content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" href="https://wa.me/584144148087?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Starnet" target="_blank" rel="noreferrer">
            <p className="font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px] whitespace-nowrap">
              Saber más
            </p>
            <div className="flex flex-row items-center self-stretch ml-1">
              <div className="content-stretch flex h-full items-center relative shrink-0 w-[6px]">
                <img alt="Arrow" className="h-[6px] w-[6px]" src={imgArrow} />
              </div>
            </div>
          </a>
        </div>
      </nav>

      {/* ========================================= */}
      {/* HEADER HERO                               */}
      {/* ========================================= */}
      <header className="content-stretch flex flex-col gap-[120px] md:gap-[240px] items-center md:items-start max-w-[1600px] md:max-w-[1500px] overflow-clip pt-[120px] md:pt-0 px-[16px] md:px-0 relative shrink-0 w-full">
        <h1 className="block font-bold leading-[0.9] relative shrink-0 text-[52px] md:text-[160px] text-black text-center tracking-[-2px] md:tracking-[-6.8px] w-full">
          Conectamos donde otros no llegan
        </h1>

        {/* MOBILE HERO IMAGE */}
        <div className="md:hidden bg-[#2a3b6f] h-[362px] relative rounded-[30px] shrink-0 w-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#252d44] border border-[#929292] border-solid h-[541.824px] left-[calc(50%+0.5px)] overflow-clip rounded-[34.662px] shadow-[0px_-2.342px_11.709px_0px_rgba(0,0,0,0.1)] top-[calc(50%+41px)] w-[270px]">
            <div className="absolute h-[521.757px] left-[9.95px] overflow-clip right-[9.95px] rounded-[27.365px] top-[9.03px]">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27.365px]">
                <img alt="Data points" className="absolute max-w-none object-cover rounded-[27.365px] size-full" src={imgInnerScreenMobile} />
                <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[27.365px]" />
                <img alt="Data points" className="absolute max-w-none object-cover rounded-[27.365px] size-full" src={imgInnerScreenMobile1} />
              </div>
              <div className="absolute h-[22.195px] left-[20.2px] top-[8.06px] w-[207.243px]">
                <img alt="iPhone UI" className="absolute block inset-0 max-w-none size-full" src={imgUiElementsMobile} />
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP HERO IMAGE */}
        <div className="hidden md:block bg-[#2a3b6f] h-[362px] relative rounded-[30px] shrink-0 w-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#252d44] border-[rgba(255,255,255,0.5)] border-l-2 border-r-2 border-t-2 h-[644px] left-[calc(50%+0.5px)] overflow-clip rounded-[24px] shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.1)] top-1/2 w-[907px]">
            <div className="-translate-x-1/2 absolute h-[607.439px] left-1/2 rounded-[16px] top-[16.5px] w-[869.742px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                <img alt="Data points" className="absolute left-0 max-w-none size-full top-0" src={imgInnerScreenDesktop} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="content-stretch flex flex-col items-center relative shrink-0 w-full z-10 md:mt-32">
        {/* ========================================= */}
        {/* BENEFICIOS                                */}
        {/* ========================================= */}
        <div id="beneficios" className="content-stretch flex flex-col items-start max-w-[1600px] md:max-w-[1500px] pb-[100px] md:pb-[120px] px-[16px] md:px-0 relative shrink-0 w-full">
          <section className="border-[#e9e9e9] border-solid border-t-[0.5px] content-stretch flex flex-col gap-[50px] items-start pb-[60px] pt-[80px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col font-normal gap-[30px] md:gap-[50px] items-start pr-[20px] md:pr-[400px] relative shrink-0 w-full">
              <h2 className="block font-roboto leading-[1.4] relative shrink-0 text-[#203e99] text-[12px] tracking-[-0.12px] w-full md:w-[575px]">
                Beneficios
              </h2>
              <p className="leading-[0.9] min-w-full relative shrink-0 text-[#252d44] text-[32px] md:text-[60px] tracking-[-1px] md:tracking-[-1.8px] w-[min-content]">
                Tenemos la solución para tu empresa.
              </p>
              <p className="leading-[1.4] min-w-full relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-[min-content]">
                Damos cobertura donde nadie ha llegado.
              </p>
            </div>

            <div className="content-stretch flex flex-col md:flex-row flex-wrap gap-[20px] items-start pt-[40px] relative shrink-0 w-full">
              <section className="border-[#e9e9e9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-[265px] pr-[20px] py-[40px] relative shrink-0 w-full md:w-auto">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute inset-[10.36%_7.52%_10.37%_7.54%]">
                    <img alt="Cable" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-normal gap-[20px] items-start relative shrink-0 w-full">
                  <p className="leading-none relative shrink-0 text-[#252d44] text-[18px] tracking-[-0.54px] w-full font-bold">
                    Cobertura Total
                  </p>
                  <p className="leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full">
                    Eliminamos las zonas muertas incluso en edificios de muros gruesos o grandes extensiones.
                  </p>
                </div>
              </section>

              <section className="border-[#e9e9e9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-[265px] pr-[20px] py-[40px] relative shrink-0 w-full md:w-auto">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute inset-[8.33%]">
                    <img alt="Earth" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-normal gap-[20px] items-start relative shrink-0 w-full">
                  <p className="leading-none relative shrink-0 text-[#252d44] text-[18px] tracking-[-0.54px] w-full font-bold">
                    Gestión Cloud
                  </p>
                  <p className="leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full">
                    Controla el estado de tu red desde el móvil, estés donde estés.
                  </p>
                </div>
              </section>

              <section className="border-[#e9e9e9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-[265px] pr-[40px] py-[40px] relative shrink-0 w-full md:w-auto">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute inset-[8.33%_4.14%_12.5%_4.17%]">
                    <img alt="Account" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-normal gap-[20px] items-start relative shrink-0 w-full">
                  <p className="leading-none relative shrink-0 text-[#252d44] text-[18px] tracking-[-0.54px] w-full font-bold">
                    Velocidad Simétrica
                  </p>
                  <p className="leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full">
                    Priorización de ancho de banda para que el streaming y el trabajo no se corten.
                  </p>
                </div>
              </section>

              <section className="border-[#e9e9e9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-[265px] pr-[40px] py-[40px] relative shrink-0 w-full md:w-auto">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute bottom-1/4 left-[4.17%] right-[4.17%] top-1/4">
                    <img alt="Chart" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-normal gap-[20px] items-start relative shrink-0 w-full">
                  <p className="leading-none relative shrink-0 text-[#252d44] text-[18px] tracking-[-0.54px] w-full font-bold">
                    Seguridad Avanzada
                  </p>
                  <p className="leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full">
                    Redes seguras para clientes (Hotspots) separadas de tu red privada.
                  </p>
                </div>
              </section>
            </div>
          </section>

          <div className="h-[600px] md:h-[620px] relative rounded-[30px] shrink-0 w-full">
            <img alt="Hero" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgHeroImage} />
          </div>
        </div>

        {/* ========================================= */}
        {/* NUESTROS EQUIPOS                          */}
        {/* ========================================= */}
        <section id="equipos" className="border-[#e9e9e9] border-solid border-t content-stretch flex flex-col gap-[20px] md:gap-[80px] items-start max-w-[1600px] md:max-w-[1500px] overflow-x-auto overflow-y-clip pb-[100px] md:pb-[120px] pt-[80px] px-[16px] md:px-0 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col md:flex-row gap-[40px] md:gap-0 items-center md:items-start justify-center md:justify-between relative shrink-0 w-full">
            <p className="font-normal leading-[0.9] relative shrink-0 text-[#252d44] text-[32px] md:text-[60px] text-center tracking-[-1px] md:tracking-[-1.8px] w-full md:w-auto md:whitespace-nowrap">
              Nuestros Equipos
            </p>
            <a className="bg-[#b5c8ff] content-stretch cursor-pointer flex flex-col items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" href="#contacto">
              <p className="font-normal leading-none relative shrink-0 text-[#252d44] text-[18px] text-center tracking-[-0.54px] whitespace-nowrap">
                Descubrir
              </p>
            </a>
          </div>

          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full mt-4 md:mt-0">
            <p className="font-normal leading-none relative shrink-0 text-[#252d44] text-[22px] md:text-[40px] text-center tracking-[-0.5px] md:tracking-[-1.6px] w-full md:w-auto md:whitespace-nowrap">
              Antenas Starlink
            </p>
          </div>

          <div className="content-stretch flex gap-[20px] items-start overflow-x-auto overflow-y-clip relative shrink-0 w-full pb-4">
            <section className="border-[#e9e9e9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[60px] items-center min-w-[240px] pb-[20px] pt-[60px] px-[30px] relative">
              <div className="aspect-[2048/2048] relative shrink-0 w-full md:w-[500px]">
                <img alt="Starlink Mini" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStarlinkMiniKit} />
              </div>
              <div className="content-stretch flex flex-col font-normal gap-[20px] items-center leading-none relative shrink-0 text-center w-full">
                <p className="relative shrink-0 text-[#252d44] text-[26px] md:text-[40px] tracking-[-0.5px] md:tracking-[-1.6px] w-full font-bold">
                  Starlink Mini
                </p>
                <p className="relative shrink-0 text-[#6f6f6f] text-[18px] tracking-[-0.54px] w-full leading-[1.4]">
                  Entregamos un mapa de cobertura real garantizada.
                </p>
              </div>
            </section>

            <section className="border-[#e9e9e9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[60px] items-center min-w-[240px] pb-[20px] pt-[60px] px-[30px] relative">
              <div className="aspect-[1200/1200] relative shrink-0 w-full md:w-[500px]">
                <img alt="Starlink V4" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img533411} />
              </div>
              <div className="content-stretch flex flex-col font-normal gap-[20px] items-start md:items-center leading-none relative shrink-0 text-center w-full">
                <p className="relative shrink-0 text-[#252d44] text-[26px] md:text-[40px] tracking-[-0.5px] md:tracking-[-1.6px] w-full font-bold">
                  Starlink V4
                </p>
                <p className="relative shrink-0 text-[#6f6f6f] text-[18px] tracking-[-0.54px] w-full leading-[1.4]">
                  Estudiamos el terreno y los obstáculos físicos.
                </p>
              </div>
            </section>
          </div>

          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full mt-10 md:mt-0">
            <p className="font-normal leading-none relative shrink-0 text-[#252d44] text-[22px] md:text-[40px] text-center tracking-[-0.5px] md:tracking-[-1.6px] w-full md:w-auto md:whitespace-nowrap">
              Nuestras Plantas EcoFlow
            </p>
          </div>

          <div className="content-stretch flex gap-[20px] items-start overflow-x-auto overflow-y-clip relative shrink-0 w-full pb-4 snap-x">
            {[
              { img: imgImgS1, title: 'River 2', text: 'Entregamos un mapa de cobertura real garantizada.', aspect: 'aspect-[250/250]' },
              { img: imgRiver2Pro, title: 'River 2 Pro', text: 'Estudiamos el terreno y los obstáculos físicos.', aspect: 'aspect-[300/300]' },
              { img: imgDelta3Classic, title: 'Delta 3 Classic', text: 'Instalación de equipos de grado industrial (IP67) resistentes al clima.', aspect: 'aspect-[984/984]' },
              { img: imgEcoflow360011, title: 'Delta Pro', text: 'Entregamos un mapa de cobertura real garantizada.', aspect: 'aspect-[1200/1200]' }
            ].map((item, i) => (
              <section key={i} className={`border-[#e9e9e9] border-solid border-t content-stretch flex flex-col gap-[60px] items-center min-w-[240px] pb-[20px] pt-[60px] px-[30px] relative shrink-0 w-[240px] md:w-[386.667px] snap-center`}>
                <div className={`${item.aspect} relative shrink-0 w-full`}>
                  <img alt={item.title} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={item.img} />
                </div>
                <div className="content-stretch flex flex-col font-normal gap-[20px] items-center md:items-start leading-none relative shrink-0 text-center w-full">
                  <p className="relative shrink-0 text-[#252d44] text-[24px] md:text-[40px] tracking-[-0.5px] md:tracking-[-1.6px] w-full font-bold">
                    {item.title}
                  </p>
                  <p className="relative shrink-0 text-[#6f6f6f] text-[18px] md:text-center tracking-[-0.54px] w-full leading-[1.4]">
                    {item.text}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* CAROUSEL INFO                             */}
        {/* ========================================= */}
        <section className="content-stretch flex flex-col md:flex-row md:gap-[20px] items-start max-w-[1600px] md:max-w-[1500px] pb-[80px] md:pb-[120px] px-[32px] md:px-0 relative shrink-0 w-full">
          <div className="border-[#e9e9e9] border-solid border-t content-stretch flex md:flex-[1_0_0] flex-col gap-[40px] items-start md:min-w-px pb-[80px] pt-[60px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col font-normal gap-[40px] items-start md:pr-[80px] relative shrink-0 w-full">
              <p className="leading-[0.9] relative shrink-0 text-[#252d44] text-[32px] md:text-[60px] tracking-[-1px] md:tracking-[-1.8px] w-full">
                Tu infraestructura bajo control.
              </p>
              <p className="leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full">
                Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
              </p>
            </div>

            <div className="content-stretch flex flex-col items-start leading-[1.4] relative shrink-0 text-[15px] tracking-[-0.075px] w-full">
              {[
                'Auditoría de señal previa.',
                'Instalación limpia y estética.',
                'Soporte técnico 24/7.'
              ].map((text, i) => (
                <section key={i} className="border-[#e9e9e9] border-solid border-t content-stretch flex gap-[30px] items-start justify-center md:pr-[80px] py-[20px] relative shrink-0 w-full">
                  <p className="font-bold relative shrink-0 text-[#6f6f6f] whitespace-nowrap">
                    0{i + 1}
                  </p>
                  <p className="flex-[1_0_0] font-normal min-w-px relative text-[#252d44]">
                    {text}
                  </p>
                </section>
              ))}
            </div>
            <a className="bg-[#b5c8ff] content-stretch cursor-pointer flex flex-col items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" href="#contacto">
              <p className="font-bold leading-[1.4] relative shrink-0 text-[#252d44] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">
                Discover More
              </p>
            </a>
          </div>

          <div className="content-stretch flex md:flex-[1_0_0] flex-col items-start max-w-[1600px] md:min-w-px relative shrink-0 w-full">
            <div className="h-[385px] md:h-[711px] relative rounded-[30px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
                <img alt="Visual representation" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgImage} />
                <div className="absolute bg-[rgba(0,0,0,0.06)] inset-0 rounded-[30px]" />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* TESTIMONIAL                               */}
        {/* ========================================= */}
        <div className="content-stretch flex flex-col md:flex-row md:gap-[20px] gap-[40px] items-start pb-[100px] md:pb-[120px] px-[16px] md:px-0 max-w-[1500px] relative shrink-0 w-full">
          {/* Mobile Image Container */}
          <div className="md:hidden aspect-[161.5/161.5] relative rounded-[30px] shrink-0 w-full">
            <img alt="Sphere" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgImage1} />
          </div>
          {/* Desktop Image Container */}
          <div className="hidden md:block aspect-[550/624] flex-[1_0_0] min-w-px relative rounded-[30px]">
            <img alt="Sphere" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgImage1} />
          </div>

          <section className="border-[#e9e9e9] border-solid border-t content-stretch flex md:flex-[1_0_0] flex-col font-normal gap-[50px] items-start justify-center pt-[40px] px-[16px] md:pl-[50px] md:pt-0 relative shrink-0 md:self-stretch w-full">
            <p className="leading-[1.2] relative shrink-0 text-[#252d44] text-[22px] md:text-[40px] tracking-[-0.5px] md:tracking-[-1.6px] w-full">
              “Teníamos años sufriendo con el WiFi en las habitaciones del fondo. Ahora tenemos señal hasta en el jardín. Ha cambiado la experiencia de nuestros clientes.”
            </p>
            <div className="content-stretch flex md:flex-col gap-[8px] items-center md:items-start leading-[1.4] relative shrink-0 w-full whitespace-nowrap">
              <p className="relative shrink-0 text-[#252d44] text-[15px] tracking-[-0.075px] md:w-full">
                John Smith
              </p>
              <p className="font-roboto relative shrink-0 text-[#203e99] text-[12px] tracking-[-0.12px] md:w-full">
                Head of Data
              </p>
            </div>
          </section>
        </div>

        {/* ========================================= */}
        {/* PASOS PARA EL EXITO                       */}
        {/* ========================================= */}
        <section id="how-to" className="border-[#e9e9e9] border-solid border-t content-stretch flex flex-col gap-[80px] h-auto md:h-auto items-start max-w-[1600px] md:max-w-[1500px] overflow-x-auto md:overflow-visible overflow-y-clip pb-[100px] md:pb-[120px] pt-[80px] px-[16px] md:px-0 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col md:flex-row gap-[40px] md:gap-0 md:h-auto h-[135px] items-start md:items-center justify-between relative shrink-0 w-full">
            <p className="font-normal leading-[0.9] min-w-full md:min-w-0 relative shrink-0 text-[#252d44] text-[32px] md:text-[60px] text-center md:text-left tracking-[-1px] md:tracking-[-1.8px] w-[min-content] md:whitespace-nowrap">
              Pasos para el éxito
            </p>
            <a className="bg-[#b5c8ff] content-stretch cursor-pointer flex flex-col items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" href="#contacto">
              <p className="font-bold leading-[1.4] relative shrink-0 text-[#252d44] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">
                Descubrir
              </p>
            </a>
          </div>
          <div className="content-stretch flex font-normal gap-[20px] items-start justify-center md:justify-start overflow-x-auto overflow-y-clip relative shrink-0 w-full snap-x">
            {[
              { num: '01', title: 'Análisis', text: 'Estudiamos el terreno y los obstáculos físicos.' },
              { num: '02', title: 'Despliegue', text: 'Instalación de equipos de grado industrial (IP67) resistentes al clima.' },
              { num: '03', title: 'Certificación', text: 'Entregamos un mapa de cobertura real garantizada.' }
            ].map((step, i) => (
              <section key={i} className="border-[#e9e9e9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[60px] items-start min-w-[240px] pb-[20px] pr-[30px] pt-[60px] relative snap-center">
                <p className="leading-none relative shrink-0 text-[#929292] text-[56px] md:text-[80px] tracking-[-2px] md:tracking-[-3.2px] w-full">
                  {step.num}
                </p>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  <p className="leading-none relative shrink-0 text-[#252d44] text-[18px] tracking-[-0.54px] w-full font-bold">
                    {step.title}
                  </p>
                  <p className="leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full">
                    {step.text}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* FULL IMAGE                                */}
        {/* ========================================= */}
        <div className="content-stretch flex items-center md:flex-col pb-[40px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] md:flex-none h-[600px] md:h-auto items-center min-w-px md:min-w-0 overflow-clip px-[16px] md:px-0 relative w-full">
            <div className="flex-[1_0_0] md:flex-none h-[600px] md:h-auto md:max-h-[830px] md:aspect-[1120/620] min-w-px md:min-w-0 relative rounded-[30px] w-full md:max-w-[1500px]">
              <img alt="Landscape" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgImage2} />
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* CONTACT                                   */}
        {/* ========================================= */}
        <section id="contacto" className="border-[#e9e9e9] border-solid border-t-[0.5px] content-stretch flex flex-col gap-[40px] items-center max-w-[1600px] md:max-w-[1500px] px-[16px] md:px-[300px] py-[120px] relative shrink-0 w-full">
          <p className="font-normal leading-[0.9] relative shrink-0 text-[#252d44] text-[32px] md:text-[60px] text-center tracking-[-1px] md:tracking-[-1.8px] w-full">
            Conecta con nosotros
          </p>
          <p className="font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-center tracking-[-0.075px] w-full">
            Agenda una llamada con nosotros para discutir y evaluar tu caso
          </p>
          <a className="bg-[#203e99] content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0 w-full" href="https://wa.me/584144148087?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Starnet" target="_blank" rel="noreferrer">
            <p className="font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px] whitespace-nowrap">
              Saber más
            </p>
            <div className="flex flex-row items-center self-stretch ml-1">
              <div className="content-stretch flex h-full items-center relative shrink-0 w-[7px]">
                <img alt="Arrow" className="h-[6px] w-[6px]" src={imgArrow} />
              </div>
            </div>
          </a>
        </section>
      </main>

      {/* ========================================= */}
      {/* FOOTER                                    */}
      {/* ========================================= */}
      <footer className="border-[#e9e9e9] border-solid border-t content-stretch flex flex-col md:flex-row gap-[80px] items-start md:justify-between max-w-[1600px] md:max-w-[1500px] pb-[20px] pt-[40px] px-[16px] md:px-0 relative shrink-0 w-full">
        <div className="content-stretch flex flex-col md:flex-row items-start relative shrink-0 w-full md:w-auto">
          <div className="content-stretch cursor-pointer flex flex-col md:flex-row font-bold gap-[27px] items-start md:items-center justify-center md:h-[40px] leading-[0] relative shrink-0 text-[#252d44] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">
            <button className="block relative shrink-0">
              <p className="leading-[1.4]">Beneficios</p>
            </button>
            <button className="block relative shrink-0">
              <p className="leading-[1.4]">How-to</p>
            </button>
          </div>
        </div>
        <div className="content-stretch flex items-end relative shrink-0 w-full md:w-auto">
          <div aria-label="Company logo" className="content-stretch flex items-end relative shrink-0">
            <div className="h-[56px] relative shrink-0 w-[142px]">
              <img alt="Logo Starnet" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset11} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
