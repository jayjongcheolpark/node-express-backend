import React from 'react'

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5> 
      <buttom
        className="yellow darken-3 btn-flat" 
        onClick={onCancel}
      >
        Back
      </buttom>
    </div>
  )
}

export default SurveyFormReview