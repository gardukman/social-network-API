const moment = require('moment');
const { Schema, model } = require('mongoose');

// Schema used to create reactions
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 250
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // moment.js getter formats the date
            get: dateVal => moment(dateVal).format('MMM Do[,] YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// schema for building thoughts
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
// the virtuals function keeps track of amount of reactions
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtSchema);

module.exports = Thoughts;