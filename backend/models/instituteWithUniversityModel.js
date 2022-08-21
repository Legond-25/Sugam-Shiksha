const mongoose = require('mongoose');

const attachedUniversitySchema = mongoose.Schema({
  state: String,
  district: String,
  university_type: String,
  university_name: String,
  attachedInst_state: String,
  attachedInst_district: String,
  attachedInst_type: String,
  attachedInst_management: String,
  institution_name: String,
  autonomous_institute: Boolean,
});

const attachedUniversityModel = mongoose.model(
  'institutes_attached_with_university',
  attachedUniversitySchema
);

module.exports = attachedUniversityModel;
