const styles = {
  bodyBehavior:
    "flex flex-col scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-100",
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-sans font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[78px] leading-[68px] w-full",
  paragraph: "font-sans font-normal text-text text-[18px] leading-[30px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex justify-center items-end",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 flex-col ${styles.flexStart}`,
};

export default styles;
