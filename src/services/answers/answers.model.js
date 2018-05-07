// answers-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { ObjectId } = mongooseClient.Schema.Types
  const { Schema } = mongooseClient
  const answers = new Schema({
    userId: { type: ObjectId, required: true },
    questionId: { type: ObjectId, required: true },
    questionSortIndex: { type: Number },
    answer: { type: String, required: true },
    answerChoice: { type: String, enum: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] }
  }, {
    timestamps: true
  })

  return mongooseClient.model('answers', answers)
}
