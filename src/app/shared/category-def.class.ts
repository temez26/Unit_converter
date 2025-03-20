import { ConversionDef } from './conversion-def.class';
export class CategoryDef {
    constructor(
        public name: string,
        public icon: string,
        public conversions: ConversionDef[]
    ) {}
}