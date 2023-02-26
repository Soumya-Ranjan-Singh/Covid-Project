import { Schema, model } from 'mongoose';

const mapReduceSchema = new Schema(
    {
        city: {
            type: String
        },
        distances: [{
            type: Number
        }]
    },
);

export default model('MapReduce', mapReduceSchema, "MapReducePractice");