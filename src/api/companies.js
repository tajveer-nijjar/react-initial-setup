import * as client from './baseClient';

export const getComapny = (companyId) => client.get(`/companies/${companyId}`);
export const getAllCompanies = () => client.get('/companies');
