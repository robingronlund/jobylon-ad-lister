export interface IJobylonAd {
  benefits: any[];
  categories: any[];
  company: ICompany;
  contact: IContact;
  departments: any[];
  descr: string;
  employment_type: string;
  experience: string;
  from_date: string;
  function: string;
  id: number;
  internal_reference: any
  language: string;
  layers_1: any[];
  layers_2: any[];
  layers_3: any[];
  layers_4: any[];
  layers_5: any[];
  linkedInCompanyId: number;
  locations: ILocations[];
  owner: IOwner;
  skills: string;
  slug: string;
  title: string;
  to_date: any;
  urls: IUrls;
  video: IVideo
}

interface ICompany {
  id: number;
  industry: string
  cover: string;
  descr: string;
  logo: string;
  slug: string;
  name: string;
  name_internal: string;
  website: string;
}


interface IContact {
  name: string;
  email: string;
  phone: string;
  photo: string;
}

interface ILocations {
  location: ILocation;
}

interface ILocation {
  text: string
}

interface IOwner {
  email: string;
  id: number;
  name: string;
}

interface IUrls {
  ad: string;
  apply: string;
}

interface IVideo {
  content: any;
  url: string;
}
