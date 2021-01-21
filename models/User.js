const { Schema, model } = require('mongoose');

//User Schema requires username and email
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
//virtual function to keep track of amount of friends
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;