/**
 * Properties of the Item.
 */
export default interface Props {
  name: string;
  free: string;
  per: string;
  price: string;
  for: string;

  webApp: boolean;
  webAppAdmins: number | boolean;
  webAppDispatchers: number | boolean;
  webAppManagers: number | boolean;
  webAppFinancier: number | boolean;

  mobile: boolean;
  mobileDrivers: number | string;
  mobileCustomers: number | boolean;
  mobilePassengers: number | boolean;
  mobileCommercialUsers: number | boolean;

  crm: boolean;
  crmEmail: number | boolean;
  crmPush: number | boolean;
  crmSms: number | boolean;

  acb: boolean;
  acbPassengers: number | boolean;
  acbCrew: number | boolean;

  gibdd: boolean;
  gibddNoticesOfOpgd: number | boolean;

  daily: boolean;
  dailyPer: string;
  dailyGibdd: number | boolean;
  dailyAmpp: number | boolean;
  dailyMadi: number | boolean;

  documentFlow: boolean;

  limit: boolean;
  limitTs: number | boolean;
  limitCarries: number | boolean;
  limitCustomers: number | boolean;
  limitOrders: number | boolean;
  limitIssues: number | boolean;
  limitOrdersCalendar: number | boolean;
  limitIssuesCalendar: number | boolean;
  limitEmployees: number | boolean;
  limitTemplates: number | boolean;
  limitDeals: number | boolean;
  limitAcquiring: number | boolean;
  limitWithdrawal: number | boolean;

  id?: any;
  onClick?: (id: any) => void;
}
