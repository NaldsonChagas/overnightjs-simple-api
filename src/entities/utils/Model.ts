
export class Model {
  private id = 0

  protected validate(attributes: Array<any>): void {
    for (const attribute of attributes) {
      if (!attribute) throw new Error(`Invalid value ${attribute}`)
    }
  }

  public getId(): number {
    return this.id
  }

  public setId(id: number): void {
    this.id = id
  }
}
