
export class Model {

  protected validate(attributes: Array<any>): void {
    for (const attribute of attributes) {
      if (!attribute) throw new Error(`Invalid value ${attribute}`)
    }
  }
}
