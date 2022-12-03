const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./user')
const artworkSchema = require('./artwork')
const bcrypt = require("bcrypt")

const gallerySchema = new Schema({
    gallery: {type: String, required: true},
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    artwork: {
      type: Schema.Types.ObjectId,
      ref: 'Artwork',
      minLength: 3,
      required: true
    }
}, {
  timestamps: true,
});


// gallerySchema.pre('save', async function(next) {
//     if(!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
//     return next();
// });

module.exports = mongoose.model('Gallery', gallerySchema);