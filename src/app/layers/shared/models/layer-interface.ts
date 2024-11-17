export interface IlayerMainData {
    layerName:string,
    layerText:string,
    layerImgName:string,
    imgWidth:number,
    imgHeight:number
};

export interface IlayerBodyData extends Array<IlayerBodyElement> {};

export interface IlayerBodyElement {
    cardText:string,
    imageName:string,
    footer:string
}