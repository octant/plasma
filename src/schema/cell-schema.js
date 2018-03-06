export const schema = {
  field: {
    type: 'select',
    isRequired: true,
    label: 'Field',
    defaultValue: '',
    options: [
      {value: '', text: ''},
      {value: 'coreOCAN', text: 'Core OCAN'},
      {value: 'core+SelfOCAN', text: 'Core + Self OCAN'}
    ]
  }
}
