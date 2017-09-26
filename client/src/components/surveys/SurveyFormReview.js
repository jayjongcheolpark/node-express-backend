import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  }) 

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <buttom
        className="yellow darken-3 btn-flat" 
        onClick={onCancel}
      >
        Back
      </buttom>
    </div>
  )
}

function mapStateToProps({ form }) {
  return {
    formValues: form.surveyForm.values 
  } 
}

export default connect(mapStateToProps)(SurveyFormReview)