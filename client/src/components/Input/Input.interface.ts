export interface InputInterface {
    value: string;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}