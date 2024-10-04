export interface IMenuOption {
    icon?: string;
    label?: string;
    link?: string;
    children?: IMenuOption[];
}