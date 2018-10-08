import Category from '@/models/Category';

export default interface Todo {
    title: string;
    category: Category;
    _id: string;
    scheduledOn: Date;
}
