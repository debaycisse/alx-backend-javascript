import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then((userInfo) => {
      console.log(
        `${userInfo[1].body} ${userInfo[0].firstName} ${userInfo[0].lastName}`,
      );
    }, () => console.error('Signup system offline'));
}
