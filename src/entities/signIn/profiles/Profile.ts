/**
 * Type of the profile.
 */
interface Profile {

  /**
   * ID of the profile.
   */
  id: string;

  /**
   * URL of the image of the user.
   */
  image: string;

  /**
   * Name of the user.
   */
  name: string;

  /**
   * Role of the user.
   */
  type: string;

  /**
   * Organization of the user.
   */
  organization: string;
}

export default Profile;
