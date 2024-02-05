export interface PropsListImage {
	images: string[];
	width: number;
	height: number;
	borderRadius?: number;
	max?: number;
	handleDelete: (i: number, key: 'administrativeImagePaths' | 'commitmentImagePaths' | 'otherImagePaths') => void;
}
