

export interface IMatriceSimple{
    id: string,
    name: string,
    rarity: string,
    assets: {
        itemIcon: string,
        itemLargeIcon: string
    },
}


export interface IMatrice extends IMatriceSimple{
    simulacrumId: string | null,
    type: string,
    description: string,
    sets: [
        {
        need: number,
        description: string
        }
    ],
}

