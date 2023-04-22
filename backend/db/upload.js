import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  imageID: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
});

export default mongoose.model('Upload', UploadSchema);
