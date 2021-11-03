export interface IPlayer {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    codename: string,
    info: string
    player?: IPlayer,
};

export interface TPlayer {
    player: IPlayer,
    players: IPlayer[]
};







