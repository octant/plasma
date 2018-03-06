import DateValidator from './date-validator'
import NumberValidator from './number-validator'
import SelectValidator from './select-validator'
import StringValidator from './string-validator'

export default class Schema {
  constructor (schemaDefinition) {
    this.schemaDefinition = schemaDefinition
    this.validators = this.createValidators()
  }

  defaultValues () {
    const defaultValues = {}
    Object.keys(this.schemaDefinition).forEach((key) => {
      if (this.schemaDefinition[key].defaultValue !== undefined) {
        defaultValues[key] = this.schemaDefinition[key].defaultValue
      }
    })
    return defaultValues
  }

  validate (fields, checkAll = false) {
    const errors = {}
    Object.keys(this.schemaDefinition).forEach((key) => {
      const {
        defaultValue,
        isRequired,
        alwaysCheck
      } = this.schemaDefinition[key]
      const check = isRequired || alwaysCheck || (checkAll && (isRequired || fields[key] !== '')) || defaultValue !== fields[key]
      if (check) {
        const messages = this.validators[key].validate(fields[key], fields)
        if (messages.length > 0) {
          errors[key] = messages.shift()
        }
      }
    })

    return errors
  }

  isValid (fields) {
    return Object.keys(this.validate(fields, true)).length === 0
  }

  lessThan (x, y) {
    return x.length < y
  }

  createValidators () {
    const validators = {}
    Object.keys(this.schemaDefinition).forEach((key) => {
      const { type } = this.schemaDefinition[key]
      switch (type) {
        case 'select':
          validators[key] = new SelectValidator(this.schemaDefinition[key])
          break

        case 'number':
          validators[key] = new NumberValidator(this.schemaDefinition[key])
          break

        case 'date':
          validators[key] = new DateValidator(this.schemaDefinition[key])
          break

        default:
          validators[key] = new StringValidator(this.schemaDefinition[key])
      }
    })

    return validators
  }

  definition () {
    return this.schemaDefinition
  }
}
