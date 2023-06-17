import { Timestamp } from "firebase/firestore";

export class Category{
  Portfolio_Cat_Active : boolean;
  Portfolio_Cat_Languages : Array<string>;
  Portfolio_Cat_Names : Array<string>;
	Portfolio_Cat_Order : number;
  Portfolio_Cat_Sort : string;
  Portfolio_Cat_longName : Array<string>
}

export class CategoryData{
  Portfolio_Data_Active : boolean;
  Portfolio_Data_Category : string;
  Portfolio_Data_Client : string;
  Portfolio_Data_URL : string;
  Portfolio_Data_altText : Array<string>;
  Portfolio_Data_date : Timestamp;
  Portfolio_Data_descriptions : Array<string>;
  Portfolio_Data_detailsLink : string;
  Portfolio_Data_imagePath : string;
  Portfolio_Data_languages : Array<string>;
  Portfolio_Data_paragraph : Array<string>;
  Portfolio_Data_team : string;
	Portfolio_Data_titles : Array<string>;
}
