import { IHeaderAttributes } from '../../types';
import AuthBox from './components/Auth';
import NoAuthBox from './components/NoAuth';

export default function ActionRight({ attributes }: IHeaderAttributes) {
  const auth = true;

  return auth ? <AuthBox auth={attributes?.auth} /> : <NoAuthBox  noAuth={attributes?.noAuth} />
}
