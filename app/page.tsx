// app/page.tsx
import ZebaLanding from './zebaLanding'
// o la ruta donde tengas el componente

export default function HomePage() {
  return <ZebaLanding />
}

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// const backgroundImages = {
//   default: "/images/main/webp/background-default.webp",
//   models: "/images/main/webp/background-default.webp",
//   scouting: "/images/main/webp/background-scouting.webp",
//   about: "/images/main/webp/model-abiezer.webp",
// };

// // Posicionamiento específico para cada imagen
// const imagePositions = {
//   default: "object-[center_5%]",
//   models: "object-[center_5%]",
//   scouting: "object-[center_40%]object-[right_20%]",
//   about: "object-[center_50%]",
// };

// export default function EliteFashionLanding() {
//   const [isContactModalOpen, setIsContactModalOpen] = useState(false);

//   const openContactModal = () => {
//   console.log("Abriendo modal");
//   setIsContactModalOpen(true);
//   console.log("Estado después:", true); // Verificar que se está ejecutando
// };
// // Agregar este estado junto con los otros estados
// const [copyMessage, setCopyMessage] = useState('');

// // Agregar esta función junto con las otras funciones
// const showCopyMessage = (message) => {
//   setCopyMessage(message);
//   setTimeout(() => setCopyMessage(''), 2000); // Desaparece después de 2 segundos
// };
//   const closeContactModal = () => {
//     setIsContactModalOpen(false);
//   };
//   const [currentBackground, setCurrentBackground] = useState("default");
//   const [imagesLoaded, setImagesLoaded] = useState<string[]>([]);

//   // Precargar todas las imágenes al montar el componente
//   useEffect(() => {
//     const preloadImages = () => {
//       Object.entries(backgroundImages).forEach(([key, src]) => {
//         const img = new Image();
//         img.onload = () => {
//           setImagesLoaded((prev) => [...prev, key]);
//         };
//         img.src = src;
//       });
//     };

//     preloadImages();
//   }, []);

//   const handleCategoryHover = (category: string) => {
//     setCurrentBackground(category);
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
      
//       {/* Preload hidden images */}
//       <div className="hidden">
//         {Object.entries(backgroundImages).map(([key, src]) => (
//           <img key={`preload-${key}`} src={src} alt="" />
//         ))}
//       </div>

//       {/* Background Images */}
//       <div className="absolute inset-0">
//         {Object.entries(backgroundImages).map(([category, imageUrl]) => (
//           <div
//             key={category}
//             className={`absolute inset-0 transition-opacity duration-100 ${
//               currentBackground === category ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={imageUrl}
//               alt={category}
//               className={`w-full h-full object-cover ${imagePositions[category as keyof typeof imagePositions]}`}
//             />
//           </div>
//         ))}

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/30" />
//       </div>

