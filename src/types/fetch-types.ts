type RequestData = {
  url: string,
  method: string,
  headers?: HeadersInit,
  body?: BodyInit | null
};

type CharacterDetail = {
  ServerName: string,
  CharacterName: string,
  CharacterLevel: number,
  CharacterClassName: string,
  ItemAvgLevel: string,
  ItemMaxLevel?: string
};

type CharacterInfo = {
  characterList: CharacterDetail[]
}

type MemberType = {
  name: string[],
  main: string[],
  characterList: CharacterDetail[]
}

export { RequestData, CharacterDetail, CharacterInfo, MemberType };