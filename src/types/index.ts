export interface Photo {
  name: string;
  date: string;
  description: string;
  category: 'history' | 'construction' | 'tenants';
  url: string;
}

export interface Tenant {
  startDate: string;
  endDate: string;
  name: string;
  description: string;
}