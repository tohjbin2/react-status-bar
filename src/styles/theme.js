const theme = {
  fontColor: {
    black: '#343a40',
    lightGray: '#a0a0a0',
    gray: '#717171',
    darkGray: '#575757',
  },

  backgroundColor: {
    white: '#fcfcfc',
    gray: '#ededed',
    darkGray: '#303030',
    shadowGray: '#c1c1c1',
  },

  mainColor: {
    main: '#266bff', // #1466ff, rgb(20, 102, 255)
    dark: '#0848d1', // #004fd7, rgb(0, 80, 215)
  },

  statusColor: {
    working: 'printBtnStyle',
    breaking: '#ffc936',
    startWorkBackground: 'rgba(168, 242, 167, 0.3)',
    endWorkBackground: 'rgba(252, 164, 164, 0.3)',
    yellowBackground: 'rgba(255, 201, 54, 0.3)',
    grayBackground: 'rgba(237, 237, 237, 0.5)',
  },

  pointColor: {
    red: '#ff5959',
  },

  gridStyle: {
    height: '638px',
  },

  stopDrag: () => `
    -webkit-user-select: none; /* [MEMO] 마우스 드래그 금지 */
    -moz-user-select: none; /* [MEMO] 마우스 드래그 금지 */
    -ms-user-select: none; /* [MEMO] 마우스 드래그 금지 */
    user-select: none; /* [MEMO] 마우스 드래그 금지 */
  `,

  scrollBarStyle: () => `
    ::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0.5em;
      background-color: #c1c1c1;
    }

    ::-webkit-scrollbar-track {
      border-radius: 0.5em;
      background-color: #f8f9fa;
      border-bottom: '#c1c1c1';
    }
  `,

  contentsMainTitle: () => `
    font-size: 34px;
    /* margin-bottom: 80px; */
    margin-bottom: 50px;
    margin-left: 30px;
    font-weight: 600;
  `,

  contentsSubTitle: () => `
    display: flex;
    margin-bottom: 20px;
    margin-left: 30px;
  `,

  contentsSubTitleCategory: () => `
    margin-right: 25px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  `,

  loadingGIF: () => `
    padding: 10px;
    width: 120px;
    border-radius: 8px;
    background-color: white;
  `,

  printBtnStyle: () => `
    padding: 5px;
    border-radius: 0.5em;
    border: solid 1px #c1c1c1;
    background-color: #ededed;
    color: #717171;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background-color: #c1c1c1;
    }
  `,

  borderRadiusAll: (
    topRight = '15px',
    topLeft = '15px',
    bottomRight = '15px',
    bottomLeft = '15px',
  ) => `
    border-top-right-radius: ${topRight};
    border-top-left-radius: ${topLeft};
    border-bottom-right-radius: ${bottomRight};
    border-bottom-left-radius: ${bottomLeft};
  `,

  backgroundImg: (url = '') => `
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background-image: url(${url});
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-filter: grayscale(100%); /* 흑백 */
    filter: grayscale(100%); /* 흑백 */
    opacity: 0.5;
  `,

  defaultWidth: (width = '100%') => `width: ${width};`,

  mainDisplay: (backgroundColor = 'tomato') => `
    display: flex;
    justify-content: center;
    margin-top: 160px;
    background-color: ${backgroundColor};

    p {
      color: '#343a40';
      font-size: 45px;
      font-weight: 600;
      letter-spacing: -1px;
    }
  `,

  sidebarOuterMainSection: () => `
    display: flex;
    align-items: center;
    width: 200px;
    height: 50px;
    background-color: #303030;
    border-right: solid 1px #c1c1c1;
    font-weight: 400;

    :first-child {
      border-top: none;
    }
  `,

  sidebarOuterMainCategory: () => `
    margin-left: 10px;
  `,

  sidebarOuterSubSection: () => `
    display: flex;
    flex-direction: column;
  `,

  sidebarOuterSubCategory: () => `
    //
  `,

  sidebarInnerMainSection: () => `
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #4d4d4d;
    border-right: solid 1px #c1c1c1;
  `,

  sidebarInnerMainCategory: () => `
    display: flex;
    align-items: center;
    margin-left: 30px;
    margin-left: 20px;

    p {
      font-size: 6px;
      margin-right: 8px;
    }
  `,

  sidebarInnerSubSection: () => `
    display: flex;
    flex-direction: column;
    background-color: #4d4d4d;
    border-right: solid 1px #c1c1c1;
    cursor: pointer;
  `,

  sidebarInnerSubBox: () => `
    display: flex;
    align-items: center;
    height: 50px;

    :hover {
      background-color: #1466ff;
    }
  `,

  sidebarInnerSubCategory: () => `
    display: flex;
    align-items: center;
    margin-left: 30px;

    p {
      font-size: 6px;
      margin-right: 8px;
    }
  `,
};

export default theme;