//       {/* Navegación arriba derecha */}
//       <nav className="relative z-10 flex items-center p-8 md:p-12">
//         <div className="w-full flex justify-end">
//           <div className="flex items-center space-x-8 text-white mr-0 md:mr-12">
//             <Link
//               href="https://www.instagram.com/zebamanagement?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
//               className="text-sm md:text-base lg:text-lg font-light tracking-wide hover:opacity-70 transition-opacity duration-150 font-secondary"
//             >
//               Instagram
//             </Link>
//             <button
//               className="text-sm md:text-base lg:text-lg font-light tracking-wide hover:opacity-70 transition-opacity duration-150 font-secondary cursor-pointer"
//               onClick={openContactModal}
//             >
//               Contact
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Contenido principal */}
//       <div className="relative z-10 flex items-center justify-between min-h-[calc(100vh-120px)] px-8 md:px-12 lg:px-16">
//         {/* Botones */}
//         <div className="flex flex-col space-y-8 md:space-y-12 ml-8 mr-8 md:ml-8 w-full md:w-auto items-center md:items-start">
//           <div
//             className="font-primary text-white text-4xl md:text-6xl lg:text-7xl font-light cursor-pointer hover:opacity-80 hover:translate-x-2 transition-all duration-150 drop-shadow-lg relative text-center md:text-left"
//             onMouseEnter={() => handleCategoryHover("models")}
//           >
//             models
//             {!imagesLoaded.includes("models") && (
//               <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/30 rounded-full animate-pulse"></span>
//             )}
//           </div>
//           <div
//             className="font-primary text-white text-4xl md:text-6xl lg:text-7xl font-light cursor-pointer hover:opacity-80 hover:translate-x-2 transition-all duration-150 drop-shadow-lg relative text-center md:text-left"
//             onMouseEnter={() => handleCategoryHover("scouting")}
//           >
//             scouting
//             {!imagesLoaded.includes("scouting") && (
//               <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/30 rounded-full animate-pulse"></span>
//             )}
//           </div>
//           <div
//             className="font-primary text-white text-4xl md:text-6xl lg:text-7xl font-light cursor-pointer hover:opacity-80 hover:translate-x-2 transition-all duration-150 drop-shadow-lg relative text-center md:text-left"
//             onMouseEnter={() => handleCategoryHover("about")}
//           >
//             about us
//             {!imagesLoaded.includes("about") && (
//               <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/30 rounded-full animate-pulse"></span>
//             )}
//           </div>
//         </div>

