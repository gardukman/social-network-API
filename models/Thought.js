const moment = require('moment');
const { Schema, model } = require('mongoose');

//Reaction Schema used to create reactions
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //getter used to format the date using moment.js
            get: dateVal => moment(dateVal).format('MMM Do[,] YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

//The Schema for building thoughts
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //getter used to format the date using moment.js
            get: dateVal => moment(dateVal).format('MMM Do[,] YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);
//virtual used to track amount of reactions
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;