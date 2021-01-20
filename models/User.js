const { Schema, model } = require('mongoose');

// the User Schema requires username and email
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+\@.+\..+/, "Please enter a valid email"]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON:  {
            virtuals: true,
            getters: true
        }
    }
);
// the virtuals function keeps track of friend amount
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('User', UserSchema);


module.exports = User;