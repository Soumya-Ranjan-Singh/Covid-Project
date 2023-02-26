import { Schema, model } from 'mongoose';

const covidIndiaSchema = new Schema(
    {
        Sno: {
            type: Number
        },
        Date: {
            type: Date
        },
        Time: {
            type: String
        },
        "State/UnionTerritory": {
            type: String
        },

        ConfirmedIndianNational: {
            type: Number
        },
        ConfirmedForeignNational: {
            type: Number
        },
        Cured: {
            type: Number
        },
        Deaths: {
            type: Number
        },
        Confirmed: {
            type: Number
        }
    }
);

export default model('CovidIndia', covidIndiaSchema, "CovidIndia");