import * as fz from "../converters/fromZigbee";
import * as exposes from "../lib/exposes";
import type {DefinitionWithExtend} from "../lib/types";

const e = exposes.presets;

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["Windows switch  "],
        model: "M415-6C",
        vendor: "BYUN",
        description: "Smoke sensor",
        fromZigbee: [fz.byun_smoke_true, fz.byun_smoke_false],
        toZigbee: [],
        exposes: [e.smoke()],
    },
    {
        zigbeeModel: ["GAS  SENSOR     "],
        model: "M415-5C",
        vendor: "BYUN",
        description: "Gas sensor",
        fromZigbee: [fz.byun_gas_true, fz.byun_gas_false],
        toZigbee: [],
        exposes: [e.gas()],
    },
];
