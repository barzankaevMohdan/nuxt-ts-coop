import { errors, AttributeNamesType, MessagesTypes, RulesTypes } from "./validation-types";

export interface DataType {
  login: string,
  password: string | number,
  name: string,
  last_name: string,
}

export interface ErrorHandler {
  [index: string]: string | number,
}

export interface Messages {
  message: string,
  errors: [string]
}

export interface GetValidation {
  fails: any;
  errorCount: number,
  errors: errors,
  hasAsync: boolean,
  input: AttributeNamesType,
  messages: MessagesTypes,
  rules: RulesTypes
}
