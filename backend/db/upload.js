import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  url: {
    type: String,
    unique: true,
    required: true,
  },
  imageID: {
    type: String,
    unique: true,
    required: true,
  }
});

export default mongoose.model('Upload', UploadSchema);
