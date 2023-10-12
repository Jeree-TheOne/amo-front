import axios from "axios";
import { Entities } from "../constants/entities";

export default class EntitiesController {
  static async add({type, name}: {type: Entities, name: string}) {
    return await axios.post(type, { name })
  }
}