//         {/* Logo Desktop */}
//         <div className="hidden md:flex items-center flex-1 ml-8 justify-end pr-20">
//           <div className="text-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="100 200 300 110"
//               className="fill-white drop-shadow-2xl mx-auto w-48 md:w-56 lg:w-64 xl:w-72 h-auto"
//             >
//               <path d="M285.977478,302.369171 C270.915253,302.371002 256.348816,302.371002 241.782410,302.371002 C241.493515,302.014862 241.204620,301.658722 240.915726,301.302612 C246.735733,297.425903 245.816299,291.743195 245.822769,286.338806 C245.847702,265.510620 245.853424,244.682327 245.820816,223.854156 C245.812317,218.431244 246.760849,212.720795 241.397812,208.981567 C243.061310,207.156174 244.647522,207.694580 246.049667,207.690582 C260.712616,207.648727 275.375732,207.647858 290.038727,207.673279 C294.404785,207.680847 298.645721,208.499451 302.707825,210.103546 C311.122009,213.426239 315.365875,219.830292 315.345428,229.069534 C315.326782,237.513397 310.973877,243.777496 302.761108,247.024185 C300.602600,247.877487 298.353088,248.500687 295.434509,249.464249 C297.166199,249.959381 298.307648,250.275101 299.442810,250.611938 C313.882202,254.896469 320.812500,264.968994 319.226562,279.360168 C317.828613,292.045441 306.936707,301.564850 292.969879,302.269501 C290.808228,302.378571 288.639008,302.338470 285.977478,302.369171 M278.058228,299.638245 C284.034821,298.592133 287.348633,294.426392 289.031555,289.184509 C292.109070,279.598633 292.075806,269.849884 288.670105,260.298645 C286.903778,255.345047 282.967957,252.642975 277.974121,251.498566 C275.064484,250.831787 273.171600,251.526306 273.198364,255.155258 C273.297821,268.634491 273.281311,282.115051 273.213501,295.594666 C273.198914,298.500641 274.149200,300.066864 278.058228,299.638245 M277.861450,210.475281 C274.763702,209.818390 273.174835,210.760513 273.211060,214.240173 C273.316559,224.371201 273.317078,234.504852 273.207184,244.635834 C273.163788,248.634171 275.015808,249.178680 278.237427,247.973022 C284.184052,245.747620 285.918121,240.607178 287.095795,235.116196 C289.322174,224.735474 285.689392,214.369720 277.861450,210.475281 z" />
//               <path d="M325.743530,292.738007 C332.300720,272.571716 336.415588,252.160080 341.643860,232.039688   C343.401093,225.277145 345.136963,218.508270 346.785400,211.718689   C347.470703,208.896133 348.869232,207.527267 351.985992,207.615540   C358.480347,207.799515 364.988861,207.822632 371.481049,207.602539   C374.846985,207.488464 376.191650,208.988312 376.938629,212.009705   C382.292114,233.663727 387.721985,255.298950 393.168304,276.929901   C395.306793,285.423309 396.900574,294.126923 402.781555,301.937927   C388.956787,301.937927 375.800446,301.937927 361.616180,301.937927   C366.620636,294.172119 366.263885,286.381348 364.990601,278.374573   C364.411041,274.729889 363.139557,273.049408 359.262878,273.305450   C355.114716,273.579498 350.924713,273.537079 346.770477,273.311096   C342.818939,273.096191 341.690552,274.844116 342.409363,278.430298   C343.932251,286.028046 345.995270,293.357025 352.055481,298.811462   C352.773834,299.458008 353.600555,300.119629 353.383820,301.829895   C342.863800,301.829895 332.276215,301.829895 321.171844,301.829895   C322.810577,298.611450 324.214081,295.854980 325.743530,292.738007  M352.381897,226.034592   C351.345612,222.165833 350.309357,218.297073 349.273102,214.428314   C347.607605,218.922943 346.640991,223.290176 345.793457,227.680374   C343.333923,240.420212 341.448730,253.231339 341.363525,266.243256   C341.351929,268.015717 340.977295,270.467896 343.530457,270.562073   C349.932404,270.798157 356.348877,270.640045 363.493347,270.640045   C359.704010,255.453033 356.134521,241.147202 352.381897,226.034592  z" />
//               <path d="M205.380951,279.996399 C205.385529,285.493958 205.454666,290.493500 205.370056,295.490479 C205.315811,298.694366 206.694336,299.760071 209.901062,299.800995 C220.569107,299.937164 232.162064,291.438416 236.746017,279.829468 C237.277695,278.482971 237.306717,276.873993 238.590958,275.888275 C240.331741,276.175232 240.058380,277.532990 240.066071,278.604401 C240.112778,285.101562 240.065308,291.599487 240.125290,298.096466 C240.148407,300.600800 239.536087,302.334503 236.573669,302.328613 C216.247711,302.288208 195.921692,302.282959 175.595764,302.237335 C175.156204,302.236359 174.717422,301.889618 173.792801,301.499176 C178.761581,297.034973 178.696167,291.272461 178.679306,285.441986 C178.617661,264.114807 178.652069,242.787338 178.658463,221.459991 C178.659897,216.688354 178.095871,212.129517 174.015396,208.927032 C174.840393,207.049484 176.371490,207.696198 177.550659,207.693359 C196.545197,207.647629 215.540710,207.750122 234.533890,207.581802 C238.656403,207.545258 240.222580,208.962006 240.118973,213.047791 C239.958588,219.372650 240.142181,225.706146 240.172394,232.036011 C240.177856,233.181503 240.162170,234.332840 239.169449,235.208679 C237.062927,234.367416 237.461212,232.371185 236.889450,230.977600 C232.167053,219.467377 224.134033,212.097946 211.527863,210.299423 C207.231247,209.686401 205.117218,210.934723 205.286880,215.899857 C205.628113,225.885193 205.503677,235.893005 205.316299,245.886765 C205.236481,250.143585 207.047531,251.129517 210.840286,250.338470 C218.185806,248.806458 223.209595,244.208557 227.821426,237.054489 C227.821426,247.338898 227.821426,256.446259 227.821426,266.059723 C225.014923,263.843842 224.068512,260.336853 221.232468,258.617859 C219.243118,257.412079 217.374390,255.965378 215.288116,254.968918 C207.730011,251.358917 205.380478,252.828735 205.371140,261.002625 C205.364105,267.167511 205.376587,273.332397 205.380951,279.996399 z" />
//               <path d="M121.288551,257.321716 C128.426895,242.047318 135.394775,227.105881 142.335983,212.152069 C142.445694,211.915726 142.227936,211.527390 142.157654,211.211060 C127.684898,206.409531 115.149467,214.287735 103.796692,234.819489 C103.796692,226.501450 103.764725,218.183182 103.823006,209.865555 C103.835030,208.151031 105.201378,207.725449 106.638016,207.728973 C127.963348,207.781219 149.288666,207.848953 170.613876,207.936783 C170.898361,207.937958 171.181595,208.245499 172.305511,208.897095 C158.289856,238.670837 144.234543,268.528839 129.767822,299.260803 C139.533981,299.819824 148.119522,301.102875 156.093689,295.570007 C163.462021,290.457489 167.704971,283.193817 172.072952,275.351562 C172.072952,283.554626 172.122269,291.758209 172.036423,299.960358 C172.016312,301.882294 170.423752,302.308594 168.813370,302.306549 C146.818390,302.278687 124.823410,302.238251 102.828522,302.173218 C102.368492,302.171875 101.909439,301.841339 100.548180,301.317108 C107.434448,286.697968 114.275055,272.175781 121.288551,257.321716 z" />
//             </svg>
//             <p className="font-primary text-sm lg:text-base text-white/90 font-light tracking-[0.2em] mt-2 font-sans drop-shadow-md">
//               MANAGEMENT
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Logo Mobile */}
//       <div className="md:hidden relative z-10 flex justify-center pb-8 order-1">
//         <div className="text-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="100 200 300 110"
//             className="fill-white drop-shadow-2xl mx-auto w-24 md:w-56 lg:w-64 xl:w-72 h-auto"
//           >
//             <path d="M285.977478,302.369171 C270.915253,302.371002 256.348816,302.371002 241.782410,302.371002 C241.493515,302.014862 241.204620,301.658722 240.915726,301.302612 C246.735733,297.425903 245.816299,291.743195 245.822769,286.338806 C245.847702,265.510620 245.853424,244.682327 245.820816,223.854156 C245.812317,218.431244 246.760849,212.720795 241.397812,208.981567 C243.061310,207.156174 244.647522,207.694580 246.049667,207.690582 C260.712616,207.648727 275.375732,207.647858 290.038727,207.673279 C294.404785,207.680847 298.645721,208.499451 302.707825,210.103546 C311.122009,213.426239 315.365875,219.830292 315.345428,229.069534 C315.326782,237.513397 310.973877,243.777496 302.761108,247.024185 C300.602600,247.877487 298.353088,248.500687 295.434509,249.464249 C297.166199,249.959381 298.307648,250.275101 299.442810,250.611938 C313.882202,254.896469 320.812500,264.968994 319.226562,279.360168 C317.828613,292.045441 306.936707,301.564850 292.969879,302.269501 C290.808228,302.378571 288.639008,302.338470 285.977478,302.369171 M278.058228,299.638245 C284.034821,298.592133 287.348633,294.426392 289.031555,289.184509 C292.109070,279.598633 292.075806,269.849884 288.670105,260.298645 C286.903778,255.345047 282.967957,252.642975 277.974121,251.498566 C275.064484,250.831787 273.171600,251.526306 273.198364,255.155258 C273.297821,268.634491 273.281311,282.115051 273.213501,295.594666 C273.198914,298.500641 274.149200,300.066864 278.058228,299.638245 M277.861450,210.475281 C274.763702,209.818390 273.174835,210.760513 273.211060,214.240173 C273.316559,224.371201 273.317078,234.504852 273.207184,244.635834 C273.163788,248.634171 275.015808,249.178680 278.237427,247.973022 C284.184052,245.747620 285.918121,240.607178 287.095795,235.116196 C289.322174,224.735474 285.689392,214.369720 277.861450,210.475281 z" />
//             <path d="M325.743530,292.738007 C332.300720,272.571716 336.415588,252.160080 341.643860,232.039688 C343.401093,225.277145 345.136963,218.508270 346.785400,211.718689 C347.470703,208.896133 348.869232,207.527267 351.985992,207.615540 C358.480347,207.799515 364.988861,207.822632 371.481049,207.602539 C374.846985,207.488464 376.191650,208.988312 376.938629,212.009705 C382.292114,233.663727 387.721985,255.298950 393.168304,276.929901 C395.306793,285.423309 396.900574,294.126923 402.781555,301.937927 C388.956787,301.937927 375.800446,301.937927 361.616180,301.937927 C366.620636,294.172119 366.263885,286.381348 364.990601,278.374573 C364.411041,274.729889 363.139557,273.049408 359.262878,273.305450 C355.114716,273.579498 350.924713,273.537079 346.770477,273.311096 C342.818939,273.096191 341.690552,274.844116 342.409363,278.430298 C343.932251,286.028046 345.995270,293.357025 352.055481,298.811462 C352.773834,299.458008 353.600555,300.119629 353.383820,301.829895 C342.863800,301.829895 332.276215,301.829895 321.171844,301.829895 C322.810577,298.611450 324.214081,295.854980 325.743530,292.738007 M352.381897,226.034592 C351.345612,222.165833 350.309357,218.297073 349.273102,214.428314 C347.607605,218.922943 346.640991,223.290176 345.793457,227.680374 C343.333923,240.420212 341.448730,253.231339 341.363525,266.243256 C341.351929,268.015717 340.977295,270.467896 343.530457,270.562073 C349.932404,270.798157 356.348877,270.640045 363.493347,270.640045 C359.704010,255.453033 356.134521,241.147202 352.381897,226.034592 z" />
//             <path d="M205.380951,279.996399 C205.385529,285.493958 205.454666,290.493500 205.370056,295.490479 C205.315811,298.694366 206.694336,299.760071 209.901062,299.800995 C220.569107,299.937164 232.162064,291.438416 236.746017,279.829468 C237.277695,278.482971 237.306717,276.873993 238.590958,275.888275 C240.331741,276.175232 240.058380,277.532990 240.066071,278.604401 C240.112778,285.101562 240.065308,291.599487 240.125290,298.096466 C240.148407,300.600800 239.536087,302.334503 236.573669,302.328613 C216.247711,302.288208 195.921692,302.282959 175.595764,302.237335 C175.156204,302.236359 174.717422,301.889618 173.792801,301.499176 C178.761581,297.034973 178.696167,291.272461 178.679306,285.441986 C178.617661,264.114807 178.652069,242.787338 178.658463,221.459991 C178.659897,216.688354 178.095871,212.129517 174.015396,208.927032 C174.840393,207.049484 176.371490,207.696198 177.550659,207.693359 C196.545197,207.647629 215.540710,207.750122 234.533890,207.581802 C238.656403,207.545258 240.222580,208.962006 240.118973,213.047791 C239.958588,219.372650 240.142181,225.706146 240.172394,232.036011 C240.177856,233.181503 240.162170,234.332840 239.169449,235.208679 C237.062927,234.367416 237.461212,232.371185 236.889450,230.977600 C232.167053,219.467377 224.134033,212.097946 211.527863,210.299423 C207.231247,209.686401 205.117218,210.934723 205.286880,215.899857 C205.628113,225.885193 205.503677,235.893005 205.316299,245.886765 C205.236481,250.143585 207.047531,251.129517 210.840286,250.338470 C218.185806,248.806458 223.209595,244.208557 227.821426,237.054489 C227.821426,247.338898 227.821426,256.446259 227.821426,266.059723 C225.014923,263.843842 224.068512,260.336853 221.232468,258.617859 C219.243118,257.412079 217.374390,255.965378 215.288116,254.968918 C207.730011,251.358917 205.380478,252.828735 205.371140,261.002625 C205.364105,267.167511 205.376587,273.332397 205.380951,279.996399 z" />
//             <path d="M121.288551,257.321716 C128.426895,242.047318 135.394775,227.105881 142.335983,212.152069 C142.445694,211.915726 142.227936,211.527390 142.157654,211.211060 C127.684898,206.409531 115.149467,214.287735 103.796692,234.819489 C103.796692,226.501450 103.764725,218.183182 103.823006,209.865555 C103.835030,208.151031 105.201378,207.725449 106.638016,207.728973 C127.963348,207.781219 149.288666,207.848953 170.613876,207.936783 C170.898361,207.937958 171.181595,208.245499 172.305511,208.897095 C158.289856,238.670837 144.234543,268.528839 129.767822,299.260803 C139.533981,299.819824 148.119522,301.102875 156.093689,295.570007 C163.462021,290.457489 167.704971,283.193817 172.072952,275.351562 C172.072952,283.554626 172.122269,291.758209 172.036423,299.960358 C172.016312,301.882294 170.423752,302.308594 168.813370,302.306549 C146.818390,302.278687 124.823410,302.238251 102.828522,302.173218 C102.368492,302.171875 101.909439,301.841339 100.548180,301.317108 C107.434448,286.697968 114.275055,272.175781 121.288551,257.321716 z" />
//           </svg>
//           <p className="text-xs text-white/90 font-light tracking-[0.2em] mt-1 font-sans drop-shadow-md">
//             MANAGEMENT
//           </p>
//         </div>
//       </div>

