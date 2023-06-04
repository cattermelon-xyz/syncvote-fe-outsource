import Logo from '@assets/icons/svg-icons/Logo';
import { L } from '@utils/locales/L';
import { Link, useLocation } from 'react-router-dom';
import { sliceAddressToken } from '@utils/helpers';
import { AddressToken } from '@utils/mockData/addressToken';
import PAGE_ROUTES from '@utils/constants/pageRoutes';
import { useDispatch } from 'react-redux';
import { resetProposalStore } from '@redux/reducers/proposal.reducer';
import { resetBlueprint } from '@redux/reducers/blueprint.reducer';
import { resetVotingStore } from '@redux/reducers/votingMethod.reducer';
import { resetSetUpCheckPointsStore } from '@redux/reducers/setupCheckpoints.reducer';
import { resetRouteStore } from '@redux/reducers/blueprint.reducer/routeDetail';
import { resetStore } from '@redux/reducers/check-node.reducer';

type HeaderProps = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
};

function Header({ isAuth = false, setIsAuth = () => {} }: HeaderProps) {
  const params = useLocation();
  const token = window.localStorage.getItem('isConnectWallet');
  const dispatch = useDispatch();

  const handleClearStore = () => {
    dispatch(resetProposalStore());
    dispatch(resetBlueprint({ keepName: false }));
    dispatch(resetRouteStore());
    dispatch(resetSetUpCheckPointsStore());
    dispatch(resetVotingStore());
    dispatch(resetStore());
  };

  return (
    <div className="flex justify-between items-center px-[32px] md:px-p_1 h-20 w-full border-b-b_1 border-gray-normal font-sans fixed top-0 left-0 z-20 bg-white">
      <div className=" w-full flex justify-between">
        <div className="flex p-0 gap-2 items-center">
          <Link to="/" onClick={handleClearStore}>
            <div className="flex items-center gap-2">
              <Logo width="32" height="32" />
              <span className="font-semibold text-text_3 leading-leading_2 w-[85px] inline-block text-[#252422]">
                {L('anyDao')}
              </span>
            </div>
          </Link>
        </div>
        <div className="flex w-w_3 items-center justify-end">
          <div className="hidden md:flex items-center gap-2 px-4 py-3">
            <Logo width="32" height="32" />
            <span className="text-[15px] text-[#252422]">{L('hectagonChain')}</span>
          </div>
          {params.pathname === `/${PAGE_ROUTES.LOGIN}` ? (
            ''
          ) : (
            <div
              className="border-b_2 py-3 px-4 my-3 mr-0 rounded-lg border-gray-normal  cursor-pointer"
              onClick={() => setIsAuth(!isAuth)}
            >
              <p className="text-text_2 text-[#252422]">
                {token ? sliceAddressToken(AddressToken.ip_address, 5) : 'Connect wallet'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
