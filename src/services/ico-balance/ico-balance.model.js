// ico-balance-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { ObjectId } = mongooseClient.Schema.Types
  const { Schema } = mongooseClient;
  const icoBalance = new Schema({
    userId: { type: ObjectId, required: true },
    type: { type: String, enum: ['ICO', 'SAFT', 'AIRDROP'], required: true },
    amountEqb: { type: Number, required: true },
    amountBtc: { type: Number },
    address: { type: String },
    addressIndex: { type: Number },
    fromAddress: { type: String },
    paidAt: { type: Date }
  }, {
    timestamps: true
  });

  return mongooseClient.model('icoBalance', icoBalance);
};
