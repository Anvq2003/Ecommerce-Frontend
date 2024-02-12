import { IHeaderAttributes } from '../../types';
import Auth from './components/Auth';
import NoAuth from './components/NoAuth';

export default function ActionRight({ attributes }: IHeaderAttributes) {
  const auth = false;

  return auth ? <Auth auth={attributes?.auth} /> : <NoAuth  noAuth={attributes?.noAuth} />
}
