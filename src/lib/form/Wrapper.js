import React, { Component } from 'react'

import Schema from '../schema/schema'

export const wrap = (WrappedComponent) => {
  return (
    class Wrapper extends Component {
      constructor (props) {
        super(props)

        const schema = new Schema(this.props.schema)

        React.Children.forEach(props.children, (child) => {
          if (child.type.name === 'InputWrapper') {
            schema[child.props.name] = {
              type: child.props.type,
              label: child.props.label,
              defaultValue: child.props.defaultValue || '',
              min: child.props.min,
              form: {
                omit: true
              }
            }
          }
        })

        this.state = {
          schema,
          fields: schema.defaultValues(),
          errors: schema.validate(schema.defaultValues()),
          isValid: schema.isValid(schema.defaultValues()),
          maxRecords: 1000
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
      }

      componentDidMount () {
        this.props.mountMethod({...this.state.fields})
      }

      handleKeyPress (event) {
        if (event.key === 'Enter' && Object.keys(this.state.errors).length === 0) {
          this.handleSubmit(event)
        }
      }

      handleChange (event, data) {
        const fields = this.state.fields
        fields[data.name] = data.value
        const errors = this.state.schema.validate(fields)
        const isValid = this.state.schema.isValid(fields)

        this.setState({fields, errors, isValid}, () => {
          if (this.props.changeMethod) {
            this.props.changeMethod({
              name: data.name,
              value: data.value,
              type: data.type,
              fields: {...this.state.fields}
            })
          }
        })
      }

      handleSubmit (event) {
        this.props.submitMethod({...this.state.fields})
      }

      handleReset () {
        const flds = this.state.schema.defaultValues()
        const errs = this.state.schema.validate(flds)
        const valid = this.state.schema.isValid(flds)
        this.setState({
          fields: flds,
          errors: errs,
          isValid: valid
        }, () => {
          if (this.props.resetMethod) {
            this.props.resetMethod({...this.state.fields})
          }
        })
      }

      setHandler (child) {
        switch (child.props.type) {
          case 'submit':
            return {
              ...child.props,
              onClick: this.handleSubmit,
              disabled: this.props.disableSubmit || !this.state.isValid
            }
          case 'reset':
            return {...child.props,
              onClick: this.handleReset,
              disabled: this.props.disableReset
            }
          case 'date':
          case 'text':
          case 'select':
          case 'number':
          case 'radio':
          case 'bool':
            return {...child.props, changeMethod: this.handleChange}
          default:
            return {...child.props}
        }
      }

      render () {
        return (
          <WrappedComponent schemaDef={this.state.schema.definition()} {...this.props}>
            {this.children}
          </WrappedComponent>
        )
      }
    }
  )
}
