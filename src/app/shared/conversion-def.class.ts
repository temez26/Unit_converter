export class ConversionDef {
  constructor(
    public name: string,
    public inUnit: string,
    public outUnit: string,
    public coeff: number,
    public pre0ffset: number,
    public post0ffset: number
  ) {}
}
