import Tariff from '@/entities/signUp/tariffs/Tariff';
import tariffs from '@/assets/tariffs.json';

/**
 * Returns a list of the tariffs.
 */
export default () => new Promise<Tariff[]>((resolve) => {
  setTimeout(resolve, 1500, tariffs);
});
