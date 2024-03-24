export interface IlayerMainData {
    layerName:string,
    layerText:string,
    layerImgName:string
};

export interface IlayerBodyData extends Array<IlayerBodyElement> {};

export interface IlayerBodyElement {
    cardText:string,
    imageName:string,
    footer:string
}