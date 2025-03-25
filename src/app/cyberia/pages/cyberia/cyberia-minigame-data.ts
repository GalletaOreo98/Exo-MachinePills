export interface ICyberiaMinigameBodyData extends Array<ICyberiaMinigameBodyElement> {};

export interface ICyberiaMinigameBodyElement {
    cardTitle:string,
    cardText:string,
    imageName:string,
    gameUrl:string
}



export const productBodyData:ICyberiaMinigameBodyData = [
    {
        cardTitle: 'Lain Test',
        cardText: 'Descubre cuál Lain eres con este pseudo-test de personalidad y recibe una carta de Lain con tu resultado.',
        imageName: 'lain-test.jpg',
        gameUrl: '/laintest'
    },
];