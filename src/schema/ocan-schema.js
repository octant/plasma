const schema = {
  completedOCAN: {
    type: 'select',
    label: 'Completed OCAN',
    defaultValue: '',
    isRequired: true,
    options: [
      {value: '', text: ''},
      {value: 'Core OCAN', text: 'Core OCAN'},
      {value: 'Core + Self OCAN', text: 'Core + Self OCAN'}
    ]
  },

  startDate: {
    type: 'date',
    label: 'Start Date',
    placeholder: 'YYYY-MM-DD',
    defaultValue: '',
    isRequired: true,
    min: '2016-10-01',
    max: (() => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return today.toISOString().substr(0, 10)
    })()
  },

  completionDate: {
    type: 'date',
    label: 'Completion Date',
    placeholder: 'YYYY-MM-DD',
    defaultValue: '',
    isRequired: true,
    custom: ({ completionDate, startDate }) => {
      const startDateTime = new Date(startDate)
      const completionDateTime = new Date(completionDate)

      return (+startDateTime <= +completionDateTime)
    },
    min: '2016-10-01',
    max: (() => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return today.toISOString().substr(0, 10)
    })()
  },

  ocanCompletedByLead: {
    type: 'select',
    label: 'OCAN completed by OCAN Lead?',
    defaultValue: '',
    isRequired: true,
    options: [
      {value: '', text: ''},
      {value: true, text: 'Yes'},
      {value: false, text: 'No'}
    ]
  },

  reasonForOCAN: {
    type: 'select',
    label: 'Reason for OCAN',
    defaultValue: '',
    isRequired: true,
    options: [
      {value: '', text: ''},
      {value: 'Initial OCAN', text: 'Initial OCAN'},
      {value: 'Reassessment', text: 'Reassessment'},
      {value: '(Prior to) Discharge', text: '(Prior to) Discharge'},
      {value: 'Significant change', text: 'Significant change'},
      {value: 'Review', text: 'Review'},
      {value: 'Re-key', text: 'Re-key'},
      {value: 'Other', text: 'Other'}
    ]
  },

  otherReasonForOCAN: {
    type: 'text',
    alwaysCheck: true,
    disabled: ({reasonForOCAN}) => {
      return reasonForOCAN !== 'Other'
    },
    label: 'If other, please specify',
    defaultValue: '',
    prompt: 'Please describe the other reason',
    custom: ({otherReasonForOCAN, reasonForOCAN}) => {
      if (reasonForOCAN === 'Other') {
        return otherReasonForOCAN !== ''
      } else {
        return true
      }
    }
  },

  firstName: {
    type: 'text',
    label: 'First Name',
    defaultValue: '',
    min: 2
  },

  dob: {
    type: 'date',
    label: 'Date of Birth',
    placeholder: 'YYYY-MM-DD',
    defaultValue: '',
    isRequired: true,
    min: '1900-01-01',
    max: (() => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return today.toISOString().substr(0, 10)
    })()
  },

  dobAccuracy: {
    type: 'select',
    label: 'Accuracy',
    defaultValue: '',
    options: [
      {value: '', text: ''},
      {value: 'Estimate', text: 'Estimate'},
      {value: 'Unknown', text: 'Unknown'}
    ]
  },

  middleInitial: {
    type: 'text',
    label: 'Middle Initial',
    defaultValue: '',
    min: 1,
    max: 1
  },

  lastName: {
    type: 'text',
    label: 'Last Name',
    defaultValue: '',
    min: 2
  },

  preferredName: {
    type: 'text',
    label: 'Preferred Name',
    defaultValue: '',
    min: 2
  },

  address: {
    type: 'text',
    label: 'Address',
    defaultValue: '',
    min: 2
  },

  city: {
    type: 'text',
    label: 'City',
    defaultValue: '',
    min: 2
  },

  province: {
    type: 'select',
    label: 'Province',
    defaultValue: '',
    options: [
      {value: '', text: ''},
      {value: 'AB', text: 'AB'},
      {value: 'BC', text: 'BC'},
      {value: 'MB', text: 'MB'},
      {value: 'NB', text: 'NB'},
      {value: 'NL', text: 'NL'},
      {value: 'NT', text: 'NT'},
      {value: 'NS', text: 'NS'},
      {value: 'NU', text: 'NU'},
      {value: 'ON', text: 'ON'},
      {value: 'PE', text: 'PE'},
      {value: 'QC', text: 'QC'},
      {value: 'SK', text: 'SK'},
      {value: 'YT', text: 'YT'},
      {value: 'NA', text: 'NA'}
    ]
  },

  postalCode: {
    type: 'text',
    label: 'Postal Code',
    defaultValue: '',
    regEx: /^[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]$/
  },

  healthCardNumber: {
    type: 'text',
    label: 'Health Card #',
    defaultValue: '',
    regEx: /^[0-9]{4} [0-9]{3} [0-9]{3}( [A-Z]{2})?$/,
    prompt: 'Example: 0192 9182 837 YT'
  },

  versionCode: {
    type: 'text',
    label: 'Version Code',
    defaultValue: ''
  },

  issuingTerritory: {
    type: 'select',
    label: 'Issuing Territory',
    defaultValue: '',
    options: [
      {value: '', text: ''},
      {value: 'AB', text: 'AB'},
      {value: 'BC', text: 'BC'},
      {value: 'MB', text: 'MB'},
      {value: 'NB', text: 'NB'},
      {value: 'NL', text: 'NL'},
      {value: 'NT', text: 'NT'},
      {value: 'NS', text: 'NS'},
      {value: 'NU', text: 'NU'},
      {value: 'ON', text: 'ON'},
      {value: 'PE', text: 'PE'},
      {value: 'QC', text: 'QC'},
      {value: 'SK', text: 'SK'},
      {value: 'YT', text: 'YT'},
      {value: 'NA', text: 'NA'}
    ]
  },

  serviceRecipientLocation: {
    type: 'select',
    label: 'Service Recipient Location',
    defaultValue: '',
    options: [
      {value: 'Algoma District', text: 'Algoma District'},
      {value: 'Brant', text: 'Brant'},
      {value: 'Bruce', text: 'Bruce'},
      {value: 'Chochrane District', text: 'Chochrane District'},
      {value: 'Dufferin', text: 'Dufferin'},
      {value: 'Durham', text: 'Durham'},
      {value: 'Elgin', text: 'Elgin'},
      {value: 'Essex', text: 'Essex'},
      {value: 'Frontenac', text: 'Frontenac'},
      {value: 'Grey', text: 'Grey'},
      {value: 'Haldimand-Norfolk', text: 'Haldimand-Norfolk'},
      {value: 'Haliburton', text: 'Haliburton'},
      {value: 'Halton', text: 'Halton'},
      {value: 'Hamilton', text: 'Hamilton'},
      {value: 'Hastings', text: 'Hastings'},
      {value: 'Huron', text: 'Huron'},
      {value: 'Kenora and Kenora P.P.', text: 'Kenora and Kenora P.P.'},
      {value: 'Chatham-Kent', text: 'Chatham-Kent'}
    ]
  },

  lhinConsumerResidesIn: {
    type: 'select',
    label: 'LHIN Consumer Resides In',
    defaultValue: '',
    options: [
      {value: 'Erie St. Claire', text: 'Erie St. Claire'},
      {value: 'South West', text: 'South West'},
      {value: 'Waterloo Wellington', text: 'Waterloo Wellington'},
      {value: 'Hamilton Niagra Haldimand Brant', text: 'Hamilton Niagra Haldimand Brant'},
      {value: 'Central West', text: 'Central West'},
      {value: 'Mississauga-Halton', text: 'Mississauga-Halton'},
      {value: 'Toronto Central', text: 'Toronto Central'},
      {value: 'Central', text: 'Central'},
      {value: 'Central East', text: 'Central East'},
      {value: 'South East', text: 'South East'},
      {value: 'Champlain', text: 'Champlain'},
      {value: 'North Simcoe Muskoka', text: 'North Simcoe Muskoka'},
      {value: 'North East', text: 'North East'},
      {value: 'North West', text: 'North West'},
      {value: 'Out of Province', text: 'Out of Province'},
      {value: 'Out of Country', text: 'Out of Country'},
      {value: 'Unknown', text: 'Unknown'}
    ]
  }
}

export default schema
