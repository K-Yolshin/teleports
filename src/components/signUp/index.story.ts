import page from './Page/index.story';
import companyInput from './CompanyInput/index.story';
import stages from './Stages/index.story';
import company from './Company/index.story';
import notifications from './Notifications/index.story';
import taxes from './Taxes/index.story';
import profile from './Profile/index.stoty';
import tariffs from './Tariffs/index.story';
import startMessage from './StartMessage/index.story';
import finishMessage from './FinishMessage/index.story';
import dropdownList from './DropdownList/index.story';

export default () => {
  const path = 'signUp';

  page(path);
  companyInput(path);
  stages(path);
  company(path);
  notifications(path);
  taxes(path);
  profile(path);
  tariffs(path);
  startMessage(path);
  finishMessage(path);
  dropdownList(path);
};
