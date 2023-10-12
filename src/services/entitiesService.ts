import { Entities } from "../constants/entities";
import EntitiesController from "../controllers/entitiesController";

export default class EntitiesService {
  static async add(type: Entities, name: string) {
    const { data } = await EntitiesController.add({type, name})
    return data
  }
}