import { IHeaderAttributes } from '../../devices/Desktop';
import Auth from './components/Auth';
import NoAuth from './components/NoAuth';

export default function ActionRight({ attributes }: IHeaderAttributes) {
  const auth = true;

  return auth ? <Auth auth={attributes?.auth} /> : <NoAuth  noAuth={attributes?.noAuth} />
}
