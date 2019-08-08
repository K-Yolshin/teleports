import { internet, name, company, random } from 'faker';

import Profile from '@/entities/signIn/profiles/Profile';

/**
 * Returns a list of the profiles of current account.
 */
export default () => new Promise<Profile[]>((resolve) => {
  const profiles: Profile[] = [];
  const length = random.number({ min: 1, max: 10 });

  for (let i = 0; i < length; i += 1) {
    profiles.push({
      id: random.uuid(),
      image: internet.avatar(),
      name: name.findName(),
      type: name.jobTitle(),
      organization: company.companyName(),
    });
  }

  setTimeout(resolve, 1500, profiles);
});
