
export interface ISimulacraSimple {
    id: string
    name: string
    rarity: string
    weaponId: string
    matrixId: string
    assetsA0: {
        avatar: string
        titlePicture: string 
        painting: string
        namePicture: string
        grayPainting: string
        thumbPainting: string
        weaponShowPicture: string
        activeImitation: string
        inactiveImitation: string
        advancePainting: string
        advanceGrayPainting: string
        backPhoto: string
        rarityIcon: string
        lotteryCardImage: string
        matrixPainting: string
        descPainting: string
    }
}

export interface ISimulacra extends ISimulacraSimple {
  avatarId: string
  likedGiftTypes: string[]
  gender: string | null
  birthday: string | null
  affiliation: string | null
  hometown: string | null

  assetsA3: {
    avatar: string
    titlePicture: string
    painting: string
    namePicture: string
    grayPainting: string
    thumbPainting: string
    weaponShowPicture: string
    activeImitation: string
    inactiveImitation: string
    advancePainting: string
    advanceGrayPainting: string
    backPhoto: string
    rarityIcon: string
    lotteryCardImage: string
    matrixPainting: string
    descPainting: string
  } | null

  voicing: {
    cn: string | null
    jp: string | null
    en: string | null
    kr: string | null
    pt: string | null
  }

  awakening: [
    {
      name: string
      description: string
      icon: string
      need: number
    }
  ]

  banners: [
    {
      imitation_id: string
      weapon_id: string | null
      matrix_id: string | null
      simulacrum: string
      bannerNo: number
      start: string
      end: string
      details_link: string
      limited_banner_only: boolean
      is_rerun: boolean
      final_rerun: boolean
      is_collab: boolean
      no_weapon: boolean
    }
  ]
}
