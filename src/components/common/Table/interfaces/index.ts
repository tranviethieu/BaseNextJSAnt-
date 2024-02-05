export interface PropsTable {
  data: any;
  classTable?: string;
  isNumericalOrder?: boolean;
  isActiveThead?: boolean;
  column: {
    title: any;
    render: any;
    className?: string;
    checkBox?: boolean;
    textAlign?: any;
  }[];
  onSetData?: (any: any) => void;
}
