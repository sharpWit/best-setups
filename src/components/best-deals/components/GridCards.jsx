import { hdd1, hdd2 } from "../../../assets";
import "./style.css";
// import "../../../Home.css";
function GridCards() {
  return (
    <div className="h-[520px] grid grid-rows-2 grid-flow-col gap-x-4  box-border px-3 mt-0 mx-5 mb-[-20px]">
      <div className="mb-5 bg-menu_bg_banner rounded-lg bg-none w-full row-span-2">
        <div className="flex flex-col-reverse relative box-border w-full h-full justify-between items-end">
          <a
            href={hdd1}
            className="my-0 mx-auto w-80 max-w-[400px] mix-blend-darken relative z-10 block shrink-0 overflow-hidden cursor-pointer"
          >
            <img
              src={hdd2}
              alt=""
              className="scale-90	mix-blend-darken bg-bg block absolute top-0 right-0 left-0 bottom-0 m-auto max-w-full max-h-full cursor-pointer"
            />
          </a>
          <div className="px-8 pt-8 pb-0 relative box-border w-full min-w-0">
            <div className="pt-8 pb-0 relative box-border px-5 w-full min-w-0">
              <div className="relative flex items-center justify-between box-border w-full min-w-0">
                <a href="#" className=" inline-block cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-1 inline-block align-middle text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span className="text-text_gray text-xs leading-4">
                    (307)
                  </span>{" "}
                </a>
              </div>
              <a href=""></a>
              <div></div>
            </div>
            <a
              href=""
              className="font-bold mt-1 text-xl cursor-pointer grid-title"
            >
              هارد درایو اکسترنال WD برای Xbox USB 3.2
            </a>
            <div className="mt-3 flex flex-wrap overflow-hidden">
              <div className="mt-0 mr-1 mb-1.5 ml-0 skew-x-[-10deg] rounded-tl rounded-br rounded-tr-none rounded-bl-none bg-darkorange relative inline-flex items-center py-0 px-2">
                <div className=" skew-x-[10deg] font-bold text-xs leading-4">
                  22 % تخفیف
                </div>
              </div>
            </div>
            <div className="mt-2.5 flex items-end flex-wrap">
              <div className="ml-2.5 flex items-start leading-none">
                <span className="mr-0 self-end my-0 ml-1"></span>
                <span className="flex items-start leading-none">
                  <strong className="text-2xl font-bold">650 هزار تومان</strong>
                </span>
              </div>
              <div className="ml-2.5 mt-1.5 line-through text-xs leading-4 text-text_gray">
                900 هزار تومان
              </div>
              <div className="max-w-[42%] text-text_gray w-full mt-1.5 text-xs leading-4">
                <span className="text-primary inline-block font-bold">
                  ارسال رایگان
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5 bg-menu_bg_banner rounded-lg bg-none w-full ">
        card
      </div>
      <div className="mb-5 bg-menu_bg_banner rounded-lg bg-none w-full ">
        card
      </div>
      <div className="mb-5 bg-menu_bg_banner rounded-lg bg-none w-full ">
        card
      </div>
      <div className="mb-5 bg-menu_bg_banner rounded-lg bg-none w-full ">
        card
      </div>
    </div>
    // <div className="page-section">
    //   <div className="page-content-inner">
    //     <div className="section-title">
    //       <h2 className="section-title-text font-xxxl text-brandblue">
    //         پرفروش‌ترین‌ها
    //       </h2>
    //       <div className="section-right">
    //         <label className="section-countdown-label font-l text-gray">
    //           در این تاریخ تمام می‌شود
    //         </label>
    //         <div id="Countdown_1" className="section-countdown">
    //           <span className="hh1">0</span>
    //           <span className="hh2">0</span>
    //           <i className="colon">:</i>
    //           <span className="mm1">0</span>
    //           <span className="mm2">0</span>
    //           <i className="colon">:</i>
    //           <span className="ss1">0</span>
    //           <span className="ss2">0</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="grid direction-column gap-20px col-w-3 col-w-m-2 col-w-xs-1 col-h-240px grid-h-2x grid-h-m-3x grid-h-xs-auto"
    //       id="shellShocker"
    //     >
    //       <div className="grid-col radius-m bg-gradient-lightblue col-h-2x">
    //         <div
    //           className="goods-container is-reverse is-card is-vertical"
    //           data-itemnumber="9SIA2W0JRY7813"
    //         >
    //           <a href="#" className="goods-img">
    //             <img
    //               src={hdd1}
    //               title="WD Black 3TB P10 Game Drive Portable External Hard Drive for Xbox USB 3.2 (WDBA5G0030BBK-WESN)"
    //               alt="WD Black 3TB P10 Game Drive Portable External Hard Drive for Xbox USB 3.2 (WDBA5G0030BBK-WESN)"
    //               orgsrc={hdd1}
    //             />
    //           </a>
    //           <div className="goods-info">
    //             <div className="goods-branding">
    //               <a href="#" className="goods-rating" title="Rating + 4.6">
    //                 <i
    //                   className="rating rating-4-5"
    //                   aria-label="rated 4.6 out of 5"
    //                 ></i>
    //                 <span className="goods-rating-num font-s text-gray">
    //                   (312)
    //                 </span>
    //               </a>
    //             </div>
    //             <a
    //               href="#"
    //               className="goods-title font-xl"
    //               title="View Details"
    //             >
    //               هارد درایو اکسترنال WD for Xbox USB 3.2
    //             </a>
    //             <div className="tag-list  ">
    //               <div className="tag is-skewed bg-darkorange">
    //                 <div className="tag-text font-s">22% ذخیره کن</div>
    //               </div>
    //             </div>
    //             <div className="goods-price is-horizontal">
    //               <div className="goods-price-current">
    //                 <span className="goods-price-label"></span>
    //                 <span className="goods-price-symbol">$</span>
    //                 <span className="goods-price-value">
    //                   <strong>2 میلیون و 500 هزار تومان</strong>
    //                 </span>
    //               </div>
    //               <div className="goods-price-was text-gray font-s">
    //                 3 میلیون 200 هزار تومان
    //               </div>
    //               <div className="goods-price-ship text-gray font-s">
    //                 <span className="goods-price-ship-eligible text-blue">
    //                   Free Shipping
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="goods-bg">
    //             <img src={hdd1} alt="decoration" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid-col radius-m bg-gradient-lightblue">
    //         <div
    //           className="goods-container is-reverse is-card is-horizontal"
    //           data-itemnumber="20-156-301"
    //         >
    //           <a href="#" className="goods-img">
    //             <img
    //               src={hdd1}
    //               title="Crucial P3 Plus 2TB PCIe 4.0 3D NAND NVMe M.2 SSD, up to 5000MB/s - CT2000P3PSSD8"
    //               alt="Crucial P3 Plus 2TB PCIe 4.0 3D NAND NVMe M.2 SSD, up to 5000MB/s - CT2000P3PSSD8"
    //               orgsrc={hdd1}
    //             />
    //           </a>
    //           <div className="goods-info">
    //             <div className="goods-branding">
    //               <a href="#" className="goods-rating" title="Rating + 4.8">
    //                 <i
    //                   className="rating rating-5"
    //                   aria-label="rated 4.8 out of 5"
    //                 ></i>
    //                 <span className="goods-rating-num font-s text-gray">
    //                   (164)
    //                 </span>
    //               </a>
    //             </div>
    //             <a href="#" className="goods-title font-l" title="View Details">
    //               کروشیال P3 تا 5000MB/s
    //             </a>
    //             <div className="tag-list  ">
    //               <div className="tag is-skewed bg-darkorange">
    //                 <div className="tag-text font-s">19 % ذخیره کن</div>
    //               </div>
    //               <div className="tag is-skewed bg-lightorange">
    //                 <div className="tag-text font-s">$13 Off w/ Code</div>
    //               </div>
    //             </div>
    //             <div className="goods-price">
    //               <div className="goods-price-current">
    //                 <span className="goods-price-label"></span>
    //                 <span className="goods-price-symbol">$</span>
    //                 <span className="goods-price-value">
    //                   <strong>112</strong>
    //                   <sup>.99</sup>
    //                 </span>
    //               </div>
    //               <div className="goods-price-was text-gray font-s">
    //                 $139.99
    //               </div>
    //               <div className="goods-price-ship text-gray font-s">
    //                 <span className="goods-price-ship-eligible text-blue">
    //                   ارسال رایگان
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid-col radius-m bg-gradient-lightblue">
    //         <div
    //           className="goods-container is-reverse is-card is-horizontal"
    //           data-itemnumber="13-119-599"
    //         >
    //           <a href="#" className="goods-img">
    //             <img
    //               src={hdd1}
    //               title="ASUS ROG Strix Z790-F Gaming WiFi 6E LGA 1700(Intel® 13th&amp;12th Gen) ATX gaming motherboard(16 + 1 power stages,DDR5,four M.2 slots, PCIe® 5.0,WiFi 6E,USB 3.2 Gen 2x2 Type-C® with PD 3.0 up to 30W)"
    //               alt="ASUS ROG Strix Z790-F Gaming WiFi 6E LGA 1700(Intel® 13th&amp;12th Gen) ATX gaming motherboard(16 + 1 power stages,DDR5,four M.2 slots, PCIe® 5.0,WiFi 6E,USB 3.2 Gen 2x2 Type-C® with PD 3.0 up to 30W)"
    //               orgsrc={hdd1}
    //             />
    //           </a>
    //           <div className="goods-info">
    //             <div className="goods-branding">
    //               <a href="#" className="goods-rating" title="Rating + 4.3">
    //                 <i
    //                   className="rating rating-4-5"
    //                   aria-label="rated 4.3 out of 5"
    //                 ></i>
    //                 <span className="goods-rating-num font-s text-gray">
    //                   (10)
    //                 </span>
    //               </a>
    //             </div>
    //             <a href="#" className="goods-title font-l" title="View Details">
    //               ASUS ROG Strix Z790-F
    //             </a>
    //             <div className="tag-list  ">
    //               <div className="tag is-skewed bg-lightorange">
    //                 <div className="tag-text font-s">محصول حمایت شده</div>
    //               </div>
    //             </div>
    //             <div className="goods-price">
    //               <div className="goods-price-current">
    //                 <span className="goods-price-label"></span>
    //                 <span className="goods-price-symbol">$</span>
    //                 <span className="goods-price-value">
    //                   <strong>399</strong>
    //                 </span>
    //               </div>
    //               <div className="goods-price-was text-gray font-s">
    //                 900 هزار تومان
    //               </div>
    //               <div className="goods-price-ship text-gray font-s">
    //                 <span className="goods-price-ship-eligible text-blue">
    //                   ارسال رایگان
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid-col radius-m bg-gradient-lightblue">
    //         <div
    //           className="goods-container is-reverse is-card is-horizontal"
    //           data-itemnumber="9SIAGU1J464353"
    //         >
    //           <a href="#" className="goods-img">
    //             <img
    //               src={hdd1}
    //               title="REOLINK 4K PoE Security Camera System, IP Outdoor Camera in 180° FoV by Dual-Lens, Human/Vehicle/Pet Detection, Color Night Vision, Two Way Talk, Up to 256GB Micro SD Card -Reolink Duo 2 PoE"
    //               alt="REOLINK 4K PoE Security Camera System, IP Outdoor Camera in 180° FoV by Dual-Lens, Human/Vehicle/Pet Detection, Color Night Vision, Two Way Talk, Up to 256GB Micro SD Card -Reolink Duo 2 PoE"
    //               orgsrc={hdd1}
    //             />
    //           </a>
    //           <div className="goods-info">
    //             <div className="goods-branding"></div>
    //             <a href="#" className="goods-title font-l" title="View Details">
    //               دوربین نظارتی REOLINK 4K PoE Security Camera
    //             </a>
    //             <div className="tag-list  ">
    //               <div className="tag is-skewed bg-lightorange">
    //                 <div className="tag-text font-s">$45 Off w/ Code</div>
    //               </div>
    //             </div>
    //             <div className="goods-price">
    //               <div className="goods-price-current">
    //                 <span className="goods-price-label"></span>
    //                 <span className="goods-price-symbol">$</span>
    //                 <span className="goods-price-value">
    //                   <strong>159</strong>
    //                 </span>
    //               </div>
    //               <div className="goods-price-ship text-gray font-s">
    //                 <span className="goods-price-ship-eligible text-blue">
    //                   ارسال رایگان
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid-col radius-m bg-gradient-lightblue">
    //         <div
    //           className="goods-container is-reverse is-card is-horizontal"
    //           data-itemnumber="9SIAUSRHHU0464"
    //         >
    //           <a href="#" className="goods-img">
    //             <img
    //               src={hdd1}
    //               title="Power Strip, SUPERDANNY 5-Outlet Surge Protector, 3 USB Ports, 4.5 Ft Extension Cord, 900 Joules, Mountable, Overload Switch, Protected Indicator Light, Multiple Protections for Home Office, Black"
    //               alt="Power Strip, SUPERDANNY 5-Outlet Surge Protector, 3 USB Ports, 4.5 Ft Extension Cord, 900 Joules, Mountable, Overload Switch, Protected Indicator Light, Multiple Protections for Home Office, Black"
    //             />
    //           </a>
    //           <div className="goods-info">
    //             <div className="goods-branding">
    //               <a href="#" className="goods-rating" title="Rating + 4.8">
    //                 <i
    //                   className="rating rating-5"
    //                   aria-label="rated 4.8 out of 5"
    //                 ></i>
    //                 <span className="goods-rating-num font-s text-gray">
    //                   (4)
    //                 </span>
    //               </a>
    //             </div>
    //             <a href="#" className="goods-title font-l" title="View Details">
    //               محافظ برق SUPERDANNY 5-Outlet
    //             </a>
    //             <div className="tag-list  ">
    //               <div className="tag is-skewed bg-darkorange">
    //                 <div className="tag-text font-s">33% ذخیره کن</div>
    //               </div>
    //             </div>
    //             <div className="goods-price">
    //               <div className="goods-price-current">
    //                 <span className="goods-price-label"></span>
    //                 <span className="goods-price-symbol">$</span>
    //                 <span className="goods-price-value">
    //                   <strong>9</strong>
    //                 </span>
    //               </div>
    //               <div className="goods-price-was text-gray font-s">$14.99</div>
    //               <div className="goods-price-ship text-gray font-s">
    //                 <span className="goods-price-ship-eligible text-blue">
    //                   ارسال رایگان
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="grid gap-20px col-w-4 col-w-s-2 col-w-xxs-1 goods-list is-vertical is-reverse is-card"
    //       id="fourSpots"
    //     >
    //       <div className="grid-col radius-m bg-lightgray">
    //         <div className="goods-container" data-itemnumber="20-147-790">
    //           <a href="#" className="goods-img">
    //             <img
    //               src={hdd1}
    //               title="SAMSUNG 980 PRO M.2 2280 1TB PCI-Express Gen 4.0 x4, NVMe 1.3c Samsung V-NAND 3-bit MLC Internal Solid State Drive (SSD) MZ-V8P1T0B/AM"
    //               alt="SAMSUNG 980 PRO M.2 2280 1TB PCI-Express Gen 4.0 x4, NVMe 1.3c Samsung V-NAND 3-bit MLC Internal Solid State Drive (SSD) MZ-V8P1T0B/AM"
    //             />
    //           </a>
    //           <div className="goods-info">
    //             <div className="goods-branding">
    //               <a href="#" className="goods-rating" title="Rating + 4.8">
    //                 <i
    //                   className="rating rating-5"
    //                   aria-label="rated 4.8 out of 5"
    //                 ></i>
    //                 <span className="goods-rating-num font-s text-gray">
    //                   (1,522)
    //                 </span>
    //               </a>
    //             </div>
    //             <a href="#" className="goods-title font-l" title="View Details">
    //               حافظه اس اس دی سامسونگ SAMSUNG 980 PRO M.2 2280 1TB
    //               PCI-Express
    //             </a>
    //             <div className="tag-list  ">
    //               <div className="tag is-skewed bg-darkorange">
    //                 <div className="tag-text font-s">30% ذخیره کن</div>
    //               </div>
    //               <div className="tag is-skewed bg-lightorange">
    //                 <div className="tag-text font-s">معامله کلی</div>
    //               </div>
    //             </div>
    //             <div className="goods-price">
    //               <div className="goods-price-current">
    //                 <span className="goods-price-label"></span>
    //                 <span className="goods-price-symbol">$</span>
    //                 <span className="goods-price-value">
    //                   <strong>89</strong>
    //                 </span>
    //               </div>
    //               <div className="goods-price-was text-gray font-s">
    //                 $129.99
    //               </div>
    //               <div className="goods-price-ship text-gray font-s">
    //                 <span className="goods-price-ship-eligible text-blue">
    //                   ارسال رایگان
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid-col radius-m bg-lightgray">
    //         <div className="goods-container" data-itemnumber="24-475-180">
    //           <a href="#" className="goods-img">
    //             <img
    //               src={hdd1}
    //               title='MSI 27" 165 Hz IPS FHD Gaming Monitor 1 ms G-Sync Compatible 1920 x 1080 HDMI, DisplayPort, Audio Flat Panel Optix G273'
    //               alt='MSI 27" 165 Hz IPS FHD Gaming Monitor 1 ms G-Sync Compatible 1920 x 1080 HDMI, DisplayPort, Audio Flat Panel Optix G273'
    //             />
    //           </a>
    //           <div className="goods-info">
    //             <div className="goods-branding">
    //               <a href="#" className="goods-rating" title="Rating + 4.5">
    //                 <i
    //                   className="rating rating-4-5"
    //                   aria-label="rated 4.5 out of 5"
    //                 ></i>
    //                 <span className="goods-rating-num font-s text-gray">
    //                   (13)
    //                 </span>
    //               </a>
    //             </div>
    //             <a href="#" className="goods-title font-l" title="View Details">
    //               مانیتور گیمینگ MSI 27" 165 Hz IPS FHD{" "}
    //             </a>
    //             <div className="tag-list  ">
    //               <div className="tag is-skewed bg-darkorange">
    //                 <div className="tag-text font-s">36% ذخیره کن</div>
    //               </div>
    //             </div>
    //             <div className="goods-price">
    //               <div className="goods-price-current">
    //                 <span className="goods-price-label"></span>
    //                 <span className="goods-price-symbol">$</span>
    //                 <span className="goods-price-value">
    //                   <strong>119</strong>
    //                 </span>
    //               </div>
    //               <div className="goods-price-was text-gray font-s">
    //                 2 میلیون 400 هزار تومان
    //               </div>
    //               <div className="goods-price-ship text-gray font-s">
    //                 <span className="goods-price-ship-eligible text-blue">
    //                   ارسال رایگان
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid-col radius-m bg-lightgray">
    //         <div className="goods-container" data-itemnumber="89-007-933">
    //           <a href="#" className="goods-img">
    //             <img
    //               src={hdd1}
    //               title='LG 48" Class C2 Series OLED 4K evo Smart TV (OLED48C2PUA, 2022)'
    //               alt='LG 48" Class C2 Series OLED 4K evo Smart TV (OLED48C2PUA, 2022)'
    //             />
    //           </a>
    //           <div className="goods-info">
    //             <div className="goods-branding">
    //               <a href="#" className="goods-rating" title="Rating + 5">
    //                 <i
    //                   className="rating rating-5"
    //                   aria-label="rated 5 out of 5"
    //                 ></i>
    //                 <span className="goods-rating-num font-s text-gray">
    //                   (4)
    //                 </span>
    //               </a>
    //             </div>
    //             <a href="#" className="goods-title font-l" title="View Details">
    //               LG 48" Class C2 Series OLED 4K evo Smart TV
    //             </a>
    //             <div className="tag-list  ">
    //               <div className="tag is-skewed bg-darkorange">
    //                 <div className="tag-text font-s">23% ذخیره کن</div>
    //               </div>
    //             </div>
    //             <div className="goods-price">
    //               <div className="goods-price-current">
    //                 <span className="goods-price-label"></span>
    //                 <span className="goods-price-symbol">$</span>
    //                 <span className="goods-price-value">
    //                   <strong>799</strong>
    //                 </span>
    //               </div>
    //               <div className="goods-price-was text-gray font-s">
    //                 4 میلیون 500 هزار تومان
    //               </div>
    //               <div className="goods-price-ship text-gray font-s">
    //                 <span className="goods-price-ship-eligible text-blue">
    //                   ارسال رایگان
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid-col radius-m bg-lightgray">
    //         <div className="goods-container" data-itemnumber="9SIB8EHGVH8590">
    //           <a href="#" className="goods-img">
    //             <img
    //               src={hdd1}
    //               title="iRobot Roomba 677 Vacuum Cleaning Robot"
    //               alt="iRobot Roomba 677 Vacuum Cleaning Robot"
    //             />
    //           </a>
    //           <div className="goods-info">
    //             <div className="goods-branding">
    //               <a href="#" className="goods-rating" title="Rating + 5">
    //                 <i
    //                   className="rating rating-5"
    //                   aria-label="rated 5 out of 5"
    //                 ></i>
    //                 <span className="goods-rating-num font-s text-gray">
    //                   (3)
    //                 </span>
    //               </a>
    //             </div>
    //             <a href="#" className="goods-title font-l" title="View Details">
    //               ربات جارو برقی iRobot Roomba 677
    //             </a>
    //             <div className="tag-list  ">
    //               <div className="tag is-skewed bg-darkorange">
    //                 <div className="tag-text font-s">6% ذخیره کن</div>
    //               </div>
    //             </div>
    //             <div className="goods-price">
    //               <div className="goods-price-current">
    //                 <span className="goods-price-label"></span>
    //                 <span className="goods-price-symbol">$</span>
    //                 <span className="goods-price-value">
    //                   <strong>149</strong>
    //                 </span>
    //               </div>
    //               <div className="goods-price-was text-gray font-s">
    //                 3 میلیون 300 هزار تومان
    //               </div>
    //               <div className="goods-price-ship text-gray font-s">
    //                 <span className="goods-price-ship-eligible text-blue">
    //                   ارسال رایگان
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="section-bottom">
    //       <a href="#" className="button bg-blue">
    //         تماشای همه
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default GridCards;
