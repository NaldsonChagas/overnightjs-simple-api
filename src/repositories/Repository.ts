import {Model} from "@src/models/utils/Model"

export class Repository {
  protected readonly items: Array<Model> = []

  protected increaseId(item: Model): Model {
    if (this.items.length < 1) {
      item.setId(1)
      return item
    }
    const lastSavedItem: Model = this
      .items[this.items.length - 1]
    const lastId = lastSavedItem.getId()
    item.setId(lastId + 1)
    return item
  }

  public create(item: Model): Model {
    item = this.increaseId(item)
    this.items.push(item)
    return item
  }
}
