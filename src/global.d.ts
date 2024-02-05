interface ICategoryGift {
  uuid: string;
  name: string;
  description: any;
  qualityGift: number;
  timeCreated: string;
  isChecked: boolean;
  account: {
    uuid: string;
    name: string;
    urlAvt: any;
  };
}