//       {/* Indicador */}
//     {/* Modal de Contacto - Con toast minimalista centrado */}
// {isContactModalOpen && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
//     {/* Overlay con fade */}
//     <div 
//       className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
//       onClick={closeContactModal}
//     ></div>
    
//     {/* Modal Content con slide up */}
//     <div className="relative bg-white rounded-lg shadow-2xl p-8 m-4 max-w-md w-full transform transition-all duration-300 animate-slideUp">
//       {/* Toast de confirmación - Centrado fijo */}
//       {copyMessage && (
//         <div className="absolute top-4 left-4 right-4 flex justify-center z-10">
//           <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-slideUp">
//             {copyMessage}
//           </div>
//         </div>
//       )}

//       {/* Close Button */}
//       <button
//         onClick={closeContactModal}
//         className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>

//       {/* Header */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold text-gray-900 font-primary">Contact</h2>
//         <p className="text-gray-600 font-secondary">Get in touch with ZEBA Management</p>
//       </div>

//       {/* Contact Info */}
//       <div className="space-y-4">
//         <div className="flex items-center space-x-3">
//           <div className="flex-shrink-0">
//             <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//             </svg>
//           </div>
//           <div className="flex-1">
//             <p className="text-sm font-medium text-gray-900 font-secondary">Email</p>
//             <div className="flex items-center space-x-2">
//               <a href="mailto:info@zebamanagement.com" className="text-sm text-gray-600 hover:text-gray-900 font-secondary">
//                 info@zebamanagement.com
//               </a>
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText('info@zebamanagement.com');
//                   showCopyMessage('✓ Email copied');
//                 }}
//                 className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
//                 title="Copiar email"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center space-x-3">
//           <div className="flex-shrink-0">
//             <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//             </svg>
//           </div>
//           <div className="flex-1">
//             <p className="text-sm font-medium text-gray-900 font-secondary">Phone</p>
//             <div className="flex items-center space-x-2">
//               <a href="tel:+56912345678" className="text-sm text-gray-600 hover:text-gray-900 font-secondary">
//                 +56 9 1234 5678
//               </a>
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText('+56912345678');
//                   showCopyMessage('✓ Phone copied');
//                 }}
//                 className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
//                 title="Copiar teléfono"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )}
//     </div>
//   );

  
// }
