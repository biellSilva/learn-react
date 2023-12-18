

export interface IWeaponSimple {
    id: string
    name: string
    rarity: string
    category: string
    element: string
    assets: {
        icon: string,
        weaponIconForMatrix: string
    }
}


export interface IWeapon extends IWeaponSimple {
    avatar: string | null,
    advanceId: string | null,
    description: string,
    shatter: {
      value: number,
      tier: string
    },
    charge: {
      value: number,
      tier: string
    },
    elementEffect: {
        title: string,
        description: string
    }
    weaponEffects: [
      {
        title: string,
        description: string
      }
    ],
    advancements: [
      {
        description: string,
        shatter: {
          value: number,
          tier: string
        },
        charge: {
          value: number,
          tier: string
        },
        need: string
      }
    ],
    skills: {
      normals: [
        {
          name: string,
          description: string,
          icon: string,
          tags: string[],
          operations: string[],
        }
      ],
      dodge: [
        {
          name: string,
          description: string,
          icon: string,
          tags: string[],
          operations: string[],
        }
      ],
      skill: [
        {
          name: string,
          description: string,
          icon: string,
          tags: string[],
          operations: string[],
        }
      ],
      discharge: [
        {
          name: string,
          description: string,
          icon: string,
          tags: string[],
          operations: string[],
        }
      ]
    },
    stats: [
      {
        id: string,
        name: string,
        icon: string
      }
    ],
    meta: {
      recommendedPairings: string[],
      recommendedMatrices: string[],
      rating: number[],
      analyticVideoId: string
    }
}