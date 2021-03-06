interface ITheme {
    colorWhite: string;
    colorGray: string;
    colorNavy: string;
    colorNavyOpacity: string;
    colorYellow: string;
    sizeMobile: string;
    sizeTablet: string;
}

const theme: ITheme = {
    colorWhite: "#ffffff",
    colorGray: "#E9EAED",
    colorNavy: "#192051",
    colorNavyOpacity: "rgba(25,32,81,0.2)",
    colorYellow: "#ECD402",
    sizeMobile: "768px",
    sizeTablet: "1100px",
};

export default theme;
