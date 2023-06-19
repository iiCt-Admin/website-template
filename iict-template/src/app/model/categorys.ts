export class Category{
	Portfolio_Cat_Order : number;
	Portfolio_Cat_Name : string;
	Portfolio_Cat_Names : Array<string>;
	Portfolio_Cat_Sort : string;
	Portfolio_Cat_Language : string;
	Portfolio_Cat_Languages : Array<string>;
	Portfolio_Cat_Active : boolean;
}

export class CategoryData{
	Titles : Array<string>;
	Languages : Array<string>;
	Descriptions : Array<string>;
	AltTexts : Array<string>; // moving to portfolio pic list
	Portfolio_Data_Title : string;
	Portfolio_Data_Category : string;
	Portfolio_Data_imagePath : string; // moving to portfolio pic list
	// Portfolio_Data_Language : string
	// Portfolio_Data_Description : string;
	// Portfolio_Data_AltText : string;
	Portfolio_Data_detailsLink : string;
	Portfolio_Data_Active : boolean;
}

export class ImageList{
	Portfolio_Data_AltText : Array<string>;
	Portfolio_Data_ID : string;
	Portfolio_Data_Primary : boolean;
	Portfolio_Data_Order: number;
	Portfolio_Data_Path : string;
}
