export type TypeLac = "Lac artificiel" | "Lac naturel";

export class Lac {
    constructor(
        private _id: string,
        private _nom: string,
        private _superficie: string,
        private _typeLac: TypeLac,
        private _pecheAutorisee: boolean,
        private _navigationAutorisee: boolean,
        private _entreePayante: boolean,
        private _prixEntree?: number) {}

    public get id() : string {
        return this._id;
    }
    
    public get nom() : string {
        return this._nom;
    }

    public set nom(nouveauNom: string) {
        this._nom = nouveauNom;
    }
    
    public get superficie() : string {
        return this._superficie;
    }

    public get typeLac() : TypeLac {
        return this._typeLac;
    }

    public get pecheAutorisee() : boolean {
        return this._pecheAutorisee;
    }

    public get navigationAutorisee() : boolean {
        return this._navigationAutorisee;
    }

    public set navigationAutorisee(navAutorisee: boolean) {
        this._navigationAutorisee = navAutorisee;
    }
    
    public get entreePayante() : boolean {
        return this._entreePayante;
    }

    public get prixEntree() : number {
        return this._prixEntree;
    }
}
