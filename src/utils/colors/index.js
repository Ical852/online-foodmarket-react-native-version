const mainColors = {
    black1: '#1C1C1C',
    grey1: '#8D92A3',
    white : '#FFFFFF',
    green1: '#28DF99',
    green2: '#1ABC9C',
    darkGreen1: '#206A5D',
    red1: '#D9435E',
    mainBg: '#FAFAFC'
}

export const customColors = {
    primary : mainColors.green1,
    secondary : mainColors.darkGreen1,
    white: mainColors.white,
    grey : mainColors.grey1,
    defaultBg : mainColors.mainBg,
    status : {
        success : mainColors.green2,
        error : mainColors.red1
    },
    text : {
        primary : mainColors.black1,
        secondary : mainColors.grey1,
        success : mainColors.green2,
        error : mainColors.red1
    },
    button : {
        primary : {
            text : mainColors.white,
            background : mainColors.green1
        },
        secondary : {
            text : mainColors.white,
            background : mainColors.darkGreen1
        }
    },
    border : mainColors.grey1
}