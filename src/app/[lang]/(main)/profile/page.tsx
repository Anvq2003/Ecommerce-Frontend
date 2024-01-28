import WrapperPage from '@/components/WrapperPage';
import BreadcrumbComponent from '@/layout/Breadcrumb';

import MenuLeft from './components/MenuLeft';
import Default from './components/TabContent/Default';
import PersonalInfo from './components/TabContent/PersonalInfo';

export interface IProfilePageProps {}

export default function ProfilePage(props: IProfilePageProps) {
  return (
    <WrapperPage>
      <BreadcrumbComponent />
      <div className="mx-5 flex flex-col gap-5 md:flex-row xl:mx-0 xl:gap-main">
        <MenuLeft />

        <div className="card-main flex-1 h-fit">
          <PersonalInfo />
          {/* <Default /> */}
        </div>
      </div>
    </WrapperPage>
  );
}
