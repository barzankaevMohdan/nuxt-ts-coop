export  type validationRules = {
  name?: string,
  last_name?: string,
  login?: string[],
  password?: string
}

export type validationNames = {
  last_name?: string,
  login?: string,
  name?: string,
  password?: string
}

export type messagesTypes = {
  attributeFormatter?: any
  attributeNames?: object
  customMessages?: object
  lang?: string
  messages?: object
}

export type errors = {
  errors: object
}
