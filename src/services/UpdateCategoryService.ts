import { FindOneOptions, getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateCategoryService {
    async execute({ id, name, description }: CategoryUpdateRequest) {
        const repo = getRepository(Category);

        const category = await repo.findOne(id as FindOneOptions<Category>);

        if (!category) {
            return new Error("Category does not exists!");
        }

        category.name = name ?? category.name;
        category.description = description ?? category.description;

        await repo.save(category);

        return category;
    }
}