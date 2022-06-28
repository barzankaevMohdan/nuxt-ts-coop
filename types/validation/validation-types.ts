export  type RulesTypes = {
  name?: string,
  last_name?: string,
  login?: string[],
  password?: string
}

export type AttributeNamesType = {
  last_name?: string,
  login?: string,
  name?: string,
  password?: string
}

export type MessagesTypes = {
  attributeFormatter?: any
  attributeNames?: object
  customMessages?: object
  lang?: string
  messages?: object
}

export type errors = {
  errors: object
}
