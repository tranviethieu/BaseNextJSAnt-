export interface PropsInput {
	blur?: boolean;
	isRequired?: boolean;
	isNumber?: boolean;
	passNew?: boolean;
	isEmail?: boolean;
	isMoney?: boolean;
	readOnly?: boolean;
	isActiveButton?: boolean;

	max?: boolean | number;
	min?: boolean | number;

	textRequired?: string;
	textConfirm?: string;
	valueConfirm?: string;
	label?: string | React.ReactNode;
	type?: string;
	note?: string;
	txtBtn?: string;
	placeholder?: string;

	onClick?: () => void;
	onKeyPress?: (e: any) => void;

	[props: string]: any;
}

export interface ContextData {
	isDone: boolean;
	form: any;
	validate: any;
	errorText: any;
	countValidate: any;
	setCountValidate: (any: any) => void;
	setForm: (any: any) => void;
	setErrorText: (any: any) => void;
	setValidate: (any: any) => void;
}
