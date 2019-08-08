import home from './Home/index.story';
import profiles from './Profiles/index.story';
import page from './Page/index.story';

export default (path: string = 'signIn') => {
  home(path);
  profiles(path);
  page(path);
};
